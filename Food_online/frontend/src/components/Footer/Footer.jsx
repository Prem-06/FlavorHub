import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";
import {Link} from 'react-router-dom'
const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <h1 className="logo">FlavorHub</h1>
          <p>
          FlavorHub is your ultimate gateway to a world of culinary delights. We bring together a diverse range of restaurants and dishes to cater to every craving and occasion. Whether you're in the mood for something classic or adventurous, FlavorHub is here to connect you with the perfect meal. Our commitment is to make your dining experience seamless, satisfying, and flavorful. Discover, order, and indulge with FlavorHub—where every bite is a new adventure.
          </p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>

        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li><Link to={'/'}>Home</Link></li>
            <li><Link to={'/myorders'}>My Orders</Link></li>
            <li><Link to={'/cart'}>Cart</Link></li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+91-212-456-7589</li>
            <li>contact@flavorHub.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">
        Copyright 2024 © FlavorHub- All Right Reserved.
      </p>
    </div>
  );
};

export default Footer;
