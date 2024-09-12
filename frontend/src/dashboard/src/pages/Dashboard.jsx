import { useState } from 'react';
import './Dashboard.css';

const Profile = () => (
  <div>
    <h2>Profile Page</h2>
    <p>This is the profile page content.</p>
    <p>This is the profile page content.</p>
    <p>This is the profile page content.</p>
    <p>This is the profile page content.</p>
    <p>This is the profile page content.</p>
    <p>This is the profile page content.</p>
    <p>This is the profile page content.</p>
    <p>This is the profile page content.</p>
    <p>This is the profile page content.</p>
    <p>This is the profile page content.</p>
    <p>This is the profile page content.</p>
    <p>This is the profile page content.</p><p>This is the profile page content.</p>
    <p>This is the profile page content.</p>
    <p>This is the profile page content.</p>
    <p>This is the profile page content.</p><p>This is the profile page content.</p>
    <p>This is the profile page content.</p>
    <p>This is the profile page content.</p>
    <p>This is the profile page content.</p>vvvv<p>This is the profile page content.</p>
    <p>This is the profile page content.</p>
    <p>This is the profile page content.</p>
    <p>This is the profile page content.</p><p>This is the profile page content.</p>
    <p>This is the profile page content.</p>
    <p>This is the profile page content.</p>
    <p>This is the profile page content.</p><p>This is the profile page content.</p>
    <p>This is the profile page content.</p>
    <p>This is the profile page content.</p>
    <p>This is the profile page content.</p><p>This is the profile page content.</p>
    <p>This is the profile page content.</p>
    <p>This is the profile page content.</p>
    <p>This is the profile page content.</p>
  </div>
);

const Settings = () => <div>Settings Page Content</div>;
const Wallet = () => <div>Wallet Page Content</div>;

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
    <div className="main-container">
      {/* Sidebar */}
      <div className="sidebar">
        <ul>
          <li onClick={() => setActivePage('Profile')}>Profile</li>
          <li onClick={() => setActivePage('Settings')}>Settings</li>
          <li onClick={() => setActivePage('Wallet')}>Wallet</li>
        </ul>
      </div>

      {/* Content Area */}
      <div className="content-area">
        {/* Header */}
        <header className="header">My Dashboard

        </header>
        <hr style={{ width: "100%", color: "#34495e", marginTop: "0px" }} />

        {/* Scrollable Content */}
        <div className="cont">
          {renderPage()}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
