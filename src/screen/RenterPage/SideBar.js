import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ForumIcon from "@mui/icons-material/Forum";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import InsightsIcon from "@mui/icons-material/Insights";

const drawerWidth = 240;
export default function Sidebar(props) {
  return (
    <>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
          "& .MuiToolbar-root": {
            display: "none",
          },
          "& .css-12i7wg6-MuiPaper-root-MuiDrawer-paper": {
            position: "relative",
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar />
        <Divider />
        <List>
          {["Trò chuyện", "Thông tin cá nhân", "Phòng đang thuê"].map(
            (text, index) => (
              <ListItem
                key={text}
                disablePadding
                onClick={() => props.callBack(index)}
              >
                <ListItemButton>
                  <ListItemIcon>
                    {index % 3 === 0 && <ForumIcon />}
                    {index % 3 === 1 && <AccountCircleIcon />}
                    {index % 3 === 2 && <InsightsIcon />}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            )
          )}
        </List>
      </Drawer>
    </>
  );
}
