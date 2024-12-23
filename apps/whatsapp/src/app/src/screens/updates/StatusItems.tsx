/* eslint-disable react-hooks/exhaustive-deps */
import {Box, List, Paper, useTheme, Typography, Dialog} from '@mui/material';
import React, {useEffect, useState} from 'react';
import StatusItem from './StatusItem';
import {getChatList} from '../../api/ChatAPI';
import {IChatObject} from '../../api/TypeScriptObjs';
import {useLoading} from '../../LoadingContext/LoadingContext';
import Stories from 'react-insta-stories';

type Props = object;

const StatusItems = (props: Props) => {
  const theme = useTheme();
  const {showLoading, hideLoading} = useLoading();
  const [showStory, setShowStory] = useState(false);

  const [items, setItems] = useState<IChatObject[]>([]);
  useEffect(() => {
    showLoading();
    getChatList().then((data) => {
      setItems(data);
      hideLoading();
    });
  }, []);

  const handleClickStatus = () => {
    setShowStory(true);
  };
  if (items.length === 0) return null;

  return (
    <Box>
      <Box bgcolor={theme.palette.primary.contrastText} pl={2} py={0.3}>
        <Typography>Recent Updates</Typography>
      </Box>
      <Dialog open={showStory} fullScreen>
        <Stories
          storyStyles={{
            width: '100vw',
            objectFit: 'scale-down',
          }}
          onAllStoriesEnd={() => setShowStory(false)}
          stories={[
            {
              url: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
              type: 'video',
            },
            {
              url: 'https://jaipatel248.github.io/WhatsApp-iOS-clone/assets/avatar-UGrVdu3p.jpeg',
            },
            {
              content: () => (
                <div>
                  <h1>Welcome to WhatsApp Clone</h1>
                  <p>Click on the right side to see the next story</p>
                </div>
              ),
            },
            {
              content: () => (
                <div>
                  <h1>Chat with friends</h1>
                  <p>Click on the right side to see the next story</p>
                </div>
              ),
            },
            {
              content: () => (
                <div>
                  <h1>Share photos and videos</h1>
                  <p>Click on the right side to see the next story</p>
                </div>
              ),
            },
            {
              content: () => (
                <div>
                  <h1>Connect with family</h1>
                  <p>Click on the right side to see the next story</p>
                </div>
              ),
            },
          ].map((item) => ({
            ...item,
            header: {
              subheading: 'Posted 30m ago',
              heading: 'Jay Patel',
              profileImage: 'https://jaipatel248.github.io/WhatsApp-iOS-clone/assets/avatar-UGrVdu3p.jpeg',
            },
          }))}
          defaultInterval={10000}
          width={'100%'}
          height={'100%'}
        />
      </Dialog>
      <List
        component={Paper}
        variant='outlined'
        variant='outlined'
        square
        sx={{
          paddingY: 0,
        }}>
        }}>
        {items.map((item) => (
          <StatusItem key={item.id} item={item} onClickStatus={handleClickStatus} />
        ))}
      </List>
    </Box>
  );
};

export default StatusItems;
