import { Link } from 'react-router-dom';
import './Sidenav.css';

const Sidebar = () => {

  return (
    <div className="sidena">
      <div className="sidebar-content-item">
        <span>📦 Services</span>
        <ul className="sidebar-dropdown">
          <li><span><Link to="blogorder">📝 Blog Writing</Link></span></li>
          <li><span><Link to="articlecreation">✍️ Article Creation</Link></span></li>
          <li><span><Link to="seooptimization">📊 SEO Optimization</Link></span></li>
          <li><span><Link to="resumecvwriting">📄 Resume/CV Writing</Link></span></li>
          <li><span><Link to="emailcopywriting">📧 Email Copywriting</Link></span></li>
        </ul>
      </div>
      <div className="sidebar-content-item">
        <span>📊 Manage Orders</span>
        <ul className="sidebar-dropdown">
          <li><span><Link to="editorders">🖋️ Edit Orders</Link></span></li>
          <li><span><Link to="ordershistory">🕰️ Orders History</Link></span></li>
          <li><span><Link to="poetryandsong">🏁 Completed Orders</Link></span></li>
        </ul>
      </div>
      <div className="sidebar-item">⚙️ Settings</div>
      <div className="sidebar-item">💳 Wallet</div>
      <div className="sidebar-item">👤 Profile</div>
      <div className="sidebar-item">🚪 Logout</div>
    </div>
  );
};

export default Sidebar;
