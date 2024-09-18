import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import {
  Box,
  Container,
  Paper,
  ThemeProvider,
  createTheme,
  useTheme,
} from '@mui/material';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';

import Home from './src/screens/Home';
import Conversation from './src/screens/conversation/Conversation';
import { LoadingProvider } from './src/LoadingContext/LoadingContext';
import NotFound from './src/screens/NotFound';
import RedirectHandler from './src/screens/RedirectHandler';
import useThemeDetector from './src/hooks/theme';
import { ConversationProfile } from '@whatsapp/conversation-profile-ui';

function MyAPP() {
  return (
    <>
      <Box
        style={{
          overflow: 'auto',
          minHeight: '100vh',
          paddingBottom: '100px',
        }}
      >
        <Outlet />
      </Box>
    </>
  );
}

const validBasename = '/WhatsApp-iOS-clone';

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: (
        <>
          <MyAPP />
        </>
      ),
      children: [
        { path: '', element: <Home /> },
        { path: ':screen', element: <Home /> },
        {
          path: 'chats/:id/',
          children: [
            { path: 'conversation', element: <Conversation /> },
            {
              path: 'conversation/profile',
              element: <ConversationProfile />,
            },
          ],
        },
        { path: '*', element: <NotFound /> }, // 404 page route
      ],
    },
    { path: '*', element: <NotFound /> }, // 404 page route
  ],
  {
    basename: validBasename,
  }
);
function App() {
  const themeDefault = useTheme();
  const isDarkTheme = useThemeDetector();
  const theme = createTheme({
    palette: {
      mode: isDarkTheme ? 'dark' : 'light', // Set the mode to 'dark'
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
          color: 'default',
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
          color: 'textPrimary',
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
              minHeight: '100vh',
              boxShadow: theme.shadows[1],
            }}
          >
            <RedirectHandler validBasename={validBasename} />
            <RouterProvider router={router} />
          </Container>
        </Box>
      </LoadingProvider>
    </ThemeProvider>
  );
}

export default App;
