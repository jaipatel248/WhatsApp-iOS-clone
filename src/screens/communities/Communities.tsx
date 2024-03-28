import { Box } from "@mui/material";
import React from "react";
import TopBar from "../../components/topBar/TopBar";

type Props = {};

const Communities = (props: Props) => {
  return (
    <Box p={2}>
      <TopBar title="Communities" />
    </Box>
  );
};

export default Communities;
