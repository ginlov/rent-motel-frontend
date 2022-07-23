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
import MockupAdmin from "../component/MockupAdmin";
import MeetingRoomIcon from "@mui/icons-material/MeetingRoom";

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

export default function ItemAdmin() {
  const [renter, setRenter] = React.useState();
  const [openFormEdit, setOpenFormEdit] = React.useState(false);
  const [openConfirmMockup, setOpenConfirmMockup] = React.useState(false);
  const [motelDetail, setMotelDetail] = React.useState();
  const [openAddMockup, setOpenAddMockup] = React.useState(false);
  const [openConfirmMockupPublicMotel, setOpenConfirmMockupPublicMotel] =
    React.useState(false);
  const [statusRent, setStatusRent] = React.useState();
  const [openMockupSetContacted, setOpenMockupSetContacted] =
    React.useState(false);
  const { id } = useParams();
  var rowsUtility = [];
  React.useEffect(() => {
    axios.get(`/motels/${id}`).then((response) => {
      console.log(response.data.data);
      setMotelDetail(response.data.data);
      setStatusRent(response.data.data.renterMotel[0].status);
      response.data.data.motelUtilities.forEach((element) => {
        var row = createDataUtility(
          element.utility.type,
          element.quantity,
          element.status
        );
        rowsUtility.push(row);
      });
      setRenter(response.data.data.renterMotel[0].renter);
    });
  }, []);
  if (motelDetail === undefined) {
    return <>Still loading...</>;
  }

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
        <MockupAdmin
          callback={setOpenConfirmMockupPublicMotel}
          status={openConfirmMockupPublicMotel}
          content="Bạn có muốn công khai phòng trọ này không?"
          actionYes={() => {
            try {
              axios.post(`/motels/admin/public-motel/${id}`, {
                isPublic: true,
              });
              window.location.reload();
            } catch (error) {
              console.log(error);
            }
          }}
          actionNo={() => {}}
        />
        <MockupAdmin
          callback={setOpenMockupSetContacted}
          status={openMockupSetContacted}
          content="Bạn có muốn liên hệ với khách thuê phòng không?"
          actionYes={() => {
            try {
              console.log(renter.id);
              axios.post(`/update-contacted`, {
                renterId: renter.id,
                motelId: id,
              });
              alert("Đã liên hệ với khách.");
              window.location.reload();
            } catch (error) {
              console.log(error);
            }
          }}
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
                {motelDetail.requestPublic ? (
                  <Button
                    variant="contained"
                    onClick={() => {
                      setOpenConfirmMockupPublicMotel(true);
                    }}
                  >
                    <FeedIcon></FeedIcon>
                  </Button>
                ) : (
                  <Button variant="contained" disabled>
                    <FeedIcon></FeedIcon>
                  </Button>
                )}
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
              {statusRent == "PENDING" && (
                <div className={styles.wrap_button}>
                  <Button
                    variant="contained"
                    onClick={() => {
                      setOpenMockupSetContacted(true);
                    }}
                  >
                    <MeetingRoomIcon></MeetingRoomIcon>
                  </Button>
                </div>
              )}
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
              {motelDetail.renterMotel[0]?.renter.firstName || "Không có"}
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
                  <StyledTableRow key={row.id}>
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
    </div>
  );
}
