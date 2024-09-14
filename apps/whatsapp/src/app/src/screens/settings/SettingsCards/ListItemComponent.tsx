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
  SvgIconProps,
} from "@mui/material";
import { deepOrange } from "@mui/material/colors";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

interface ListItemComponentProps {
  name: string;
  Icon: React.FC<SvgIconProps>;
  bgcolor?: string;
}
const ListItemComponent: React.FC<ListItemComponentProps> = ({
  Icon,
  name,
  bgcolor = "blue",
}) => {
  const theme = useTheme();
  return (
    <ListItem
      component={ButtonBase}
      alignItems="center"
      sx={{
        paddingY: theme.spacing(0.5),
      }}
    >
      <ListItemAvatar
        sx={{
          minWidth: 40,
        }}
      >
        <Avatar
          variant="square"
          sx={{
            bgcolor,
            width: 26,
            height: 26,
            borderRadius: 1,
          }}
        >
          <Icon
            sx={{
              width: 20,
            }}
          />
        </Avatar>
      </ListItemAvatar>
      <ListItemText primary={name} />
      <ListItemSecondaryAction>
        <NavigateNextIcon />
      </ListItemSecondaryAction>
    </ListItem>
  );
};

export default ListItemComponent;
