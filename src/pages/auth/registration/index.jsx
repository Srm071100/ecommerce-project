import React, { useRef, useState,useEffect } from "react";
import {Typography,Alert,Link,Grid,Box,Paper,Avatar,Button ,CssBaseline,TextField,FormControlLabel,Checkbox} from '@mui/material';
import { LoadingButton } from "@mui/lab";
import { useFormik } from 'formik';
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../../../store/actions/login";
import routesUrl from "../../../routes/routes-url";

const RegistrationPage = (props) => {
  const dispatch = useDispatch();
  const {
    addUserLoading,
    addUserSuccess,
    addUserError,
    addUserData
  } = useSelector((state) => {
    return state.login;
  });
  function Copyright(props) {
    return (
      <Typography variant="body2" color="text.secondary" align="center" {...props}>
        {'Copyright © '}
        <Link color="inherit" href="#">
          JS Enterprise
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }
  const formik = useFormik({
    initialValues: {},
    onSubmit: (values) => {
      let data = {
        email:values.email,
        username:values.userName,
        password:values.password,
        name:{
            firstname:values.firstName,
            lastname:values.lastName
        },
        phone:values.phone
      }
      dispatch(registerUser(data));
      console.log("values",values)
    },
  });
  return (
    
    <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
      <Box
        sx={{
          my: 8,
          mx: 4,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          JS
        </Avatar>
        <Typography component="h1" variant="h5">
          Register Your Self
        </Typography>
        <Box component="form" onSubmit={formik.handleSubmit}  sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="firstName"
            label="First Name"
            name="firstName"
            autoComplete="firstname"
            autoFocus
            value={formik.values.firstName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.firstName && Boolean(formik.errors.firstName)}
            helperText={formik.touched.firstName && formik.errors.firstName}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="lastName"
            label="Last Name"
            name="lastName"
            autoComplete="lastname"
            autoFocus
            value={formik.values.lastName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.lastName && Boolean(formik.errors.lastName)}
            helperText={formik.touched.lastName && formik.errors.lastName}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="phone"
            label="Phone No"
            name="phone"
            autoComplete="phone"
            autoFocus
            value={formik.values.phone}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.phone && Boolean(formik.errors.phone)}
            helperText={formik.touched.phone && formik.errors.phone}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="userName"
            label="User Name"
            id="userName"
            value={formik.values.userName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.userName && Boolean(formik.errors.userName)}
            helperText={formik.touched.userName && formik.errors.userName}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
          />
          <LoadingButton 
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            loading={addUserLoading}
          >
            Register
          </LoadingButton >
          <Grid container>
            <Grid item>
            Do you have an account?
              <Link href={routesUrl.login} variant="body2">
                {" Log In"}
              </Link>
            </Grid>
          </Grid>
          {addUserError && <Alert severity="error">Error!</Alert>}
          {addUserSuccess && <Alert severity="success">Register succesfully!</Alert>}
          <Copyright sx={{ mt: 5 }} />
        </Box>
      </Box>
    </Grid> 
  );
};

export default RegistrationPage;