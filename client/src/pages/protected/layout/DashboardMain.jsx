import './DashboardMain.css';
import OrderNow from './OrderNow';
import WelcomeSection from './WelcomeSection';

 
import recentOrdersImg from '../../../assets/images/order.svg';
import ongoingProjectsImg from '../../../assets/images/ongoing.svg';
import upcomingDeadlinesImg from '../../../assets/images/upcoming.svg';
import newFeatureImg from '../../../assets/images/complete.svg';

const DashboardMain = () => {
  return (
    <div className="dashboard-main">
      <WelcomeSection />
      
      <div className="overview-section">
        <div className="statistics">
          <div className="stat-item">
            <img src={recentOrdersImg} alt="Recent Orders" className="stat-image" />
            <div className="stat-text">
              <h3>Recent Orders</h3>
              <p>Number of recent orders</p>
              <p className="stat-number">0</p>
            </div>
          </div>
          <div className="stat-item">
            <img src={ongoingProjectsImg} alt="Ongoing Projects" className="stat-image" />
            <div className="stat-text">
              <h3>Ongoing Projects</h3>
              <p>Number of ongoing projects</p>
              <p className="stat-number">0</p>
            </div>
          </div>
          <div className="stat-item">
            <img src={upcomingDeadlinesImg} alt="Upcoming Deadlines" className="stat-image" />
            <div className="stat-text">
              <h3>Upcoming Deadlines</h3>
              <p>Next deadline</p>
              <p className="stat-number">0</p>
            </div>
          </div>
          <div className="stat-item">
            <img src={newFeatureImg} alt="New Feature" className="stat-image" />
            <div className="stat-text">
              <h3>New Feature</h3>
              <p>Description of new feature</p>
              <p className="stat-number">0</p>
            </div>
          </div>
        </div>
      </div>
      <OrderNow />
    </div>
  );
};

export default DashboardMain;
