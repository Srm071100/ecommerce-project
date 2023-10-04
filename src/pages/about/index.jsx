import React from "react";
import aboutImage from "../../assets/images/about-img.jpg"
const AboutPage = (props) => {
  return (
    <div class="about_section layout_padding" style={{paddingBottom:"90px"}}>
      <div class="container">
        <div class="row">
            <div class="col-md-6">
              <div class="about_taital_main">
                  <div class="about_taital">About Us</div>
                  <p class="about_text">We take an active role in sustainability, not only because it’s smart for our business, but because we believe in making the world a better place for future generations. Because of our size, we are in a unique position to foster innovation, advance research and test market-driven solutions.</p>
                  <p class="about_text">JS Enterprice culture is steeped in fostering trust, inclusion, support, recognition and genuine care that enables Flipsters to create, innovate, and bring their best selves to work</p>
                 
              </div>
            </div>
            <div class="col-md-6">
              <div class="about_img"><img src={aboutImage}/></div>
            </div>
        </div>
      </div>
  </div>
  );
};

export default AboutPage;