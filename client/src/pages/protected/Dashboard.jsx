import "./Dashboard.css"

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <div className="dashboard-header">

      <div className="navigation">
    <div className="sub-navigation">
      <a href="#">Home</a>
      <a href="#">About Website</a>
      <a href="#">FAQ</a>
      <a href="#">Contact Us</a>
    </div>
    <div className="navigation-content">
      <p className="location-list">Dominican Republic | Haiti | Jamaica | Turks and Caicos Islands | All countries</p>
      {/* <div className="search-and-buttons">
        <input type="text" className="search-bar" placeholder="Search" />
        <div className="buttons">
          <button className="button">Language</button>
          <button className="button">Units</button>
          <button className="button">Apps</button>
          <button className="button">Mobile Version</button>
        </div>
      </div> */}

<div className="search-and-buttons">
    <input type="text" placeholder="Search" />
    <button className="gradient-button">Language</button>
    <button className="gradient-button">Units</button>
    <button className="gradient-button">Apps</button>
    <button className="gradient-button">Mobile Version</button>
  </div>



    </div>
  </div>












      </div>
      <div className="dashboard-content">
        <div className="dashboard-sidebar">
          <div className="welcome-message">Welcome to Dashboard, John Doe</div>
          <div className="dashboard-nav">
            <div className="nav-buttons">
              <button className="nav-button">Dashboard</button>
              <button className="nav-button">Order Article</button>
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
        <div className="dashboard-main">
          <div className="dashboard-boxes">
            <div className="dashboard-box leads">
              <i className="bi bi-0-square-fill"></i>
              <div className="box-content">
                <h3>Leads</h3>
                <p>1,234</p>
              </div>
            </div>
            <div className="dashboard-box clients">
              <i className="bi bi-0-square-fill"></i>
              <div className="box-content">
                <h3>Clients</h3>
                <p>567</p>
              </div>
            </div>
            <div className="dashboard-box projects">
              <i className="bi bi-0-square-fill"></i>
              <div className="box-content">
                <h3>Projects</h3>
                <p>89</p>
              </div>
            </div>
            <div className="dashboard-box revenue">
              <i className="bi bi-0-square-fill"></i>
              <div className="box-content">
                <h3>Revenue</h3>
                <p>$12,345</p>
              </div>
            </div>
          </div>
          <div className="dashboard-search">
            <i className="fas fa-search"></i>
            <input type="text" placeholder="Search" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
