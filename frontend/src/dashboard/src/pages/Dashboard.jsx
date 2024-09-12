import { Outlet } from "react-router-dom";
// import Header from '../components/Header';
import Sidenav from "../components/Sidenav";
import ".././styles/pages/Dashboard.css";

const Dashboard = () => {
  return (
    <>
      <div className="app-container">
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
