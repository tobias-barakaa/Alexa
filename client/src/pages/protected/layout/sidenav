import { Link } from "react-router-dom";
import "./Sidenav.css";

const Sidenav = () => {
  return (
    <div className="dashboard-sidebar">
      <div className="sidebar-header">
        <div className="logo">enWriters</div>
        <div className="separator"></div>
      </div>
      <div className="sidebar-nav">
        <Link className="nav-item" to="/dashboard">
          <i className="bi bi-grid-fill"></i>
          <span>Dashboard</span>
        </Link>
        <Link className="nav-item" to="/dashboard/order">
          <i className="bi bi-file-earmark-plus"></i>
          <span>Order Article</span>
        </Link>
        <Link to="/dashboard/manage" className="nav-item">
          <i className="bi bi-list-ul"></i>
          <span>Manage Articles</span>
        </Link>
        <Link to="blogposts" className="nav-item">
          <i className="bi bi-newspaper"></i>
          <span>Blog Posts</span>
        </Link>
        <Link to="/dashboard/reviews" className="nav-item">
          <i className="bi bi-megaphone"></i>
          <span>Reviews</span>
        </Link>
                
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
