import { Grid, IconButton, Paper, TextField } from "@mui/material";
import React from "react";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
import AddIcon from "@mui/icons-material/Add";
import CameraAltOutlinedIcon from "@mui/icons-material/CameraAltOutlined";
import MicNoneOutlinedIcon from "@mui/icons-material/MicNoneOutlined";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
type Props = {};

const BottomChatBar = (props: Props) => {
  return (
    <Paper
      sx={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        paddingX: 2,
        paddingBottom: 2,
        paddingTop: 1,
      }}
      elevation={3}
    >
      <Grid container justifyContent={"center"} alignItems={"center"}>
        <Grid item>
          <IconButton>
            <AddIcon />
          </IconButton>
        </Grid>
        <Grid item xs={6} lg={10}>
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
        </Grid>
        <Grid item>
          <Grid container>
            <Grid item>
              <IconButton>
                <CurrencyRupeeIcon />
              </IconButton>
            </Grid>
            <Grid item>
              <IconButton>
                <CameraAltOutlinedIcon />
              </IconButton>
            </Grid>
            <Grid item>
              <IconButton>
                <MicNoneOutlinedIcon />
              </IconButton>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default BottomChatBar;
