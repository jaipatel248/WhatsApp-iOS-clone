import {
  Divider,
  ListItemButton,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import React from "react";
import CustomAvatar from "../../components/avatar/CustomAvatar";

type Props = {
  val: number;
};

const ChatItem = ({ val }: Props) => {
  return (
    <>
      <ListItemButton alignItems="flex-start">
        <ListItemAvatar>
          <CustomAvatar />
        </ListItemAvatar>
        <ListItemText
          primary={`Brunch this weekend?` + val}
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: "inline" }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Ali Connors
              </Typography>
              {" — I'll be in your neighborhood doing errands this…"}
            </React.Fragment>
          }
        />
        <ListItemText secondary="Yesterday"></ListItemText>
      </ListItemButton>
      <Divider variant="inset" component="li" />
    </>
  );
};

export default ChatItem;
