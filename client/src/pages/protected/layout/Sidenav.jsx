import { Link } from 'react-router-dom';
import './Sidenav.css';

const Sidebar = () => {

  return (
    <div className="sidena">
        <span className='services'>Services</span>
        <div className='sidebar-content-itemm'>
        <ul className="sidebar-dropdown">
          <li><span><Link to="blogorder"><span className='blog-writing'>📝</span> Blog Writing</Link></span></li>
          <li><span><Link to="articlecreation"><span className='blog-writing'>✍️</span> Article Creation</Link></span></li>
          <li><span><Link to="resumecvwriting"><span className='blog-writing'>📄</span> Resume/CV Writing</Link></span></li>
          <li><span><Link to="emailcopywriting"><span className='blog-writing'>📧 </span>Email Copywriting</Link></span></li>
        </ul>
        </div>
      <div className="sidebar-content-item">











        {/* <ul className="whattt">
          <li><span><Link to="editorders"><span className='orderr'>🖋️ </span> Edit Orders</Link></span></li>
          <li><span><Link to="ordershistory"><span className='orderr'>🕰️</span> Orders History</Link></span></li>
          <li><span><Link to="poetryandsong"><span className='orderr'>🏁 </span>Completed Orders</Link></span></li>
        </ul> */}

<div className="sidebar-content-item">
        <ul className="sidebar-dropdownn">
        <li><span><Link to="editorders"><span className='orderr'>🖋️ </span> Edit Orders</Link></span></li>
          <li><span><Link to="ordershistory"><span className='orderr'>🕰️</span> Orders History</Link></span></li>
          <li><span><Link to="poetryandsong"><span className='orderr'>🏁 </span>Completed Orders</Link></span></li>
           </ul>
      </div>












      </div>
      
      
    </div>
  );
};

export default Sidebar;
