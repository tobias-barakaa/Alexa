import { useEffect, useState } from 'react';
import './Manage.css';
import { Link, Outlet, useLocation } from 'react-router-dom';

const Manage = () => {
  const [activeTab, setActiveTab] = useState(1);
  const [managerId, setManagerId] = useState(null);
  const location = useLocation();
  const [pathSegment, setPathSegment] = useState('');

  useEffect(() => {
    // Extracting everything after '/manage/'
    const basePath = '/manage/';
    const extractedPath = location.pathname.split(basePath)[1]; // Extract the part after '/manage/'
    setPathSegment(extractedPath || '');  // Ensure it defaults to an empty string
  }, [location]);

  useEffect(() => {
    // Set active tab based on pathSegment
    if (pathSegment.length === 1) {
      setActiveTab(1);
    } else {
      setActiveTab(2);
    }
  }, [pathSegment]); // Runs whenever pathSegment changes

  useEffect(() => {
    // Get manager ID from localStorage
    const savedManagerId = localStorage.getItem('manager');
    if (savedManagerId) {
      setManagerId(savedManagerId); 
    }
  }, []); 

  // Navigation items with correct manager ID interpolation
  const navItems = [
    { id: 1, name: 'Work Rooms', path: '' },
    { id: 2, name: 'My Manager', path: `manage-order/${managerId}` }, 
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
              className={`tab-btn ${activeTab === item.id ? 'active' : ''}`} // Adjust active class based on item.id
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
