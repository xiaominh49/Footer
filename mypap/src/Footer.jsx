import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faTwitter, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        <div className="footer-section">
          <h4>Company</h4>
          <ul>
            <li><a href="#">About us</a></li>
            <li><a href="#">Affiliate</a></li>
            <li><a href="#">Career</a></li>
            <li><a href="#">Contact us</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Categories</h4>
          <ul>
            <li><a href="#">Milks and Dairies</a></li>
            <li><a href="#">Clothing & Beauty</a></li>
            <li><a href="#">Pet Toy</a></li>
            <li><a href="#">Baking Material</a></li>
            <li><a href="#">Fresh Fruit</a></li>
            <li><a href="#">Wines & Drinks</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Information</h4>
          <ul>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Cookie Policy</a></li>
            <li><a href="#">Terms & Conditions</a></li>
            <li><a href="#">Returns & Exchanges</a></li>
            <li><a href="#">Shipping & Delivery</a></li>
            <li><a href="#">Privacy Policy</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Contact</h4>
          <p><FontAwesomeIcon icon={faPhone} /> (+84) - 987654321</p>
          <p><FontAwesomeIcon icon={faEnvelope} /> abcxyz@gmail.com</p>
          <p>Working Hours: 08:00 - 20:00, Mon - Sat</p>
          <div className="social-icons">
            <FontAwesomeIcon icon={faFacebook} className="icon" />
            <FontAwesomeIcon icon={faTwitter} className="icon" />
            <FontAwesomeIcon icon={faInstagram} className="icon" />
            <FontAwesomeIcon icon={faYoutube} className="icon" />
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>Copyright © 2024 Nest all rights reserved. Powered by Botble.</p>
      </div>
    </footer>
  );
};

export default Footer;