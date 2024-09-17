import React from "react";
import {
  Avatar,
  List,
  Typography,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Paper,
  useTheme,
  Divider,
  Card,
  CardActionArea,
  ListItemSecondaryAction,
  ButtonBase,
} from "@mui/material";
import { blue } from "@mui/material/colors";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import ListItemComponent from "./ListItemComponent";
import avatar from "../../../assets/images/avatar.jpeg";
interface ProfileCardProps {
  name: string;
  avatarUrl: string;
}

const ProfileCard: React.FC<ProfileCardProps> = ({ name, avatarUrl }) => {
  const theme = useTheme();
  return (
    <List
      component={Card}
      elevation={3}
      sx={{
        borderRadius: "10px",
        marginY: theme.spacing(2),
        padding: theme.spacing(0),
      }}
    >
      <ListItem alignItems="flex-start" component={ButtonBase}>
        <ListItemAvatar>
          <Avatar alt={name} src={avatar} sizes="large" />
        </ListItemAvatar>
        <ListItemText
          primary={name}
          secondary={
            <Typography
              style={{
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
            >
              {"while(alive) {learn()}"}
            </Typography>
          }
        />
      </ListItem>
      <Divider />
      <ListItemComponent
        name="Avatar"
        Icon={AccountBoxIcon}
      />
    </List>
  );
};

export default ProfileCard;
