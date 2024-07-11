import './DashboardMain.css';
import OrderNow from './OrderNow';
import WelcomeSection from './WelcomeSection'; 
import order from '../../../assets/images/order.svg';
import ongoing from '../../../assets/images/ongoing.svg';
import upcoming from '../../../assets/images/upcoming.svg';
import complete from '../../../assets/images/complete.svg';






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
          <img src={complete} alt="Stat 3" className="stat-image" />
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




  

.overview-section {
    margin-top: 40px;
    margin-right: 10px;
  }
  
  .overview-section h2 {
    font-size: 24px;
    margin-bottom: 20px;
  }
  
  .statistics {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
  }
  
  .stat-item {
    background-color: #ffffff;
    padding: 20px;
    border-radius: 5px; /* Reduced border radius */
    flex: 1 1 calc(25% - 20px); /* Reduced width for four items */
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1); /* Subtle shadow for a grey line effect */
    display: flex; /* Added for content arrangement */
    align-items: center; /* Added for content arrangement */
  }
  
  .stat-image {
    width: 50px; /* Adjust width as needed for your images */
    height: 50px; /* Adjust height as needed for your images */
    margin-right: 20px; /* Spacing between image and content */
  }
  
  .stat-content {
    flex: 1; /* Allow content to fill remaining space */
  }
  
  .stat-content h3 {
    margin-top: 0;
    font-size: 20px;
  }
  
  .stat-content p {
    margin-top: 5px;
    font-size: 16px;
  }
  
  .stat-content span {
    font-weight: bold; /* Emphasize numbers */
  }



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
            <div className="stat-item-content">
              <img src={recentOrdersImg} alt="Recent Orders" className="stat-icon" />
              <div>
                <h3>Recent Orders</h3>
                <p>5</p>
              </div>
            </div>
          </div>
          <div className="stat-item">
            <div className="stat-item-content">
              <img src={ongoingProjectsImg} alt="Ongoing Projects" className="stat-icon" />
              <div>
                <h3>Ongoing Projects</h3>
                <p>3</p>
              </div>
            </div>
          </div>
          <div className="stat-item">
            <div className="stat-item-content">
              <img src={upcomingDeadlinesImg} alt="Upcoming Deadlines" className="stat-icon" />
              <div>
                <h3>Upcoming Deadlines</h3>
                <p>July 15, 2024</p>
              </div>
            </div>
          </div>
          <div className="stat-item">
            <div className="stat-item-content">
              <img src={newFeatureImg} alt="Homework Help" className="stat-icon" />
              <div>
                <h3>Homework Help</h3>
                <p>0</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <OrderNow />
    </div>
  );
};

export default DashboardMain;










.dashboard-main {
    padding: 20px;
  }
  
  .overview-section {
    margin-top: 40px;
  }
  
  .statistics {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
  }
  
  .stat-item {
    background-color: #ffffff;
    padding: 20px;
    border-radius: 5px;
    flex: 1 1 calc(25% - 20px);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  
  .stat-item-content {
    display: flex;
    align-items: center;
    gap: 20px;
  }
  
  .stat-icon {
    width: 40px;
    height: 40px;
  }
  
  .stat-item h3 {
    margin-top: 0;
    font-size: 18px;
  }
  
  .stat-item p {
    margin: 0;
    font-size: 16px;
    font-weight: bold;
  }









