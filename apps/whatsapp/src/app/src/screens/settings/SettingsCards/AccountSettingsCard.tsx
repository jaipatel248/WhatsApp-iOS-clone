import React from "react";
import { List, useTheme, Divider, Card } from "@mui/material";
import { blue, lightBlue, green, red, cyan } from "@mui/material/colors";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import ListItemComponent from "./ListItemComponent";
import VpnKeyIcon from "@mui/icons-material/VpnKey";
import LockIcon from "@mui/icons-material/Lock";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import MarkChatUnreadIcon from "@mui/icons-material/MarkChatUnread";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import SwapVertIcon from "@mui/icons-material/SwapVert";
const AccountSettingsCard: React.FC = () => {
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
      <ListItemComponent name="Account" bgcolor={blue[600]} Icon={VpnKeyIcon} />
      <Divider />
      <ListItemComponent
        name="Privacy"
        bgcolor={lightBlue[500]}
        Icon={LockIcon}
      />
      <Divider />
      <ListItemComponent
        name="Chats"
        bgcolor={green[500]}
        Icon={WhatsAppIcon}
      />
      <Divider />
      <ListItemComponent
        name="Notification"
        bgcolor={red[500]}
        Icon={MarkChatUnreadIcon}
      />{" "}
      <Divider />
      <ListItemComponent
        name="Payments"
        bgcolor={cyan[500]}
        Icon={CurrencyRupeeIcon}
      />{" "}
      <Divider />
      <ListItemComponent
        name="Storage and Data"
        bgcolor={green[500]}
        Icon={SwapVertIcon}
      />
    </List>
  );
};

export default AccountSettingsCard;
