import {Box} from '@mui/material';
import SettingsTopBar from './SettingsTopBar';
import SettingsCards from './SettingsCards/SettingsCards';

type Props = unknown;

const Settings = (props: Props) => {
  return (
    <Box p={2}>
      <SettingsTopBar />
      <SettingsCards />
    </Box>
  );
};

export default Settings;
