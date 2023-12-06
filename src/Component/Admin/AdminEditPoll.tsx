import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import {
  singlePollRequest,
  pollEditRequest,
  pollEditReset,
  pollReset,
} from "../../Redux/Actions";
import getLocalStorage from "../../services/getLocalStorage";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../Generic/Loader";
import Snackbar from "../Generic/Snackbar";
import { useNavigate, useParams } from "react-router-dom";
import Wrapper from "../Generic/Wrapper";
import FormWrapper from "../Generic/FormWrapper";
import BackButton from "../Generic/BackButton";
import { Events, ItemType, StateTypes } from "../../TypeScript/tsConfig";

export default function AdminEditPoll() {
  
  const dispatch = useDispatch();
  const state = useSelector((state: StateTypes) => state.SinglePollReducer);
  const editState = useSelector((state: StateTypes) => state.PollEditReducer);
  const pollListState = useSelector(
    (state: StateTypes) => state.pollFetchReducer
  );
  const [data, setData] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    if (pollListState.data.length > 0) {
      const poll: { title: string } = pollListState.data.filter(
        (item: ItemType) => item._id === id
      )[0];
      setData(poll.title);
    } else
      dispatch(singlePollRequest({ id: id, token: getLocalStorage("token") }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  useEffect(() => {
    if (pollListState.data.length === 0) setData(state.data.title);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.data]);

  useEffect(() => {
    if (editState.isSuccess) {
      navigate("/dashboard");
    }
    return () => {
      if (editState.isSuccess === true) {
        dispatch(pollEditReset());
        dispatch(pollReset());
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [editState.isSuccess]);

  const handleForm = (e: Events) => {
    e.preventDefault();
    dispatch(
      pollEditRequest({
        id: id,
        newTitle: data,
        token: getLocalStorage("token"),
      })
    );
  };

  return (
    <Wrapper heading="Edit Poll">
      {state.isLoading && (
        <h4 className="text-center">
          <Loader />
        </h4>
      )}
      {editState.isSuccess ? (
        <Snackbar type="success" message="succesful! Redirecting....." />
      ) : (
        ""
      )}
      {state.isError ? (
        <Snackbar type="error" message={"Technical exception"} />
      ) : (
        ""
      )}
      <FormWrapper handler={handleForm}>
        <TextField
          onChange={(e) => setData(e.target.value)}
          id="outlined-title-input"
          label="Poll Title"
          type="text"
          autoComplete="poll-title"
          placeholder="Enter Poll Title"
          name="title"
          value={data === undefined ? "" : data}
          required
        />

        <Button type="submit" variant="contained" className="custom-btn">
          {editState.isLoading ? <Loader /> : "EDIT"}
        </Button>
        <BackButton />
        {editState.isError ? (
          <Snackbar
            type="error"
            message={state.data.data ? state.data.data : "Technical exception"}
          />
        ) : (
          ""
        )}
      </FormWrapper>
    </Wrapper>
  );
}
