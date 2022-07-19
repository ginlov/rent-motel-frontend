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
import MockupAddUtility from "../component/MockupAddUtility";
import style from "./style.module.css";
import DeleteIcon from "@mui/icons-material/Delete";
import HandymanIcon from "@mui/icons-material/Handyman";
import FeedIcon from "@mui/icons-material/Feed";
import AddIcon from "@mui/icons-material/Add";
import BoltIcon from "@mui/icons-material/Bolt";
import WaterIcon from "@mui/icons-material/Water";
import PersonIcon from "@mui/icons-material/Person";
import SquareFootIcon from "@mui/icons-material/SquareFoot";
import PaidIcon from "@mui/icons-material/Paid";
import EditLocationAltIcon from "@mui/icons-material/EditLocationAlt";

function createData(name, detail) {
  return { name, detail };
}

function createDataUtility(name, quantity, status) {
  var status1;
  if (status == 1) status1 = "Tốt";
  else status1 = "Hỏng";
  return { name, quantity, status1 };
}

export default function ItemOwner() {
  const [openFormEdit, setOpenFormEdit] = React.useState(false);
  const [openConfirmMockup, setOpenConfirmMockup] = React.useState(false);
  const [motelDetail, setMotelDetail] = React.useState({
    id: 1,
    summary: "Phòng trọ sinh viên",
    description: "Phòng trọ đầy đủ tiện nghi",
    address: {
      city: "Hà Nội",
      district: "Ba Đình",
      ward: "Ba Đình 1",
      detail: "1 Đào Tấn",
    },
    electricPrice: 10000,
    waterPrice: 10000,
    motelUtilities: [],
  });
  const [openAddMockup, setOpenAddMockup] = React.useState(false);
  const { id } = useParams();
  // React.useEffect(() => {
  //   axios.get(`/motels/${id}`).then((response) => {
  //     setMotelDetail(response.data.data);
  //     console.log(motelDetail);
  //   });
  // }, []);
  // if (motelDetail === undefined) {
  //   return <>Still loading...</>;
  // }
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
    <div className={style.wrap_page}>
      <div className={style.wrap_content}>
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
        <MockupAddUtility
          callback={setOpenAddMockup}
          status={openAddMockup}
          motelId={id}
        />
        <Typography
          align="center"
          variant="h3"
          sx={{ fontFamily: "Poppins, sans-serif", color: "#0aae9b" }}
        >
          {motelDetail.summary}
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
        <Typography
          align="left"
          variant="h6"
          sx={{
            fontFamily: "Poppins, sans-serif",
            color: "#0aae9b",
            marginLeft: "100px",
            marginTop: "30px",
          }}
        >
          {motelDetail.description}
        </Typography>
        <div className={styles.item_information}>
          <div className={styles.item_information_left}>
            <div className={styles.item_info}>
              <EditLocationAltIcon></EditLocationAltIcon>
              {motelDetail.address.detail}, {motelDetail.address.ward},{" "}
              {motelDetail.address.district}, {motelDetail.address.city}
            </div>
            <div className={styles.item_info}>
              <PaidIcon></PaidIcon>
              {motelDetail.price}/tháng
            </div>
            <div className={styles.item_info}>
              <SquareFootIcon></SquareFootIcon>
              {motelDetail.square}m2
            </div>

            <div style={{ display: "flex", flexDimention: "row" }}>
              <div className={styles.wrap_button}>
                <Button variant="contained">
                  <FeedIcon></FeedIcon>
                </Button>
              </div>
              <div className={styles.wrap_button}>
                <Button
                  variant="contained"
                  onClick={() => {
                    setOpenFormEdit(true);
                  }}
                >
                  <HandymanIcon></HandymanIcon>
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
                  <DeleteIcon></DeleteIcon>
                </Button>
              </div>
            </div>
          </div>
          <div className={styles.item_information_right}>
            <div className={styles.item_info}>
              <PersonIcon></PersonIcon>
              {motelDetail.renterMotel}
            </div>
            <div className={styles.item_info}>
              <BoltIcon></BoltIcon>
              {motelDetail.electricPrice}
            </div>
            <div className={styles.item_info}>
              <WaterIcon />
              {motelDetail.waterPrice}
            </div>
          </div>
        </div>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 100 }} size="small" aria-label="a dense table">
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
        <Button
          variant="contained"
          sx={{ marginTop: "15px" }}
          onClick={() => {
            setOpenAddMockup(true);
          }}
        >
          <AddIcon></AddIcon>
        </Button>
      </div>
    </div>
  );
}
