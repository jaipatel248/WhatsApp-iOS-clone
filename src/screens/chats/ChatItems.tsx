import { Box, List } from "@mui/material";
import React, { useEffect, useState } from "react";
import ChatItem from "./ChatItem";
import { getChatList } from "../../api/ChatAPI";
import { IChatObject } from "../../api/TypeScriptObjs";
import { useLoading } from "../../customContax.tsx/LoadingContext";
import SearchBar from "../../components/searchBar/SearchBar";
import TopBar from "../../components/topBar/TopBar";

type Props = {};

const ChatItems = (props: Props) => {
  const { showLoading, hideLoading } = useLoading();

  const [items, setItems] = useState<IChatObject[]>([]);
  useEffect(() => {
    showLoading();
    getChatList().then((data) => {
      setItems(data);
      hideLoading();
    });
  }, []);

  return (
    <Box>
      <Box p={2}>
        <TopBar title="Chats" />
        <SearchBar />
      </Box>
      <List>
        {items.map((item) => (
          <ChatItem key={item.id} item={item} />
        ))}
      </List>
    </Box>
  );
};

export default ChatItems;
