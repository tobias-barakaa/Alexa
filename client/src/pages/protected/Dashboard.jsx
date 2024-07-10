import "./Dashboard.css";
import Header from "./layout/Header";
import Sidenav from "./layout/Sidenav";
import DashboardMain from "./layout/DashboardMain";

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <Header />
      <div className="dashboard-content">
        <Sidenav />
        <DashboardMain />
      </div>
    </div>
  );
};

export default Dashboard;
