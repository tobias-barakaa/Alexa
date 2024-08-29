import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import "./Sidenav.css";
import SidebarProfile from "./SidebarProfile";

const Sidebar = () => {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState(location.pathname);

  const handleLinkClick = (path) => {
    setActiveLink(path);
    localStorage.setItem("activeLink", path);
  };

  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location.pathname]);

  return (
    <>
      <div class="page-wrapper chiller-theme toggled">
        <nav id="sidebar" class="sidebar-wrapper">
          <div class="sidebar-content">
            <div class="sidebar-brand">
              <a href="#">pro sidebar</a>
              <div id="close-sidebar">
                <i class="fas fa-times"></i>
              </div>
            </div>
            <div class="sidebar-header">
              <div class="user-pic">
                <img
                  class="img-responsive img-rounded"
                  src="https://raw.githubusercontent.com/azouaoui-med/pro-sidebar-template/gh-pages/src/img/user.jpg"
                  alt="User picture"
                />
              </div>
              <div class="user-info">
                <span class="user-name">
                  Jhon
                  <strong>Smith</strong>
                </span>
                <span class="user-role">Administrator</span>
                <span class="user-status">
                  <i class="fa fa-circle"></i>
                  <span>Online</span>
                </span>
              </div>
            </div>
            <div class="sidebar-menu">
              <ul>
                <li class="header-menu">
                  <span>General</span>
                </li>

                <li>
                  <a href="#">
                    <i class="fa fa-folder"></i>
                    <span>Blog Writing</span>
                  </a>
                </li>

                <li>
                  <a href="#">
                    <i class="fa fa-chart-line"></i>
                    <span>Article Creation</span>
                  </a>
                </li>

                <li>
                  <a href="#">
                    <i class="fa fa-folder"></i>
                    <span>Resume CVWriting</span>
                  </a>
                </li>

                <li>
                  <a href="#">
                    <i class="far fa-gem"></i>
                    <span>Email Copywriting</span>
                  </a>
                </li>


                <li class="header-menu">
                  <span>Extra</span>
                </li>

                <li>
                  <a href="#">
                    <i class="far fa-gem"></i>
                    <span>Email Copywriting</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="far fa-gem"></i>
                    <span>Email Copywriting</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="far fa-gem"></i>
                    <span>Email Copywriting</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div class="sidebar-footer">
            <a href="#">
              <i class="fa fa-bell"></i>
              <span class="badge badge-pill badge-warning notification">3</span>
            </a>
            <a href="#">
              <i class="fa fa-envelope"></i>
              <span class="badge badge-pill badge-success notification">7</span>
            </a>
            <a href="#">
              <i class="fa fa-cog"></i>
              <span class="badge-sonar"></span>
            </a>
            <a href="#">
              <i class="fa fa-power-off"></i>
            </a>
          </div>
        </nav>
      </div>
    </>

    // <div className="sidena">
    //   <div className="sidebar-menu-container">
    //     <Link
    //       to="/dashboard"
    //       className={`sidebar-menu-link ${activeLink === '/dashboard' || activeLink === '/dashboard/' ? 'active' : ''}`}
    //       onClick={() => handleLinkClick('/dashboard')}
    //     >
    //       <img src={logo} alt="Logo" className="logo" />
    //     </Link>
    //     <hr className="dark-divider" />
    //     <div className="sidebar-menu-content">
    //       <ul className="sidebar-menu-list">
    //         <li className="sidebar-menu-item">
    //           <Link
    //             to="/dashboard/blogorder"
    //             className={`sidebar-menu-link ${activeLink === '/dashboard/blogorder' ? 'active' : ''}`}
    //             onClick={() => handleLinkClick('/dashboard/blogorder')}
    //           >
    //             <i className="bi bi-pencil-square sidebar-menu-icon"></i>
    //             <span className="sidebar-menu-text">Blog Writing</span>
    //           </Link>
    //         </li>
    //         <li className="sidebar-menu-item">
    //           <Link
    //             to="/dashboard/articlecreation"
    //             className={`sidebar-menu-link ${activeLink === '/dashboard/articlecreation' ? 'active' : ''}`}
    //             onClick={() => handleLinkClick('/dashboard/articlecreation')}
    //           >
    //             <i className="bi bi-bookshelf sidebar-menu-icon"></i>
    //             <span className="sidebar-menu-text">Article Creation</span>
    //           </Link>
    //         </li>
    //         <li className="sidebar-menu-item">
    //           <Link
    //             to="/dashboard/resumecvwriting"
    //             className={`sidebar-menu-link ${activeLink === '/dashboard/resumecvwriting' ? 'active' : ''}`}
    //             onClick={() => handleLinkClick('/dashboard/resumecvwriting')}
    //           >
    //             <i className="bi bi-card-list sidebar-menu-icon"></i>
    //             <span className="sidebar-menu-text">Resume/CV Writing</span>
    //           </Link>
    //         </li>
    //         <li className="sidebar-menu-item">
    //           <Link
    //             to="/dashboard/emailcopywriting"
    //             className={`sidebar-menu-link ${activeLink === '/dashboard/emailcopywriting' ? 'active' : ''}`}
    //             onClick={() => handleLinkClick('/dashboard/emailcopywriting')}
    //           >
    //             <i className="bi bi-printer sidebar-menu-icon"></i>
    //             <span className="sidebar-menu-text">Email Copywriting</span>
    //           </Link>
    //         </li>
    //       </ul>
    //     </div>
    //   </div>
    //   <div className="manage-container">
    //     <div className="sidebar-menu-container">
    //       <hr className="dark-divider" />
    //       <ul className="manage-list">
    //         <li className="sidebar-menu-item">
    //           <Link
    //             to="/dashboard/editorders"
    //             className={`sidebar-menu-link ${activeLink === '/dashboard/editorders' ? 'active' : ''}`}
    //             onClick={() => handleLinkClick('/dashboard/editorders')}
    //           >
    //             <i className="bi bi-pencil-square sidebar-menu-icon"></i>
    //             <span className="sidebar-menu-text">Edit Orders</span>
    //           </Link>
    //         </li>
    //         <li className="sidebar-menu-item">
    //           <Link
    //             to="/dashboard/ordershistory"
    //             className={`sidebar-menu-link ${activeLink === '/dashboard/ordershistory' ? 'active' : ''}`}
    //             onClick={() => handleLinkClick('/dashboard/ordershistory')}
    //           >
    //             <i className="bi bi-hourglass sidebar-menu-icon"></i>
    //             <span className="sidebar-menu-text">Order History</span>
    //           </Link>
    //         </li>
    //         <li className="sidebar-menu-item">
    //           <Link
    //             to="/dashboard/completedorders"
    //             className={`sidebar-menu-link ${activeLink === '/dashboard/completedorders' ? 'active' : ''}`}
    //             onClick={() => handleLinkClick('/dashboard/completedorders')}
    //           >
    //             <i className="bi bi-building-check sidebar-menu-icon"></i>
    //             <span className="sidebar-menu-text">Completed Orders</span>
    //           </Link>
    //         </li>
    //       </ul>
    //     </div>
    //     <SidebarProfile />
    //   </div>
    // </div>
  );
};

export default Sidebar;
