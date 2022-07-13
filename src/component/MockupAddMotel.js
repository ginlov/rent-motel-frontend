import * as React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import axios from "../api";

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
  setIsSuccess
) {
  var body = {
    price: Number(price),
    waterPrice: Number(waterPrice),
    electricPrice: Number(electricPrice),
    summary: summary,
    address: {
      city: city,
      district: district,
      ward: ward,
      detail: detail,
    },
    description: description,
    square: Number(square),
  };
  console.log(body);
  const response = await axios.post("/motels", body);
  console.log(response);
  if (response.data.statusCode === 200) {
    setIsSuccess(true);
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
  const [isSuccess, setIsSuccess] = useState(false);

  const handleClose = () => {
    props.callback(false);
  };

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
            <TextField
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
            />
            <TextField
              id="outlined-basic"
              label="Số nhà, phố"
              variant="outlined"
              onChange={(e) => {
                setDetail(e.target.value);
              }}
            />
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
                setIsSuccess
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
