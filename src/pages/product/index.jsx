import React, { useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";
import { fetchProductList } from "../../store/actions/product";
import { Card, CardActions, CardContent, CardMedia, Container, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";
const ProductsPage = (props) => {
  const dispatch = useDispatch();
  const {
    getProductLoading,
    getProductSuccess,
    getProductError,
    getProductData
  } = useSelector((state) => {
    return state.product;
  });
  useEffect(() => {
    dispatch(fetchProductList());
  },[])
  console.log(getProductLoading,
    getProductSuccess,
    getProductError,
    getProductData)
  return (
    <div class="gallery_section layout_padding">
      <div class="container">
        <div class="row">
            <div class="col-sm-12">
              <h1 class="gallery_taital">Our Products</h1>
              <p class="gallery_text">All range of product we have just simmply choose and add to cart with in a week product is deliver to you.</p>
            </div>
        </div>
        <Container sx={{ py: 8 }} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
          {getProductData && getProductData.products && getProductData.products.length > 0 && getProductData.products.map((product) => {
                  return(
              <Grid item key={product.id} xs={12} sm={6} md={4}>
              <Link to={"/products/" + product.id}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <CardMedia
                    component="div"
                    sx={{
                      // 16:9
                      pt: '56.25%',
                    }}
                    image={product.thumbnail}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                    {product.title}
                    </Typography>
                    <Typography>
                    {product.description}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    Price  :  {product.price} ₹
                  </CardActions>
                </Card>
              </Link>
              </Grid>
                  )
                })}
          </Grid>
        </Container>
      </div>
  </div>
  );
};

export default ProductsPage;