import "./Sidenav.css";

const Sidenav = () => {
  return (
    <div className="dashboard-sidebar">
      <div className="sidebar-header">
        <div className="logo">enWriters</div>
        <div className="separator"></div>
      </div>
      <div className="sidebar-nav">
        <div className="nav-item">
          <i className="bi bi-grid-fill"></i>
          <span>Dashboard</span>
        </div>
        <div className="nav-item">
          <i className="bi bi-file-earmark-plus"></i>
          <span>Create Article</span>
        </div>
        <div className="nav-item">
          <i className="bi bi-list-ul"></i>
          <span>Manage Articles</span>
        </div>
        <div className="nav-item">
          <i className="bi bi-newspaper"></i>
          <span>Blog Posts</span>
        </div>
        <div className="nav-item">
          <i className="bi bi-megaphone"></i>
          <span>Marketing Campaigns</span>
        </div>
        <div className="nav-item">
          <i className="bi bi-bar-chart-fill"></i>
          <span>Analytics</span>
        </div>
        <div className="nav-item">
          <i className="bi bi-gear-fill"></i>
          <span>Settings</span>
        </div>
        <div className="nav-item">
          <i className="bi bi-question-circle-fill"></i>
          <span>Help</span>
        </div>
      </div>
      <div className="sidebar-footer">
        <span>We are on social networks:</span>
        <div className="social-icons">
          <i className="bi bi-facebook"></i>
          <i className="bi bi-twitter"></i>
          <i className="bi bi-instagram"></i>
          <i className="bi bi-linkedin"></i>
        </div>
      </div>
    </div>
  );
};

export default Sidenav;