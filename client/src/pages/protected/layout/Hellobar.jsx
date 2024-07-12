import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const messages = [
    "Welcome to our website!",
    "Check out our latest offers!",
    "Dominican Republic, Haiti, Jamaica, Turks and Caicos Islands",
    "Explore all countries",
    "Have a great day!"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isSliding, setIsSliding] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsSliding(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % messages.length);
        setIsSliding(false);
      }, 500); // Half of the transition time
    }, 2000); // Change message every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="dashboard-header">
      <div className="main-nav">
        <div className="top-nav">
          <span className="home">
            Home<span>
              <Link to="/" ></Link>
            </span> | About Website | FAQ | Contact us
          </span>
        </div>
        <div className="middle-nav">
          <div className="message-container">
            <div className={`message ${isSliding ? 'slide-out' : ''}`}>
              {messages[currentIndex]}
            </div>
          </div>
        </div>
        {/* ... rest of the component remains the same ... */}
      </div>
    </div>
  );
}

export default Header;