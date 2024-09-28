import {Typography, Paper, Stack, SvgIcon, ButtonBase, SvgIconProps} from '@mui/material';

interface ActionableCard {
  Icon: React.FC<SvgIconProps>;
  text: string;
}

export const ActionableCard = ({Icon, text}: ActionableCard) => {
  return (
    <Paper
      component={ButtonBase}
      sx={{
        borderRadius: 2,
        width: '100%',
      }}>
      <Stack p={1.5} direction={'column'} alignItems={'center'} spacing={1}>
        <SvgIcon color='primary' component={Icon} />
        <Typography>{text}</Typography>
      </Stack>
    </Paper>
  );
};
