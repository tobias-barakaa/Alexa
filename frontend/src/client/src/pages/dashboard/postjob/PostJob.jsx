import React, { useState } from 'react';
import './PostJob.css'; // Correct CSS file reference
import { Link, Outlet } from 'react-router-dom';

const PostJob = () => {
  const [activeTab, setActiveTab] = useState(''); // Initialize with an empty string
  
  const navItems = [
    { id: 1, name: 'Custom Post', path: '' },
    { id: 2, name: 'My Favorites', path: 'favorites' },
    { id: 3, name: 'Hire a Writer', path: 'find-writer' }, // Placeholder path
    { id: 4, name: 'Job Listings', path: 'job-listings' }, // Placeholder path
  ];

  return (
    <>
      <nav className="nav-container">
        <div className="nav-items">
          {navItems.map((item) => (
            <Link
              key={item.id}
              to={item.path}
              onClick={() => setActiveTab(item.path)} // Set activeTab to item.path
              className={`nav-item ${activeTab === item.path ? 'active' : ''}`} // Compare correctly
            >
              {item.name}
            </Link>
          ))}
        </div>
      </nav>
      <Outlet />
    </>
  );
};

export default PostJob;
