import {
  Divider,
  ListItemButton,
  ListItemAvatar,
  ListItemText,
  Grid,
  ListItemSecondaryAction,
  Stack,
  useTheme,
} from "@mui/material";
import React from "react";
import CustomAvatar from "../../components/avatar/CustomAvatar";
import { IChatObject } from "../../api/TypeScriptObjs";
import { useNavigate } from "react-router-dom";

type Props = {
  item: IChatObject;
};

const ChatItem = ({ item }: Props) => {
  const { id, name, last_message, last_chat_date, unread_message_count } = item;
  const navigate = useNavigate();
  const onClick = () => {
    navigate(`/chats/${id}/conversation`);
  };
  const theme = useTheme();
  return (
    <>
      <ListItemButton alignItems="flex-start" onClick={onClick}>
        <ListItemAvatar>
          <CustomAvatar />
        </ListItemAvatar>
        <Grid
          container
          direction={"row"}
          wrap="nowrap"
          justifyContent={"space-between"}
        >
          <Grid item xs={8}>
            <ListItemText
              primary={name}
              secondary={
                <React.Fragment>
                  {/* <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Ali Connors
                  </Typography> */}
                  {last_message}
                </React.Fragment>
              }
            />
          </Grid>
          <Grid item xs={1}></Grid>
          <Grid item xs={3} textAlign={"right"}>
            <ListItemText secondary={last_chat_date}></ListItemText>
          </Grid>
        </Grid>
        {unread_message_count > 0 ? (
          <ListItemSecondaryAction>
            <Stack
              mt={2}
              alignItems="center"
              justifyContent="center"
              width={20}
              height={20}
              style={{
                background: "blue",
                borderRadius: 100,
                color: theme.palette.common.white,
              }}
            >
              {unread_message_count}
            </Stack>
          </ListItemSecondaryAction>
        ) : null}
      </ListItemButton>
      <Divider variant="inset" component="li" />
    </>
  );
};

export default ChatItem;
