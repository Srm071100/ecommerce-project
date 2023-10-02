
import React from "react";
import {Typography,Link,Grid,Box,Paper,Avatar,Button,CssBaseline,TextField,FormControlLabel,Checkbox} from '@mui/material';

const AuthLayout = ({children}) => {
  return (
    <>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: 'url(https://source.unsplash.com/random?wallpapers)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        {children}
      </Grid>
    </>
  );
};

export default AuthLayout;