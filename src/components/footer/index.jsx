
import React from "react";
import logo from "../../assets/images/logo.png"
import { Link } from "react-router-dom";
import routesUrl from "../../routes/routes-url";
import Cookies from "js-cookie";
const Footer = (props) => {
  return (
    <>
      <div className="footer_section layout_padding">
         <div className="container">
            <div className="row">
               <div className="col-lg-6 col-sm-12">
                  <h3 className="useful_text">About</h3>
                  <p className="footer_text">We take an active role in sustainability, not only because it’s smart for our business, but because we believe in making the world a better place for future generations. Because of our size, we are in a unique position to foster innovation, advance research and test market-driven solutions.</p>
               </div>
               <div className="col-lg-3 col-sm-6">
                  <h3 className="useful_text">Menu</h3>
                  <div className="footer_menu">
                     <ul>
                        <li><Link  to={routesUrl.home}>Home</Link></li>
                        <li><Link  to={routesUrl.about}>About Us</Link></li>
                        <li><Link  to={routesUrl.product}>Products</Link></li>
                        {!Cookies.get("js_user_token") ? <li><Link  to={routesUrl.login}>Login</Link></li> : <li><Link  to={routesUrl.profile}>Profile</Link></li>}
                        <li><Link  to={routesUrl.contactUs}>Contact Us</Link></li>
                     </ul>
                  </div>
               </div>
               <div className="col-lg-3 col-sm-6">
                  <h1 className="useful_text">Contact Us</h1>
                  <div className="location_text">
                     <ul>
                        <li>
                           <a href="#">
                           <i className="fa fa-map-marker" aria-hidden="true"></i><span className="padding_left_10">Address : Nadiad ,Gujrat</span>
                           </a>
                        </li>
                        <li>
                           <a href="#">
                           <i className="fa fa-phone" aria-hidden="true"></i><span className="padding_left_10">Call : +91 82384 37985</span>
                           </a>
                        </li>
                        <li>
                           <a href="#">
                           <i className="fa fa-envelope" aria-hidden="true"></i><span className="padding_left_10">Email : info@jsenterprise.com</span>
                           </a>
                        </li>
                     </ul>
                  </div>
               </div>
            </div>
         </div>
      </div>
      <div className="copyright_section">
         <div className="container">
            <p className="copyright_text">2023 All Rights Reserved. Develop By <a href="https://in.linkedin.com/in/jigna-raval-4951551b9">Jigna Raval</a></p>
         </div>
      </div>
    </>
  );
};

export default Footer;