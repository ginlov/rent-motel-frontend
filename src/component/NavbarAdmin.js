import * as React from "react";
import { AppBar, Button, Stack, Toolbar, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export default function NavbarAdmin(props) {
  return (
    <AppBar position="static" sx={{ boxShadow: "none" }}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          RENT MOTEL
        </Typography>
        <Stack direction={"row"} spacing={2}>
          <Link to="/admin" stype={{ textDecoration: "none", color: "white" }}>
            <Button color="inherit">{props.name}</Button>
          </Link>
          <Link
            to="/admin/login"
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
