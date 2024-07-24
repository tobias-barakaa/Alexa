import { Link } from 'react-router-dom';
import './Sidenav.css';

const Sidebar = () => {
  

  return (
    <div className="sidena">
      <div className="sidebar-content-item" >
        <span>📦 Order</span>
       
          <ul className="sidebar-dropdown">
          <li><span><Link to="blogorder">📝 Blog Writing</Link></span></li>
<li><span><Link to="articlecreation"> ✍️ Article Creation</Link></span></li>
<li>🎵 Poetry/Song Writing</li>
<li>📚 Content Editing</li>
<li>📊 SEO Optimization</li>
<li>📄 Resume/CV Writing</li>
<li>📧 Email Copywriting</li>
          </ul>
      
      </div>
      <div className="sidebar-item">📅 Schedule</div>
<div className="sidebar-item">📈 Analytics</div>
<div className="sidebar-item">⚙️ Settings</div>
<div className="sidebar-item">❓ Help</div>
<div className="sidebar-item">💳 Wallet</div>
<div className="sidebar-item">👤 Profile</div>
<div className="sidebar-item">🚪 Logout</div>



    </div>
  );
};

export default Sidebar;
