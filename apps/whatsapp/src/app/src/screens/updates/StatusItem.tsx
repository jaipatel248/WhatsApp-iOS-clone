import {
  Divider,
  ListItemButton,
  ListItemAvatar,
  ListItemText,
  Grid,
  Paper,
} from "@mui/material";
import {useCallback} from 'react';
import CustomAvatar from '../../components/avatar/CustomAvatar';
import {IChatObject} from '../../api/TypeScriptObjs';

type Props = {
  item: IChatObject;
  onClickStatus: () => void;
};

const StatusItem = ({item, onClickStatus}: Props) => {
  const {name, last_chat_date} = item;
  const onStatusClick = useCallback(() => {
    onClickStatus();
  }, [onClickStatus]);
  return (
    <>
      <ListItemButton alignItems='flex-start' onClick={onStatusClick}>
        <ListItemAvatar>
          <CustomAvatar>{name.charAt(0)}</CustomAvatar>
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
