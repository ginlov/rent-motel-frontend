import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ItemHomePage } from "../component/ItemHomePage";
import Navbar from "../component/NavbarOwner";
import Button from "@mui/material/Button";
import styles from "./CSS/MyMotelPage.module.css";

const listItem = [
  { id: 1 },
  { id: 2 },
  { id: 3 },
  { id: 4 },
  { id: 5 },
  { id: 6 },
  { id: 7 },
  { id: 8 },
  { id: 9 },
  { id: 10 },
];

export default function MyMotelPage() {
  return (
    <>
      <Navbar />
      <div className={styles.wrap_button}>
        <Button
          variant="contained"
          onClick={() => {
            alert("clicked");
          }}
        >
          Thêm nhà trọ
        </Button>
      </div>
      <div className={styles.wrap_item}>
        {listItem.map((item) => {
          return <ItemHomePage></ItemHomePage>;
        })}
      </div>
    </>
  );
}
