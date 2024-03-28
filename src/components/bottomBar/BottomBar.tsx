import React from "react";
import {
  BottomNavigation,
  BottomNavigationAction,
  BottomNavigationActionProps,
  Paper,
} from "@mui/material";
import MarkChatUnreadIcon from "@mui/icons-material/MarkChatUnread";
import MarkChatUnreadOutlinedIcon from "@mui/icons-material/MarkChatUnreadOutlined";
import PhoneIcon from "@mui/icons-material/Phone";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import GroupsIcon from "@mui/icons-material/Groups";
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";
import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer";
import QuestionAnswerOutlinedIcon from "@mui/icons-material/QuestionAnswerOutlined";
import SettingsIcon from "@mui/icons-material/Settings";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import { useParams, useNavigate } from "react-router-dom";
const CustomBottomNavigationAction = (props: BottomNavigationActionProps) => {
  return <BottomNavigationAction {...props}></BottomNavigationAction>;
};

function BottomBar() {
  const { screen } = useParams();
  const selectedItem = screen || "chats";
  const navigate = useNavigate();
  console.log("BottomBar", screen);

  return (
    <Paper
      sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
      elevation={3}
    >
      <BottomNavigation
        showLabels
        value={selectedItem}
        onChange={(event, newValue) => {
          navigate(`/${newValue}`);
        }}
      >
        <CustomBottomNavigationAction
          value="updates"
          label="Updates"
          icon={
            selectedItem === "updates" ? (
              <MarkChatUnreadIcon />
            ) : (
              <MarkChatUnreadOutlinedIcon />
            )
          }
        />
        <CustomBottomNavigationAction
          label="Calls"
          value="calls"
          icon={
            selectedItem === "calls" ? (
              <PhoneIcon />
            ) : (
              <LocalPhoneOutlinedIcon />
            )
          }
        />
        <CustomBottomNavigationAction
          label="Communities"
          value="communities"
          icon={
            selectedItem === "communities" ? (
              <GroupsIcon />
            ) : (
              <GroupsOutlinedIcon />
            )
          }
        />
        <CustomBottomNavigationAction
          label="Chats"
          value="chats"
          icon={
            selectedItem === "chats" ? (
              <QuestionAnswerIcon />
            ) : (
              <QuestionAnswerOutlinedIcon />
            )
          }
        />
        <CustomBottomNavigationAction
          label="Settings"
          value="settings"
          icon={
            selectedItem === "settings" ? (
              <SettingsIcon />
            ) : (
              <SettingsOutlinedIcon />
            )
          }
        />
      </BottomNavigation>
    </Paper>
  );
}

export default BottomBar;
