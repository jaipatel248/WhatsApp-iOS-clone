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
  Stack,
  Typography,
} from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

export interface ListItemComponentProps {
  name: string;
  Icon: React.FC<SvgIconProps>;
  secondary?: string;
  actionText?: string | number;
}
export const ListItemComponent: React.FC<ListItemComponentProps> = ({Icon, name, secondary, actionText}) => {
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
      <ListItemText primary={name} secondary={secondary} />
      <ListItemSecondaryAction>
        <Stack direction='row' alignItems={'center'}>
          <Typography variant='body2'>{actionText}</Typography>
          <NavigateNextIcon />
        </Stack>
      </ListItemSecondaryAction>
    </ListItem>
  );
};

