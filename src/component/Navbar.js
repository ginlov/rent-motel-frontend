import * as React from "react";
import { AppBar, Button, Stack, Toolbar, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          RENT MOTEL
        </Typography>
        <Stack direction={"row"} spacing={2}>
          <Button color="inherit">TUNG DUONG</Button>
          <Link
            to="/mymotel"
            style={{ textDecoration: "none", color: "white" }}
          >
            <Button color="inherit">My motel</Button>
          </Link>
          <Link to="/search" style={{ textDecoration: "none", color: "white" }}>
            <Button color="inherit">Search</Button>
          </Link>
          <Button color="inherit">Logout</Button>
        </Stack>
      </Toolbar>
    </AppBar>
  );
}
