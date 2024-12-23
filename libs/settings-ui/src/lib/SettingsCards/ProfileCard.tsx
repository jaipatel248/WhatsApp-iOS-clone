import React from "react";
import {
  Avatar,
  List,
  Typography,
  ListItem,
  ListItemAvatar,
  ListItemText,
  useTheme,
  Divider,
  Card,
  ButtonBase,
} from '@mui/material';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import avatar from '../../../assets/images/avatar.jpeg';
import {ListItemComponent} from '@whatsapp/whatsapp-ui';
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
        borderRadius: '10px',
        marginY: theme.spacing(2),
        padding: theme.spacing(0),
      }}>
      <ListItem alignItems='flex-start' component={ButtonBase}>
        <ListItemAvatar>
          <Avatar alt={name} src={avatar} sizes='large' />
        </ListItemAvatar>
        <ListItemText
          primary={name}
          secondary={
            <Typography
              style={{
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
              }}>
              {'while(alive) {learn()}'}
            </Typography>
          }
        />
      </ListItem>
      <Divider />
      <ListItemComponent name='Profile' Icon={AccountBoxIcon} />
    </List>
  );
};

export default ProfileCard;
