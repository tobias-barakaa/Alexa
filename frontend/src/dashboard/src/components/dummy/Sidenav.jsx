import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
// import logo from "../../../client/src/assets/images/logo.png";
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
      <div className="page-wrapper chiller-theme toggled">

        <nav id="sidebar" className="sidebar-wrapper">
          <div className="sidebar-content">
            <div className="sidebar-brand">
            <div className="sidebar-menu-container">
         <Link
          to="/dashboard"
          className={`sidebar-menu-link ${activeLink === '/dashboard' || activeLink === '/dashboard/' ? 'active' : ''}`}
          onClick={() => handleLinkClick('/dashboard')}
        >
          
          <div className="logo-container">
          <span className="logo-text">en<span className='dot'>.</span>writers</span>
        </div>


        </Link>
            </div>
            </div>
          <hr className="dropdown-divider" />
            
            <div className="sidebar-menu">
              <ul>
                <li className="header-menu">
                  <span>General</span>
                </li>

                <li>
                  <Link to="/dashboard/blogorder"
                  className={`sidebar-menu-link ${activeLink === '/dashboard/blogorder' ? 'active' : ''}`}
                              onClick={() => handleLinkClick('/dashboard/blogorder')}
                  >
                    <i className="fa fa-folder"></i>
                    <span>Blog Writing</span>
                  </Link>
                </li>

                <li>
                  <Link to="/dashboard/blogorder"
                  className={`sidebar-menu-link ${activeLink === '/dashboard/blogorder' ? 'active' : ''}`}
                              onClick={() => handleLinkClick('/dashboard/blogorder')}
                  >
                    <i className="fa fa-folder"></i>
                    <span>Blog Writing</span>
                  </Link>
                </li>



              










                <li className="header-menu">
                  <span>Manage</span>
                </li>


                <li>
                  <Link to="/dashboard/editorders"
                  className={`sidebar-menu-link ${activeLink === '/dashboard/blogorder' ? 'active' : ''}`}
                              onClick={() => handleLinkClick('/dashboard/blogorder')}
                  >
                    <i className="far fa-gem"></i>
                    <span>Edit Orders</span>
                  </Link>
                </li>
                <li>
                  <Link to="/dashboard/completedorders"
                  className={`sidebar-menu-link ${activeLink === '/dashboard/blogorder' ? 'active' : ''}`}
                              onClick={() => handleLinkClick('/dashboard/blogorder')}
                  >
                    <i className="fa-solid fa-web-awesome"></i>
                    <span>Completed Orders</span>
                  </Link>
                </li>


                <li>
                  <Link to="/dashboard/ordershistory"
                  className={`sidebar-menu-link ${activeLink === '/dashboard/blogorder' ? 'active' : ''}`}
                              onClick={() => handleLinkClick('/dashboard/blogorder')}
                  >
                    <i className="fa-solid fa-file-lines"></i>
                    <span>Order History</span>
                  </Link>
                </li>

              </ul>

            </div>
          </div>

          <SidebarProfile />



        </nav>
      </div>
    </>

    
  );
};

export default Sidebar;