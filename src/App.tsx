import React from "react";
import {
  Box,
  Container,
  ThemeProvider,
  createTheme,
  useTheme,
} from "@mui/material";
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
  const themeDefault = useTheme();
  const theme = createTheme({
    components: {
      MuiAppBar: {
        styleOverrides: {
          root: {
            background: themeDefault.palette.common.white,
            color: themeDefault.palette.text.primary,
          },
        },
      },
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <LoadingProvider>
        <Box
          sx={{
            background: theme.palette.grey[100],
          }}
        >
          <Container
            style={{
              padding: 0,
              background: theme.palette.background.paper,
              minHeight: "100vh",
              boxShadow: "2px 2px 4px rgba(100, 0, 0, 0.1)",
              border: "1px solid #ddd",
            }}
          >
            <RouterProvider router={router} />
          </Container>
        </Box>
      </LoadingProvider>
    </ThemeProvider>
  );
}

export default App;
