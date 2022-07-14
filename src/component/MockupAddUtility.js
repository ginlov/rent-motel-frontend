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

async function addUtility()

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
  const[quantity, setQuantity] = useState("");
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
        <Typography sx={{ fontSize: "x-large" }}>Thêm thiết bị</Typography>
        <InputLabel id="demo-simple-select-label">Thiết bị</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={utility}
          label="Thiết bị"
          onChange={(e) => setUtility(e.target.value)}
          sx={{ minWidth: 300 }}
        >
          <MenuItem value={"13b576a7-449e-46dc-bf59-d026cef20b9d"}>
            Bếp
          </MenuItem>
          <MenuItem value={"38a99ef0-ce01-4550-b379-4b5d15ad886d"}>
            Giường
          </MenuItem>
          <MenuItem value={"3d0d08e9-0b85-4959-997f-4b743c1d54b2"}>
            Máy điều hoà
          </MenuItem>
          <MenuItem value={"3fc53f8f-e9b2-477c-820b-9ed815005289"}>
            Ghế
          </MenuItem>
          <MenuItem value={"44f2ad4d-e8ee-412f-8abe-a622acc98381"}>
            Quạt
          </MenuItem>
          <MenuItem value={"8c1ea489-58c0-4241-84cb-8a13c860be1d"}>
            Máy giặt
          </MenuItem>
          <MenuItem value={"9251f033-8b41-4bdc-9847-52435956850a"}>Tủ</MenuItem>
          <MenuItem value={"9416e5e4-9a7a-40b3-bed1-d369b1f111d7"}>
            Bóng đèn
          </MenuItem>
          <MenuItem value={"df37337d-ba32-4d87-8e31-11d49ee993f6"}>
            Bàn
          </MenuItem>
        </Select>
        <TextField
              id="outlined-basic"
              label="Số lượng"
              variant="outlined"
              onChange={(e) => {
                setSummary(e.target.value);
              }}
            />
        <Stack
          spacing={2}
          direction="row"
          justifyContent="center"
          sx={{ marginTop: "10px" }}
        >
          <Button variant="contained">Thêm thiết bị</Button>
          <Button variant="contained" onClick={() => handleClose()}>
            Huỷ
          </Button>
        </Stack>
      </Box>
    </Modal>
  );
}
