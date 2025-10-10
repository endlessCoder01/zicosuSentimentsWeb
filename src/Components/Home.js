import React from "react";
import BannerBackground from "../Assets/home-banner-background.png";
import BannerImage from "../Assets/home-banner-image.png";
import Navbar from "./Navbar";
import { FiArrowRight } from "react-icons/fi";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home-container">
      <Navbar />
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          <img src={BannerBackground} alt="" />
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading">
            Welcome to ZICOSU
          </h1>
          <p className="primary-text">
           Education Is Our Birthright
          </p>
         <Link to="/signup/one">
          <button className="secondary-button">
            Sign Up <FiArrowRight />{" "}
          </button>
        </Link>
        </div>
        <div className="home-image-section">
          <img src={BannerImage} alt="" style={{borderRadius: "50%"}}/>
        </div>
      </div>
    </div>
  );
};

export default Home;
