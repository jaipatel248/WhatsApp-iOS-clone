import { Box, Switch } from "@mui/material";
import React from "react";
import SettingsTopBar from "./SettingsTopBar";
import SettingsCards from "./SettingsCards/SettingsCards";

type Props = {};

const Settings = (props: Props) => {
  return (
    <Box p={2}>
      <SettingsTopBar />
      <SettingsCards />
    </Box>
  );
};

export default Settings;
