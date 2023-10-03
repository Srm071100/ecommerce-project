import React , {useEffect} from "react";
import thankyouImage from "../../../assets/images/thank-you.jpg"
import { Grid } from "@mui/material";
const ThankyouPage = (props) => {
  useEffect(() => {
    localStorage.removeItem("js_cart_data")
  },[])
  return (
    <Grid container justifyContent={"center"}  marginBottom={"50px"} marginTop={"40px"} >
      <Grid>
        <img
          src={thankyouImage}
        />
      </Grid>
    </Grid>
  );
};

export default ThankyouPage;