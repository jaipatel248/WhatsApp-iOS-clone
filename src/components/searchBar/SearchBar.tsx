import { SearchOutlined } from "@mui/icons-material";
import { Box, TextField } from "@mui/material";
import React from "react";

type Props = {};

const SearchBar = (props: Props) => {
  return (
    <Box>
      <TextField
        sx={{ mr: 3 }} // Add border radius here
        size="small"
        InputProps={{
          fullWidth: true,
          startAdornment: <SearchOutlined />,
          style: {
            borderRadius: "10px",
          },
        }}
        inputProps={{
          style: {
            height: "1em",
          },
        }}
        fullWidth
      />
    </Box>
  );
};

export default SearchBar;
