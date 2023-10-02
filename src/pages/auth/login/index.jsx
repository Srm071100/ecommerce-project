import React, { useEffect } from "react";
import {Typography,Link,Grid,Box,Paper,Avatar,Button,CssBaseline,TextField,FormControlLabel,Checkbox} from '@mui/material';
import routesUrl from "../../../routes/routes-url";
import { useFormik } from 'formik';
import { loginUser } from "../../../store/actions/login";
import { useDispatch, useSelector } from "react-redux";
import Cookies from "js-cookie";

const LoginPage = (props) => {
  const dispatch = useDispatch()
  const {
    loginUserLoading,
    loginUserSuccess,
    loginUserError,
    loginUserData
  } = useSelector((state) => {
    return state.login;
  });
  useEffect(() => {
    if(loginUserSuccess&&loginUserData&& loginUserData.token) {
      Cookies.set("js_user_token",loginUserData.token)
    }
  },[loginUserSuccess,loginUserData])
  function Copyright(props) {
    return (
      <Typography variant="body2" color="text.secondary" align="center" {...props}>
        {'Copyright © '}
        <Link color="inherit" href="https://mui.com/">
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
        username:values.username,
        password:values.password
      }
      dispatch(loginUser(data));
    },
  });
  console.log(loginUserLoading,
    loginUserSuccess,
    loginUserError,
    loginUserData)
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
          Log in
        </Typography>
        <Box component="form" onSubmit={formik.handleSubmit} sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="username"
            label="User Name"
            name="username"
            autoComplete="username"
            autoFocus
            value={formik.values.username}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.username && Boolean(formik.errors.username)}
            helperText={formik.touched.username && formik.errors.username}
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
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item>
            Don't have an account?
              <Link href={routesUrl.registration} variant="body2">
                {" Sign Up"}
              </Link>
            </Grid>
          </Grid>
          <Copyright sx={{ mt: 5 }} />
        </Box>
      </Box>
    </Grid>
  
  );
};

export default LoginPage;