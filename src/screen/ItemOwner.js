import * as React from "react";
import Navbar from "../component/NavbarOwner";
import Stack from "@mui/material/Stack";
import image from "../image/phong-tro-2.jpg";
import styles from "./CSS/ItemOwner.module.css";
import Button from "@mui/material/Button";
import locationIcon from "../image/Location-Icon-1.png";
import moneyIcon from "../image/Money-Icon-1.png";
import areaIcon from "../image/Area-Icon-1.png";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function createData(name, detail) {
  return { name, detail };
}

const rows = [
  createData("Giá điện / số", "3.500"),
  createData("Giá nước / khối", "30.000"),
  createData("Điều hoà", "1"),
  createData("Máy giặt", "1"),
  createData("Giường", "1"),
];

export default function ItemOwner() {
  return (
    <>
      <Navbar />
      <Stack
        direction="row"
        spacing={2}
        justifyContent="center"
        alignItems="center"
      >
        <img className={styles.item_image} src={image} alt=""></img>
        <img className={styles.item_image} src={image} alt=""></img>
        <img className={styles.item_image} src={image} alt=""></img>
      </Stack>
      <div className={styles.wrap_button}>
        <Button
          variant="contained"
          onClick={() => {
            alert("clicked");
          }}
        >
          Sửa nhà trọ
        </Button>
      </div>
      <div className={styles.wrap_button}>
        <Button
          variant="contained"
          onClick={() => {
            alert("clicked");
          }}
          style={{
            backgroundColor: "red",
          }}
        >
          Xoá nhà trọ
        </Button>
      </div>
      <div className={styles.item_information}>
        <div className={styles.item_information_left}>
          <div className={styles.item_address}>
            <img
              src={locationIcon}
              style={{ width: "20px", marginRight: "10px" }}
            ></img>
            Phường Bách Khoa
          </div>
          <div className={styles.item_price}>
            <img
              src={moneyIcon}
              style={{ width: "20px", marginRight: "10px" }}
            ></img>
            2.000.000/tháng
          </div>
          <div className={styles.item_area}>
            <img
              src={areaIcon}
              style={{ width: "20px", marginRight: "10px" }}
            ></img>
            20m2
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
                  <TableCell align="center" sx={{ fontSize: "x-large" }}>
                    Danh mục
                  </TableCell>
                  <TableCell align="center" sx={{ fontSize: "x-large" }}>
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
                    <TableCell component="th" scope="row" align="center">
                      {row.name}
                    </TableCell>
                    <TableCell align="center">{row.detail}</TableCell>
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
