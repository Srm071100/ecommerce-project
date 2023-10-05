import { Card ,Grid,Container,Box,Typography,CardMedia,CardActions ,Button,CardContent} from "@mui/material";
import Cookies from "js-cookie";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
const ProfilePage = (props) => {
  const navigate = useNavigate()
  const [userData , setUserData] = useState({});
  useEffect(() => {
    if(Cookies.get("js_user_data")){
      setUserData(JSON.parse(Cookies.get("js_user_data")));
    }
  },[Cookies.get("js_user_data")])
  console.log(userData)
  return (
      <>
      {userData && userData.id && 
      
        <Container sx={{ py: 8 }} maxWidth="md">
        <Grid container spacing={4} justifyContent={"center"}>
        <Grid item xs={12} sm={6} md={4}>
      <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <CardMedia
                    component="div"
                    sx={{
                      // 16:9
                      pt: '100%',
                    }}
                    image={userData.avatar}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                    {userData.name}
                    </Typography>
                    <Typography>
                    Id : {userData.id}
                    </Typography>
                    <Typography>
                    email : {userData.email}
                    </Typography>
                    <Typography>
                    email : {userData.role}
                    </Typography>
                    <Typography>
                    Created Date : {userData.creationAt}
                    </Typography>
                    <CardActions>
                     <Button onClick={() => {
                        Cookies.remove("js_user_data")
                        Cookies.remove("js_user_token")
                        navigate("/auth/login")
                     }}  fullWidth
                          variant="contained"> Logout </Button>
                    </CardActions>
                  </CardContent>
                </Card></Grid></Grid></Container>}
      </>
  );
};

export default ProfilePage;