import {
  Divider,
  ListItemButton,
  ListItemAvatar,
  ListItemText,
  Grid,
  Paper,
} from "@mui/material";
import React from "react";
import CustomAvatar from "../../components/avatar/CustomAvatar";
import { IChatObject } from "../../api/TypeScriptObjs";
import { useNavigate } from "react-router-dom";

type Props = {
  item: IChatObject;
};

const StatusItem = ({ item }: Props) => {
  const { id, name, last_chat_date } = item;
  const navigate = useNavigate();
  const onClick = () => {};
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
              secondary={<React.Fragment>{last_chat_date}</React.Fragment>}
            />
          </Grid>
        </Grid>
      </ListItemButton>
      <Divider variant="inset" component="li" />
    </>
  );
};

export default StatusItem;
