import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';

const styles = {
  dashboardContainer: {
    minHeight: '100vh',
    backgroundColor: '#f5f5f5',
  },
  header: {
    backgroundColor: '#f5f5f5',
    borderBottom: '1px solid #e0e0e0',
    padding: '10px 20px',
  },
  headerContent: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    maxWidth: '1200px',
    margin: '0 auto',
  },
  logo: {
    height: '40px',
  },
  rightSection: {
    display: 'flex',
    alignItems: 'center',
    gap: '20px',
  },
  viewJobsButton: {
    padding: '8px 16px',
    backgroundColor: 'white',
    border: '1px solid #e0e0e0',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '14px',
  },
  iconButton: {
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    padding: '8px',
    position: 'relative',
  },
  dropdown: {
    position: 'absolute',
    top: '100%',
    right: '0',
    backgroundColor: 'white',
    border: '1px solid #e0e0e0',
    borderRadius: '4px',
    boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
    minWidth: '200px',
    zIndex: 1000,
  },
  profileSection: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    position: 'relative',
  },
  profileImage: {
    width: '32px',
    height: '32px',
    borderRadius: '50%',
    objectFit: 'cover',
  },
  navigationBar: {
    backgroundColor: 'white',
    borderBottom: '1px solid #e0e0e0',
    padding: '10px 20px',
  },
  navList: {
    display: 'flex',
    gap: '20px',
    listStyle: 'none',
    margin: 0,
    padding: 0,
    maxWidth: '1200px',
    margin: '0 auto',
  },
  navItem: {
    padding: '8px 16px',
    cursor: 'pointer',
    fontSize: '14px',
    color: '#333',
  },
  dropdownMenu: {
    padding: '8px 0',
  },
  dropdownItem: {
    padding: '8px 16px',
    cursor: 'pointer',
    display: 'block',
    width: '100%',
    textAlign: 'left',
    border: 'none',
    backgroundColor: 'transparent',
    fontSize: '14px',
  },
  messageDropdown: {
    width: '300px',
    padding: '16px',
  },
  mainContent: {
    padding: '20px',
    maxWidth: '1200px',
    margin: '0 auto',
  }
};

const DashboardWriter = () => {
  const [showMessages, setShowMessages] = useState(false);
  const [showProfile, setShowProfile] = useState(false);

  const navItems = ['Dashboard', 'View New Jobs', 'Manage Projects', 'Payments', 'Analytics'];
  const profileMenuItems = [
    'Edit My Account',
    'View Cash Payment',
    'Payment Methods',
    'Help',
    'Logout'
  ];

  return (
    <div style={styles.dashboardContainer}>
      {/* Header */}
      <header style={styles.header}>
        <div style={styles.headerContent}>
          <img 
            src="/api/placeholder/150/40" 
            alt="Logo" 
            style={styles.logo}
          />
          
          <div style={styles.rightSection}>
            <button style={styles.viewJobsButton}>
              View Jobs Queue
            </button>

            {/* Messages */}
            <div style={{ position: 'relative' }}>
              <button 
                style={styles.iconButton}
                onClick={() => setShowMessages(!showMessages)}
              >
                📨
              </button>
              {showMessages && (
                <div style={{...styles.dropdown, ...styles.messageDropdown}}>
                  <h3 style={{ margin: '0 0 10px 0' }}>Messages</h3>
                  <p>No new messages</p>
                </div>
              )}
            </div>

            {/* Profile */}
            <div style={styles.profileSection}>
              <button 
                style={styles.iconButton}
                onClick={() => setShowProfile(!showProfile)}
              >
                <img 
                  src="/api/placeholder/32/32" 
                  alt="Profile" 
                  style={styles.profileImage}
                />
              </button>
              {showProfile && (
                <div style={styles.dropdown}>
                  <div style={styles.dropdownMenu}>
                    {profileMenuItems.map((item, index) => (
                      <button 
                        key={index}
                        style={styles.dropdownItem}
                        onMouseEnter={(e) => {
                          e.target.style.backgroundColor = '#f5f5f5';
                        }}
                        onMouseLeave={(e) => {
                          e.target.style.backgroundColor = 'transparent';
                        }}
                      >
                        {item}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav style={styles.navigationBar}>
        <ul style={styles.navList}>
          {navItems.map((item, index) => (
            <li 
              key={index} 
              style={styles.navItem}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = '#f5f5f5';
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = 'transparent';
              }}
            >
              {item}
            </li>
          ))}
        </ul>
      </nav>

      {/* Main Content */}
      <main style={styles.mainContent}>
        <Outlet />
      </main>
    </div>
  );
};

export default DashboardWriter;