import * as React from "react";
import { AppBar, Button, Stack, Toolbar, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export default function NavbarRenter(props) {
  return (
    <AppBar position="static" sx={{ boxShadow: "none" }}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          RENT MOTEL
        </Typography>
        <Stack direction={"row"} spacing={2}>
          <Link to="/renter" style={{ textDecoration: "none", color: "white" }}>
            <Button color="inherit">TUNG DUONG</Button>
          </Link>
          <Link to="/search" style={{ textDecoration: "none", color: "white" }}>
            <Button color="inherit">Search</Button>
          </Link>
          <Link to="/" style={{ textDecoration: "none", color: "white" }}>
            <Button color="inherit">Logout</Button>
          </Link>
        </Stack>
      </Toolbar>
    </AppBar>
  );
}
