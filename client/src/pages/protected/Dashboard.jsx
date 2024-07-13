import "./Dashboard.css";
import Header from "./layout/Header";
import Sidenav from "./layout/Sidenav";
import { Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <>
      <Header />
      <div className="dashboard-container">
        <Sidenav />
        <div className="content">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
