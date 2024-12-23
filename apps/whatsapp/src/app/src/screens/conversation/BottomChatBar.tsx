import {
  AppBar,
  Container,
  IconButton,
  TextField,
  Toolbar,
  Box,
  Tooltip,
  useTheme,
  Stack,
} from '@mui/material';
import React, { MouseEvent, useCallback } from 'react';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import AddIcon from '@mui/icons-material/Add';
import CameraAltOutlinedIcon from '@mui/icons-material/CameraAltOutlined';
import MicNoneOutlinedIcon from '@mui/icons-material/MicNoneOutlined';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import EmojiPicker, {EmojiClickData, Theme} from 'emoji-picker-react';
import SendIcon from '@mui/icons-material/Send';
import {ClickOutsideComponent} from '@whatsapp/whatsapp-ui';

type Props = {
  onSendMessage: (message: string) => void;
};

const BottomChatBar = ({onSendMessage}: Props) => {
  const [openEmojiPicker, setOpenEmojiPicker] = React.useState(false);

  const [message, setMessage] = React.useState('');

  const handleClick = useCallback((event: MouseEvent<HTMLButtonElement>) => {
    setOpenEmojiPicker((val) => !val);
  }, []);

  const handleEmojiClick = useCallback((emojiData: EmojiClickData) => {
    setMessage((prev) => prev + emojiData.emoji);
  }, []);

  const handleClickAway = useCallback(() => {
    setOpenEmojiPicker(false);
  }, []);

  const theme = useTheme();

  const handleSendMessage = useCallback(() => {
    onSendMessage(message);
    setMessage('');
  }, [message, onSendMessage]);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === 'Enter') {
        handleSendMessage();
      }
    },
    [handleSendMessage],
  );

  return (
    <div
      style={{
        position: 'fixed',
        bottom: 0,
        top: 'auto',
        left: 0,
        right: 0,
      }}>
      <Container
        sx={{
          padding: '0px !important',
        }}>
        <AppBar
          position='static'
          sx={{
            paddingBottom: 2,
            paddingTop: 1,
          }}>
          <Toolbar disableGutters>
            <IconButton>
              <AddIcon />
            </IconButton>
            <Box sx={{flexGrow: 1, display: {md: 'flex'}}}>
              <TextField
                sx={{mr: 3}}
                size='small'
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyDown={handleKeyDown}
                InputProps={{
                  fullWidth: true,
                  endAdornment: (
                    <>
                      <IconButton onClick={handleClick}>
                        <InsertEmoticonIcon />
                      </IconButton>
                      {message.length > 0 && (
                        <IconButton onClick={handleSendMessage}>
                          <SendIcon />
                        </IconButton>
                      )}
                    </>
                  ),
                  style: {
                    borderRadius: 10,
                    paddingRight: 0,
                  },
                }}
                inputProps={{
                  style: {
                    height: '1em',
                  },
                }}
                fullWidth
              />
            </Box>
            <Stack direction={'row'}>
              <Tooltip title='Send money'>
                <IconButton>
                  <CurrencyRupeeIcon />
                </IconButton>
              </Tooltip>
              <Tooltip title='Open camera'>
                <IconButton>
                  <CameraAltOutlinedIcon />
                </IconButton>
              </Tooltip>
              <Tooltip title='Record voice'>
                <IconButton>
                  <MicNoneOutlinedIcon />
                </IconButton>
              </Tooltip>
            </Stack>
          </Toolbar>
        </AppBar>
        <ClickOutsideComponent onOutsideClick={handleClickAway}>
          <EmojiPicker
            theme={theme.palette.mode === 'dark' ? Theme.DARK : Theme.LIGHT}
            open={openEmojiPicker}
            skinTonesDisabled
            onEmojiClick={handleEmojiClick}
            width={'100%'}
          />
        </ClickOutsideComponent>
      </Container>
    </div>
  );
};

export default BottomChatBar;
