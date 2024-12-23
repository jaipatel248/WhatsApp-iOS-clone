import {Box} from '@mui/material';
import {SearchBar, TopBar} from '@whatsapp/whatsapp-ui';

type Props = unknown;

const Calls = (props: Props) => {
  return (
    <Box p={2}>
      <TopBar title='Calls' />
      <SearchBar />
    </Box>
  );
};

export default Calls;
