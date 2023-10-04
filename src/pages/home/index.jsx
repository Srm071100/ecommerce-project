import React,{useEffect} from "react";
import { useDispatch,useSelector } from "react-redux";
import { fetchProductList } from "../../store/actions/product";
import { Card, CardActions, CardContent, CardMedia, Container, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import routesUrl from "../../routes/routes-url";
import aboutImage from "../../assets/images/about-img.jpg"
import icone1 from "../../assets/images/icon1.png"
import icone2 from "../../assets/images/icon2.png"
import icone3 from "../../assets/images/icon3.png"
const HomePage = (props) => {
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
    dispatch(fetchProductList(6));
  },[])
  console.log(getProductLoading,
    getProductSuccess,
    getProductError,
    getProductData)
  return (
   <>
      <div class="banner_section layout_padding">
         <div class="container">
            <div id="main_slider" class="carousel slide" data-ride="carousel">
               <div class="carousel-inner">
                  <div class="carousel-item active">
                     <div class="row">
                        <div class="col-sm-12">
                           <div class="banner_taital">
                              <h1 class="outstanding_text">Outstanding</h1>
                              <h1 class="coffee_text">Shopping Mart</h1>
                              <p class="there_text">. During the Big Billion Day Sale, you get offers and discounts on electronics, apparel, furniture and more. Whether you plan to buy a new electronic device for yourself or your family member, you can find mouth-watering offers on your preferred device during Big Billion Days. With deals and offers of up to 80 per cent on certain items, you can rest assured that there will be something for everyone. So, get your shopping lists ready and prepare to get the best gifts for your family and friends.</p>
                              <div class="learnmore_bt"><Link to={routesUrl.about}>Learn More</Link></div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
      <div class="about_section layout_padding">
         <div class="container">
            <div class="row">
               <div class="col-md-6">
                  <div class="about_taital_main">
                     <div class="about_taital">About Us</div>
                     <p class="about_text">We take an active role in sustainability, not only because it’s smart for our business, but because we believe in making the world a better place for future generations. Because of our size, we are in a unique position to foster innovation, advance research and test market-driven solutions.</p>
                     <p class="about_text">JS Enterprice culture is steeped in fostering trust, inclusion, support, recognition and genuine care that enables Flipsters to create, innovate, and bring their best selves to work</p>
                     <div class="read_bt"><Link to={routesUrl.about}>Read More</Link></div>
                  </div>
               </div>
               <div class="col-md-6">
                  <div class="about_img"><img src={aboutImage}/></div>
               </div>
            </div>
         </div>
      </div>
      <div class="gallery_section layout_padding">
         <div class="container">
            <div class="row">
               <div class="col-sm-12">
                  <h1 class="gallery_taital">Our Products</h1>
                  <p class="gallery_text">When it comes to searching for the best skincare products, it's important to remember that no two people will have the same skin concerns. One might have dry and sensitive skin, while another may suffer from acne and redness—which also means that skincare routines look different for everyone. The good news? There are quite a few products that skincare aficionados and experts return to time and time again to give the skin a targeted plumping, retexturizing, toning, and brightening.</p>
               </div>
            </div>
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
            <div class="seemore_bt"><Link to={routesUrl.product}>See More</Link></div>
         </div>
      </div>
      <div class="services_section layout_padding">
         <div class="container">
            <div class="row">
               <div class="col-sm-12">
                  <h1 class="services_taital">Services</h1>
                  <p class="services_text">Typesetting industry lorem Ipsum is simply dummy text of the </p>
               </div>
            </div>
            <div class="services_section_2">
               <div class="row">
                  <div class="col-lg-4 col-sm-12 col-md-4">
                     <div class="box_main active">
                        <div class="house_icon">
                           <img src={icone1} class="image_1"/>
                           <img src={icone1} class="image_2"/>
                        </div>
                        <h3 class="decorate_text">Free Shipping</h3>
                        <p class="tation_text">Free shipping with the carefully packaged. </p>
                     </div>
                  </div>
                  <div class="col-lg-4 col-sm-12 col-md-4">
                     <div class="box_main">
                        <div class="house_icon">
                           <img src={icone2} class="image_1"/>
                           <img src={icone2} class="image_2"/>
                        </div>
                        <h3 class="decorate_text">Fast Delivery</h3>
                        <p class="tation_text">Within a week we deliver in allover the india</p>
                     </div>
                  </div>
                  <div class="col-lg-4 col-sm-12 col-md-4">
                     <div class="box_main">
                        <div class="house_icon">
                           <img src={icone3} class="image_1"/>
                           <img src={icone3} class="image_2"/>
                        </div>
                        <h3 class="decorate_text">Best Price</h3>
                        <p class="tation_text">We give best offer and price to coustomer</p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
     
   </>
  );
};

export default HomePage;