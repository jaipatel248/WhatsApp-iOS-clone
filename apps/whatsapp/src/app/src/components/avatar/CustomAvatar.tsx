import React, {useMemo} from 'react';
import {Avatar, AvatarProps} from '@mui/material';

type Props = AvatarProps;

const getRandomColor = (): string => {
  const hex = Math.floor(Math.random() * 0xffffff);
  const color = '#' + hex.toString(16);
  return color;
};

const CustomAvatar = (props: Props) => {
  return (
    <Avatar
      style={{
        backgroundColor: useMemo(() => getRandomColor(), []),
      }}>
      {props.children || 'JP'}
    </Avatar>
  );
};

export default CustomAvatar;
