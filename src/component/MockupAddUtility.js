import * as React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import axios from "../api";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Navigate } from "react-router-dom";

async function addUtility(
  utilityId,
  motelId,
  quantity,
  handleClose,
  setIsSuccess
) {
  const body = {
    motelId: motelId,
    utilityId: utilityId,
    status: "Bình thường",
    quantity: Number(quantity),
  };
  console.log(body);
  const response = await axios.post("/motel-utility", body);
  console.log(response);
  if (response.status == 201) {
    handleClose();
    window.location.reload();
  }
}

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  "& .MuiTextField-root": { m: 1, width: "450px" },
};

export default function MockupAddUtility(props) {
  const [utility, setUtility] = useState("");
  const [quantity, setQuantity] = useState("");

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
        <Typography sx={{ fontSize: "x-large" }}>Thêm thiết bị</Typography>
        <InputLabel id="demo-simple-select-label">Thiết bị</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={utility}
          label="Thiết bị"
          onChange={(e) => setUtility(e.target.value)}
          sx={{ minWidth: 300, marginLeft: 1 }}
        >
          <MenuItem value={"3f325141-0be6-4951-8e82-e9d91cd6eab4"}>
            Bếp
          </MenuItem>
          <MenuItem value={"133ad468-3a81-478c-93fa-cbcc08969817"}>
            Giường
          </MenuItem>
          <MenuItem value={"dc1e38e3-dbc9-455a-aa12-cc8bb1f3e08f"}>
            Máy điều hoà
          </MenuItem>
          <MenuItem value={"5c23b8ef-79f9-4e8b-9ed1-22f8007331e9"}>
            Quạt
          </MenuItem>
          <MenuItem value={"789e8ec4-cab9-4962-9ea5-63ebaf89242f"}>
            Máy giặt
          </MenuItem>
          <MenuItem value={"9251f033-8b41-4bdc-9847-52435956850a"}>Tủ</MenuItem>
          <MenuItem value={"10fa270e-7b1b-4c56-ac20-a6c7d53f9a95"}>
            Bóng đèn
          </MenuItem>
          <MenuItem value={"302d0663-816d-49e5-b294-2658a88f1364"}>
            Bàn
          </MenuItem>
        </Select>
        <TextField
          id="outlined-basic"
          label="Số lượng"
          variant="outlined"
          onChange={(e) => {
            setQuantity(e.target.value);
          }}
          sx={{ maxWidth: "300px" }}
        />
        <Stack
          spacing={2}
          direction="row"
          justifyContent="center"
          sx={{ marginTop: "10px" }}
        >
          <Button
            variant="contained"
            onClick={() => {
              addUtility(utility, props.motelId, quantity, handleClose);
            }}
          >
            Thêm thiết bị
          </Button>
          <Button variant="contained" onClick={() => handleClose()}>
            Huỷ
          </Button>
        </Stack>
      </Box>
    </Modal>
  );
}
