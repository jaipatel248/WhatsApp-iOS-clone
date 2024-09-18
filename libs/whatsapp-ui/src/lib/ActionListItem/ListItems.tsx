import React from 'react';
import {useTheme, SvgIconProps, List, Card, Divider} from '@mui/material';
import ListItemComponent from './ListItemComponent';

interface ListItemComponent {
  name: string;
  Icon: React.FC<SvgIconProps>;
}
interface ListItemsProps {
  readonly items: ListItemComponent[];
}
export const ListItems: React.FC<ListItemsProps> = ({items}) => {
  const theme = useTheme();
  return (
    <List
      component={Card}
      elevation={3}
      sx={{
        borderRadius: '10px',
        marginY: theme.spacing(2),
        padding: theme.spacing(0),
      }}>
      {items.map((item, key) => (
        <>
          <ListItemComponent key={key} name={item.name} Icon={item.Icon} />
          {key < items.length - 1 && <Divider component='li' sx={{ml: 7}} />}
        </>
      ))}
    </List>
  );
};
