import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { pollAddRequest, pollAddReset, pollReset } from "../../Redux/Actions";
import getLocalStorage from "../../services/getLocalStorage";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../Generic/Loader";
import Snackbar from "../Generic/Snackbar";
import AlertAdd from "../Generic/AlertAdd";
import InputField from "../Generic/InputField";
import { useNavigate } from "react-router-dom";
import Wrapper from "../Generic/Wrapper";
import FormWrapper from "../Generic/FormWrapper";
import removelocalStorage from "../../services/removeLocalStorage";
import BackButton from "../Generic/BackButton";
import { events, stateTypes } from "../../TypeScript/tsConfig";

export default function AdminAddPoll() {
  const dispatch = useDispatch();
  const state = useSelector((state: stateTypes) => state.PollAddReducer);
  const [fields, setFields] = useState<Array<JSX.Element>>([]);
  const [show, setShow] = useState(false);
  const [duplicate, setDuplicate] = useState(false);
  const navigate = useNavigate();
  const [data, setData] = useState({
    title: "",
    option1: "",
  });

  useEffect(() => {
    if (state.isSuccess) {
      setData({
        title: "",
        option1: "",
      });
      navigate("/dashboard");
      return () => {
        dispatch(pollAddReset());
        dispatch(pollReset());
        removelocalStorage("page");
      };
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.isSuccess]);

  const handleChange = (e: events) => {
    const name = e.target.name;
    const value = e.target.value;
    setData((old) => {
      return {
        ...old,
        [name]: value,
      };
    });
  };

  const handleForm = (e: events) => {
    e.preventDefault();
    const validateDuplicate = (arr: Array<Object>) =>
      new Set(arr).size !== arr.length;
    if (validateDuplicate(Object.values(data).slice(1)) === false) {
      dispatch(pollAddRequest({ data: data, token: getLocalStorage("token") }));
    } else setDuplicate(true);
  };

  const AddOption = () => {
    if (fields.length < 3) {
      let tempData = { ...data, [`option${fields.length + 2}`]: "" };
      setData({ ...tempData });
      setFields([
        ...fields,
        <InputField
          key={fields.length + 2}
          handleChange={handleChange}
          number={fields.length + 2}
          data={tempData}
        />,
      ]);
    } else setShow(true);
  };
  return (
    <Wrapper heading="Add Poll">
      {state.isSuccess ? (
        <Snackbar type="success" message="succesful! Redirecting....." />
      ) : (
        ""
      )}
      {state.isError ? (
        <Snackbar type="error" message={"Technical Exception"} />
      ) : (
        ""
      )}
      <FormWrapper handler={handleForm}>
        <TextField
          onChange={handleChange}
          id="outlined-title-input"
          label="Poll Title"
          type="text"
          autoComplete="poll-title"
          placeholder="Enter Poll Title"
          name="title"
          value={data.title}
          required
        />
        <InputField handleChange={handleChange} number={1} data={data} />
        {fields.map((item) => item)}
        <Button variant="contained" className="custom-btn" onClick={AddOption}>
          ADD MORE OPTION
        </Button>
        {show ? (
          <AlertAdd
            text="Maximum 4 option is allowed!!"
            handler={() => setShow(false)}
          />
        ) : (
          ""
        )}
        <Button type="submit" variant="contained" className="custom-btn">
          {state.isLoading ? <Loader /> : "SUBMIT"}
        </Button>
        <BackButton />
        {duplicate ? (
          <AlertAdd
            text="Duplicate option is not allowed!!"
            handler={() => setDuplicate(false)}
          />
        ) : (
          ""
        )}
      </FormWrapper>
    </Wrapper>
  );
}
