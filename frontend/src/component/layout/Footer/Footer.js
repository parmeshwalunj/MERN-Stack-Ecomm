import React from "react";
import { NavLink } from "react-router-dom";
// import playStore from "../../../images/playstore.png";
// import appStore from "../../../images/Appstore.png";
import "./Footer.css";

const Footer = () => {
  return (
    <footer id="footer">
      <div id="contact" className="footer">
        <div className="container">
            <div className="row pdn-top-30">
                <div className="col-md-12 ">
                    <div className="footer-box">
                        <div className="headinga">
                            <h3>Address</h3>
                            <span>Healing Center, 176 W Streetname,New York, NY 10014, US</span>
                            <p>(+71) 8522369417
                                <br/>demo@gmail.com</p>
                        </div>
                        <ul className="location_icon">
                            <li> <a href="#"><i className="fa fa-facebook-f"></i></a></li>
                            <li> <a href="#"><i className="fa fa-twitter"></i></a></li>
                            <li> <a href="#"><i className="fa fa-instagram"></i></a></li>

                        </ul>
                        <div className="menu-bottom">
                            <ul className="link">
                                <li> <NavLink to="/">Home</NavLink></li>
                                <li> <NavLink to="/products">Products</NavLink></li> 
                                <li> <NavLink to="/about">About</NavLink></li>
                                <li> <NavLink to="/contact">Contact</NavLink></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="copyright">
            <div className="container">
                <p>© 2019 All Rights Reserved. Design By Parmesh, Niharika, Aishwarya, Deep</p>
            </div>
        </div>
    </div>

      {/* <div classNameName="leftFooter">
        <h4>DOWNLOAD OUR APP</h4>
        <p>Download App for Android and IOS mobile phone</p>
        <img src={playStore} alt="playstore" />
        <img src={appStore} alt="Appstore" />
      </div>

      <div classNameName="midFooter">
        <h1>ECOMMERCE.</h1>
        <p>High Quality is our first priority</p>

        <p>Copyrights 2021 &copy; MeAbhiSingh</p>
      </div>

      <div classNameName="rightFooter">
        <h4>Follow Us</h4>
        <a href="http://instagram.com/meabhisingh">Instagram</a>
        <a href="http://youtube.com/6packprogramemr">Youtube</a>
        <a href="http://instagram.com/meabhisingh">Facebook</a>
      </div> */}
    </footer>
  );
};

export default Footer;
