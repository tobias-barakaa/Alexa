// NavDiv.jsx
import React from "react";
import "./NavDiv.css";
import { CiHome } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";
import { MdMessage } from "react-icons/md";
import { IoIosNotifications } from "react-icons/io";
import { CiBookmark } from "react-icons/ci";
import { CiBoxList } from "react-icons/ci";
import { IoIosAnalytics } from "react-icons/io";
import { CiSettings } from "react-icons/ci";
import { IoIosLogOut } from "react-icons/io";

const NavDiv = () => {
  return (
    <div className="container">
      <div className="item-container">
        <div className="logo">
          Enwriters
        </div>
        <div className="item">
          <CiHome />
          <span>Home</span>
        </div>
        <div className="item">
          <MdMessage />
          <span>Login</span>
        </div>
        <div className="item">
          <IoIosAnalytics />
          <span>Hire a Writer</span>
        </div>
        <div className="item dropdown">
          <CiBoxList />
          <span>Our Services</span>
          <div className="dropdown-content">
            <div className="dropdown-row">
              <a href="#">Poetry Writing</a>
              <a href="#">Social Posts</a>
              <a href="#">Songs</a>
              <a href="#">Article Writing</a>
            </div>
            <div className="dropdown-row">
              <a href="#">Blog Posts</a>
              <a href="#">Website Content</a>
              <a href="#">Product Descriptions</a>
              <a href="#">Press Releases</a>
            </div>
            <div className="dropdown-row">
              <a href="#">Case Studies</a>
              <a href="#">White Papers</a>
              <a href="#">eBooks</a>
              <a href="#">Resumes</a>
            </div>
            <div className="dropdown-row">
              <a href="#">Cover Letters</a>
              <a href="#">Copywriting</a>
              <a href="#">Ghostwriting</a>
            </div>
          </div>
        </div>
        <div className="item">
          <CgProfile />
          <span>Profile</span>
        </div>
        <div className="item">
          <IoIosNotifications />
          <span>Notifications</span>
        </div>
        <div className="item">
          <CiBookmark />
          <span>Bookmarks</span>
        </div>
        <div className="item">
          <CiSettings />
          <span>Settings</span>
        </div>
        <div className="item">
          <IoIosLogOut />
          <span>Logout</span>
        </div>
      </div>
    </div>
  );
};

export default NavDiv;
