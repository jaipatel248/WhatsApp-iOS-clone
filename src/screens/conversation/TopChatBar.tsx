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
import { useNavigate, useParams } from "react-router-dom";
function TopChatBar() {
  let navigate = useNavigate();
  const { id } = useParams();
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
      }}
    >
      <Container
        sx={{
          padding: "0px !important",
        }}
      >
        <AppBar position="static">
          <Toolbar disableGutters>
            <Box
              sx={{ flexGrow: 1, display: "flex", alignItems: "center" }}
              onClick={() => navigate(`/chats/${id}/conversation/profile`)}
            >
              <IconButton onClick={() => navigate(-1)}>
                <ArrowBackIosIcon />
              </IconButton>
              <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />

              <Box sx={{ ml: 1 }}>
                <ListItemText primary="Photos" secondary="Jan 9, 2014" />
              </Box>
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
        </AppBar>
      </Container>
    </div>
  );
}
export default TopChatBar;
