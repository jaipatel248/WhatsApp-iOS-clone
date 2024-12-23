import {Divider, ListItemButton, ListItemAvatar, ListItemText, Grid} from '@mui/material';
import React from 'react';
import {IChatObject} from '../../api/TypeScriptObjs';
import {CustomAvatar} from '@whatsapp/whatsapp-ui';

type Props = {
  item: IChatObject;
};

const StatusItem = ({item}: Props) => {
  const {name, last_chat_date} = item;
  return (
    <>
      <ListItemButton alignItems='flex-start'>
        <ListItemAvatar>
          <CustomAvatar />
        </ListItemAvatar>
        <Grid container direction={'row'} wrap='nowrap' justifyContent={'space-between'}>
          <Grid item xs={8}>
            <ListItemText primary={name} secondary={last_chat_date} />
          </Grid>
        </Grid>
      </ListItemButton>
      <Divider variant='inset' component='li' />
    </>
  );
};

export default StatusItem;
