import React from 'react'
import './footer.css'
import {assets} from "../../assets/assets"
const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img className='logo' src={assets.tastywheel} alt="" />
          <p>
            Indulge in our delectable culinary creations, expertly crafted to
            satisfy your cravings and elevate your dining experience. Explore,
            taste, and savor the essence of exquisite cuisine with us.
          </p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>
        <div className="footer-content-center">
          <h2>TastyWheel</h2>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+91-9123456780</li>
            <li>contact@tastywheel.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">copyright 2024 © TastyWheel.com - All Rights Reserved</p>
    </div>
  );
}

export default Footer