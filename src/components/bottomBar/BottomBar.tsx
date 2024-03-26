import {
  BottomNavigation,
  BottomNavigationAction,
  BottomNavigationActionProps,
  Paper,
} from "@mui/material";
import React, { useState } from "react";
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
const CustomBottomNavigationAction = (props: BottomNavigationActionProps) => {
  return <BottomNavigationAction {...props}></BottomNavigationAction>;
};

function BottomBar() {
  const [selectedItem, setSelectedItem] = useState(2);

  return (
    <Paper sx={{}} elevation={3}>
      <BottomNavigation
        showLabels
        value={selectedItem}
        onChange={(event, newValue) => {
          setSelectedItem(newValue);
        }}
      >
        <CustomBottomNavigationAction
          value
          label="Updates"
          icon={<MarkChatUnreadIcon />}
        />
        <CustomBottomNavigationAction label="Calls" icon={<PhoneIcon />} />
        <CustomBottomNavigationAction
          label="Communities"
          icon={<GroupsIcon />}
        />
        <CustomBottomNavigationAction
          label="Chats"
          icon={<QuestionAnswerIcon />}
        />
        <CustomBottomNavigationAction
          label="Settings"
          icon={<SettingsIcon />}
        />
      </BottomNavigation>
    </Paper>
  );
}

export default BottomBar;
