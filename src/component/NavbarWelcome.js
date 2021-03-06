import * as React from "react";
import { AppBar, Button, Stack, Toolbar, Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom";

export default function NavbarWelcome() {
  const navigate = useNavigate();
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1, cursor: "pointer" }}
          onClick={() => {
            navigate("/");
          }}
        >
          RENT MOTEL
        </Typography>

        <Stack direction={"row"} spacing={2}>
          <Link to="/login" style={{ textDecoration: "none", color: "white" }}>
            <Button color="inherit">Login</Button>
          </Link>
          <Link
            to="/register"
            style={{ textDecoration: "none", color: "white" }}
          >
            <Button color="inherit">Register</Button>
          </Link>
        </Stack>
      </Toolbar>
    </AppBar>
  );
}
