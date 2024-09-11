import React from 'react';

import $ from 'jquery';
import "./Sidenav.css";
// import SidebarProfile from "./SidebarProfile";
class Sidebar extends React.Component {
  componentDidMount() {
    $("#menu-toggle").click(function (e) {
      e.preventDefault();
      $("#wrapper").toggleClass("toggled");
    });
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <h2>Some text</h2>
          <hr />

          <div id="wrapper">
            {/* Sidebar */}
            <div id="sidebar-wrapper">
              <ul className="sidebar-nav" style={{ marginLeft: 0 }}>
                <li className="sidebar-brand">
                  <a href="#menu-toggle" id="menu-toggle" style={{ marginTop: '20px', float: 'right' }}>
                    <i className="fa fa-bars" style={{ fontSize: '20px' }} aria-hidden="true"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-sort-alpha-asc" aria-hidden="true"></i>
                    <span style={{ marginLeft: '10px' }}>Section</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-play-circle-o" aria-hidden="true"></i>
                    <span style={{ marginLeft: '10px' }}>Section</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-puzzle-piece" aria-hidden="true"></i>
                    <span style={{ marginLeft: '10px' }}>Section</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-font" aria-hidden="true"></i>
                    <span style={{ marginLeft: '10px' }}>Section</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-info-circle" aria-hidden="true"></i>
                    <span style={{ marginLeft: '10px' }}>Section</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-comment-o" aria-hidden="true"></i>
                    <span style={{ marginLeft: '10px' }}>Section</span>
                  </a>
                </li>
              </ul>
            </div>

            {/* Page Content */}
            <div id="page-content-wrapper">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-lg-12">
                    {/* Your content goes here */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Sidebar;
