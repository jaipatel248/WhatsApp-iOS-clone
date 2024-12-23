import {Divider, ListItemButton, ListItemAvatar, ListItemText, Grid, Box, useTheme} from '@mui/material';
import {useCallback, useMemo} from 'react';
import {IChatObject} from '../../api/TypeScriptObjs';
import {CustomAvatar} from '@whatsapp/whatsapp-ui';

type Props = {
  item: IChatObject;
  onClickStatus: () => void;
};

function generateStrokeDashArray(radius: number, n: number, gap = 10) {
  if (n <= 1) return '';
  const circumference = 2 * Math.PI * radius;

  // For the first SVG circle
  const dash1 = circumference / n - gap;
  const dashArray1 = Array(n).fill(`${dash1} ${gap}`).join(' ');

  return dashArray1;
}

const StatusItem = ({item, onClickStatus}: Props) => {
  const {name, last_chat_date} = item;
  const onStatusClick = useCallback(() => {
    onClickStatus();
  }, [onClickStatus]);
  const theme = useTheme();
  const status_count = useMemo(() => Math.floor(Math.random() * 6), []);
  return (
    <>
      <ListItemButton alignItems='flex-start' onClick={onStatusClick}>
        <ListItemAvatar>
          <Box
            style={{
              position: 'relative',
            }}>
            {status_count > 0 && (
              <svg
                style={{
                  position: 'absolute',
                  top: '0',
                  left: '0',
                  transform: 'translate(-4px, -4px)', // Adjust for alignment
                }}
                fill={theme.palette.background.paper}
                width={theme.spacing(6)}
                height={theme.spacing(6)}
                viewBox='0 0 104 104'>
                <circle
                  cx='52'
                  cy='52'
                  r='50'
                  stroke={theme.palette.text.disabled}
                  strokeLinecap='round'
                  strokeDashoffset='387.69908169872417'
                  strokeDasharray={generateStrokeDashArray(50, status_count)}
                  strokeWidth='4'></circle>
              </svg>
            )}
            <CustomAvatar>{name.charAt(0)}</CustomAvatar>
          </Box>
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
