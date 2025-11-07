import React from "react";
import { BsTwitter } from "react-icons/bs";
import { SiLinkedin } from "react-icons/si";
import { BsYoutube } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import Swal from "sweetalert2";

const Footer = () => {

    const Notify = () => {
    Swal.fire({
      toast: true,
      position: "top-end",
      icon: "info",
      title: "Link coming soon",
      showConfirmButton: false,
      timer: 2000,
      timerProgressBar: true,
    });
  };
  return (
    <div className="footer-wrapper"   
      style={{
        borderTop: "2px solid #333", 
        marginTop: 30
      }}>
      <div className="footer-section-one" style={{marginTop: 10, marginLeft: 5}}>
        <div className="footer-logo-container">
          {/* <img src={Logo} alt="" /> */}
          <h1 style={{ fontSize: 45, color: "red", fontWeight: "bold" }}>
            ZICOSU
          </h1>
        </div>
        <div className="footer-icons">
          <BsTwitter onClick={Notify}/>
          <SiLinkedin onClick={Notify}/>
          <BsYoutube onClick={Notify}/>
          <FaFacebookF onClick={Notify}/>
          <FaTiktok onClick={Notify}/>
        </div>
      </div>
      <div className="footer-section-two" style={{marginTop: 20, marginRight: 25}}>
        {/* <div className="footer-section-columns">
          <span>Contact Us</span>
          
        </div> */}
        {/* <div className="footer-section-columns">
          <span></span>
          <span>244-5333-7783</span>
        </div> */}
        <div className="footer-section-columns">
          <span onClick={Notify}>Contact Us</span>
          <span onClick={Notify}>Terms & Conditions</span>
          <span onClick={Notify}>Privacy Policy</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
