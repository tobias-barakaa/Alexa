import './DashboardMain.css';
import OrderNow from './OrderNow';
import WelcomeSection from './WelcomeSection'; 
import order from '../../../assets/images/order.svg';
import ongoing from '../../../assets/images/ongoing.svg';
import upcoming from '../../../assets/images/upcoming.svg';




const DashboardMain = () => {
  return (
    <div className="dashboard-main">
      <WelcomeSection />

      <div className="overview-section">
        <div className="statistics">
          <div className="stat-item">
            <img src={order} alt="Stat 1" className="stat-image" />
            <div className="stat-content">
              <h3>Recent Orders</h3>
              <p>Number of recent orders: <span>5</span></p>
            </div>
          </div>
          <div className="stat-item">
            <img src={ongoing} alt="Stat 2" className="stat-image" />
            <div className="stat-content">
              <h3>Ongoing Projects</h3>
              <p>Number of ongoing projects: <span>3</span></p>
            </div>
          </div>
          <div className="stat-item">
            <img src={upcoming} alt="Stat 3" className="stat-image" />
            <div className="stat-content">
              <h3>Upcoming Deadlines</h3>
              <p>Next deadline: July 15, 2024</p>
            </div>
          </div>
          <div className="stat-item">
            <img src="[path_to_image4]" alt="Stat 4" className="stat-item" />
            <div className="stat-content">
              <h3>Completed Articles</h3>
              <p>Number of completed articles: <span>0</span></p>
            </div>
          </div>
        </div>
      </div>

      <OrderNow />
    </div>
  );
};

export default DashboardMain;
