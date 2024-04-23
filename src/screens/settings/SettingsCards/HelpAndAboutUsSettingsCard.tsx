import React from "react";
import { List, useTheme, Divider, Card } from "@mui/material";
import { blue, red } from "@mui/material/colors";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import ListItemComponent from "./ListItemComponent";
import InfoIcon from "@mui/icons-material/Info";
import FavoriteIcon from "@mui/icons-material/Favorite";
const HelpAndAboutUsSettingsCard: React.FC = () => {
  const theme = useTheme();
  return (
    <List
      component={Card}
      elevation={3}
      sx={{
        borderRadius: "10px",
        marginY: theme.spacing(2),
        padding: theme.spacing(0),
      }}
    >
      <ListItemComponent name="Help" bgcolor={blue[500]} Icon={InfoIcon} />
      <Divider />
      <ListItemComponent
        name="Tell a Friend"
        bgcolor={red[500]}
        Icon={FavoriteIcon}
      />
    </List>
  );
};

export default HelpAndAboutUsSettingsCard;
