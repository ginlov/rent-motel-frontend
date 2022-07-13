import * as React from "react";
import { AppBar, Button, Stack, Toolbar, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import axios from "../api";
import { useEffect, useState } from "react";

export default function NavbarOwner(props) {
  return (
    <AppBar position="static" sx={{ boxShadow: "none" }}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          RENT MOTEL
        </Typography>
        <Stack direction={"row"} spacing={2}>
          <Link to="/owner" style={{ textDecoration: "none", color: "white" }}>
            <Button color="inherit">{props.name}</Button>
          </Link>
          <Link
            to="/mymotel"
            style={{ textDecoration: "none", color: "white" }}
          >
            <Button color="inherit">My motel</Button>
          </Link>
          <Link
            to="/"
            style={{ textDecoration: "none", color: "white" }}
            onClick={() => {
              localStorage.removeItem("token");
              props.callBack("");
            }}
          >
            <Button color="inherit">Logout</Button>
          </Link>
        </Stack>
      </Toolbar>
    </AppBar>
  );
}
