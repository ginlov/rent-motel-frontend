import * as React from "react";
import Navbar from "../component/NavbarOwner";
import Stack from "@mui/material/Stack";
import image from "../image/phong-tro-2.jpg";
import styles from "./CSS/ItemOwner.module.css";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
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
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import AddIcon from "@mui/icons-material/Add";
import BoltIcon from "@mui/icons-material/Bolt";
import WaterIcon from "@mui/icons-material/Water";
import SquareFootIcon from "@mui/icons-material/SquareFoot";
import PaidIcon from "@mui/icons-material/Paid";
import EditLocationAltIcon from "@mui/icons-material/EditLocationAlt";
import ForumIcon from "@mui/icons-material/Forum";
import ThreePIcon from "@mui/icons-material/ThreeP";
import MockupAdmin from "../component/MockupAdmin";
import MeetingRoomIcon from "@mui/icons-material/MeetingRoom";
import MockupTransfer from "../component/MockupTransfer";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#1976d2",
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function createDataUtility(name, quantity, status) {
  return { name, quantity, status };
}

export default function ItemOwner() {
  const [openMockupAdmin, setOpenMockupAdmin] = React.useState(false);
  const [motelDetail, setMotelDetail] = React.useState("1");
  const [statusRent, setStatusRent] = React.useState();
  const [openMockupAccept, setOpenMockupAccept] = React.useState(false);
  const { id } = useParams();
  React.useEffect(() => {
    axios.get(`/motels/${id}`).then((response) => {
      setMotelDetail(response.data.data);
      if (response.data.data.renterMotel[0].status.length > 0) {
        setStatusRent(response.data.data.renterMotel[0].status);
      }
    });
  }, []);
  if (motelDetail === undefined) {
    return <>Still loading...</>;
  }

  var rowsUtility = [];
  if (motelDetail.motelUtilities !== undefined) {
    motelDetail.motelUtilities.forEach((element) => {
      var row = createDataUtility(
        element.utility.type,
        element.quantity,
        element.status
      );
      rowsUtility.push(row);
    });
  }

  return (
    <div className={style.wrap_page}>
      <div className={style.wrap_content}>
        <MockupConfirm
          callback={setOpenMockupAdmin}
          status={openMockupAdmin}
          content="Bạn có muốn thuê phòng trọ này không?"
          action={() => {
            try {
              axios.post(`/rent-motel/${id}`);
              alert("Đã thông tin tới quản trị viên.");
              setOpenMockupAdmin(false);
              window.location.reload();
            } catch (error) {
              console.log(error);
            }
          }}
        />
        <MockupTransfer
          callback={setOpenMockupAccept}
          status={openMockupAccept}
          content={`Bạn có muốn thuê phòng trọ này không? Nếu có xin mời thanh toán tiền cọc ${motelDetail.price}`}
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
              {motelDetail.address?.detail}, {motelDetail.address?.ward},{" "}
              {motelDetail.address?.district}, {motelDetail.address?.city}
            </div>
            <div className={styles.item_info}>
              <PaidIcon></PaidIcon>
              {motelDetail.price}/tháng
            </div>
            <div className={styles.item_info}>
              <SquareFootIcon></SquareFootIcon>
              {motelDetail.square}m2
            </div>
          </div>
          <div className={styles.item_information_right}>
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
        <div style={{ marginLeft: "100px", width: "80%", marginTop: "20px" }}>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell>Thiết bị</StyledTableCell>
                  <StyledTableCell align="right">Số lượng</StyledTableCell>
                  <StyledTableCell align="right">Tình trạng</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rowsUtility.map((row) => (
                  <StyledTableRow key={row.name}>
                    <StyledTableCell component="th" scope="row">
                      {row.name}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {row.quantity}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {row.status}
                    </StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          {statusRent == undefined && (
            <Button
              variant="contained"
              sx={{ marginTop: "15px", marginRight: "20px" }}
              onClick={() => setOpenMockupAdmin(true)}
            >
              <AddShoppingCartIcon></AddShoppingCartIcon>
            </Button>
          )}
          {statusRent == "PENDING" && (
            <Button
              variant="contained"
              sx={{ marginTop: "15px", marginRight: "20px" }}
              disabled
            >
              <AddShoppingCartIcon></AddShoppingCartIcon>
            </Button>
          )}
          {statusRent == "CONTACTED" && (
            <Button
              variant="contained"
              sx={{ marginTop: "15px", marginRight: "20px" }}
              onClick={() => setOpenMockupAccept(true)}
            >
              <MeetingRoomIcon></MeetingRoomIcon>
            </Button>
          )}

          <Button
            variant="contained"
            sx={{ marginTop: "15px", marginRight: "20px" }}
          >
            <ForumIcon></ForumIcon>
          </Button>
          <Button variant="contained" sx={{ marginTop: "15px" }}>
            <ThreePIcon></ThreePIcon>
          </Button>
        </div>
      </div>
    </div>
  );
}
