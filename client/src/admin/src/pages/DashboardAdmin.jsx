import Sidenav from '../components/Sidenav';
import "../styles/DashboardAdmin.css";

const DashboardAdmin = () => {
  return (
    <div>
      <Sidenav />
      <div className="main-content">
        <h1>Dashboard Overview</h1>
        <div className="card">
          <h3>Total Users</h3>
          <p>1,250</p>
        </div>
        <div className="card">
          <h3>Blog Orders</h3>
          <p>320</p>
        </div>
        <div className="card">
          <h3>Pending Orders</h3>
          <p>45</p>
        </div>
        <div className="card">
          <h3>Sales This Month</h3>
          <p>$12,500</p>
        </div>
        <div className="card">
          <h3>Article Orders</h3>
          <p>8 Open</p>
        </div>
        <div className="card">
          <h3>Resume Orders</h3>
          <p>5,000 Visits</p>
        </div>
      </div>
    </div>
  );
};

export default DashboardAdmin;
