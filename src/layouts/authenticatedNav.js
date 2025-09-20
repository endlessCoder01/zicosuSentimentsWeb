import React, { useState, useEffect } from "react";
import {
  FaHome,
  FaInfoCircle,
  FaPhoneAlt,
  FaServicestack,
  FaBars,
  FaTimes,
  FaPowerOff,
} from "react-icons/fa";
import "./LandingPage.css";
import Footer from "../Components/Footer";
import Work from "../Components/Work";
import Logo from "../Assets/home-banner-image.png";
import { Link } from "react-router-dom";

const AuthenticatedNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      {/* Sidebar Navbar */}
      <nav className={`sidebar ${isOpen ? "open" : ""}`}>
        <div className="sidebar-header">
          <h2 className="logo">
            <img
              src={Logo}
              alt="logo"
              style={{ height: 50, width: 50, borderRadius: 35 }}
            />
          </h2>
          <FaTimes className="close-btn" onClick={() => setIsOpen(false)} />
        </div>

        <ul>
          <li>
            <Link to="/home">
              <FaHome className="icon" /> Home
            </Link>
          </li>
          <li>
            <Link to="/sentiments">
              <FaServicestack className="icon" /> Send Sentiments
            </Link>
          </li>
          {/* <li>
            <Link to="/contact">
              <FaPhoneAlt className="icon" /> Contact Us
            </Link>
          </li> */}
          <li>
            <Link to="/about">
              <FaInfoCircle className="icon" /> About
            </Link>
          </li>
          <li>
            <Link to="#">
              <FaPowerOff className="icon" /> Logout
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default AuthenticatedNav;
