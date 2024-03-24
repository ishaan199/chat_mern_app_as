import { Backdrop, CircularProgress, Button, TextField } from "@mui/material";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Toaster from "../toaster/Toaster";

export default function Login() {
  const [showLogin, setShowLogin] = useState(false);
  const [data, setData] = useState({ name: "", email: "", password: "" });
  const [loading, setLoading] = useState(false);

  const [logInStatus, setLogInStatus] = useState("");
  const [signInStatus, setSignInStatus] = useState("");

  const navigate = useNavigate();

  const changeHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  console.log(data);

  const loginHandler = async (e) => {
    setLoading(true);
    console.log(data);
    try {
      const config = {
        headers: {
          "content-type": "application/json",
        },
      };
      const response = await axios.post(
        "http://localhost:6000/user/login/",
        data,
        config
      );
      console.log("Login : ", response);
      setLogInStatus({ msg: "Success", key: Math.random() });
      setLoading(false);
      localStorage.setItem("userData", JSON.stringify(response));
      navigate("/app/welcome");
    } catch (error) {
      setLogInStatus({
        msg: "Invalid username and password",
        key: Math.random(),
      });
    }
    setLoading(false);
  };

  const signUpHandler = async () => {
    setLoading(true);
    try {
      const config = {
        headers: {
          "content-type": "application/json",
        },
      };
      const response = await axios(
        "http://localhost:8080/user/register",
        data,
        config
      );
      console.log(response);
      setSignInStatus({ msg: "Success", key: Math.random() });
      navigate("/app/welcome");
      localStorage.setItem("userData", JSON.stringify(response));
      setLoading(false);
    } catch (error) {
      console.log(error);
      if (error.response.status === 404) {
        setLogInStatus({
          msg: "User with this user id is already exists",
          key: Math.random(),
        });
      }
      setLoading(false);
    }
  };
  return (
    <>
      <Backdrop
        sx={{ color: "#FFF", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={loading}
      >
        <CircularProgress color="secondary" />
      </Backdrop>
      <div className="login-container">
        <div className="image-container">
          <img
            src="https://res.cloudinary.com/dbxc4uovd/image/upload/v1711176217/drew-beamer-3SIXZisims4-unsplash-removebg-preview_dimgpe.png"
            alt=""
          />
        </div>
        {showLogin && (
          <div className="login-box">
            <p className="login-text">Login To Your Account</p>
            <TextField
              onChange={changeHandler}
              id="standard-basic"
              label="Enter User Name"
              variant="outlined"
              color="secondary"
              name="name"
            />
            <TextField
              onChange={changeHandler}
              id="outlined-password-input"
              label="Password"
              type="password"
              autoComplete="current-passowrd"
              color="secondary"
              name="password"
            />
            <Button
              variant="outlined"
              color="secondary"
              onClick={loginHandler}
              isLoading
            >
              Login
            </Button>
            <p>
              Don't have an account ?
              <span
                className="hyper"
                onClick={() => {
                  setShowLogin(false);
                }}
              >
                Sign up
              </span>
            </p>
            {logInStatus ? (
              <Toaster key={logInStatus.key} message={logInStatus.msg} />
            ) : null}
          </div>
        )}
        {!showLogin && (
          <div className="login-box">
            <p className="login-text">Create your account</p>
            <TextField
              onChange={changeHandler}
              id="standard-basic"
              label="Enter User Name"
              variant="outlined"
              color="secondary"
              name="name"
              helperText=""
            />
            <TextField
              onChange={changeHandler}
              id="standard-basic"
              label="Enter Email"
              variant="outlined"
              color="secondary"
              name="email"
            />
            <TextField
              onChange={changeHandler}
              id="outlined-password-input"
              label="Password"
              type="password"
              autoComplete="current-passowrd"
              color="secondary"
              name="password"
            />
            <Button
              variant="outlined"
              color="secondary"
              onClick={signUpHandler}
              isLoading
            >
              Sign UP
            </Button>
            <p>
              Don't have an account ?{" "}
              <span
                className="hyper"
                onClick={() => {
                  setShowLogin(true);
                }}
              >
                Log in
              </span>
            </p>
            {signInStatus ? (
              <Toaster key={signInStatus.key} message={signInStatus.message} />
            ) : null}
          </div>
        )}
      </div>
    </>
  );
}
