import React from 'react';
import {List, useTheme, Divider, Card} from '@mui/material';
import {green, yellow, teal} from '@mui/material/colors';
import CampaignIcon from '@mui/icons-material/Campaign';
import StarIcon from '@mui/icons-material/Star';
import ComputerIcon from '@mui/icons-material/Computer';
import ListItemComponent from './ListItemComponent';
const BroadCastCard: React.FC = () => {
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
      <ListItemComponent name='Broadcast Lists' Icon={CampaignIcon} />
      <Divider component='li' sx={{ml: 7}} />
      <ListItemComponent name='Starred Messages' Icon={StarIcon} />
      <Divider component='li' sx={{ml: 7}} />
      <ListItemComponent name='Linked Messages' Icon={ComputerIcon} />
    </List>
  );
};

export default BroadCastCard;
