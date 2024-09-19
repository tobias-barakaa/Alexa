import './Dashboard.css';
import Header from '../components/Header';
import Sidenav from '../components/Sidenav';
import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Dashboard = () => {
  const { userInfo } = useSelector((state) => state.auth);
  console.log(userInfo, 'this is me with');

  return (
    <div className="app-container">
      <div className="page-wrapper chiller-theme toggled">
        <nav id="sidebar" className="sidebar-wrapper">
          <div className="sidebar-content">
            <div className="sidebar-header">
              <div className="user-pic">
                <img
                  className="img-responsive img-rounded"
                  src={userInfo && userInfo.profile_pic}
                  alt="User picture"
                />
              </div>
              <div className="user-info">
                <span className="user-name">
                  <strong>{userInfo.username}</strong>
                </span>
                <span className="user-role">client</span>
                <span className="user-status"></span>
              </div>
            </div>

            <button className="orderarticle">Order Article</button>
            <Sidenav />
          </div>
        </nav>
      </div>

      <div className="main-cont">
        <Header />
        <div className="cont">
          <Outlet /> 
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
