// Dashboard.js
import "./Dashboard.css";
import Header from "./layout/Header";
import Sidenav from "./layout/Sidenav";
import { Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <>
      <div className="app-container">
        <Header />
        <div className="content-container">
          <Sidenav />
          <div className="main-content">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
