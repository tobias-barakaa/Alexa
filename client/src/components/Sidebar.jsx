import { FaHome, FaUsers, FaChartLine, FaCog, FaPenFancy, FaStar, FaFileAlt, FaBell, FaSignOutAlt } from 'react-icons/fa';
import './Sidebar.css';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <h2>Admin Panel</h2>
      <nav>
        <ul>
          <li>
            <Link to="/admindashboard">
              <FaHome /> <span>Home</span>
            </Link>
          </li>
          <li>
            <Link to="/admindashboard/users">
              <FaUsers /> <span>Users</span>
            </Link>
          </li>
          <li>
            <Link to="/admindashboard/writers">
              <FaPenFancy /> <span>Writers</span>
            </Link>
          </li>
          <li>
            <Link to="/admindashboard/reviews">
              <FaStar /> <span>Reviews</span>
            </Link>
          </li>
          <li>
            <Link to="/admindashboard/orders">
              <FaFileAlt /> <span>Orders</span>
            </Link>
          </li>
          <li>
            <Link to="/admindashboard/notifications">
              <FaBell /> <span>Notifications</span>
            </Link>
          </li>
          <li>
            <Link to="/admindashboard/reports">
              <FaFileAlt /> <span>Reports</span>
            </Link>
          </li>
          <li>
            <Link to="/admindashboard/analytics">
              <FaChartLine /> <span>Analytics</span>
            </Link>
          </li>
          <li>
            <Link to="/admindashboard/settings">
              <FaCog /> <span>Settings</span>
            </Link>
          </li>
          <li>
            <Link to="/admindashboard/profile">
              <FaCog /> <span>Profile</span>
            </Link>
          </li>
          <li className="logout">
            <FaSignOutAlt /> <span>Logout</span>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
