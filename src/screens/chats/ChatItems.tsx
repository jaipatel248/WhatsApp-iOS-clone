import { List } from "@mui/material";
import React from "react";
import ChatItem from "./ChatItem";

type Props = {};

const ChatItems = (props: Props) => {
  return (
    <List>
      {Array.from({ length: 30 }, (val, idx) => (
        <ChatItem key={idx} val={idx} />
      ))}
    </List>
  );
};

export default ChatItems;
