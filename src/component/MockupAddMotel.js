import * as React from "react";
import { useState } from "react";
import TextField from "@mui/material/TextField";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import axios from "../api";
import UploadImage from "./UploadImage";
import useLocationForm from "./useLocationForm";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

async function AddMotel(
  price,
  waterPrice,
  electricPrice,
  city,
  district,
  ward,
  detail,
  summary,
  description,
  square,
  setIsSuccess,
  image,
  handleClose
) {
  var bodyFormData = new FormData();
  bodyFormData.append("image", image);
  const responseImage = await axios.post("/motels/upload-image", bodyFormData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
  const imageUrl = responseImage.data.data.imageUrl;
  const new_city = city.slice(city.indexOf("$") + 1);
  const new_district = district.slice(district.indexOf("$") + 1);
  const new_ward = ward.slice(ward.indexOf("$") + 1);
  var body = {
    price: Number(price),
    waterPrice: Number(waterPrice),
    electricPrice: Number(electricPrice),
    summary: summary,
    address: {
      city: new_city,
      district: new_district,
      ward: new_ward,
      detail: detail,
    },
    description: description,
    square: Number(square),
    imageUrl: imageUrl,
  };
  console.log(body);
  const response = await axios.post("/motels", body);
  console.log(response);
  if (response.data.statusCode === 201) {
    setIsSuccess(true);
    handleClose(false);
    window.location.reload();
  }
}

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 1000,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  "& .MuiTextField-root": { m: 1, width: "450px" },
};

export default function MockupAddMotel(props) {
  const [summary, setSummary] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState();
  const [electricPrice, setElectricPrice] = useState();
  const [waterPrice, setWaterPrice] = useState();
  const [city, setCity] = useState("");
  const [district, setDistrict] = useState("");
  const [ward, setWard] = useState("");
  const [detail, setDetail] = useState("");
  const [square, setSquare] = useState();
  const [image, setImage] = useState();
  const [isSuccess, setIsSuccess] = useState(false);

  const handleClose = () => {
    props.callback(false);
  };

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

  return (
    <Modal
      open={props.status}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style} component="form">
        <Typography sx={{ fontSize: "x-large" }}>Thêm nhà trọ</Typography>
        <div style={{ display: "flex" }}>
          <div style={{ width: "50%" }}>
            <TextField
              id="outlined-basic"
              label="Tên phòng trọ"
              variant="outlined"
              onChange={(e) => {
                setSummary(e.target.value);
              }}
            />
            <TextField
              id="outlined-basic"
              label="Mô tả"
              variant="outlined"
              onChange={(e) => {
                setDescription(e.target.value);
              }}
            />
            <TextField
              id="outlined-basic"
              label="Giá thuê"
              variant="outlined"
              onChange={(e) => {
                setPrice(e.target.value);
              }}
            />
            <TextField
              id="outlined-basic"
              label="Giá điện"
              variant="outlined"
              onChange={(e) => {
                setElectricPrice(e.target.value);
              }}
            />
            <TextField
              id="outlined-basic"
              label="Giá nước"
              variant="outlined"
              onChange={(e) => {
                setWaterPrice(e.target.value);
              }}
            />
            <TextField
              id="outlined-basic"
              label="Diện tích"
              variant="outlined"
              onChange={(e) => {
                setSquare(e.target.value);
              }}
            />
          </div>
          <div>
            {/* <TextField
              id="outlined-basic"
              label="Thành phố"
              variant="outlined"
              onChange={(e) => {
                setCity(e.target.value);
              }}
            />
            <TextField
              id="outlined-basic"
              label="Quận/Huyện"
              variant="outlined"
              onChange={(e) => {
                setDistrict(e.target.value);
              }}
            />
            <TextField
              id="outlined-basic"
              label="Phường/Xã"
              variant="outlined"
              onChange={(e) => {
                setWard(e.target.value);
              }}
            /> */}
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
                <InputLabel id="demo-simple-select-label">
                  Tỉnh/Thành phố
                </InputLabel>
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
                <InputLabel id="demo-simple-select-label">
                  Quận/Huyện
                </InputLabel>
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
              id="outlined-basic"
              label="Số nhà, phố"
              variant="outlined"
              onChange={(e) => {
                setDetail(e.target.value);
              }}
            />
            <UploadImage setImage={setImage}></UploadImage>
          </div>
        </div>

        <Stack
          spacing={2}
          direction="row"
          justifyContent="center"
          sx={{ marginTop: "10px" }}
        >
          <Button
            variant="contained"
            onClick={() => {
              AddMotel(
                price,
                waterPrice,
                electricPrice,
                city,
                district,
                ward,
                detail,
                summary,
                description,
                square,
                setIsSuccess,
                image,
                handleClose
              );
            }}
          >
            Thêm phòng trọ
          </Button>
          <Button variant="contained" onClick={() => handleClose()}>
            Huỷ
          </Button>
        </Stack>
      </Box>
    </Modal>
  );
}
