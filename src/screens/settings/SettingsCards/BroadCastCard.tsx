import React from "react";
import { List, useTheme, Divider, Card } from "@mui/material";
import { green, yellow, teal } from "@mui/material/colors";
import CampaignIcon from "@mui/icons-material/Campaign";
import StarIcon from "@mui/icons-material/Star";
import ComputerIcon from "@mui/icons-material/Computer";
import ListItemComponent from "./ListItemComponent";
const BroadCastCard: React.FC = () => {
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
      <ListItemComponent
        name="Broadcast Lists"
        bgcolor={green[500]}
        Icon={CampaignIcon}
      />
      <Divider />

      <ListItemComponent
        name="Starred Messages"
        bgcolor={yellow[500]}
        Icon={StarIcon}
      />
      <Divider />

      <ListItemComponent
        name="Linked Messages"
        bgcolor={teal[500]}
        Icon={ComputerIcon}
      />
    </List>
  );
};

export default BroadCastCard;
