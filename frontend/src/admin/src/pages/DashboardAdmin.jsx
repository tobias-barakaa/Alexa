import { Outlet } from 'react-router-dom';
import Sidenav from '../components/Sidenav';
import "../styles/pages/DashboardAdmin.css";

const DashboardAdmin = () => {
  return (
    <div>
      <Sidenav />
      <div className="main-content">
       <Outlet />
      </div>
    </div>
    
  );
};

export default DashboardAdmin;

