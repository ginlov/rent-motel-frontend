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
import style from "./style.module.css";

export default function SearchPage() {
  const [listMotel, setListMotel] = useState([]);
  const [filter, setFilter] = useState("");
  const [stringSearch, setStringSearch] = useState("");

  useEffect(() => {
    axios.get("/motels/public").then((response) => {
      setListMotel(response.data.data);
    });
  }, []);

  const handleChange = (event) => {
    setFilter(event.target.value);
  };
  return (
    <div className={style.wrap_page}>
      <div className={style.wrap_content}>
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
                  <MenuItem value={"district"}>Address</MenuItem>
                  <MenuItem value={"price"}>Price Max</MenuItem>
                  <MenuItem value={"square"}>Area Max</MenuItem>
                </Select>
              </FormControl>
            </Box>
            <TextField
              id="outlined-basic"
              label="Search"
              variant="outlined"
              sx={{ marginLeft: "10px", width: "500px", height: "65px" }}
              onChange={(e) => {
                setStringSearch(e.target.value);
              }}
            />
            <IconButton
              sx={{ p: "10px" }}
              aria-label="search"
              onClick={async () => {
                const response = await axios.get(
                  `/motels/public?${filter}=${stringSearch}`
                );
                setListMotel(response.data.data);
              }}
            >
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
