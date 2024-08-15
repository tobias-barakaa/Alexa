import { useState } from 'react';
import '../styles/components/Sidenav.css'; // Import CSS for styling
import { Link } from 'react-router-dom';

const Sidenav = () => {
  const [isOrdersOpen, setIsOrdersOpen] = useState(false);

  const toggleOrders = () => {
    setIsOrdersOpen(!isOrdersOpen);
  };

  return (
    <div className="side">
      <h2>Admin Panel</h2>
      <ul className="side-list">
        <li><Link to="/admindashboard/users">User</Link></li>
        <li><Link to="/admindashboard/products">Product</Link></li>
        <li><Link to="/admindashboard/reports">Reports</Link></li>
        <li onClick={toggleOrders} className={`dropdown-toggle ${isOrdersOpen ? 'open' : 'open'}`}>
          Orders
        </li>
        {isOrdersOpen && (
          <ul className="dropdown-list">
            <li><Link to="/admindashboard/blog">Blog</Link></li>
            <li><Link to="/admindashboard/articles">Articles</Link></li>
            <li>Resume</li>
            <li>Email Copywriting</li>
          </ul>
        )}
        <li><Link to="/admindashboard/analytics">Analytics</Link></li>
        <li><Link to="/admindashboard/settings">Settings</Link></li>
        <li><Link to="/admindashboard/profile">Profile</Link></li>
      </ul>
    </div>
  );
};

export default Sidenav;