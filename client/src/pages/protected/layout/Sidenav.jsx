import "./Sidenav.css";

const Sidenav = () => {
  return (
    <div className="dashboard-sidebar">
          <div className="welcome-message">Welcome to Dashboard, John Doe</div>
          <div className="dashboard-nav">
            <div className="nav-buttons">
              <button className="nav-button">Dashboard</button>
              <button className="nav-button">Create Article</button>
              <button className="nav-button">Manage Articles</button>
              <button className="nav-button">Blog Posts</button>
              <button className="nav-button">Marketing Campaigns</button>
              <button className="nav-button">Analytics</button>
              <button className="nav-button">Settings</button>
              <button className="nav-button">Help</button>
            </div>
            <div className="social-networks">
              <span>We are on social networks:</span>
              <div className="social-icons">
                <i className="bi bi-0-square-fill"></i>
                <i className="bi bi-0-square-fill"></i>
                <i className="bi bi-0-square-fill"></i>
                <i className="bi bi-0-square-fill"></i>
              </div>
            </div>
          </div>
        </div>
  )
}

export default Sidenav
