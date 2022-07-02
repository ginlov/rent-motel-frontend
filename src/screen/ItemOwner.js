import * as React from "react";
import Navbar from "../component/NavbarOwner";
import Stack from "@mui/material/Stack";
import image from "../image/phong-tro-2.jpg";
import styles from "./CSS/ItemOwner.module.css";
import Button from "@mui/material/Button";
import locationIcon from "../image/Location-Icon-1.png";
import moneyIcon from "../image/Money-Icon-1.png";
import areaIcon from "../image/Area-Icon-1.png";
import personIcon from "../image/Person-Icon-1.jpg";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import MockupConfirm from "../component/MockupConfirm";
import MockupEditMotel from "../component/MockupItemOwner";
import Typography from "@mui/material/Typography";
import { useParams } from "react-router-dom";
import axios from "../api";

function createData(name, detail) {
  return { name, detail };
}

export default function ItemOwner() {
  const [openFormEdit, setOpenFormEdit] = React.useState(false);
  const [openConfirmMockup, setOpenConfirmMockup] = React.useState(false);
  const [motelDetail, setMotelDetail] = React.useState();
  const { id } = useParams();
  React.useEffect(() => {
    axios.get(`/motels/${id}`).then((response) => {
      setMotelDetail(response.data.data);
      console.log(motelDetail);
    });
  }, []);
  if (motelDetail === undefined) {
    return <>Still loading...</>;
  }
  var rows = [
    createData("Giá điện", motelDetail.electricPrice),
    createData("Giá nước", motelDetail.waterPrice),
  ];

  return (
    <>
      <Navbar />
      <MockupEditMotel
        callback={setOpenFormEdit}
        status={openFormEdit}
        motelDetail={motelDetail}
      />
      <MockupConfirm
        callback={setOpenConfirmMockup}
        status={openConfirmMockup}
        content="Bạn có muốn xoá nhà trọ không?"
      />
      <Typography
        align="center"
        variant="h3"
        sx={{ fontFamily: "Poppins, sans-serif", color: "#0aae9b" }}
      >
        {motelDetail.summary}
      </Typography>
      <Typography
        align="left"
        variant="h6"
        sx={{
          fontFamily: "Poppins, sans-serif",
          color: "#0aae9b",
          marginLeft: "100px",
        }}
      >
        {motelDetail.description}
      </Typography>
      <Stack
        direction="row"
        spacing={2}
        justifyContent="center"
        alignItems="center"
        sx={{ marginTop: "10px" }}
      >
        <img className={styles.item_image} src={image} alt=""></img>
        <img className={styles.item_image} src={image} alt=""></img>
        <img className={styles.item_image} src={image} alt=""></img>
      </Stack>
      <div className={styles.item_information}>
        <div className={styles.item_information_left}>
          <div className={styles.wrap_button}>
            <Button variant="contained">Đăng thông tin phòng trọ</Button>
          </div>
          <div className={styles.wrap_button}>
            <Button
              variant="contained"
              onClick={() => {
                setOpenFormEdit(true);
              }}
            >
              Sửa nhà trọ
            </Button>
          </div>
          <div className={styles.wrap_button}>
            <Button
              variant="contained"
              onClick={() => {
                setOpenConfirmMockup(true);
              }}
              style={{
                backgroundColor: "red",
              }}
            >
              Xoá nhà trọ
            </Button>
          </div>
          <div className={styles.item_address}>
            <img
              src={locationIcon}
              style={{ width: "20px", marginRight: "10px" }}
            ></img>
            {motelDetail.address.detail}, {motelDetail.address.ward},{" "}
            {motelDetail.address.district}, {motelDetail.address.city}
          </div>
          <div className={styles.item_price}>
            <img
              src={moneyIcon}
              style={{ width: "20px", marginRight: "10px" }}
            ></img>
            {motelDetail.price}/tháng
          </div>
          <div className={styles.item_area}>
            <img
              src={areaIcon}
              style={{ width: "20px", marginRight: "10px" }}
            ></img>
            {motelDetail.square}m2
          </div>
          <div className={styles.item_person}>
            <img
              src={personIcon}
              style={{ width: "20px", marginRight: "10px" }}
            ></img>
            {motelDetail.renterMotel}
          </div>
        </div>
        <div className={styles.item_information_right}>
          <TableContainer component={Paper}>
            <Table
              sx={{ minWidth: 100 }}
              size="small"
              aria-label="a dense table"
            >
              <TableHead>
                <TableRow>
                  <TableCell align="center" sx={{ fontSize: "xx-large" }}>
                    Danh mục
                  </TableCell>
                  <TableCell align="center" sx={{ fontSize: "xx-large" }}>
                    Thông tin
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow
                    key={row.name}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell
                      component="th"
                      scope="row"
                      align="center"
                      sx={{ fontSize: "x-large" }}
                    >
                      {row.name}
                    </TableCell>
                    <TableCell align="center" sx={{ fontSize: "x-large" }}>
                      {row.detail}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>
    </>
  );
}
