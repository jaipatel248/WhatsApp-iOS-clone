import React, { ReactNode } from "react";
import { useParams } from "react-router-dom";
import Settings from "./settings/Settings";
import ChatItems from "./chats/ChatItems";
import { Box } from "@mui/material";
import BottomBar from "../components/bottomBar/BottomBar";
import Calls from "./calls/Calls";
import Communities from "./communities/Communities";
import Updates from "./updates/Updates";

type Props = {};

const Home = (props: Props) => {
  const { screen } = useParams();
  console.log(useParams());

  interface UrlToScreen {
    [key: string]: ReactNode;
  }

  const urlToScreen: UrlToScreen = {
    chats: <ChatItems />,
    settings: <Settings />,
    calls: <Calls />,
    communities: <Communities />,
    updates: <Updates />,
  };
  return (
    <>
      {urlToScreen[screen || "chats"] || <></>}{" "}
      <Box>
        <BottomBar />
      </Box>
    </>
  );
};

export default Home;
