// AdminDashboard.js
import { FaHome, FaUsers, FaChartLine, FaCog } from 'react-icons/fa'; // Importing icons
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
              <FaChartLine /> <span>Analytics</span>
            </li>
            <li>
              <FaCog /> <span>Settings</span>
            </li>
          </ul>
        </nav>
      </aside>
      <main className="main-content">
        <h1>Welcome to the Admin Dashboard</h1>
        <p>This is where you can manage your application.</p>
        {/* You can add more components like charts, tables, etc. here */}
        <ChartComponent />
      </main>
    </div>
  );
};

export default AdminDashboard;