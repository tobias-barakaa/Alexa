import './DashboardMain.css';

const DashboardMain = () => {
  return (
    <div className="dashboard-main">
      <div className="welcome-section">
        <h1>Welcome to Dashboard John Doe</h1>
        <i className="bi bi-amd dashboard-image"></i>
        {/* <img src="path_to_image" alt="Dashboard Image" className="dashboard-image" /> */}
      </div>
      <div className="overview-section">
        <div className="statistics">
          <div className="stat-item">
            <h3>Recent Orders</h3>
            <p>Number of recent orders: 5</p>
          </div>
          <div className="stat-item">
            <h3>Ongoing Projects</h3>
            <p>Number of ongoing projects: 3</p>
          </div>
          <div className="stat-item">
            <h3>Upcoming Deadlines</h3>
            <p>Next deadline: July 15, 2024</p>
          </div>
        </div>
      </div>
      <div className="features-section">
        <h2>Key Features</h2>
        <div className="feature-item">
          <h3>Ordering Articles</h3>
          <p>Order Form: A straightforward form to specify article details (topic, length, deadline, etc.).</p>
        </div>
        <div className="feature-item">
          <h3>Hiring Personal Writers</h3>
          <p>Writer Profiles: Detailed profiles of available writers, including ratings, reviews, and expertise areas.</p>
        </div>
        <div className="feature-item">
          <h3>Homework Help</h3>
          <p>Request Form: A form to submit homework or schoolwork details, including subject, specific questions, and deadlines.</p>
        </div>
      </div>
    </div>
  );
}

export default DashboardMain;
