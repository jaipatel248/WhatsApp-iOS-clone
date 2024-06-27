import { Box, Grid } from "@mui/material";
import React from "react";

import BottomChatBar from "./BottomChatBar";
import TopChatBar from "./TopChatBar";
type Props = {};

interface Message {
  id: string;
  message: string;
  time: Date;
  isMe: boolean;
}
const messages: Message[] = [
  {
    id: "1",
    message: "Hello",
    time: new Date(),
    isMe: true,
  },
  {
    id: "2",
    message: "Hi",
    time: new Date(),
    isMe: false,
  },
  {
    id: "3",
    message: "How are you",
    time: new Date(),
    isMe: true,
  },
  {
    id: "4",
    message: "I am fine",
    time: new Date(),
    isMe: false,
  },
  {
    id: "5",
    message: "How about you",
    time: new Date(),
    isMe: false,
  },
  {
    id: "6",
    message: "I am also fine",
    time: new Date(),
    isMe: true,
  },
  {
    id: "7",
    message: "What are you doing",
    time: new Date(),
    isMe: true,
  },
  {
    id: "8",
    message: "Nothing",
    time: new Date(),
    isMe: false,
  },
  {
    id: "9",
    message: "Just chilling",
    time: new Date(),
    isMe: false,
  },
  {
    id: "10",
    message: "Ok",
    time: new Date(),
    isMe: true,
  },
  {
    id: "11",
    message: "Bye",
    time: new Date(),
    isMe: true,
  },
  {
    id: "12",
    message: "Bye",
    time: new Date(),
    isMe: false,
  },
  {
    id: "13",
    message: "Bye",
    time: new Date(),
    isMe: true,
  },
  {
    id: "14",
    message: "Bye",
    time: new Date(),
    isMe: false,
  },
  {
    id: "15",
    message: "Bye",
    time: new Date(),
    isMe: true,
  },
  {
    id: "16",
    message: "Bye",
    time: new Date(),
    isMe: false,
  },
  {
    id: "17",
    message: "Bye",
    time: new Date(),
    isMe: true,
  },
  {
    id: "14",
    message: "Bye",
    time: new Date(),
    isMe: false,
  },
  {
    id: "15",
    message: "Bye",
    time: new Date(),
    isMe: true,
  },
  {
    id: "16",
    message: "Bye",
    time: new Date(),
    isMe: false,
  },
  {
    id: "17",
    message: "Bye",
    time: new Date(),
    isMe: true,
  },
];

const Conversation = (props: Props) => {
  return (
    <>
      <TopChatBar />
      <Box p={2} mt={10}>
        <Grid container direction={"column"}>
          {messages.map((message) => (
            <Grid
              item
              sx={{
                display: "flex",
                justifyContent: message.isMe ? "flex-end" : "flex-start",
                mt: 1,
              }}
            >
              <Box p={1} borderRadius={5} border={"1px solid black"}>
                {message.message}
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
      <BottomChatBar />
    </>
  );
};

export default Conversation;
