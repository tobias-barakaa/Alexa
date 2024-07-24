import { useState } from 'react';
import './Sidenav.css';

const Sidebar = () => {
  const [isOrderOpen, setIsOrderOpen] = useState(false);

  const toggleOrderDropdown = () => {
    setIsOrderOpen(!isOrderOpen);
  };

  return (
    <div className="sidenav">
      <div className="sidebar-item" onClick={toggleOrderDropdown}>
        <span>📦 Order</span>
        {isOrderOpen && (
          <ul className="dropdown">
            <li>📝 Blog Writing</li>
            <li>✍️ Article Creation</li>
            <li>🎵 Poetry/Song Writing</li>
            <li>📚 Content Editing</li>
            <li>📊 SEO Optimization</li>
          </ul>
        )}
      </div>
      <div className="sidebar-item">📅 Schedule</div>
      <div className="sidebar-item">📈 Analytics</div>
      <div className="sidebar-item">⚙️ Settings</div>
      <div className="sidebar-item">❓ Help</div>
    </div>
  );
};

export default Sidebar;
