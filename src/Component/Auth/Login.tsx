import React, { useEffect } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Link, useNavigate } from "react-router-dom";
import * as yup from "yup";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { loginRequest, loginReset } from "../../Redux/Actions";
import Loader from "../Generic/Loader";
import Snackbar from "../Generic/Snackbar";
import setlocalStorage from "../../services/setLocalStorage";
import Wrapper from "../Generic/Wrapper";
import FormWrapper from "../Generic/FormWrapper";
import { StateTypes } from "../../TypeScript/tsConfig";

export default function Login() {
  
  const dispatch = useDispatch();
  const stateSignup = useSelector((state:StateTypes) => state.UserReducer);
  const stateLogin = useSelector((state:StateTypes) => state.LoginReducer);
  const navigate = useNavigate();

  useEffect(() => {
    if (stateLogin.isSuccess) {
      setlocalStorage("login", "true");
      setlocalStorage("token", stateLogin.data.token);
      setlocalStorage("role", stateLogin.data.decoded.role);
      navigate("/dashboard");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [stateLogin.isSuccess]);

  useEffect(() => {
    if (stateSignup.isSuccess) {
      dispatch(
        loginRequest({
          username: stateSignup.data.data.username,
          password: stateSignup.data.data.password,
        })
      );
    }
    return () => {
      dispatch(loginReset());
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [stateSignup.isSuccess]);
  
  const validationSchema = yup.object({
    username: yup
      .string()
      .required("username is required"),
    password: yup
      .string()
      .min(6, "Password should be of minimum 6 characters length")
      .required("Password is required"),
  });

  const formHandler = useFormik({
    initialValues: {
      username: stateSignup.isSuccess ? stateSignup.data.data.username : "",
      password: stateSignup.isSuccess ? stateSignup.data.data.password : "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      dispatch(loginRequest(values));
    },
  });

  return (
    <Wrapper heading="Login">
      {stateLogin.isSuccess ? (
        <Snackbar type="success" message="Login succesful! Redirecting....." />
      ) : (
        ""
      )}
      {stateLogin.isError ? (
        <Snackbar type="error" message={`${stateLogin.data?.data}`} />
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
        <Button type="submit" variant="contained" className="custom-btn">
          {stateLogin.isLoading ? <Loader /> : "Login"}
        </Button>
        <Link
          to="/register"
          style={{
            color: "black",
            textDecoration: "none",
          }}
          className="form-text-buttom"
        >
          New User? Register Now
        </Link>
      </FormWrapper>
    </Wrapper>
  );
}
