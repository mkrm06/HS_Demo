import React from "react";
import styles from "./Footer.module.css";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className={styles.footerContainer}>
      
      {/* Newsletter */}
      <div className={styles.newsletterSection}>
        <h3>Subscribe to Our Newsletter</h3>
        <p>Get the latest updates on new arrivals, special offers, and styling tips!</p>

        <div className={styles.subscribeBox}>
          <input type="email" placeholder="Enter your email" />
          <button>Subscribe</button>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className={styles.footerContent}>
        
        {/* Logo & About */}
        <div className={styles.aboutSection}>
          <div className={styles.logo}>
            <div className={styles.logoCircle}>HS</div>
            <span>House of Salaga</span>
          </div>

          <p>
            Your one-stop destination for premium clothing. From traditional kurtas to modern wear, 
            we have something for everyone in the family.
          </p>

          <div className={styles.storeHours}>
            <h4>Store Hours:</h4>
            <p>Mon – Sat: 10 AM – 8 PM</p>
            <p>Sunday: 11 AM – 7 PM</p>
          </div>
        </div>

        {/* Shop Categories */}
        <div className={styles.linksSection}>
          <h3>Shop by Category</h3>
          <ul>
            <li>Women's Kurtas</li>
            <li>Sarees & Dupattas</li>
            <li>Men's Kurtas</li>
            <li>Men's Casual Wear</li>
            <li>Kids' Dresses</li>
            <li>Accessories</li>
          </ul>
        </div>

        {/* Customer Service */}
        <div className={styles.linksSection}>
          <h3>Customer Service</h3>
          <ul>
            <li>Contact Us</li>
            <li>Shipping & Delivery</li>
            <li>Returns & Exchange</li>
            <li>Size Guide</li>
            <li>FAQ</li>
            <li>Track Your Order</li>
          </ul>
        </div>

        {/* Contact */}
        <div className={styles.contactSection}>
          <h3>Get in Touch</h3>

          <p><FaMapMarkerAlt /> 123 Fashion Street, Downtown, City - 560001</p>
          <p><FaPhoneAlt /> +91 98765 43210</p>
          <p><FaPhoneAlt /> +91 98765 43211</p>
          <p><FaEnvelope /> info@houseofsalaga.com</p>

          <div className={styles.socialIcons}>
            <FaFacebook />
            <FaInstagram />
            <FaXTwitter />
            <FaYoutube />
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className={styles.bottomBar}>
        <p>© 2025 House of Salaga. All rights reserved.</p>

        <div className={styles.bottomLinks}>
          <span>Privacy Policy</span>
          <span>Terms & Conditions</span>
          <span>Cookie Policy</span>
        </div>
      </div>

    </footer>
  );
};

export default Footer;
