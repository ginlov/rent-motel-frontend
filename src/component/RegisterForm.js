import React, { useState } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";
import axios from "../api";
import { Navigate } from "react-router-dom";
import Alert from "@mui/material/Alert";
import TextField from "@mui/material/TextField";
import "./styles.css";
import useLocationForm from "./useLocationForm";

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
  setIsSuccess,
  fisrtName,
  lastName
) {
  const new_city = city.slice(city.indexOf("$") + 1);
  const new_district = district.slice(district.indexOf("$") + 1);
  const new_ward = ward.slice(ward.indexOf("$") + 1);
  var body = {
    email: email,
    password: password,
    phone: phone,
    gender: gender,
    address: {
      city: new_city,
      district: new_district,
      ward: new_ward,
      detail: detail,
    },
    role: role,
    firstName: fisrtName,
    lastName: lastName,
  };
  console.log(body);
  const response = await axios.post("/auth/register", body);
  if (response.data.statusCode < 300) {
    console.log(response.data.statusCode);
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
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const { state, onCitySelect, onDistrictSelect, onWardSelect, onSubmit } =
    useLocationForm(false);

  const {
    cityOptions,
    districtOptions,
    wardOptions,
    selectedCity,
    selectedDistrict,
    selectedWard,
  } = state;

  const validateEmail = (email) => {
    if (email == "") return true;
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const validatePhone = (phone) => {
    if (phone == "") return true;
    return String(phone)
      .toLowerCase()
      .match(/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/);
  };

  // JSX code for login form
  const renderForm = (
    <div className="form">
      <TextField
        sx={{
          width: "98%",
          marginLeft: "10px",
          marginBottom: "20px",
          marginTop: "10px",
        }}
        required
        label="Tên"
        onChange={(e) => setLastName(e.target.value)}
      />
      <TextField
        sx={{
          width: "98%",
          marginLeft: "10px",
          marginBottom: "20px",
          marginTop: "10px",
        }}
        required
        label="Họ"
        onChange={(e) => setFirstName(e.target.value)}
      />
      <TextField
        sx={{
          width: "98%",
          marginLeft: "10px",
          marginBottom: "20px",
          marginTop: "10px",
        }}
        required
        label="Email"
        {...(!validateEmail(email) && {
          error: true,
          helperText: "Sai định dạng email",
        })}
        onChange={(e) => setEmail(e.target.value)}
      />
      <TextField
        sx={{
          width: "98%",
          marginLeft: "10px",
          marginBottom: "20px",
          marginTop: "10px",
        }}
        required
        label="Mật khẩu"
        onChange={(e) => setPassword(e.target.value)}
        type="password"
      />
      <TextField
        required
        sx={{
          width: "98%",
          marginLeft: "10px",
          marginBottom: "20px",
          marginTop: "10px",
        }}
        type="text"
        {...(!validatePhone(phone) && {
          error: true,
          helperText: "Sai định dạng số điện thoại",
        })}
        label="Số điện thoại"
        onChange={(e) => setPhone(e.target.value)}
      />
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
          <InputLabel id="demo-simple-select-label">Tỉnh/Thành phố</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={city}
            label="Thành phố"
            onChange={(e) => {
              console.log(e.target.value);
              setCity(e.target.value);
              onCitySelect(e.target);
            }}
          >
            {cityOptions.map((item) => (
              <MenuItem value={item.value + "$" + item.label}>
                {item.label}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
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
          <InputLabel id="demo-simple-select-label">Quận/Huyện</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={district}
            label="Quận"
            onChange={(e) => {
              setDistrict(e.target.value);
              onDistrictSelect(e.target);
            }}
          >
            {districtOptions.map((item) => (
              <MenuItem value={item.value + "$" + item.label}>
                {item.label}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
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
          <InputLabel id="demo-simple-select-label">Phường/Xã</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={ward}
            label="Phường"
            onChange={(e) => {
              setWard(e.target.value);
              onWardSelect(e.target);
            }}
          >
            {wardOptions.map((item) => (
              <MenuItem value={item.value + "$" + item.label}>
                {item.label}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
      <TextField
        sx={{
          width: "98%",
          marginLeft: "10px",
          marginBottom: "20px",
          marginTop: "10px",
        }}
        required
        label="Số nhà + tên đường"
        onChange={(e) => setDetail(e.target.value)}
      />
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
          <InputLabel id="demo-simple-select-label">Giới tính</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={gender}
            label="Giới tính"
            onChange={(e) => setGender(e.target.value)}
          >
            <MenuItem value={"MALE"}>Nam</MenuItem>
            <MenuItem value={"FEMALE"}>Nữ</MenuItem>
            <MenuItem value={"OTHER"}>Khác</MenuItem>
          </Select>
        </FormControl>
      </Box>
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
            <MenuItem value={"OWNER"}>Chủ nhà trọ</MenuItem>
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
              setIsSuccess,
              firstName,
              lastName
            );
          }}
        >
          Đăng ký
        </Button>
      </div>
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
      {isSuccess && (
        <Alert severity="success">
          This is a success alert — check it out!
        </Alert>
      )}
      {isSuccess && <Navigate to="/login" replace={true} />}
    </>
  );
}
