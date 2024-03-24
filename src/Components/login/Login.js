import { Backdrop, CircularProgress, Button, TextField } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [showLogin, setshowLogin] = useState(false);
  const [data, setData] = useState({ name: "", email: "", Password: "" });
  const [loading, setLoading] = useState(false);

  const [logInStatus, setLogInStatus] = useState("");
  const [signInStatus, setSignInStatus] = useState("");

  const navigate = useNavigate();

  const changeHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const loginHandler = async (e) => {
    setLoading(true);
    console.log(data);
    try{

    }catch(error){
      
    }
  };
  return (
    <div className="login-container">
      <div className="image-container">
        <img
          src="https://res.cloudinary.com/dbxc4uovd/image/upload/v1711176217/drew-beamer-3SIXZisims4-unsplash-removebg-preview_dimgpe.png"
          alt=""
        />
      </div>
      <div className="login-box">
        <p className="login-text">Login To Your Account</p>
        <TextField
          id="standard-basic"
          label="Enter User Name"
          variant="outlined"
        />
        <TextField
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-passowrd"
        />
        <Button variant="outlined">Outlined</Button>
      </div>
    </div>
  );
}
