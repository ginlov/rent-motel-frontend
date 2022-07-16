import * as React from "react";
import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import ForumIcon from "@mui/icons-material/Forum";
import People from "@mui/icons-material/People";
import Payments from "@mui/icons-material/Payments";
import {OtherHouses} from "@mui/icons-material";

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
                        top: "64px",
                    },
                    "& .MuiToolbar-root": {
                        display: "none",
                    },
                }}
                variant="permanent"
                anchor="left"
            >
                <Toolbar />
                <Divider />
                <List>
                    {["Chat", "Email", "Phòng trọ", "Người dùng", "Thanh toán"].map((text, index) => (
                        <ListItem
                            key={text}
                            disablePadding
                            onClick={() => props.callBack(index)}
                        >
                            <ListItemButton>
                                <ListItemIcon>
                                    {index % 5 === 0 && <ForumIcon />}
                                    {index % 5 === 1 && <MailIcon />}
                                    {index % 5 === 2 && <OtherHouses />}
                                    {index % 5 === 3 && <People />}
                                    {index % 5 === 4 && <Payments />}
                                </ListItemIcon>
                                <ListItemText primary={text} />
                            </ListItemButton>
                        </ListItem>
                        ))}
                </List>
            </Drawer>
        </>
    )
}