import React from 'react';
import './DashboardMain.css';
import alexxa from '../../../assets/images/alexxa.png';
import OrderNow from './OrderNow';

const DashboardMain = () => {
  return (
    <div className="dashboard-main">
      <div className="welcome-section">
        <div className="welcome-message">
          <h1>Welcome to Dashboard, John Doe</h1>
          <p>Meet world-class publishing professionals</p>
        </div>
        <img src={alexxa} alt="Dashboard" className="dashboard-image" />
      </div>
      <div className="overview-section">
        <div className="statistics">
          <div className="stat-item">
            <h3>Recent Orders</h3>
            <p>Number of recent orders: 5</p>
          </div>
          <div className="stat-item">
            <h3>Ongoing Projects</h3>
            <p>Number of ongoing projects: 3</p>
          </div>
          <div className="stat-item">
            <h3>Upcoming Deadlines</h3>
            <p>Next deadline: July 15, 2024</p>
          </div>
        </div>
      </div>
      <OrderNow />
      
    </div>
  );
};

export default DashboardMain;