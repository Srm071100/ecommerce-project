import { Grid, CircularProgress } from "@mui/material";
import React from "react";
const Spinner = (props) => {
  return (
    <Grid
    container
    spacing={0}
    direction="column"
    alignItems="center"
    justifyContent="center"
    sx={{ minHeight: '100vh' }}
  >
    <Grid item xs={3}> 
        <CircularProgress />
    </Grid>
    </Grid>
  );
};

export default Spinner;