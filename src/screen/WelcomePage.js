import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import MenuItem from "@mui/material/MenuItem";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ItemOwner } from "../component/ItemOwner";
import styles from "./CSS/MyMotelPage.module.css";
import axios from "../api";
import { ItemWelcome } from "../component/ItemWelcome";

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

export default function WelcomePage() {
  const [listMotel, setListMotel] = useState([]);
  useEffect(() => {
    axios.get("/motels/public").then((response) => {
      setListMotel(response.data.data);
    });
  }, []);
  return (
    <div style={{ display: "flex", background: "#d5e2e6" }}>
      <div
        style={{
          width: "80%",
          margin: "auto",
          minHeight: "635px",
          background: "white",
          marginTop: "30px",
          borderRadius: "10px",
          marginBottom: "30px",
        }}
        onClick={(e) => {
          alert("Vui lòng đăng nhập để xem chi tiết phòng trọ!!!");
        }}
      >
        <div className={styles.wrap_item}>
          {listMotel.map((item) => {
            return (
              <ItemWelcome
                key={item.id}
                item_id={item.id}
                item_title={item.summary}
                item_address={item.address.city}
                item_price={item.price}
                item_area={item.square}
                item_image={item.imageUrl}
              ></ItemWelcome>
            );
          })}
        </div>
      </div>
    </div>
  );
}
