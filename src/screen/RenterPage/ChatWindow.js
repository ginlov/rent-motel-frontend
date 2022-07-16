import * as React from "react";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import ListItemButton from "@mui/material/ListItemButton";
import {
  Container,
  Divider,
  FormControl,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import { Fragment, useEffect, useRef, useState } from "react";
import "./Chat.css";
import SendIcon from "@mui/icons-material/Send";

export default function ChatWindow(props) {
  const ENTER_KEY_CODE = 13;
  const scrollBottomRef = useRef(null);
  const webSocket = useRef(null);
  const [chatMessages, setChatMessages] = useState([]);
  const [user, setUser] = useState("Quản trị viên");
  const [message, setMessage] = useState("");

  const listChatMessages = chatMessages.map((chatMessageDto, index) => (
    <ListItem key={index}>
      <ListItemText
        primary={`${chatMessageDto.user}: ${chatMessageDto.message}`}
      />
    </ListItem>
  ));

  return (
    <Fragment>
      <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
        <ListItemButton onClick={() => setUser("Quản trị viên")}>
          <ListItemAvatar>
            <Avatar>AD</Avatar>
          </ListItemAvatar>
          <ListItemText primary="Quản trị" secondary="Online" />
        </ListItemButton>
        <ListItemButton onClick={() => setUser("Dương")}>
          <ListItemAvatar>
            <Avatar>D</Avatar>
          </ListItemAvatar>
          <ListItemText primary="Dương" secondary="Online" />
        </ListItemButton>
        <ListItemButton onClick={() => setUser("Duy")}>
          <ListItemAvatar>
            <Avatar>D</Avatar>
          </ListItemAvatar>
          <ListItemText primary="Duy" secondary="Online" />
        </ListItemButton>
      </List>
      <Container>
        <Paper elevation={5}>
          <Box p={3}>
            <Typography variant="h4" gutterBottom>
              {user}
            </Typography>
            <Divider />
            <Grid container spacing={4} alignItems="center">
              <Grid id="chat-window" xs={12} item>
                <List id="chat-window-messages">
                  {listChatMessages}
                  <ListItem ref={scrollBottomRef}></ListItem>
                </List>
              </Grid>

              <Grid xs={11} item>
                <FormControl fullWidth>
                  <TextField
                    value={message}
                    label="Type your message..."
                    variant="outlined"
                    onChange={(e) => {
                      setMessage(e.target.value);
                    }}
                  />
                </FormControl>
              </Grid>
              <Grid xs={1} item>
                <IconButton aria-label="send" color="primary">
                  <SendIcon />
                </IconButton>
              </Grid>
            </Grid>
          </Box>
        </Paper>
      </Container>
    </Fragment>
  );
}
