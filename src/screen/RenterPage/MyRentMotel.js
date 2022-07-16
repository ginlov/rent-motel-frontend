import * as React from "react";
import Stack from "@mui/material/Stack";
import styles from "../CSS/ItemOwner.module.css";
import Button from "@mui/material/Button";
import locationIcon from "../../image/Location-Icon-1.png";
import moneyIcon from "../../image/Money-Icon-1.png";
import areaIcon from "../../image/Area-Icon-1.png";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { useParams } from "react-router-dom";
import axios from "../../api";

function createData(name, detail) {
  return { name, detail };
}

function createDataUtility(name, quantity, status) {
  var status1;
  if (status == 1) status1 = "Tốt";
  else status1 = "Hỏng";
  return { name, quantity, status1 };
}

export default function MyRentMotel() {
  const [motelDetail, setMotelDetail] = React.useState();
  const { id } = useParams();
  React.useEffect(() => {
    axios
      .get(`/motels/ff8494e3-7a40-4278-a70c-3872c99c4fc5`)
      .then((response) => {
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

  var rowsUtility = [];
  motelDetail.motelUtilities.forEach((element) => {
    var row = createDataUtility(
      element.utility.type,
      element.quantity,
      element.status
    );
    rowsUtility.push(row);
  });

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
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
            <Button variant="contained">Thông báo tình trạng thiết bị</Button>
          </div>
          <div className={styles.wrap_button}>
            <Button variant="contained">Thanh toán tiền phòng</Button>
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

          <TableContainer component={Paper}>
            <Table
              sx={{ minWidth: 100 }}
              size="small"
              aria-label="a dense table"
            >
              <TableHead>
                <TableRow>
                  <TableCell align="center" sx={{ fontSize: "xx-large" }}>
                    Thiết bị
                  </TableCell>
                  <TableCell align="center" sx={{ fontSize: "xx-large" }}>
                    Số lượng
                  </TableCell>
                  <TableCell align="center" sx={{ fontSize: "xx-large" }}>
                    Tình trạng
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rowsUtility.map((row) => (
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
                      {row.quantity}
                    </TableCell>
                    <TableCell align="center" sx={{ fontSize: "x-large" }}>
                      {row.status1}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>
    </div>
  );
}
