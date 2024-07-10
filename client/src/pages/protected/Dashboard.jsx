import "./Dashboard.css";
import Header from "./layout/Header";
import Sidenav from "./layout/Sidenav";
import DashboardMain from "./layout/DashboardMain";
import StepForm from "./FormArticle/StepForm";

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <Header />
      <div className="dashboard-content">
        <Sidenav />


        <div className="dashboard-main">
        <DashboardMain />
        <div className="dashboard-layout">
        <StepForm />
          
          </div>
        </div>



      </div>
    </div>
  );
};

export default Dashboard;
