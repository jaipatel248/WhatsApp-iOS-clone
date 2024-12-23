import React from 'react';
import CampaignIcon from '@mui/icons-material/Campaign';
import StarIcon from '@mui/icons-material/Star';
import ComputerIcon from '@mui/icons-material/Computer';
import {ListItems} from '@whatsapp/whatsapp-ui';

const BroadCastCard: React.FC = () => {
  return (
    <ListItems
      items={[
        {name: 'Broadcast Lists', Icon: CampaignIcon},
        {name: 'Starred Messages', Icon: StarIcon},
        {name: 'Linked Messages', Icon: ComputerIcon},
      ]}
    />
  );
};

export default BroadCastCard;
