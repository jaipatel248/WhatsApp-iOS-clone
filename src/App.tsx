import React from "react";
import BottomBar from "./components/bottomBar/BottomBar";
import { Box, Container } from "@mui/material";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

import Home from "./screens/Home";
import Conversation from "./screens/conversation/Conversation";
import { LoadingProvider } from "./customContax.tsx/LoadingContext";

function MyAPP() {
  return (
    <>
      <Box
        style={{
          overflow: "auto",
          height: "100vh",
          paddingBottom: "100px",
        }}
      >
        <Outlet />
      </Box>
    </>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <MyAPP />,
    children: [
      { path: "", element: <Home /> },
      { path: ":screen", element: <Home /> },
      {
        path: "chats/:id/",
        children: [{ path: "conversation", element: <Conversation /> }],
      },
    ],
  },
]);
function App() {
  console.log("app");
  return (
    <LoadingProvider>
      <Container
        style={{
          padding: 0,
          height: "100vh",
          // boxShadow: "2px 2px 4px rgba(100, 0, 0, 0.1)",
          // border: "1px solid red",
        }}
        maxWidth={false}
      >
        <RouterProvider router={router} />
      </Container>
    </LoadingProvider>
  );
}

export default App;
