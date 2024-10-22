import { useEffect, useState } from 'react';
import './Manage.css';
import { Link, Outlet, useLocation } from 'react-router-dom';

const Manage = () => {
  const [activeTab, setActiveTab] = useState(1);
  const [managerId, setManagerId] = useState(null);
  const location = useLocation();

  useEffect(() => {
    // Get manager ID from localStorage
    const savedManagerId = localStorage.getItem('manager');
    if (savedManagerId) {
      setManagerId(savedManagerId);
    }
  }, []);

  useEffect(() => {
    // Set active tab based on current path
    if (location.pathname.includes('manage-order')) {
      setActiveTab(2);
    } else {
      setActiveTab(1);
    }
  }, [location.pathname]);

  // Navigation items with proper path construction
  const navItems = [
    { 
      id: 1, 
      name: 'Work Rooms', 
      path: '' // Base path for work rooms
    },
    { 
      id: 2, 
      name: 'My Manager', 
      path: managerId ? `manage-order/${managerId}` : '/manage' 
    }
  ];

  return (
    <div className="workroom-container">
      <h1>Manage</h1>
      
      <div className="tabs-container">
        <div className="tabs">
          {navItems.map((item) => (
            <Link
              key={item.id}
              to={item.path}
              onClick={() => setActiveTab(item.id)}
              className={`tab-btn ${activeTab === item.id ? 'active' : ''}`}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>

      <Outlet />
    </div>
  );
};

export default Manage;