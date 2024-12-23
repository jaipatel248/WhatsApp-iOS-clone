/* eslint-disable react-hooks/exhaustive-deps */
import {Box, List, Paper, useTheme, Typography} from '@mui/material';
import {useEffect, useState} from 'react';
import StatusItem from './StatusItem';
import {getChatList} from '../../api/ChatAPI';
import {IChatObject} from '../../api/TypeScriptObjs';
import {useLoading} from '../../LoadingContext/LoadingContext';
type Props = unknown;

const StatusItems = (props: Props) => {
  const theme = useTheme();
  const {showLoading, hideLoading} = useLoading();

  const [items, setItems] = useState<IChatObject[]>([]);
  useEffect(() => {
    showLoading();
    getChatList().then((data) => {
      setItems(data);
      hideLoading();
    });
  }, []);
  if (items.length === 0) return null;

  return (
    <Box>
      <Box bgcolor={theme.palette.primary.contrastText} pl={2} py={0.3}>
        <Typography>Recent Updates</Typography>
      </Box>
      <List
        component={Paper}
        variant='outlined'
        square
        sx={{
          paddingY: 0,
        }}>
        {items.map((item) => (
          <StatusItem key={item.id} item={item} />
        ))}
      </List>
    </Box>
  );
};

export default StatusItems;
