import * as React from "react";
import Navbar from "../component/NavbarOwner";
import styles from "./CSS/SearchPage.module.css";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import MenuItem from "@mui/material/MenuItem";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { ItemHomePage } from "../component/ItemHomePage";

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

export default function SearchPage() {
  const [filter, setFilter] = React.useState("");

  const handleChange = (event) => {
    setFilter(event.target.value);
  };
  return (
    <>
      <Navbar />
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
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="  Search..."
            inputProps={{ "aria-label": "search" }}
          />
          <IconButton type="submit" sx={{ p: "10px" }} aria-label="search">
            <SearchIcon />
          </IconButton>
        </Paper>
      </div>
      <div className={styles.wrap_result}>
        {listItem.map((item) => {
          return <ItemHomePage></ItemHomePage>;
        })}
      </div>
    </>
  );
}
