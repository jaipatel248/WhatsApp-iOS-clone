import React from "react";
import { Avatar, AvatarProps } from "@mui/material";

type Props = AvatarProps;

const getRandomColor = (): string => {
  let hex = Math.floor(Math.random() * 0xffffff);
  let color = "#" + hex.toString(16);
  return color;
};

const CustomAvatar = (props: Props) => {
  return (
    <Avatar
      style={{
        backgroundColor: getRandomColor(),
      }}
    >
      JP
    </Avatar>
  );
};

export default CustomAvatar;
