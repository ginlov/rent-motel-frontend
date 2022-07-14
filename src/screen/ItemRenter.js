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

const motelFix = {
  id: "aef39d5b-690c-4c8c-8dbd-6924179740e0",
  imageUrl:
    "http://xaydungthuanphuoc.com/upload/Images/H%C3%8CNH%20C%E1%BB%A6A%20GIANG/ph%C3%B2ng%20tr%E1%BB%8D%20c%C3%B3%20g%C3%A1c/mau-phong-tro-co-gac-lung-dep%20(22).jpg",
  price: 500,
  address: {
    city: "Ha Noi",
    district: "Hai Bà Trưng",
    ward: "Bách Khoa",
    detail: "Số 23 Trần Đại Nghĩa",
  },
  renterMotel: null,
  motelUtilities: [],
  waterPrice: 15000,
  electricPrice: 12,
  square: 25,
  summary: "Phong tro gia re",
  description: "Gia phong tro rat re",
};

export default function ItemRenter() {
  const [openFormEdit, setOpenFormEdit] = React.useState(false);
  const [openConfirmMockup, setOpenConfirmMockup] = React.useState(false);
  const [motelDetail, setMotelDetail] = React.useState(motelFix);
  const { id } = useParams();
  //   React.useEffect(() => {
  //     axios.get(`/motels/${id}`).then((response) => {
  //       setMotelDetail(response.data.data);
  //       console.log(motelDetail);
  //     });
  //   }, []);
  if (motelDetail === undefined) {
    return <>Still loading...</>;
  }
  var rows = [
    createData("Giá điện", motelDetail.electricPrice),
    createData("Giá nước", motelDetail.waterPrice),
  ];

  return (
    <>
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
        <img
          style={{ height: "350px" }}
          className={styles.item_image}
          src={motelDetail.imageUrl}
          alt=""
        ></img>
      </Stack>
      <div className={styles.item_information}>
        <div className={styles.item_information_left}>
          <div className={styles.wrap_button}>
            <Button variant="contained">Thuê phòng</Button>
          </div>
          <div className={styles.wrap_button}>
            <Button variant="contained">Liên hệ với chủ nhà trọ</Button>
          </div>
          <div className={styles.wrap_button}>
            <Button variant="contained">Liên hệ với quản trị viên</Button>
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
