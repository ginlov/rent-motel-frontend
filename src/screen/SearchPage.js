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
import { ItemRenter } from "../component/ItemRenter";

export default function SearchPage() {
  const [listMotel, setListMotel] = useState([
    {
      key: "1",
      id: "1",
      title: "Nha tro sinh vien",
      address: "Ha Noi",
      price: "3000000",
      square: "30",
      imageUrl: "",
    },
  ]);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    axios.get("/motels?order-by=price_desc").then((response) => {
      setListMotel(response.data.data);
    });
  }, []);

  const handleChange = (event) => {
    setFilter(event.target.value);
  };
  return (
    <div style={{ display: "flex" }}>
      <div style={{ width: "80%", margin: "auto" }}>
        <div className={styles.wrap_search}>
          <Paper
            component="form"
            sx={{
              p: "4px 8px",
              display: "flex",
              alignItems: "center",
              width: 600,
            }}
          >
            <Box sx={{ minWidth: 120 }}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Filter</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={filter}
                  label="Age"
                  onChange={handleChange}
                >
                  <MenuItem value={"Address"}>Address</MenuItem>
                  <MenuItem value={"Price"}>Price</MenuItem>
                  <MenuItem value={"Area"}>Area</MenuItem>
                </Select>
              </FormControl>
            </Box>
            <TextField
              id="outlined-basic"
              label="Search"
              variant="outlined"
              sx={{ marginLeft: "10px", width: "500px", height: "65px" }}
            />
            <IconButton sx={{ p: "10px" }} aria-label="search">
              <SearchIcon />
            </IconButton>
          </Paper>
        </div>
        <div className={styles.wrap_item}>
          {listMotel.map((item) => {
            return (
              <ItemRenter
                key={item.id}
                item_id={item.id}
                item_title={item.summary}
                item_address={item.address.city}
                item_price={item.price}
                item_area={item.square}
                item_image={item.imageUrl}
              ></ItemRenter>
            );
          })}
        </div>
      </div>
    </div>
  );
}
