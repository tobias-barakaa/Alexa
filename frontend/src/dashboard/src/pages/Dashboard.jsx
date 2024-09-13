import React, { useState } from 'react';
import './Dashboard.css';
import { PenTool, Settings, Wallet, FileText, Folder, BarChart, Users, MessageCircle, HelpCircle } from 'lucide-react';


const Profile = () => <div>Profile Cont
Profile ContProfile ContProfile ContProfile ContProfile Cont
Profile ContProfile ContProfile ContProfile ContProfile Cont
Profile ContProfile ContProfile ContProfile ContProfile Cont
Profile ContProfile ContProfile ContProfile ContProfile ContProfile ContProfile ContProfile ContProfile ContProfile Cont
Profile ContProfile ContProfile ContProfile ContProfile ContProfile ContProfile ContProfile ContProfile ContProfile Cont
Profile ContProfile ContProfile ContProfile ContProfile Cont


Profile ContProfile ContProfile ContProfile ContProfile Cont
Profile ContProfile ContProfile ContProfile ContProfile Cont
Profile ContProfile ContProfile ContProfile ContProfile Cont
Profile ContProfile ContProfile ContProfile ContProfile ContProfile ContProfile ContProfile ContProfile ContProfile Cont
Profile ContProfile ContProfile ContProfile ContProfile ContProfile ContProfile ContProfile ContProfile ContProfile Cont
Profile ContProfile ContProfile ContProfile ContProfile ContProfile ContProfile ContProfile ContProfile ContProfile Cont
Profile ContProfile ContProfile ContProfile ContProfile Cont
Profile ContProfile ContProfile ContProfile ContProfile Cont
Profile ContProfile ContProfile ContProfile ContProfile ContProfile ContProfile ContProfile ContProfile ContProfile Cont
Profile ContProfile ContProfile ContProfile ContProfile ContProfile ContProfile ContProfile ContProfile ContProfile Cont
Profile ContProfile ContProfile ContProfile ContProfile ContProfile ContProfile ContProfile ContProfile ContProfile Cont
Profile ContProfile ContProfile ContProfile ContProfile Cont
Profile ContProfile ContProfile ContProfile ContProfile Cont
Profile ContProfile ContProfile ContProfile ContProfile ContProfile ContProfile ContProfile ContProfile ContProfile Cont
Profile ContProfile ContProfile ContProfile ContProfile ContProfile ContProfile ContProfile ContProfile ContProfile Cont
Profile ContProfile ContProfile ContProfile ContProfile ContProfile ContProfile ContProfile ContProfile ContProfile Cont
Profile ContProfile ContProfile ContProfile ContProfile Cont
Profile ContProfile ContProfile ContProfile ContProfile Cont
Profile ContProfile ContProfile ContProfile ContProfile ContProfile ContProfile ContProfile ContProfile ContProfile Cont
Profile ContProfile ContProfile ContProfile ContProfile ContProfile ContProfile ContProfile ContProfile ContProfile Cont
Profile ContProfile ContProfile ContProfile ContProfile ContProfile ContProfile ContProfile ContProfile ContProfile Cont
Profile ContProfile ContProfile ContProfile ContProfile Cont
Profile ContProfile ContProfile ContProfile ContProfile Cont
Profile ContProfile ContProfile ContProfile ContProfile ContProfile ContProfile ContProfile ContProfile ContProfile Cont
Profile ContProfile ContProfile ContProfile ContProfile ContProfile ContProfile ContProfile ContProfile ContProfile Cont
Profile ContProfile ContProfile ContProfile ContProfile ContProfile ContProfile ContProfile ContProfile ContProfile Cont
Profile ContProfile ContProfile ContProfile ContProfile Cont
Profile ContProfile ContProfile ContProfile ContProfile Cont
Profile ContProfile ContProfile ContProfile ContProfile ContProfile ContProfile ContProfile ContProfile ContProfile Cont
Profile ContProfile ContProfile ContProfile ContProfile ContProfile ContProfile ContProfile ContProfile ContProfile Cont
Profile ContProfile ContProfile ContProfile ContProfile ContProfile ContProfile ContProfile ContProfile ContProfile Cont
Profile ContProfile ContProfile ContProfile ContProfile Cont
Profile ContProfile ContProfile ContProfile ContProfile Cont
Profile ContProfile ContProfile ContProfile ContProfile ContProfile ContProfile ContProfile ContProfile ContProfile Cont
Profile ContProfile ContProfile ContProfile ContProfile ContProfile ContProfile ContProfile ContProfile ContProfile Cont
Profile ContProfile ContProfile ContProfile ContProfile ContProfile ContProfile ContProfile ContProfile ContProfile Cont
Profile ContProfile ContProfile ContProfile ContProfile Cont
Profile ContProfile ContProfile ContProfile ContProfile Cont
Profile ContProfile ContProfile ContProfile ContProfile ContProfile ContProfile ContProfile ContProfile ContProfile Cont
Profile ContProfile ContProfile ContProfile ContProfile ContProfile ContProfile ContProfile ContProfile ContProfile Cont
Profile ContProfile ContProfile ContProfile ContProfile ContProfile ContProfile ContProfile ContProfile ContProfile Cont
Profile ContProfile ContProfile ContProfile ContProfile Cont
Profile ContProfile ContProfile ContProfile ContProfile Cont
Profile ContProfile ContProfile ContProfile ContProfile ContProfile ContProfile ContProfile ContProfile ContProfile Cont
Profile ContProfile ContProfile ContProfile ContProfile ContProfile ContProfile ContProfile ContProfile ContProfile Cont
Profile ContProfile ContProfile ContProfile ContProfile ContProfile ContProfile ContProfile ContProfile ContProfile Cont
Profile ContProfile ContProfile ContProfile ContProfile Cont
Profile ContProfile ContProfile ContProfile ContProfile Cont
Profile ContProfile ContProfile ContProfile ContProfile ContProfile ContProfile ContProfile ContProfile ContProfile Cont
Profile ContProfile ContProfile ContProfile ContProfile ContProfile ContProfile ContProfile ContProfile ContProfile Cont
Profile ContProfile ContProfile ContProfile ContProfile Cont
</div>;


const Dashboard = () => {
  const [isToggled, setIsToggled] = useState(true);

  const toggleSidebar = () => {
    setIsToggled(!isToggled);
  };

  const renderPage = () => {
    switch (activePage) {
      case 'Profile':
        return <Profile />;
      case 'Settings':
        return <Settings />;
      case 'Wallet':
        return <Wallet />;
      default:
        return <Profile />;
    }
  };

  return (
    <div className="app-container">





<div className="dashboard">
      <div
        id="full-screen-example"
        className="sidenav bg-light"
        data-color="dark"
        data-mode="side"
        data-hidden="false"
        data-scroll-container="#scrollContainer"
      >
        <div className="mt-4">
          <div id="header-content" className="pl-3">
            <img
              src="https://mdbootstrap.com/img/Photos/Avatars/img%20(23).jpg"
              alt="avatar"
              className="rounded-circle img-fluid mb-3"
              style={{ maxWidth: "50px" }}
            />
            <h4>
              <span style={{ whiteSpace: "nowrap" }}>Ann Smith</span>
            </h4>
            <p>ann_s@mdbootstrap.com</p>
          </div>
          <hr className="mb-0" />
        </div>
        <div id="scrollContainer">
          <ul className="sidenav-menu">
            <li className="sidenav-item">
              <a className="sidenav-link" href="/">
                <i className="fas fa-envelope pr-3"></i>Inbox
              </a>
            </li>
            <li className="sidenav-item">
              <a className="sidenav-link">
                <i className="fas fa-paper-plane pr-3"></i>Outbox
              </a>
            </li>
            <li className="sidenav-item">
              <a className="sidenav-link">
                <i className="fas fa-address-book pr-3"></i>Contacts
              </a>
              <ul className="sidenav-collapse">
                <li className="sidenav-item">
                  <a className="sidenav-link">Family</a>
                </li>
                <li className="sidenav-item">
                  <a className="sidenav-link">Friends</a>
                </li>
                <li className="sidenav-item">
                  <a className="sidenav-link">Work</a>
                </li>
              </ul>
            </li>
            <li className="sidenav-item">
              <a className="sidenav-link">
                <i className="fas fa-file pr-3"></i>Drafts
              </a>
            </li>
            <li className="sidenav-item">
              <a className="sidenav-link">
                <i className="fas fa-heart pr-3"></i>Favourites
              </a>
            </li>
            <li className="sidenav-item">
              <a className="sidenav-link">
                <i className="fas fa-star pr-3"></i>Starred
              </a>
            </li>
            <li className="sidenav-item">
              <a className="sidenav-link">
                <i className="fas fa-trash pr-3"></i>Trash
              </a>
            </li>
            <li className="sidenav-item">
              <a className="sidenav-link">
                <i className="fas fa-ban pr-3"></i>Spam
              </a>
            </li>
            <li className="sidenav-item">
              <a className="sidenav-link">
                <i className="fas fa-tag pr-3"></i>Categories
              </a>
              <ul className="sidenav-collapse">
                <li className="sidenav-item">
                  <a className="sidenav-link">Social</a>
                </li>
                <li className="sidenav-item">
                  <a className="sidenav-link">Notifications</a>
                </li>
                <li className="sidenav-item">
                  <a className="sidenav-link">Recent</a>
                </li>
                <li className="sidenav-item">
                  <a className="sidenav-link">Uploads</a>
                </li>
                <li className="sidenav-item">
                  <a className="sidenav-link">Backups</a>
                </li>
                <li className="sidenav-item">
                  <a className="sidenav-link">Offers</a>
                </li>
              </ul>
            </li>
            <li className="sidenav-item">
              <a className="sidenav-link">
                <i className="fas fa-sticky-note pr-3"></i>Notes
              </a>
            </li>
            <li className="sidenav-item">
              <a className="sidenav-link">
                <i className="fas fa-user-circle pr-3"></i>Personal
              </a>
            </li>
            <li className="sidenav-item">
              <a className="sidenav-link">
                <i className="fas fa-ellipsis-h pr-3"></i>More
              </a>
            </li>
          </ul>
          <hr className="m-0" />
          <ul className="sidenav-menu">
            <li className="sidenav-item">
              <a className="sidenav-link">
                <i className="fas fa-cogs pr-3"></i>Settings
              </a>
            </li>
            <li className="sidenav-item">
              <a className="sidenav-link">
                <i className="fas fa-user pr-3"></i>Profile
              </a>
            </li>
            <li className="sidenav-item">
              <a className="sidenav-link">
                <i className="fas fa-shield-alt pr-3"></i>Privacy
              </a>
            </li>
            <li className="sidenav-item">
              <a className="sidenav-link">
                <i className="fas fa-user-astronaut pr-3"></i>Log out
              </a>
            </li>
          </ul>
        </div>
        <div className="text-center" style={{ height: "100px" }}>
          <hr className="mb-4 mt-0" />
          <p>MDBootstrap.com</p>
        </div>
      </div>

      <div className="mdb-page-content text-center page-intro bg-light">
        <div className="text-center py-5">
          <h3 className="my-5">Resize to change the mode</h3>
          <div>
            <img
              className="rounded"
              src="https://mdbootstrap.com/img/Photos/Others/img%20(53).jpg"
              alt="content"
            />
          </div>
          <button id="toggler" className="btn btn-dark mt-5">
            <i className="fas fa-bars"></i>
          </button>
        </div>
      </div>
    </div>







      <div className="main-cont">
        <div className="header">Header</div>
        <div className="horizontal-line"></div>
        <div className="cont">{renderPage()}</div>
      </div>

    </div>
  );
};

export default Dashboard;
