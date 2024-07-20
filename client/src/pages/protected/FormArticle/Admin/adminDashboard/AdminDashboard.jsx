import Sidebar from '../../../../../components/Sidebar';
import './AdminDashboard.css'; // Import CSS for styling
import AdminMain from './AdminMain';

const AdminDashboard = () => {
  return (
    <div className="dashboard-container">
     <Sidebar />
     <main className="main-content">

     <AdminMain />
     </main>
    </div>
    
  );
};

export default AdminDashboard;
