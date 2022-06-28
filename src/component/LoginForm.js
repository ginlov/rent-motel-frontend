import React, { useState } from "react";
import "./styles.css";
import axios from "../api";
import Button from "@mui/material/Button";
import { Navigate } from "react-router-dom";
import { RepeatOneSharp } from "@material-ui/icons";

async function Login(username, password, goToHomePage, setError) {
  const response = await axios.post("/auth/login", {
    email: username,
    password: password,
  });
  console.log(response);
  if (response.data.statusCode != 200) {
    setError("Sai tên đăng nhập hoặc mật khẩu");
  }
  if (response.data.statusCode === 200) {
    axios.defaults.headers.common = {
      Authorization: `bearer ${response.data.data.accessToken}`,
    };
    const response1 = await axios.get("/users/me");
    goToHomePage(response1.data.data.role.name);
  }
}

export default function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [error, setError] = useState("");
  // React States
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const errors = {
    uname: "invalid username",
    pass: "invalid password",
  };

  // Generate JSX code for error message
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  // JSX code for login form
  const renderForm = (
    <div className="form">
      <form>
        <div className="input-container">
          <label>Tên đăng nhập </label>
          <input
            type="text"
            name="uname"
            required
            onChange={(event) => setUsername(event.target.value)}
          />
          {renderErrorMessage("uname")}
        </div>
        <div className="input-container">
          <label>Mật khẩu </label>
          <input
            type="password"
            name="pass"
            required
            onChange={(event) => setPassword(event.target.value)}
          />
          {renderErrorMessage("pass")}
        </div>
        <div className="button-container">
          <Button
            variant="contained"
            onClick={(event) => Login(username, password, setRole, setError)}
          >
            Đăng nhập
          </Button>
          {/* <input onClick={(event) => Login(username, password)} /> */}
        </div>
      </form>
    </div>
  );

  return (
    <>
      <div className="wrap-login-form">
        <div className="login-form">
          <div className="title">Đăng nhập</div>
          {isSubmitted ? <div>User is successfully logged in</div> : renderForm}
          {error != "" && <p>{error}</p>}
        </div>
      </div>
      {role == "RENTER" && <Navigate to="/owner" replace={true} />}
    </>
  );
}
