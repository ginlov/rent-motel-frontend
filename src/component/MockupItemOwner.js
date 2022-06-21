import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

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

export default function MockupEditMotel(props) {
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
        <Typography sx={{ fontSize: "x-large" }}>
          Sửa thông tin nhà trọ
        </Typography>
        <TextField
          id="outlined-basic"
          label="Giá thuê"
          variant="outlined"
          fullWidth="100"
        />
        <TextField id="outlined-basic" label="Giá điện" variant="outlined" />
        <TextField id="outlined-basic" label="Giá nước" variant="outlined" />
        <TextField id="outlined-basic" label="Điều hoà" variant="outlined" />
        <TextField id="outlined-basic" label="Giường" variant="outlined" />
        <Stack spacing={2} direction="row" justifyContent="center">
          <Button variant="contained">Thay đổi</Button>
          <Button variant="contained" onClick={() => handleClose()}>
            Huỷ
          </Button>
        </Stack>
      </Box>
    </Modal>
  );
}
