import React from "react";
import "./aboutSection.css";


import {  Typography, } from "@material-ui/core";
//  import YouTubeIcon from "@material-ui/icons/YouTube";
// import InstagramIcon from "@material-ui/icons/Instagram";
const About = () => {
  // const visitInstagram = () => {
  // //  window.location = "https://instagram.com/meabhisingh";//
  // };

  return (

    
    <div className="aboutSection">
      <div></div>
      <div className="aboutSectionGradient"></div>
      <div className="aboutSectionContainer">
        <Typography component="h1">About Us</Typography>

        <div>
          <div>
            {/* <Avatar
              style={{ width: "10vmax", height: "10vmax", margin: "2vmax 0" }}
              src="https://res.cloudinary.com/tripleayt/image/upload/v1631555947/products/jpyibarlaxawvcvqjv5b.png"
              alt="Founder"
            /> */}
            {/* <Typography>Abhishek Singh</Typography>
            <Button onClick={visitInstagram} color="primary">
              Visit Instagram
            </Button> */}
            <span>
          <h2>  Welcome </h2>
    <br/>
consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </span>
          </div>
          <div className="aboutSectionContainer2">
            {/* <Typography component="h2">Our Brands</Typography> */}
           
            <img src="https://p.w3layouts.com/demos_new/template_demo/28-08-2018/electro_store-demo_Free/1204782700/web/images/ab.jpg" className="img-fluid"/>
           
            {/* <a
            //   href="https://www.youtube.com/channel/UCO7afj9AUo0zV69pqEYhcjw"
              target="blank"
            >
              <YouTubeIcon className="youtubeSvgIcon" /> */}
             

            {/* <a href="https://instagram.com/meabhisingh" target="blank">
              <InstagramIcon className="instagramSvgIcon" />
            </a>  */}
          </div>
        </div>
      </div>
    </div>
  

//     <div class="about">
//         <div class="container">
//             <div class="row">
//                 <div class="col-xl-5 col-lg-5 col-md-5 co-sm-l2">
//                     <div>
//                     <div class="about_img">
//                         <figure><img src= {about}alt="img" /></figure>
//                     </div>
//                 </div>
//                 <div class="col-xl-7 col-lg-7 col-md-7 co-sm-l2">
//                     <div class="about_box">
//                         <span>Our Mobile Shop</span>
//                         <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of It is a long established fact that a reader will be distracted by the </p>

//                     </div>
//                     </div>
//                 </div>

//                 <div class="col-xl-7 col-lg-7 col-md-7 co-sm-l2">
//                     <div class="about_box_ ">
//                         <span>Our Mobile Shop</span>
//                         <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of It is a long established fact that a reader will be distracted by the </p>

//                     </div>
//                 </div>
//                 <div class="col-xl-5 col-lg-5 col-md-5 co-sm-l2">
//                     <div class="about_img">
//                         <figure><img src={about} alt="img" /></figure>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     </div>
    
    
  );
  };  
export default About;
