import React from 'react';
import {
  ListItem,
  ListItemAvatar,
  ListItemText,
  useTheme,
  IconButton,
  ListItemSecondaryAction,
  ButtonBase,
  SvgIconProps,
} from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

interface ListItemComponentProps {
  name: string;
  Icon: React.FC<SvgIconProps>;
}
export const ListItemComponent: React.FC<ListItemComponentProps> = ({Icon, name}) => {
  const theme = useTheme();
  return (
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
    </ListItem>
  );
};

