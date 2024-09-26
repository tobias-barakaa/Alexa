import { Link } from 'react-router-dom';
import './Sidenav.css'; 

const Sidenav = () => {
    return (
    <div className="side">
      <p>Admin Panel</p>
      <ul className="side-list">
        <li><Link to="/admindashboard/users">Users</Link></li>
        <li><Link to="/admindashboard/products">Transactions</Link></li>
         
        <li><Link to="/admindashboard/articles">Articles</Link></li>
      </ul>
    </div>
  );
};

export default Sidenav;



