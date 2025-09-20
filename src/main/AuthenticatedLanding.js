import React, { useState, useEffect } from "react";
import {
  FaBars,
} from "react-icons/fa";
import "./LandingPage.css";
import Footer from "../Components/Footer";
import Work from "../Components/Work";


// Sample slider images
import Slide1 from "../Assets/buse3.png";
import Slide2 from "../Assets/buse2.png";
import Slide3 from "../Assets/bindura1.png";

const AuthenticatedLanding = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [current, setCurrent] = useState(0);

  const slides = [
    { img: Slide1, title: "Learn Anywhere, Anytime" },
    { img: Slide2, title: "Share Your Voice" },
    { img: Slide3, title: "Grow Together" },
  ];

  // Auto-slide every 3s
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div>
      {/* Main Content */}

        {/* Mobile Hamburger */}
        <FaBars className="hamburger" onClick={() => setIsOpen(true)} />

        <h1 style={{margin:10}}>
          <marquee>Welcome to Our Platform</marquee>
        </h1>

        {/* CTA Section */}
        <div style={{ textAlign: "center" }}>

          {/* 🔹 Image Slider */}
          <div
            style={{
              position: "relative",
              width: "80%",
              margin: "0 auto 20px auto",
              borderRadius: "15px",
              overflow: "hidden",
              boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
            }}
          >
            <img
              src={slides[current].img}
              alt="slide"
              style={{
                width: "100%",
                height: "400px",
                objectFit: "cover",
                borderRadius: "15px",
              }}
            />
            <h3
              style={{
                position: "absolute",
                bottom: "10px",
                left: "50%",
                transform: "translateX(-50%)",
                background: "rgba(0,0,0,0.6)",
                color: "#fff",
                padding: "6px 12px",
                borderRadius: "10px",
                fontSize: "16px",
              }}
            >
              {slides[current].title}
            </h3>
          </div>

          <h2 style={{ textAlign: "center", marginBottom: 15 }}>
            Education is our birth-right
          </h2>
                    <button className="cta-btn" style={{ marginBottom: 2}}>
            Send Sentiment
          </button>
        </div>

                 <Work />

        {/* 🔹 Chat & Recents Section */}
        <div className="content-container">
          {/* Chat Area */}
          <div className="chatspace">
            <h3>Sentiment Space</h3>
            <div className="chat-input">
              <input type="text" placeholder="Type a message..." />
              <button>Send</button>
            </div>
          </div>

          {/* Recents Area */}
          <div className="recents">
            <h3>Recents</h3>
            <ul>
              <li>
                <strong>John Doe</strong> - Sent a sentiment
              </li>
              <li>
                <strong>Michael</strong> - Joined the platform
              </li>
            </ul>
          </div>
        </div>

        <Footer />
     
    </div>
  );
};

export default AuthenticatedLanding;
