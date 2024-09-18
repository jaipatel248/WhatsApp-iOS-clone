import React from 'react';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import LockIcon from '@mui/icons-material/Lock';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import MarkChatUnreadIcon from '@mui/icons-material/MarkChatUnread';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import SwapVertIcon from '@mui/icons-material/SwapVert';
import {ListItems} from '@whatsapp/whatsapp-ui';

const AccountSettingsCard: React.FC = () => {
  return (
    <ListItems
      items={[
        {name: 'Account', Icon: VpnKeyIcon},
        {name: 'Privacy', Icon: LockIcon},
        {name: 'Chats', Icon: WhatsAppIcon},
        {name: 'Notification', Icon: MarkChatUnreadIcon},
        {name: 'Payments', Icon: CurrencyRupeeIcon},
        {name: 'Storage and Data', Icon: SwapVertIcon},
      ]}
    />
  );
};

export default AccountSettingsCard;
