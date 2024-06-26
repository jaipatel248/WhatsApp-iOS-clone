import React from "react";
import {
  Box,
  Container,
  CssBaseline,
  Paper,
  ThemeProvider,
  createTheme,
  useTheme,
} from "@mui/material";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

import Home from "./screens/Home";
import Conversation from "./screens/conversation/Conversation";
import { LoadingProvider } from "./LoadingContext/LoadingContext";

function MyAPP() {
  return (
    <>
      <Box
        style={{
          overflow: "auto",
          minHeight: "100vh",
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
  const isLightTheme = window.localStorage.getItem("theme") === "light";
  const theme = createTheme({
    palette: {
      mode: isLightTheme ? "light" : "dark", // Set the mode to 'dark'
    },
    components: {
      MuiList: {
        styleOverrides: {
          root: {
            paddingY: 0,
          },
        },
      },
      MuiAppBar: {
        defaultProps: {
          component: Paper,
          color: "default",
        },
      },
      MuiIconButton: {
        styleOverrides: {
          root: {
            color: themeDefault.palette.primary.main,
          },
        },
      },
      MuiTypography: {
        defaultProps: {
          color: "textPrimary",
        },
      },
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <LoadingProvider>
        <Box
          sx={{
            background: theme.palette.primary.contrastText,
          }}
        >
          <Container
            style={{
              padding: 0,
              background: theme.palette.background.paper,
              minHeight: "100vh",
              boxShadow: theme.shadows[1],
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
