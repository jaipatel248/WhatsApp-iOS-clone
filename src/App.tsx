import React from "react";
import BottomBar from "./components/bottomBar/BottomBar";
import { Box, Container } from "@mui/material";
import ChatItems from "./screens/chats/ChatItems";

function App() {
  const myElementRef = React.useRef(null);
  const [elementHeight, setElementHeight] = React.useState(null);
  React.useEffect(() => {
    const getElementHeight = () => {
      if (myElementRef.current) {
        const height = (myElementRef.current as any).getBoundingClientRect()
          .height;
        setElementHeight(height);
      }
    };

    getElementHeight();

    window.addEventListener("resize", getElementHeight);

    // Clean up
    return () => {
      window.removeEventListener("resize", getElementHeight);
    };
  }, []);

  return (
    <Container
      style={{
        padding: 0,
        height: "100vh",
        boxShadow: "2px 2px 4px rgba(100, 0, 0, 0.1)",
        border: "1px solid red",
      }}
      maxWidth={"sm"}
    >
      <Box
        style={{
          overflow:'auto',
          height: elementHeight
            ? `calc(100vh - ${elementHeight + "px)"} `
            : "100vh",
        }}
      >
        <ChatItems />
      </Box>
      <Box ref={myElementRef}>
        <BottomBar />
      </Box>
    </Container>
  );
}

export default App;
