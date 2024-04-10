import {
  AppBar,
  Container,
  IconButton,
  TextField,
  Toolbar,
  Box,
  Tooltip,
} from "@mui/material";
import React from "react";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
import AddIcon from "@mui/icons-material/Add";
import CameraAltOutlinedIcon from "@mui/icons-material/CameraAltOutlined";
import MicNoneOutlinedIcon from "@mui/icons-material/MicNoneOutlined";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
type Props = {};

const BottomChatBar = (props: Props) => {
  return (
    <AppBar
      position="fixed"
      sx={{
        top: "auto",
        bottom: 0,
        paddingBottom: 2,
        paddingTop: 1,
      }}
    >
      <Container>
        <Toolbar disableGutters>
          <IconButton>
            <AddIcon />
          </IconButton>
          <Box sx={{ flexGrow: 1, display: { md: "flex" } }}>
            <TextField
              sx={{ mr: 3 }} // Add border radius here
              size="small"
              InputProps={{
                fullWidth: true,
                endAdornment: (
                  <IconButton>
                    <InsertEmoticonIcon />
                  </IconButton>
                ),
                style: {
                  borderRadius: "10px",
                },
              }}
              inputProps={{
                style: {
                  height: "1em",
                },
              }}
              fullWidth
            />
          </Box>
          <Box sx={{ display: "flex", flexWrap: "nowrap" }}>
            <Tooltip title="Open settings">
              <IconButton>
                <CurrencyRupeeIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title="Open settings">
              <IconButton>
                <CameraAltOutlinedIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title="Open settings">
              <IconButton>
                <MicNoneOutlinedIcon />
              </IconButton>
            </Tooltip>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default BottomChatBar;
