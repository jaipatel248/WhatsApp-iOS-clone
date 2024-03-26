import React from "react";
import BottomBar from "./components/bottomBar/BottomBar";
import { Container } from "@mui/material";

function App() {
  return (
    <Container
      style={{
        padding: 0,
        height: "100vh",
        boxShadow: "2px 2px 4px rgba(100, 0, 0, 0.1)",
        border: "1px solid red",
      }}
      maxWidth={false}
    >
      <BottomBar />
    </Container>
  );
}

export default App;
