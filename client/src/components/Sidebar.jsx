import { NavLink } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-logo">
        <h1>Admin</h1>
      </div>
      <nav className="sidebar-nav">
        <NavLink to="/admindashboard/articles" className="nav-item">
        <i className="bi bi-meta"></i> Articles
        </NavLink>
        <NavLink to="/admindashboard/orders" className="nav-item">
        <i className="bi bi-meta"></i> Orders
        </NavLink>
        {/* Add more navigation links as needed */}
      </nav>
    </div>
  );
};

export default Sidebar;
