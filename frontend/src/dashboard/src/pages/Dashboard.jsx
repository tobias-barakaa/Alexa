// Dashboard.js
// import "./Dashboard.css";
// import Header from "./layout/Header";
// import Sidenav from "./layout/Sidenav";
import { Outlet } from "react-router-dom";
// import Header from "../components/Header";
import Header from '../components/Header'
import Sidenav from "../components/Sidenav";
import ".././styles/pages/Dashboard.css";
const Dashboard = () => {
  return (
    <>
      <div className="app-container">
        <Header />
        <div className="content-container">
          <Sidenav />
          <div className="main-contentt">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;