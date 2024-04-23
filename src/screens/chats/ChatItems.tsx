/* eslint-disable react-hooks/exhaustive-deps */
import { Box, List, IconButton } from "@mui/material";
import React, { useEffect, useState } from "react";
import ChatItem from "./ChatItem";
import { getChatList } from "../../api/ChatAPI";
import { IChatObject } from "../../api/TypeScriptObjs";
import { useLoading } from "../../LoadingContext/LoadingContext";
import SearchBar from "../../components/searchBar/SearchBar";
import TopBar from "../../components/topBar/TopBar";
import CameraAltOutlinedIcon from "@mui/icons-material/CameraAltOutlined";
import AddCircleOutlinedIcon from "@mui/icons-material/AddCircleOutlined";
import ExpandCircleDownIcon from "@mui/icons-material/ExpandCircleDown";
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
  const topActionBar = (
    <Box sx={{ display: "flex" }}>
      <Box>
        <IconButton>
          <ExpandCircleDownIcon />
        </IconButton>
      </Box>
      <Box sx={{ flexGrow: 1 }}></Box>
      <Box>
        <IconButton>
          <CameraAltOutlinedIcon />
        </IconButton>
      </Box>
      <Box>
        <IconButton>
          <AddCircleOutlinedIcon />
        </IconButton>
      </Box>
    </Box>
  );

  return (
    <Box>
      <Box p={2}>
        <TopBar title="Chats" topActionBar={topActionBar} />
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
