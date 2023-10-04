
import React from "react";
import logo from "../../assets/images/logo.png"
import { Link } from "react-router-dom";
import routesUrl from "../../routes/routes-url";
import Cookies from "js-cookie";
const Header = (props) => {
  return (
    // header section start
    <div className="header_section">
       <div className="container-fluid">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
             <div className="logo"><a href="index.html"><img src={logo}/></a></div>
             <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav"aria-expanded="false" aria-label="Toggle navigation">
             <span className="navbar-toggler-icon"></span>
             </button>
             <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ml-auto">
                   <li className="nav-item active">
                      <Link className="nav-link" to={routesUrl.home}>Home</Link>
                   </li>
                   <li className="nav-item">
                      <Link className="nav-link" to={routesUrl.about}>About Us</Link>
                   </li>
                   <li className="nav-item">
                      <Link className="nav-link" to={routesUrl.product}>Products</Link>
                   </li>
                   {!Cookies.get("js_user_token") ? 
                     <li className="nav-item">
                        <Link className="nav-link" to={routesUrl.login}>Login</Link>
                     </li> 
                  :
                     <li className="nav-item">
                      <Link className="nav-link" to={routesUrl.profile}>Profile</Link>
                     </li>
                  }
                   <li className="nav-item">
                      <Link className="nav-link" to={routesUrl.contactUs}>Contact Us</Link>
                   </li>
                </ul>
             </div>
          </nav>
       </div>
    </div>
  );
};

export default Header;