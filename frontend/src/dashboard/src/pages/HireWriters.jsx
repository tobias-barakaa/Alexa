import React from 'react';
import './HireWriters.css';
import { FaPen, FaUser } from 'react-icons/fa';

const HireWriters = () => {
  return (
    <>
      <header className="header">
        <div className="logo">
          <img src="logo.png" alt="Logo" />
        </div>
        <div className="nav-items">
          <a href="#">Become a Writer</a>
          <a href="#">Contact</a>
        </div>
      </header>

      <section className="hero">
        <div className="hero-container">
          <h1>Quality Offshore</h1>
          <h2 className="shiny-text">Expert Writers</h2>
          <p>Hire world-class talent you'll want to work with for good.</p>
          <div className="animated-section">
            <p>Start building your team today!</p>
          </div>
          <div className="buttons">
            <button className="hire-writer">Hire Writer</button>
            <button className="become-writer">Become One</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default HireWriters;
