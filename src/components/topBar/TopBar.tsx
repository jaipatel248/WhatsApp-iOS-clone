import { Box } from "@mui/material";
import React from "react";
import TopBarHeader from "./TopBarHeader";

type Props = {
  title: string;
};

const TopBar = (props: Props) => {
  const { title } = props;
  return (
    <Box>
      <TopBarHeader title={title} />
    </Box>
  );
};

export default TopBar;
