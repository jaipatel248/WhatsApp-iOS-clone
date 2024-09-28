import React from 'react';
import {useTheme, List, Paper, Divider} from '@mui/material';
import {ListItemComponent, ListItemComponentProps} from './ListItemComponent';

interface ListItemsProps {
  readonly items: ListItemComponentProps[];
}
export const ListItems: React.FC<ListItemsProps> = ({items}) => {
  const theme = useTheme();
  return (
    <List
      component={Paper}
      sx={{
        borderRadius: 2,
        marginY: theme.spacing(2),
        padding: theme.spacing(0),
      }}>
      {items.map((item, key) => (
        <>
          <ListItemComponent key={key} {...item} />
          {key < items.length - 1 && <Divider component='li' sx={{ml: 7}} />}
        </>
      ))}
    </List>
  );
};
