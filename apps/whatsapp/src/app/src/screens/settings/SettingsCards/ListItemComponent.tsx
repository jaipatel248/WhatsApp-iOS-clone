import React from 'react';
import {
  Avatar,
  List,
  Typography,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Paper,
  useTheme,
  IconButton,
  Card,
  CardActionArea,
  ListItemSecondaryAction,
  ButtonBase,
  SvgIconProps,
  Divider,
} from '@mui/material';
import {deepOrange} from '@mui/material/colors';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

interface ListItemComponentProps {
  name: string;
  Icon: React.FC<SvgIconProps>;
}
const ListItemComponent: React.FC<ListItemComponentProps> = ({Icon, name}) => {
  const theme = useTheme();
  return (
    <>
      <ListItem
        component={ButtonBase}
        alignItems='center'
        sx={{
          paddingY: theme.spacing(0.5),
        }}>
        <ListItemAvatar
          sx={{
            minWidth: 40,
          }}>
          <IconButton size='small'>
            <Icon
              sx={{
                color: theme.palette.text.primary,
              }}
            />
          </IconButton>
        </ListItemAvatar>
        <ListItemText primary={name} />
        <ListItemSecondaryAction>
          <NavigateNextIcon />
        </ListItemSecondaryAction>
        <Divider variant='inset' component='li' />
      </ListItem>
    </>
  );
};

export default ListItemComponent;
