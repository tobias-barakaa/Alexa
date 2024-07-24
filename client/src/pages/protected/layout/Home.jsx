// Home.js
import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-box" style={{ backgroundColor: '#76bdff' }}>
        <span>📰 News</span>
        <span>Latest Updates</span>
      </div>
      <div className="home-box" style={{ backgroundColor: '#1F4283' }}>
        <span>📚 Resources</span>
        <span>Useful Materials</span>
      </div>
      <div className="home-box" style={{ backgroundColor: '#1F4384' }}>
        <span>📊 Reports</span>
        <span>Performance Metrics</span>
      </div>
      <div className="home-box" style={{ backgroundColor: '#078BC8' }}>
        <span>📅 Events</span>
        <span>Upcoming Activities</span>
      </div>
    </div>
  );
};

export default Home;
