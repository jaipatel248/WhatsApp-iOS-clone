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
  IconButton,
} from "@mui/material";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import EditIcon from "@mui/icons-material/Edit";
import avatar from "../../assets/images/avatar.jpeg";
interface ProfileCardProps {
  avatarUrl?: string;
}

const MyStatus: React.FC<ProfileCardProps> = ({ avatarUrl }) => {
  const theme = useTheme();
  return (
    <List
      component={Paper}
      elevation={0}
      square
      variant="outlined"
      sx={{
        padding: theme.spacing(0),
      }}
    >
      <ListItem alignItems="flex-start" component={ButtonBase}>
        <ListItemAvatar>
          <Avatar src={avatar} sizes="large" />
        </ListItemAvatar>
        <ListItemText primary={"My Status"} secondary={"Add to my status"} />
        <ListItemSecondaryAction>
          <IconButton>
            <CameraAltIcon />
          </IconButton>
          <IconButton>
            <EditIcon />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
    </List>
  );
};

export default MyStatus;
