// HireCustoms.jsx
import React, { useState } from 'react';
import './PostJob.css';
import { Outlet } from 'react-router-dom';

const PostJob = () => {
  const [activeTab, setActiveTab] = useState('CustomPost');
  
  const navItems = [
    'CustomPost',
    'My Favorites',
    'Hire a Writer',
    'Job Listings'
  ];

  return (
    <>
    <nav className="nav-container">
      <div className="nav-items">
        {navItems.map((item) => (
          <button
            key={item}
            onClick={() => setActiveTab(item)}
            className={`nav-item ${activeTab === item ? 'active' : ''}`}
          >
            {item}
          </button>
        ))}
      </div>
    </nav>
<Outlet />
    </>
  );
};

export default PostJob;