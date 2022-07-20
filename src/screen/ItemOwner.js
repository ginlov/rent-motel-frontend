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

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

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
                {rows.map((row) => (
                  <StyledTableRow key={row.name}>
                    <StyledTableCell component="th" scope="row">
                      {row.name}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {row.calories}
                    </StyledTableCell>
                    <StyledTableCell align="right">{row.fat}</StyledTableCell>
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
