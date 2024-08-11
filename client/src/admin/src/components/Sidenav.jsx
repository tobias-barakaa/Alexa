import  { useState } from 'react';
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
        <li>User</li>
        <li>Product</li>
        <li>Reports</li>
        <li onClick={toggleOrders} className={`dropdown-toggle ${isOrdersOpen ? 'open' : ''}`}>
          Orders
        </li>
        {isOrdersOpen && (
          <ul className="dropdown-list">
            <Link to="/admindashboard/blog">Blog</Link>
            <li>Articles</li>
            <li>Resume</li>
            <li>Email copywriting</li>
          </ul>
        )}
        <li>Analytics</li>
        <li>Settings</li>
        <li>Profile</li>
      </ul>
    </div>
  );
};

export default Sidenav;
