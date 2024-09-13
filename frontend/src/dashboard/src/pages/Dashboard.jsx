import React, { useState } from 'react';
import './Dashboard.css';

const Profile = () => <div>Profile Content Profile Content Profile Content Profile Content Profile Content

Profile Content Profile Content Profile Content Profile Content Profile Content
Profile Content Profile Content Profile Content Profile Content Profile Content

Profile Content Profile Content Profile Content Profile Content Profile Content
Profile Content Profile Content Profile Content Profile Content Profile Content

Profile Content Profile Content Profile Content Profile Content Profile Content
Profile Content Profile Content Profile Content Profile Content Profile Content

Profile Content Profile Content Profile Content Profile Content Profile Content
Profile Content Profile Content Profile Content Profile Content Profile Content

Profile Content Profile Content Profile Content Profile Content Profile Content
Profile Content Profile Content Profile Content Profile Content Profile Content

Profile Content Profile Content Profile Content Profile Content Profile Content
Profile Content Profile Content Profile Content Profile Content Profile Content

Profile Content Profile Content Profile Content Profile Content Profile Content
Profile Content Profile Content Profile Content Profile Content Profile Content

Profile Content Profile Content Profile Content Profile Content Profile Content
Profile Content Profile Content Profile Content Profile Content Profile Content

Profile Content Profile Content Profile Content Profile Content Profile Content
Profile Content Profile Content Profile Content Profile Content Profile Content

Profile Content Profile Content Profile Content Profile Content Profile Content
Profile Content Profile Content Profile Content Profile Content Profile Content

Profile Content Profile Content Profile Content Profile Content Profile Content
Profile Content Profile Content Profile Content Profile Content Profile Content

Profile Content Profile Content Profile Content Profile Content Profile Content
Profile Content Profile Content Profile Content Profile Content Profile Content

Profile Content Profile Content Profile Content Profile Content Profile Content
Profile Content Profile Content Profile Content Profile Content Profile Content

Profile Content Profile Content Profile Content Profile Content Profile Content
Profile Content Profile Content Profile Content Profile Content Profile Content

Profile Content Profile Content Profile Content Profile Content Profile Content
Profile Content Profile Content Profile Content Profile Content Profile Content

Profile Content Profile Content Profile Content Profile Content Profile Content
Profile Content Profile Content Profile Content Profile Content Profile Content

Profile Content Profile Content Profile Content Profile Content Profile Content
Profile Content Profile Content Profile Content Profile Content Profile Content

Profile Content Profile Content Profile Content Profile Content Profile Content
Profile Content Profile Content Profile Content Profile Content Profile Content

Profile Content Profile Content Profile Content Profile Content Profile Content
Profile Content Profile Content Profile Content Profile Content Profile Content

Profile Content Profile Content Profile Content Profile Content Profile Content
Profile Content Profile Content Profile Content Profile Content Profile Content

Profile Content Profile Content Profile Content Profile Content Profile Content
Profile Content Profile Content Profile Content Profile Content Profile Content

Profile Content Profile Content Profile Content Profile Content Profile Content
Profile Content Profile Content Profile Content Profile Content Profile Content

Profile Content Profile Content Profile Content Profile Content Profile Content
Profile Content Profile Content Profile Content Profile Content Profile Content

Profile Content Profile Content Profile Content Profile Content Profile Content
Profile Content Profile Content Profile Content Profile Content Profile Content

Profile Content Profile Content Profile Content Profile Content Profile Content
Profile Content Profile Content Profile Content Profile Content Profile Content

Profile Content Profile Content Profile Content Profile Content Profile Content
Profile Content Profile Content Profile Content Profile Content Profile Content

Profile Content Profile Content Profile Content Profile Content Profile Content
Profile Content Profile Content Profile Content Profile Content Profile Content

Profile Content Profile Content Profile Content Profile Content Profile Content
Profile Content Profile Content Profile Content Profile Content Profile Content

Profile Content Profile Content Profile Content Profile Content Profile Content
Profile Content Profile Content Profile Content Profile Content Profile Content

Profile Content Profile Content Profile Content Profile Content Profile Content
Profile Content Profile Content Profile Content Profile Content Profile Content

Profile Content Profile Content Profile Content Profile Content Profile Content
Profile Content Profile Content Profile Content Profile Content Profile Content

Profile Content Profile Content Profile Content Profile Content Profile Content
Profile Content Profile Content Profile Content Profile Content Profile Content

Profile Content Profile Content Profile Content Profile Content Profile Content
Profile Content Profile Content Profile Content Profile Content Profile Content

Profile Content Profile Content Profile Content Profile Content Profile Content
Profile Content Profile Content Profile Content Profile Content Profile Content

Profile Content Profile Content Profile Content Profile Content Profile Content
Profile Content Profile Content Profile Content Profile Content Profile Content

Profile Content Profile Content Profile Content Profile Content Profile Content
Profile Content Profile Content Profile Content Profile Content Profile Content

Profile Content Profile Content Profile Content Profile Content Profile Content
Profile Content Profile Content Profile Content Profile Content Profile Content

Profile Content Profile Content Profile Content Profile Content Profile Content
Profile Content Profile Content Profile Content Profile Content Profile Content

Profile Content Profile Content Profile Content Profile Content Profile Content
Profile Content Profile Content Profile Content Profile Content Profile Content

Profile Content Profile Content Profile Content Profile Content Profile Content
Profile Content Profile Content Profile Content Profile Content Profile Content

Profile Content Profile Content Profile Content Profile Content Profile Content
Profile Content Profile Content Profile Content Profile Content Profile Content

Profile Content Profile Content Profile Content Profile Content Profile Content
Profile Content Profile Content Profile Content Profile Content Profile Content

Profile Content Profile Content Profile Content Profile Content Profile Content
Profile Content Profile Content Profile Content Profile Content Profile Content

</div>;
const Settings = () => <div>Settings Content</div>;
const Wallet = () => <div>Wallet Content</div>;

const Dashboard = () => {
  const [activePage, setActivePage] = useState('Profile');

  const renderPage = () => {
    switch (activePage) {
      case 'Profile':
        return <Profile />;
      case 'Settings':
        return <Settings />;
      case 'Wallet':
        return <Wallet />;
      default:
        return <Profile />;
    }
  };

  return (
    <div className="app-container">
      <div className="sidebar">
        <button onClick={() => setActivePage('Profile')}>Profile</button>
        <button onClick={() => setActivePage('Settings')}>Settings</button>
        <button onClick={() => setActivePage('Wallet')}>Wallet</button>
      </div>
      <div className="main-cont">
        <div className="header">Header</div>
        <div className="cont">{renderPage()}</div>
      </div>
    </div>
  );
};

export default Dashboard;
