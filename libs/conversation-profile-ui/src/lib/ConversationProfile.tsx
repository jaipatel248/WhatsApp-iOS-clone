import { Avatar, Grid, Typography, Box } from '@mui/material';

export const ConversationProfile = () => {
  return (
    <Box>
      <Grid
        container
        justifyContent={'center'}
        alignItems={'center'}
        direction={'column'}
      >
        <Box mb={2}>
          <Typography>contact info</Typography>
        </Box>
        <Avatar sx={{ width: 150, height: 150 }} alt="Remy Sharp" />
        <Grid item>
          <Typography variant="h5" component="b">
            Jay
          </Typography>
        </Grid>
        <Grid item>
          <Typography component="p">{'+91 9898989898'}</Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ConversationProfile;
