import { Link } from 'react-router-dom';
import './Sidenav.css';

const Sidebar = () => {

  return (
    <>
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



      <div className="sidebar-menu-container">
  <div className="sidebar-menu-content">
    <ul className="sidebar-menu-list">
      <li className="sidebar-menu-item">
        <Link to="editorders" className="sidebar-menu-link">
          <span className="sidebar-menu-icon">🖋️</span>
          <span className="sidebar-menu-text">Edit Orders</span>
        </Link>
      </li>
      <li className="sidebar-menu-item">
        <Link to="ordershistory" className="sidebar-menu-link">
          <span className="sidebar-menu-icon">🕰️</span>
          <span className="sidebar-menu-text">Orders History</span>
        </Link>
      </li>
      <li className="sidebar-menu-item">
        <Link to="poetryandsong" className="sidebar-menu-link">
          <span className="sidebar-menu-icon">🏁</span>
          <span className="sidebar-menu-text">Completed Orders</span>
        </Link>
        <span className="sidebar-menu-notification">3</span> 
      </li>
    </ul>

    
  </div>

  <div className="sidebar-profile">
    <img src="path-to-avatar-image.jpg" alt="Profile Avatar" className="sidebar-profile-avatar" />
    <div className="sidebar-profile-info">
      <span className="sidebar-profile-name">John Doe</span>
      <span className="sidebar-profile-role">Premium User</span>
    </div>
  </div>
</div>





      
    </div>
    </>
  );
};
export default Sidebar;
