import { Box } from "@mui/material";
import React from "react";
import TopBar from "../../components/topBar/TopBar";
import SearchBar from "../../components/searchBar/SearchBar";
import StatusItems from "./StatusItems";
import MyStatus from "./MyStatus";

type Props = {};

const Updates = (props: Props) => {
  return (
    <Box>
      <Box p={2}>
        <TopBar title="Updates" />
        <SearchBar />
      </Box>
      <MyStatus />
      <StatusItems />
    </Box>
  );
};

export default Updates;
