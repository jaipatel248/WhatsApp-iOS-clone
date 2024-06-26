import React from "react";
import {
  Avatar,
  List,
  Box,
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
  Badge,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import TopBar from "../../components/topBar/TopBar";
import GroupsIcon from "@mui/icons-material/Groups";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

type Props = {};

const Communities = (props: Props) => {
  const theme = useTheme();
  return (
    <Box p={2}>
      <TopBar title="Communities" />
      <List
        component={Card}
        elevation={3}
        sx={{
          borderRadius: "10px",
          marginY: theme.spacing(2),
          padding: theme.spacing(0),
        }}
      >
        <ListItem alignItems="center" component={ButtonBase}>
          <ListItemAvatar>
            <Badge
              overlap="circular"
              anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
              badgeContent={
                <AddIcon
                  sx={{
                    bgcolor: theme.palette.primary.main,
                    color: theme.palette.primary.contrastText,
                    borderRadius: "100%",
                  }}
                  fontSize="small"
                />
              }
            >
              <Avatar sizes="large" variant="square">
                <GroupsIcon />
              </Avatar>
            </Badge>
          </ListItemAvatar>
          <ListItemText primary={"New Community"} />
        </ListItem>
      </List>
      <List
        component={Card}
        elevation={3}
        sx={{
          borderRadius: "10px",
          marginY: theme.spacing(3),
          padding: theme.spacing(0),
        }}
      >
        <ListItem alignItems="center" component={ButtonBase}>
          <ListItemAvatar>
            <Avatar sizes="large" variant="square">
              <GroupsIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary={"Geek Updates"} />
        </ListItem>
        <Divider />
        <ListItem alignItems="center" component={ButtonBase}>
          <ListItemAvatar>
            <Avatar sizes="large">
              <GroupsIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary={"Geek Updates"} secondary={"Description"} />
        </ListItem>
        <Divider />
        <ListItem alignItems="center" component={ButtonBase}>
          <ListItemText primary={"See All"} />
          <ListItemSecondaryAction>
            <NavigateNextIcon />
          </ListItemSecondaryAction>
        </ListItem>
      </List>
    </Box>
  );
};

export default Communities;
