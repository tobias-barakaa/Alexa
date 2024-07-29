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
      <div className="sidebar-content-item">
        <span className='services'>Orders</span>
        <ul className="sidebar-dropdown">
          <li><span><Link to="editorders">🖋️ Edit Orders</Link></span></li>
          <li><span><Link to="ordershistory">🕰️ Orders History</Link></span></li>
          <li><span><Link to="poetryandsong">🏁 Completed Orders</Link></span></li>
        </ul>
      </div>
      
      <div className="sidebar-item">👤 Profile</div>
      <div className="sidebar-item">🚪 Logout</div>
    </div>
  );
};

export default Sidebar;
