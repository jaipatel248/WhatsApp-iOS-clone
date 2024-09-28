import {Avatar, Grid, Typography, Box} from '@mui/material';
import {ActionableCard, ListItems} from '@whatsapp/whatsapp-ui';
import CropOriginalIcon from '@mui/icons-material/CropOriginal';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import SaveAltIcon from '@mui/icons-material/SaveAlt';
import HistoryToggleOffIcon from '@mui/icons-material/HistoryToggleOff';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import ChatIcon from '@mui/icons-material/Chat';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SearchIcon from '@mui/icons-material/Search';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import IosShareIcon from '@mui/icons-material/IosShare';

export const ConversationProfile = () => {
  return (
    <Box p={2}>
      <Box mb={2}>
        <Typography
          variant='h6'
          sx={{
            fontWeight: 'bold',
            textAlign: 'center',
          }}>
          Contact Info
        </Typography>
      </Box>
      <Grid container justifyContent={'center'} alignItems={'center'} direction={'column'} spacing={0.5}>
        <Grid item>
          <Avatar sx={{width: 150, height: 150}} alt='Remy Sharp' />
        </Grid>
        <Grid item>
          <Typography
            variant='h5'
            sx={{
              fontWeight: 'bold',
            }}>
            Jay
          </Typography>
        </Grid>
        <Grid item>
          <Typography component='p'>{'+91 9898989898'}</Typography>
        </Grid>
      </Grid>
      <Grid
        container
        justifyContent={'space-between'}
        spacing={2}
        sx={{
          mt: 2,
        }}>
        <Grid item xs>
          <ActionableCard Icon={CropOriginalIcon} text={'Audio'} />
        </Grid>
        <Grid item xs>
          <ActionableCard Icon={IosShareIcon} text={'Share'} />
        </Grid>
        <Grid item xs>
          <ActionableCard Icon={CurrencyRupeeIcon} text={'Pay'} />
        </Grid>
        <Grid item xs>
          <ActionableCard Icon={SearchIcon} text={'Search'} />
        </Grid>
      </Grid>
      <ListItems
        items={[
          {name: 'Media, links and docs', Icon: CropOriginalIcon, actionText: 423},
          {name: 'Starred Messages', Icon: StarBorderIcon, actionText: 'None'},
        ]}
      />
      <ListItems
        items={[
          {name: 'Notifications', Icon: NotificationsNoneIcon},
          {name: 'Wallpaper', Icon: AcUnitIcon},
          {name: 'Save to Photos', Icon: SaveAltIcon, actionText: 'Always'},
        ]}
      />

      <ListItems
        items={[
          {name: 'Disappearing Messages', Icon: HistoryToggleOffIcon, actionText: 'Off'},
          {name: 'Lock Chat', Icon: LockOutlinedIcon},
          {name: 'Encryption', Icon: ChatIcon},
        ]}
      />

      <ListItems items={[{name: 'Contact Details', Icon: AccountCircleIcon}]} />
    </Box>
  );
};

export default ConversationProfile;
