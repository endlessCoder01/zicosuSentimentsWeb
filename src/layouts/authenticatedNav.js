import React, { useState } from "react";
import {
  FaHome,
  FaInfoCircle,
  FaServicestack,
  FaBars,
  FaUser,
  FaTimes,
  FaPowerOff,
} from "react-icons/fa";
import "./LandingPage.css";
import Logo from "../Assets/home-banner-image.png";
import { Link } from "react-router-dom";

const AuthenticatedNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* ✅ Hamburger Button (visible only on mobile) */}
      <div className="hamburger" onClick={() => setIsOpen(true)}>
        <FaBars size={24} />
      </div>

      {/* ✅ Sidebar */}
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
            <Link to="/home" onClick={() => setIsOpen(false)}>
              <FaHome className="icon" /> Home
            </Link>
          </li>
          <li>
            <Link to="/sentiments" onClick={() => setIsOpen(false)}>
              <FaServicestack className="icon" /> Send Sentiments
            </Link>
          </li>
          <li>
            <Link to="/profile" onClick={() => setIsOpen(false)}>
              <FaUser className="icon" /> Profile
            </Link>
          </li>
          <li>
            <Link to="/about" onClick={() => setIsOpen(false)}>
              <FaInfoCircle className="icon" /> About
            </Link>
          </li>
          <li>
            <Link to="/logout" onClick={() => setIsOpen(false)}>
              <FaPowerOff className="icon" /> Logout
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default AuthenticatedNav;
