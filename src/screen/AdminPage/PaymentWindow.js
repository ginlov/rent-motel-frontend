import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import Check from "@mui/icons-material/Check";
import styles from "../CSS/AdminPage.css";
import Table from "@mui/material/Table";
import MUIDataTable from "mui-datatables";
import axios from "../../api";

export default function PaymentWindow() {
  const [listPayment, setListPayment] = useState([]);
  useEffect(() => {
    axios.get(`/transactions`).then((response) => {
      setListPayment(response.data.data);
    });
  }, []);

  const columns = [
    {
      name: "Transaction Id",
      options: {
        filter: false,
        sort: false,
        empty: true,
        customBodyRenderLite: (dataIndex) => {
          return <p>{listPayment[dataIndex].id}</p>;
        },
      },
    },
    {
      name: "Motel Id",
      options: {
        filter: false,
        sort: false,
        empty: true,
        customBodyRenderLite: (dataIndex) => {
          return <p>{listPayment[dataIndex].motelId}</p>;
        },
      },
    },
    {
      name: "Motel Owner",
      options: {
        filter: false,
        sort: false,
        empty: true,
        customBodyRenderLite: (dataIndex) => {
          return <p>{listPayment[dataIndex].motelOwner}</p>;
        },
      },
    },
    {
      name: "Renter Id",
      options: {
        filter: false,
        sort: false,
        empty: true,
        customBodyRenderLite: (dataIndex) => {
          return <p>{listPayment[dataIndex].renterId}</p>;
        },
      },
    },
    {
      name: "Renter Name",
      options: {
        filter: false,
        sort: false,
        empty: true,
        customBodyRenderLite: (dataIndex) => {
          return <p>{listPayment[dataIndex].renterName}</p>;
        },
      },
    },
    {
      name: "Transaction Image",
      options: {
        filter: false,
        sort: false,
        empty: true,
        customBodyRenderLite: (dataIndex) => {
          return (
            <img
              src={listPayment[dataIndex].imageBill}
              alt=""
              style={{ height: "50px", width: "50px" }}
            ></img>
          );
        },
      },
    },
    {
      name: "Amount",
      options: {
        filter: false,
        sort: false,
        empty: true,
        customBodyRenderLite: (dataIndex) => {
          return <p>{listPayment[dataIndex].totalPrice}</p>;
        },
      },
    },
    {
      name: "Status",
      options: {
        filter: false,
        sort: false,
        empty: true,
        customBodyRenderLite: (dataIndex) => {
          return <p>{listPayment[dataIndex].status}</p>;
        },
      },
    },
    {
      name: "Action",
      options: {
        filter: false,
        sort: false,
        empty: true,
        customBodyRenderLite: (dataIndex) => {
          return (
            <Button
              onClick={async () => {
                await axios.post(
                  `/transactions/confirm-transaction/${listPayment[dataIndex].id}`,
                  {
                    isConfirm: true,
                  }
                );
                alert("Đã xác nhận thanh toán.");
              }}
            >
              <Check></Check>
            </Button>
          );
        },
      },
    },
  ];

  const options = {
    filter: true,
    filterType: "dropdown",
    responsive: "vertical",
    download: false,
    serverSide: true,
    print: false,
    rowsPerPageOptions: [],
    selectableRowsHideCheckboxes: false,
    selectableRows: "none",
    selectableRowsHeader: false,
    onColumnSortChange: (changedColumn, direction) =>
      console.log("changedColumn: ", changedColumn, "direction: ", direction),
    onChangeRowsPerPage: (numberOfRows) =>
      console.log("numberOfRows: ", numberOfRows),
    onChangePage: (currentPage) => console.log("currentPage: ", currentPage),
    onTableChange: (action, tableState) => {
      console.log(action, tableState);

      switch (action) {
        case "changePage":
          this.changePage(tableState.page);
          break;
        case "sort":
          this.sort(tableState.page);
          break;
        default:
          console.log("action not handled.");
      }
    },
  };

  return (
    <>
      <MUIDataTable data={listPayment} columns={columns} options={options} />
    </>
  );
}
