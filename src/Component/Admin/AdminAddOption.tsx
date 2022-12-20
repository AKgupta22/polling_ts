import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import {
  singlePollRequest,
  optionAddRequest,
  optionAddReset,
  pollRequest,
} from "../../Redux/Actions";
import getLocalStorage from "../../services/getLocalStorage";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../Generic/Loader";
import Snackbar from "../Generic/Snackbar";
import { useNavigate, useParams } from "react-router-dom";
import Wrapper from "../Generic/Wrapper";
import FormWrapper from "../Generic/FormWrapper";
import AlertAdd from "../Generic/AlertAdd";
import BackButton from "../Generic/BackButton";
import { stateTypes, itemType } from "../../TypeScript/tsConfig";

export default function AdminAddOption() {
  
  const dispatch = useDispatch();
  const state = useSelector((state: stateTypes) => state.SinglePollReducer);
  const addState = useSelector((state: stateTypes) => state.optionAddReducer);
  const pollListState = useSelector(
    (state: stateTypes) => state.pollFetchReducer
  );
  const [data, setData] = useState<itemType>({
    _id: "",
    title: "",
    options: [
      {
        option: "",
        vote: 0,
      },
    ],
    data: "",
  });
  const [newoption, setNewoption] = useState("");
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    if (pollListState.data.length > 0) {
      const poll = pollListState.data.filter(
        (item: itemType) => item._id === id
      );
      setData(poll[0]);
    } else
      dispatch(singlePollRequest({ id: id, token: getLocalStorage("token") }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  useEffect(() => {
    if (pollListState.data.length === 0) setData(state.data);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.data]);

  useEffect(() => {
    if (addState.isSuccess) {
      navigate("/dashboard");
      return () => {
        dispatch(optionAddReset());
        dispatch(pollRequest());
      };
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [addState.isSuccess]);

  const handleForm = (e: any) => {
    e.preventDefault();
    if (data?.options.filter((item) => item.option === newoption).length <= 0)
      dispatch(
        optionAddRequest({
          id: id,
          text: newoption,
          token: getLocalStorage("token"),
        })
      );
    else setShow(true);
  };

  return (
    <Wrapper heading="Add Option">
      {state.isLoading && (
        <h4 className="text-center">
          <Loader />
        </h4>
      )}
      {addState.isSuccess ? (
        <Snackbar type="success" message="succesful! Redirecting....." />
      ) : (
        ""
      )}
      {state.isError ? <Snackbar type="error" message={"Some Error"} /> : ""}
      <FormWrapper handler={handleForm}>
        <TextField
          id="outlined-title-input"
          label="Title"
          type="text"
          autoComplete="poll-title"
          value={data.title ? data.title : ""}
          disabled
        />
        <TextField
          onChange={(e) => setNewoption(e.target.value)}
          id="outlined-title-input"
          label="New Option"
          type="text"
          autoComplete="poll-title"
          placeholder="Enter new option"
          value={newoption}
          required
        />
        <Button type="submit" variant="contained" className="custom-btn">
          {addState.isLoading ? <Loader /> : "ADD"}
        </Button>
        <BackButton />
        {addState.isError ? (
          <Snackbar type="error" message="Some technical exception" />
        ) : (
          ""
        )}
        {show && (
          <AlertAdd
            text="Duplicate option is not allowed"
            handler={() => setShow(false)}
          />
        )}
      </FormWrapper>
    </Wrapper>
  );
}
