import { Avatar, Grid, Typography, Box } from '@mui/material';
import {ListItems} from '@whatsapp/whatsapp-ui';
import CropOriginalIcon from '@mui/icons-material/CropOriginal';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import SaveAltIcon from '@mui/icons-material/SaveAlt';
import HistoryToggleOffIcon from '@mui/icons-material/HistoryToggleOff';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import ChatIcon from '@mui/icons-material/Chat';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export const ConversationProfile = () => {
  return (
    <Box p={2}>
      <Grid container justifyContent={'center'} alignItems={'center'} direction={'column'}>
        <Box mb={2}>
          <Typography>contact info</Typography>
        </Box>
        <Avatar sx={{width: 150, height: 150}} alt='Remy Sharp' />
        <Grid item>
          <Typography variant='h5' component='b'>
            Jay
          </Typography>
        </Grid>
        <Grid item>
          <Typography component='p'>{'+91 9898989898'}</Typography>
        </Grid>
      </Grid>
      <ListItems
        items={[
          {name: 'Media, links and docs', Icon: CropOriginalIcon},
          {name: 'Starred Messages', Icon: StarBorderIcon},
        ]}
      />

      <ListItems
        items={[
          {name: 'Notifications', Icon: NotificationsNoneIcon},
          {name: 'Wallpaper', Icon: AcUnitIcon},
          {name: 'Save to Photos', Icon: SaveAltIcon},
        ]}
      />

      <ListItems
        items={[
          {name: 'Disappearing Messages', Icon: HistoryToggleOffIcon},
          {name: 'Lock Chat', Icon: LockOutlinedIcon},
          {name: 'Encryption', Icon: ChatIcon},
        ]}
      />

      <ListItems items={[{name: 'Contact Details', Icon: AccountCircleIcon}]} />
    </Box>
  );
};

export default ConversationProfile;
