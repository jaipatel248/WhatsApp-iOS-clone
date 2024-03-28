import {
  Divider,
  ListItemButton,
  ListItemAvatar,
  ListItemText,
  Typography,
  Grid,
  ListItemSecondaryAction,
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
            <div
              style={{
                width: "20px",
                height: "20px",
                marginTop: "5px",
                background: "blue",
                borderRadius: 100,
                textAlign: "center",
                color: "white",
              }}
            >
              {unread_message_count}
            </div>
          </ListItemSecondaryAction>
        ) : null}
      </ListItemButton>
      <Divider variant="inset" component="li" />
    </>
  );
};

export default ChatItem;
