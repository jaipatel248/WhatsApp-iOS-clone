import React from 'react';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import FavoriteIcon from '@mui/icons-material/Favorite';
import {ListItems} from '@whatsapp/whatsapp-ui';
const HelpAndAboutUsSettingsCard: React.FC = () => {
  return (
    <ListItems
      items={[
        {name: 'About Us', Icon: AccountBoxIcon},
        {name: 'Tell a Friend', Icon: FavoriteIcon},
      ]}
    />
  );
};

export default HelpAndAboutUsSettingsCard;
