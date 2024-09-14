import { Box, Typography } from "@mui/material";
import React from "react";

type Props = {
  title: string;
};

const TopBarHeader = (props: Props) => {
  const { title } = props;
  return (
    <Box>
      <Typography variant="h4" fontWeight={"bold"} mb={1}>
        {title}
      </Typography>
    </Box>
  );
};

export default TopBarHeader;
