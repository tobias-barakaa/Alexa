import { Outlet } from 'react-router-dom';
import Sidebar from '../../../../../components/Sidebar';
import './AdminDashboard.css'; 

const AdminDashboard = () => {
  return (
    <div className="dashboard-container">
     <Sidebar />
     <main className="main-content">

     <Outlet />
     </main>
    </div>
    
  );
};

export default AdminDashboard;
