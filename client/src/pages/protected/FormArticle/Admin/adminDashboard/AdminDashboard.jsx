import { FaHome, FaUsers, FaChartLine, FaCog, FaPenFancy, FaStar, FaFileAlt, FaBell, FaFileAlt, FaSignOutAlt } from 'react-icons/fa'; // Importing icons
import './AdminDashboard.css'; // Import CSS for styling
import ChartComponent from './ChartComponent';

const AdminDashboard = () => {
  return (
    <div className="dashboard-container">
      <aside className="sidebar">
        <h2>Admin Panel</h2>
        <nav>
          <ul>
            <li>
              <FaHome /> <span>Home</span>
            </li>
            <li>
              <FaUsers /> <span>Users</span>
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
      <main className="main-content">
        <h1>Welcome to the Admin Dashboard</h1>
        <p>This is where you can manage your application.</p>
        <ChartComponent />
      </main>
    </div>
  );
};

export default AdminDashboard;
