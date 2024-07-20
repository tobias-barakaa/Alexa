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
          <FaHome /> <span><Link to="/admindashboard">Home</Link></span>
        </li>
        <li>
          <FaUsers /> <span><Link to="/admindashboard/users">Users</Link></span>
        </li>
        <li>
          <FaPenFancy /> <span>Writers</span>
        </li>
        <li>
          <FaStar /> <span>Reviews</span>
        </li>
        <li>
          <FaFileAlt /> <span>Articles</span>
        </li>
        <li>
          <FaBell /> <span>Notifications</span>
        </li>
        <li>
          <FaFileAlt /> <span>Reports</span>
        </li>
        <li>
          <FaChartLine /> <span>Analytics</span>
        </li>
        <li>
          <FaCog /> <span>Settings</span>
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
