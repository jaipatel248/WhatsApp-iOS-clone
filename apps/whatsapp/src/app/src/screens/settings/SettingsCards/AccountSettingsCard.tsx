import React from 'react';
import { List, useTheme, Divider, Card } from '@mui/material';
import { blue, lightBlue, green, red, cyan } from '@mui/material/colors';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ListItemComponent from './ListItemComponent';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import LockIcon from '@mui/icons-material/Lock';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import MarkChatUnreadIcon from '@mui/icons-material/MarkChatUnread';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import SwapVertIcon from '@mui/icons-material/SwapVert';
const AccountSettingsCard: React.FC = () => {
  const theme = useTheme();
  return (
    <List
      component={Card}
      elevation={3}
      sx={{
        borderRadius: '10px',
        marginY: theme.spacing(2),
        padding: theme.spacing(0),
      }}
    >
      <ListItemComponent name="Account" Icon={VpnKeyIcon} />
      <Divider />
      <ListItemComponent name="Privacy" Icon={LockIcon} />
      <Divider />
      <ListItemComponent name="Chats" Icon={WhatsAppIcon} />
      <Divider />
      <ListItemComponent name="Notification" Icon={MarkChatUnreadIcon} />{' '}
      <Divider />
      <ListItemComponent name="Payments" Icon={CurrencyRupeeIcon} /> <Divider />
      <ListItemComponent name="Storage and Data" Icon={SwapVertIcon} />
    </List>
  );
};

export default AccountSettingsCard;
