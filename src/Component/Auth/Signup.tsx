import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import Button from "@mui/material/Button";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { Link, useNavigate } from "react-router-dom";
import * as yup from "yup";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { registrationRequest } from "../../Redux/Actions";
import Loader from "../Generic/Loader";
import Snackbar from "../Generic/Snackbar";
import AlertAdd from "../Generic/AlertAdd";
import Wrapper from "../Generic/Wrapper";
import FormWrapper from "../Generic/FormWrapper";
import { stateTypes } from "../../TypeScript/tsConfig";

export default function Signup() {
  
  const dispatch = useDispatch();
  const state = useSelector((state:stateTypes) => state.UserReducer);
  const navigate = useNavigate();
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (state.isSuccess) navigate("/");
  }, [state.isSuccess, navigate]);

  const validationSchema = yup.object({
    username: yup
      .string()
      .required("username is required"),
    password: yup
      .string()
      .min(6, "Password should be of minimum 6 characters length")
      .required("Password is required"),
    cpassword: yup
      .string()
      .min(6, "Password should be of minimum 6 characters length")
      .required("Password is required"),
  });

  const formHandler = useFormik({
    initialValues: {
      username: "",
      role: "Guest",
      password: "",
      cpassword: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      if (values.password === values.cpassword) {
        dispatch(registrationRequest(values));
      } else setShow(true);
    },
  });

  return (
    <Wrapper heading="SignUp">
      {state.isSuccess ? (
        <Snackbar
          type="success"
          message="Registration succesful! Redirecting....."
        />
      ) : (
        ""
      )}
      {state.isError ? (
        <Snackbar
          type="error"
          message={
            state.data.message
              ? `${state.data?.message}`
              : "Technical Exception"
          }
        />
      ) : (
        ""
      )}
      <FormWrapper handler={formHandler.handleSubmit}>
        <TextField
          id="outlined-username-input"
          label="UserName*"
          type="text"
          autoComplete="current-Username"
          placeholder="Enter Username"
          name="username"
          value={formHandler.values.username}
          onChange={formHandler.handleChange}
          error={
            formHandler.touched.username && Boolean(formHandler.errors.username)
          }
          helperText={
            formHandler.touched.username && formHandler.errors.username
          }
        />
        <InputLabel id="demo-select-small">Role</InputLabel>
        <Select
          labelId="Role"
          id="Role"
          name="role"
          value={formHandler.values.role}
          onChange={formHandler.handleChange}
        >
          <MenuItem value="Guest">Guest</MenuItem>
          <MenuItem value="admin">Admin</MenuItem>
        </Select>
        <TextField
          id="outlined-password-input"
          label="Password*"
          type="password"
          autoComplete="current-password"
          placeholder="Enter your password"
          name="password"
          value={formHandler.values.password}
          onChange={formHandler.handleChange}
          error={
            formHandler.touched.password && Boolean(formHandler.errors.password)
          }
          helperText={
            formHandler.touched.password && formHandler.errors.password
          }
        />
        <TextField
          id="outlined-cpassword-input"
          label="Confirm Password *"
          type="password"
          autoComplete="current-cpassword"
          placeholder="Confirm Password"
          name="cpassword"
          value={formHandler.values.cpassword}
          onChange={formHandler.handleChange}
          error={
            formHandler.touched.cpassword &&
            Boolean(formHandler.errors.cpassword)
          }
          helperText={
            formHandler.touched.cpassword && formHandler.errors.cpassword
          }
        />
        {show ? (
          <AlertAdd
            text="Confirm password and Password mismatch"
            handler={() => setShow(false)}
          />
        ) : (
          ""
        )}
        <Button type="submit" variant="contained" className="custom-btn">
          {state.isLoading ? <Loader /> : "Signup"}
        </Button>
        <Link
          to="/"
          style={{
            color: "black",
            textDecoration: "none",
          }}
          className="form-text-buttom"
        >
          Existing User? Login now
        </Link>
      </FormWrapper>
    </Wrapper>
  );
}
