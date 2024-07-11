import "./Sidenav.css";

const Sidenav = () => {
  return (
    <div className="dashboard-sidebar">
          <div className="welcome-message">Welcome to Dashboard, John Doe</div>
          <div className="dashboard-nav">
            <ul className="nav-buttons">
              <li className="nav-li">Dashboard</li>
              <li className="nav-li">Create Article</li>
              <li className="nav-li">Manage Articles</li>
              <li className="nav-li">Blog Posts</li>
              <li className="nav-li">Marketing Campaigns</li>
              <li className="nav-li">Analytics</li>
              <li className="nav-li">Settings</li>
              <li className="nav-li">Help</li>
            </ul>
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
