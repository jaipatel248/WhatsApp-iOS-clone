import { Button, Grid, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import React from 'react';

const NotFound = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate('/');
  };
  return (
    <Grid container direction={"column"} justifyContent="center" alignItems="center" style={{
      marginTop: 50,
    }}>
      <Typography variant='h4'>404 - Not Found</Typography>
      <Typography>The page you are looking for does not exist.</Typography>
      <Button variant='contained' color='primary' style={{ marginTop: 20 }} onClick={handleGoHome}
      >Go Home</Button>
    </Grid>
  );
};

export default NotFound;
