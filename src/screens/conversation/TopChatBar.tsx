import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { ListItemText } from "@mui/material";
import VideocamOutlinedIcon from "@mui/icons-material/VideocamOutlined";
import CallOutlinedIcon from "@mui/icons-material/CallOutlined";
function TopChatBar() {
  return (
    <AppBar position="fixed" sx={{ top: 0 }}>
      <Container>
        <Toolbar disableGutters>
          <ArrowBackIosIcon sx={{ display: "flex", mr: 1 }} />
          <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />

          <Box sx={{ flexGrow: 1, display: "flex", ml: 1 }}>
            <ListItemText primary="Photos" secondary="Jan 9, 2014" />
          </Box>

          <Box>
            <Tooltip title="Open settings">
              <IconButton>
                <VideocamOutlinedIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title="Open settings">
              <IconButton>
                <CallOutlinedIcon />
              </IconButton>
            </Tooltip>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default TopChatBar;
