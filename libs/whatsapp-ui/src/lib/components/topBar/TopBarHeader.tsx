import {Box, Typography} from '@mui/material';

type Props = {
  title: string;
};

const TopBarHeader = (props: Props) => {
  const {title} = props;
  return (
    <Box>
      <Typography variant='h4' fontWeight={'bold'} mb={1}>
        {title}
      </Typography>
    </Box>
  );
};

export default TopBarHeader;
