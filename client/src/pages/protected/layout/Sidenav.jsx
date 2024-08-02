import { Link } from 'react-router-dom';
import './Sidenav.css';

const Sidebar = () => {

  return (
    <div className="sidena">
      <div className="sidebar-content-item">
        <span className='services'>Services</span>
        <ul className="sidebar-dropdown">
          <li><span><Link to="blogorder"><span className='blog-writing'>📝</span> Blog Writing</Link></span></li>
          <li><span><Link to="articlecreation"><span className='blog-writing'>✍️</span> Article Creation</Link></span></li>
          <li><span><Link to="resumecvwriting"><span className='blog-writing'>📄</span> Resume/CV Writing</Link></span></li>
          <li><span><Link to="emailcopywriting"><span className='blog-writing'>📧 </span>Email Copywriting</Link></span></li>
        </ul>
      </div>



      <div class="sidebar-menu-container">
  <div class="sidebar-menu-content">
    <ul class="sidebar-menu-list">
      <li class="sidebar-menu-item">
        <Link to="editorders" class="sidebar-menu-link">
          <span class="sidebar-menu-icon">🖋️</span>
          <span class="sidebar-menu-text">Edit Orders</span>
        </Link>
      </li>
      <li class="sidebar-menu-item">
        <Link to="ordershistory" class="sidebar-menu-link">
          <span class="sidebar-menu-icon">🕰️</span>
          <span class="sidebar-menu-text">Orders History</span>
        </Link>
      </li>
      <li class="sidebar-menu-item">
        <Link to="poetryandsong" class="sidebar-menu-link">
          <span class="sidebar-menu-icon">🏁</span>
          <span class="sidebar-menu-text">Completed Orders</span>
        </Link>
      </li>
    </ul>
    
    <div class="sidebar-options">
      <h4 class="sidebar-options-title">Options</h4>
      <Link to="feedback" class="sidebar-menu-link">
        <span class="sidebar-menu-text">Feedback</span>
        <span class="sidebar-menu-icon">📝</span>
      </Link>
    </div>
  </div>
  
  <div class="sidebar-profile">
    <img src="path-to-avatar-image.jpg" alt="Profile Avatar" class="sidebar-profile-avatar" />
    <div class="sidebar-profile-info">
      <span class="sidebar-profile-name">John Doe</span>
      <span class="sidebar-profile-role">Premium User</span>
    </div>
  </div>
</div>




      
    </div>
  );
};
export default Sidebar;
