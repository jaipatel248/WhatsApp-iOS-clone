import {
  Badge,
  Box,
  Button,
  Card,
  Grid,
  Paper,
  Popover,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import React, { useCallback, useMemo } from "react";

import BottomChatBar from "./BottomChatBar";
import TopChatBar from "./TopChatBar";
import EmojiPicker, { EmojiClickData } from "emoji-picker-react";
import useLongPress from "../../hooks/useLongPress";
import dayjs from "dayjs";
type Props = {};

const currentUserId = "10";

interface Reactions {
  user_id: string;
  reaction: string;
}

interface Message {
  id: string;
  message: string;
  time: Date;
  isMe: boolean;
  reactions?: Reactions[];
}
const messages: Message[] = [
  {
    id: "1",
    message: "Hello",
    time: new Date(),
    isMe: true,
    reactions: [
      {
        user_id: "1",
        reaction: "😂",
      },
      {
        user_id: "2",
        reaction: "😍",
      },
    ],
  },
  {
    id: "2",
    message: "Hi",
    time: new Date(),
    isMe: false,
  },
  {
    id: "3",
    message: "How are you",
    time: new Date(),
    isMe: true,
  },
  {
    id: "4",
    message: "I am fine",
    time: new Date(),
    isMe: false,
  },
  {
    id: "5",
    message: "How about you",
    time: new Date(),
    isMe: false,
    reactions: [
      {
        user_id: "1",
        reaction: "❤️",
      },
      {
        user_id: "2",
        reaction: "😍",
      },
    ],
  },
  {
    id: "6",
    message: "I am also fine",
    time: new Date(),
    isMe: true,
  },
  {
    id: "7",
    message: "What are you doing",
    time: new Date(),
    isMe: true,
  },
  {
    id: "8",
    message: "Nothing",
    time: new Date(),
    isMe: false,
  },
  {
    id: "9",
    message: "Just chilling",
    time: new Date(),
    isMe: false,
  },
  {
    id: "10",
    message: "Ok",
    time: new Date(),
    isMe: true,
  },
  {
    id: "11",
    message: "Bye",
    time: new Date(),
    isMe: true,
  },
  {
    id: "12",
    message: "Bye",
    time: new Date(),
    isMe: false,
  },
  {
    id: "13",
    message: "Bye",
    time: new Date(),
    isMe: true,
  },
  {
    id: "14",
    message: "Bye",
    time: new Date(),
    isMe: false,
    reactions: [
      {
        user_id: "1",
        reaction: "😂",
      },
      {
        user_id: "2",
        reaction: "",
      },
    ],
  },
  {
    id: "15",
    message: "Bye",
    time: new Date(),
    isMe: true,
  },
  {
    id: "16",
    message: "Bye",
    time: new Date(),
    isMe: false,
  },
  {
    id: "17",
    message: "Bye",
    time: new Date(),
    isMe: true,
  },
];

const ChatItem = (props: { message: Message }) => {
  const { message } = props;
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null
  );
  const [reactions, setReactions] = React.useState(message.reactions || []);
  const onLongPress = (currentTarget: any) => {
    setAnchorEl(currentTarget);
  };

  const handleClose = (): void => {
    setAnchorEl(null);
  };
  const reaction = useMemo(() => {
    if (reactions.length) {
      if (reactions.length === 1) {
        return reactions[0].reaction;
      }
      return reactions[0].reaction + " " + reactions.length;
    }
    return "";
  }, [reactions]);

  const open = Boolean(anchorEl);

  const id = open ? "simple-popover_" + message.id : undefined;
  const longPressEvent = useLongPress({
    onLongPress,
  });

  const handleEmojiClick = useCallback((emojiData: EmojiClickData) => {
    setReactions((prev) => {
      return [
        ...prev.filter((item) => item.user_id !== currentUserId),
        {
          user_id: currentUserId,
          reaction: emojiData.emoji,
        },
      ];
    });
    handleClose();
  }, []);

  return (
    <>
      <Popover
        anchorOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        sx={{
          backdropFilter: "blur(5px)",
          zIndex: open ? 10 : "auto",
        }}
        slotProps={{
          paper: {
            sx: {
              backgroundColor: "transparent",
              boxShadow: "none",
              backgroundImage: "none",
            },
          },
        }}
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
      >
        <EmojiPicker
          style={{
            marginBottom: 5,
          }}
          onEmojiClick={handleEmojiClick}
          reactionsDefaultOpen
        />
      </Popover>
      <Grid
        item
        sx={{
          display: "flex",
          justifyContent: message.isMe ? "flex-end" : "flex-start",
          mt: 1,
          mb: reactions.length ? 1 : 0,
        }}
        aria-describedby={id}
      >
        <Badge
          anchorOrigin={{
            vertical: "bottom",
            horizontal: message.isMe ? "right" : "left",
          }}
          sx={{
            ".MuiBadge-badge": {
              zIndex: open ? 11 : "auto",
              elivation: 2,
            },
            ".MuiBadge-anchorOriginBottomLeft": {
              left: 15,
            },
            ".MuiBadge-anchorOriginBottomRight": {
              right: 15,
            },
          }}
          badgeContent={reaction}
        >
          <Box
            p={1}
            sx={{
              zIndex: open ? 11 : "auto",
            }}
            minWidth={100}
            component={Paper}
            borderRadius={5}
            {...longPressEvent}
            onDoubleClick={() => {
              setReactions((prev) => {
                if (prev.some((item) => item.user_id == currentUserId)) {
                  return prev.filter((item) => item.user_id !== currentUserId);
                }
                return [
                  ...prev.filter((item) => item.user_id !== currentUserId),
                  {
                    user_id: currentUserId,
                    reaction: "❤️",
                  },
                ];
              });
            }}
          >
            <Typography>{message.message}</Typography>
            <Stack direction="row" justifyContent="flex-end">
              <Typography variant="caption">
                {dayjs(message.time).format("hh:mm A")}
              </Typography>
            </Stack>
          </Box>
        </Badge>
      </Grid>
    </>
  );
};

const Conversation = (props: Props) => {
  return (
    <>
      <TopChatBar />
      <Box p={2} mt={10}>
        <Grid container direction={"column"}>
          {messages.map((message) => (
            <ChatItem message={message} key={message.id} />
          ))}
        </Grid>
      </Box>
      <BottomChatBar />
    </>
  );
};

export default Conversation;
