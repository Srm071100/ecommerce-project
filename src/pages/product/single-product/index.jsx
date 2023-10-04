import React, { useEffect ,useState} from "react";
import { useDispatch,useSelector } from "react-redux";
import { fetchSingleProductList } from "../../../store/actions/product";
import { Alert, Box, Card, CardActions,CardContent, CardMedia, Container, Grid, Typography } from "@mui/material";
import { Link, useParams } from "react-router-dom";
import { LoadingButton } from "@mui/lab";
const SingleProductPage = (props) => {
  const [isAddToCartLoading,setAddToCartLoading] = useState(false);
  const [isAddToCartSuccess,setAddToCartSuccess] = useState(false);
  const dispatch = useDispatch();
  const {id} =useParams()
  const {
    getSingleProductLoading,
    getSingleProductSuccess,
    getSingleProductError,
    getSingleProductData
  } = useSelector((state) => {
    return state.product;
  });
  useEffect(() => {
    dispatch(fetchSingleProductList(id));
  },[id])
  const addProductToCart = () =>{
    setAddToCartLoading(true)
    let cartdata = {}
    if(localStorage.getItem("js_cart_data")){
      cartdata = {...JSON.parse(localStorage.getItem("js_cart_data"))};
    }

    if(cartdata[getSingleProductData.id]){
      cartdata[getSingleProductData.id].qty++
    }else{
      cartdata[getSingleProductData.id] = {
        name : getSingleProductData.title,
        image : getSingleProductData.thumbnail,
        price : getSingleProductData.price,
        qty : 1
      }
    }
    localStorage.setItem("js_cart_data",JSON.stringify(cartdata))
    setAddToCartLoading(false)
    setAddToCartSuccess(true)
  }
  console.log(getSingleProductLoading,
    getSingleProductSuccess,
    getSingleProductError,
    getSingleProductData)
  return (
    <>{getSingleProductData && getSingleProductData.id && <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2}} marginBottom={"10px"}>
      <Grid item xs={6}>
        <img
        src={getSingleProductData.thumbnail}
        alt={getSingleProductData.title}
      />
      </Grid>
      <Grid item xs={6}>
        <Typography gutterBottom variant="h5" component="h2">
          {getSingleProductData.title}
        </Typography>
        <Typography>
          {getSingleProductData.description}
        </Typography>
        <Typography>
          Price  :  {getSingleProductData.price} ₹
        </Typography>
        <Box>
          <LoadingButton loading={isAddToCartLoading} variant="contained" onClick={() => addProductToCart()}>Add To Cart</LoadingButton>
        </Box>
        {isAddToCartSuccess && <Alert severity="success">Add to Cart succesfully!</Alert>}
      </Grid>
    </Grid>}</>
  );
};

export default SingleProductPage;