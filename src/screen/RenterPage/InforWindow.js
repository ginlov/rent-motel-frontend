import { Box, Divider, Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { useState } from "react";
import { useEffect } from "react";
import axios from "../../api";
import MockupChangePassword from "../../component/MockupChangePassword";

export default function InforWindow(props) {
  const [info, setInfo] = useState();
  const [openMockupChangePassword, setOpenChangePassword] = useState(false);
  useEffect(() => {
    axios.get("/users/me").then((response) => {
      setInfo(response.data.data);
    });
  }, []);
  if (info == null) return <>Loading</>;
  return (
    <>
      <Box
        sx={{
          justifyContent: "center",
          alignContent: "center",
          marginLeft: "50px",
          marginTop: "5px",
        }}
      >
        <Typography variant="h5" sx={{ marginLeft: "100px" }}>
          Thông tin cá nhân
        </Typography>
        <Divider></Divider>
        <Grid container>
          <Grid item xs={6}>
            <Box
              component="form"
              sx={{
                display: "grid",
                justifyContent: "space-between",
                height: "500px",
                width: "250px",
                paddingTop: "20px",
                paddingLeft: "20px",
                paddingRight: "20px",
              }}
            >
              <TextField
                disabled
                id="outlined-basic"
                label="Email"
                variant="outlined"
                fullWidth="100"
                defaultValue={info.email}
              />
              <TextField
                id="outlined-basic"
                label="First Name"
                variant="outlined"
                fullWidth="100"
                defaultValue={info.firstName}
              />
              <TextField
                id="outlined-basic"
                label="Last name"
                variant="outlined"
                fullWidth="100"
                defaultValue={info.lastName}
              />
              <TextField
                id="outlined-basic"
                label="Số điện thoại"
                variant="outlined"
                fullWidth="100"
                defaultValue={info.phone}
              />
              <TextField
                id="outlined-basic"
                label="Giới tính"
                variant="outlined"
                fullWidth="100"
                defaultValue={info.gender}
              />
            </Box>
          </Grid>
          <Box
            component="form"
            sx={{
              display: "grid",
              justifyContent: "space-between",
              height: "500px",
              width: "250px",
              paddingTop: "20px",
              paddingLeft: "20px",
              paddingRight: "20px",
            }}
          >
            <TextField
              id="outlined-basic"
              label="Thành phố"
              variant="outlined"
              fullWidth="100"
              defaultValue={info.address.city}
            />
            <TextField
              id="outlined-basic"
              label="Quận/Huyện"
              variant="outlined"
              fullWidth="100"
              defaultValue={info.address.district}
            />
            <TextField
              id="outlined-basic"
              label="Phường/Xã"
              variant="outlined"
              fullWidth="100"
              defaultValue={info.address.ward}
            />
            <TextField
              id="outlined-basic"
              label="Số nhà"
              variant="outlined"
              fullWidth="100"
              defaultValue={info.address.detail}
            />
            <TextField
              disabled
              id="outlined-basic"
              label="Vai trò"
              variant="outlined"
              fullWidth="100"
              defaultValue="Người thuê trọ"
            />
          </Box>
        </Grid>
        <Stack
          spacing={2}
          direction="row"
          justifyContent="center"
          sx={{ marginTop: "10px" }}
        >
          <Button variant="contained">Sửa thông tin</Button>
          <Button
            variant="contained"
            onClick={() => setOpenChangePassword(true)}
          >
            Đổi mật khẩu
          </Button>
        </Stack>
      </Box>
      <MockupChangePassword
        status={openMockupChangePassword}
        callBack={setOpenChangePassword}
      ></MockupChangePassword>
    </>
  );
}
