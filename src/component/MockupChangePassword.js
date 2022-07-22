import React, { useContext } from "react";
import {
  TextField,
  Button,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
} from "@mui/material";
import { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useNavigate } from "react-router-dom";
import axios from "../api";

async function changePass(o, n) {
  try {
    const response = axios.post(`/auth/change-password`, {
      password: o,
      newPassword: n,
    });
    console.log(response);
    localStorage.removeItem("token");
  } catch (error) {
    console.log(error);
  }
}

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

function MockupChangePassword(props) {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [repeatNewPassword, setRepeatNewPassword] = useState("");
  const handleClose = () => props.callBack(false);
  let navigate = useNavigate();
  return (
    <Modal
      open={props.status}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Đổi mật khẩu
        </Typography>
        <form>
          <TextField
            type="password"
            variant="outlined"
            margin="normal"
            fullWidth
            id="old-password"
            value={oldPassword}
            label="Mật khẩu cũ"
            name="old-password"
            autoComplete="off"
            required
            onChange={(e) => {
              setOldPassword(e.target.value);
            }}
          />
          <TextField
            type="password"
            variant="outlined"
            margin="normal"
            fullWidth
            id="new-password"
            value={newPassword}
            label="Mật khẩu mới"
            name="new-password"
            autoComplete="off"
            required
            onChange={(e) => {
              setNewPassword(e.target.value);
            }}
          />
          <TextField
            type="password"
            variant="outlined"
            margin="normal"
            fullWidth
            id="repeat-new-password"
            value={repeatNewPassword}
            label="Nhập lại mật khẩu"
            name="repeat-new-password"
            autoComplete="off"
            required
            onChange={(e) => {
              setRepeatNewPassword(e.target.value);
            }}
          />
          <Button
            style={{ marginTop: "15px" }}
            className="nice-button"
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            autoComplete="off"
            onClick={() => {
              changePass(oldPassword, newPassword);
              navigate("/", { replace: true });
            }}
          >
            Đổi mật khẩu
          </Button>
        </form>
      </Box>
    </Modal>
  );
}

export default MockupChangePassword;
