import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import UploadImage from "./UploadImage";
import axios from "../api";

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

export default function MockupTransfer(props) {
  const [image, setImage] = React.useState();
  const handleClose = () => {
    props.callback(false);
  };

  return (
    <Modal
      open={props.status}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          {props.content}
        </Typography>
        <UploadImage setImage={setImage}></UploadImage>
        <Stack spacing={2} direction="row" justifyContent="center">
          <Button
            variant="contained"
            color="success"
            onClick={async () => {
              try {
                const response = await axios.post(`/transactions`, {
                  motelId: props.motelId,
                });
                var idTransaction = response.data.data.id;
                var bodyFormData = new FormData();
                bodyFormData.append("image", image);
                const responseImage = await axios.post(
                  "/motels/upload-image",
                  bodyFormData,
                  {
                    headers: { "Content-Type": "multipart/form-data" },
                  }
                );
                const imageUrl = responseImage.data.data.imageUrl;
                await axios.post(
                  `/transactions/upload-image-bill/${idTransaction}`,
                  {
                    motelId: props.motelId,
                    imageUrl: imageUrl,
                  }
                );
                alert(
                  "Đã thông tin tới quản trị viên. Hãy chờ quản trị viên xác nhận."
                );
                handleClose();
              } catch (error) {
                console.log(error);
              }
            }}
          >
            Yes
          </Button>
          <Button
            variant="contained"
            color="error"
            onClick={() => handleClose()}
          >
            No
          </Button>
        </Stack>
      </Box>
    </Modal>
  );
}
