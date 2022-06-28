import React, { useState } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";
import axios from "../api";
import { Navigate } from "react-router-dom";
import "./styles.css";

async function Register(
  email,
  password,
  phone,
  gender,
  city,
  district,
  ward,
  detail,
  role,
  setIsSuccess
) {
  var body = {
    email: email,
    password: password,
    phone: phone,
    gender: gender,
    address: {
      city: city,
      district: district,
      ward: ward,
      detail: detail,
    },
    role: role,
  };
  console.log(body);
  const response = await axios.post("/auth/register", body);
  console.log(response);
  if (response.data.statusCode == 201) {
    setIsSuccess(true);
  }
}

export function RegisterForm() {
  // React States
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [gender, setGender] = useState("");
  const [city, setCity] = useState("");
  const [district, setDistrict] = useState("");
  const [ward, setWard] = useState("");
  const [detail, setDetail] = useState("");
  const [role, setRole] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
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
          <label>Email </label>
          <input
            type="text"
            name="uname"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
          {renderErrorMessage("uname")}
        </div>
        <div className="input-container">
          <label>Mật khẩu </label>
          <input
            type="password"
            name="pass"
            required
            onChange={(e) => setPassword(e.target.value)}
          />
          {renderErrorMessage("pass")}
        </div>
        <div className="input-container">
          <label>Số điện thoại </label>
          <input
            type="text"
            name="pass"
            required
            onChange={(e) => setPhone(e.target.value)}
          />
          {renderErrorMessage("pass")}
        </div>
        <div className="input-container">
          <label>Giới tính </label>
          <input
            type="text"
            name="pass"
            required
            onChange={(e) => setGender(e.target.value)}
          />
          {renderErrorMessage("pass")}
        </div>
        <div className="input-container">
          <label>Thành phố </label>
          <input
            type="text"
            name="pass"
            required
            onChange={(e) => setCity(e.target.value)}
          />
          {renderErrorMessage("pass")}
        </div>
        <div className="input-container">
          <label>Quận/huyện </label>
          <input
            type="text"
            name="pass"
            required
            onChange={(e) => setDistrict(e.target.value)}
          />
          {renderErrorMessage("pass")}
        </div>
        <div className="input-container">
          <label>Phường/xã </label>
          <input
            type="text"
            name="pass"
            required
            onChange={(e) => setWard(e.target.value)}
          />
          {renderErrorMessage("pass")}
        </div>
        <div className="input-container">
          <label>Số nhà + tên đường </label>
          <input
            type="text"
            name="pass"
            required
            onChange={(e) => setDetail(e.target.value)}
          />
          {renderErrorMessage("pass")}
        </div>
        <Box sx={{ minWidth: 120 }}>
          <FormControl
            fullWidth
            sx={{
              width: "98%",
              marginLeft: "10px",
              marginBottom: "20px",
              marginTop: "10px",
            }}
          >
            <InputLabel id="demo-simple-select-label">Vai trò</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={role}
              label="Vai trò"
              onChange={(e) => setRole(e.target.value)}
            >
              <MenuItem value={"RENTER"}>Người thuê trọ</MenuItem>
              <MenuItem value={""}>Chủ nhà trọ</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <div className="button-container">
          <Button
            variant="contained"
            onClick={(event) => {
              Register(
                email,
                password,
                phone,
                gender,
                city,
                district,
                ward,
                detail,
                role,
                setIsSuccess
              );
            }}
          >
            Đăng ký
          </Button>
        </div>
      </form>
    </div>
  );

  return (
    <>
      <div className="wrap-login-form">
        <div className="login-form">
          <div className="title">Đăng ký</div>
          {isSubmitted ? <div>User is successfully logged in</div> : renderForm}
        </div>
      </div>
      {isSuccess && <Navigate to="/login" replace={true} />}
    </>
  );
}
