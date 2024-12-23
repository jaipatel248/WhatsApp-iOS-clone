import { Box } from "@mui/material";
import {SearchBar, TopBar} from '@whatsapp/whatsapp-ui';
import StatusItems from './StatusItems';
import MyStatus from './MyStatus';

type Props = unknown;

const Updates = (props: Props) => {
  return (
    <Box>
      <Box p={2}>
        <TopBar title="Updates" />
        <SearchBar />
      </Box>
      <MyStatus />
      <StatusItems />
    </Box>
  );
};

export default Updates;
