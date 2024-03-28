import { Box } from "@mui/material";
import React from "react";
import TopBar from "../../components/topBar/TopBar";
import SearchBar from "../../components/searchBar/SearchBar";

type Props = {};

const Settings = (props: Props) => {
  return (
    <Box p={2}>
      <TopBar title="Settings" />
      <SearchBar />
    </Box>
  );
};

export default Settings;
