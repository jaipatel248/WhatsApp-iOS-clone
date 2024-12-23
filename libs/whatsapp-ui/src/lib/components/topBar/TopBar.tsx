import {Box, IconButton} from '@mui/material';
import React from 'react';
import TopBarHeader from './TopBarHeader';
import ExpandCircleDownIcon from '@mui/icons-material/ExpandCircleDown';
type Props = {
  title: string;
  topActionBar?: React.ReactNode;
};

export const TopBar = (props: Props) => {
  const {
    title,
    // TODO
    topActionBar = (
      <Box visibility={'hidden'}>
        <IconButton>
          <ExpandCircleDownIcon />
        </IconButton>
      </Box>
    ),
  } = props;
  return (
    <Box>
      {topActionBar}
      <TopBarHeader title={title} />
    </Box>
  );
};

export default TopBar;
