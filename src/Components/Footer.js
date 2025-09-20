import React from "react";
import { BsTwitter } from "react-icons/bs";
import { SiLinkedin } from "react-icons/si";
import { BsYoutube } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer-wrapper"   
      style={{
        borderTop: "2px solid #333", 
        marginTop: "30px"
      }}>
      <div className="footer-section-one" style={{marginTop: 5}}>
        <div className="footer-logo-container">
          {/* <img src={Logo} alt="" /> */}
          <h1 style={{ fontSize: 45, color: "red", fontWeight: "bold" }}>
            ZICOSU
          </h1>
        </div>
        <div className="footer-icons">
          <BsTwitter />
          <SiLinkedin />
          <BsYoutube />
          <FaFacebookF />
        </div>
      </div>
      <div className="footer-section-two">
        <div className="footer-section-columns">
          <span>Help</span>
          <span>Share</span>
        </div>
        <div className="footer-section-columns">
          <span>244-5333-7783</span>
        </div>
        <div className="footer-section-columns">
          <span>Terms & Conditions</span>
          <span>Privacy Policy</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
