import { Link } from 'react-router-dom';
import './Sidenav.css';

const Sidebar = () => {
  return (
    <div className="sidena">
      <div className="sidebar-content-item">
        <span>📦 Order</span>
        <ul className="sidebar-dropdown">
          <li><span><Link to="blogorder">📝 Blog Writing</Link></span></li>
          <li><span><Link to="articlecreation">✍️ Article Creation</Link></span></li>
          <li><span><Link to="poetryandsong">🎵 Poetry/Song Writing</Link></span></li>
          <li><span><Link to="contentediting">📚 Content Editing</Link></span></li>
          <li><span><Link to="seooptimization">📊 SEO Optimization</Link></span></li>
          <li><span><Link to="resumecvwriting">📄 Resume/CV Writing</Link></span></li>
          <li><span><Link to="emailcopywriting">📧 Email Copywriting</Link></span></li>
        </ul>
      </div>
      <div className="sidebar-item">📅 Schedule</div>
      <div className="sidebar-item">📈 Manage Orders</div>
      <div className="sidebar-item">⚙️ Settings</div>
      <div className="sidebar-item">❓ Help</div>
      <div className="sidebar-item">💳 Wallet</div>
      <div className="sidebar-item">👤 Profile</div>
      <div className="sidebar-item">🚪 Logout</div>
    </div>
  );
};

export default Sidebar;
