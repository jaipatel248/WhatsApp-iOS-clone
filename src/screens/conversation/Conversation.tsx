import { Box } from "@mui/material";
import React from "react";

import BottomChatBar from "./BottomChatBar";
import TopChatBar from "./TopChatBar";
type Props = {};

const Conversation = (props: Props) => {
  return (
    <>
      <TopChatBar />
      <Box p={2}>
        <Box>Conversation</Box>
        <BottomChatBar />
      </Box>
    </>
  );
};

export default Conversation;
