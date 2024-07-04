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
    <div className="logo" >
      Enwriters
    </div>
    <div className="item">
    <CiHome />

      <span>Home</span>
    </div>
    <div className="item">
    <CgProfile />

      <span>Profile</span>
    </div>
    <div className="item">
    <MdMessage />

      
      <span>Messages</span>
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
      <CiBoxList />
      <span>Lists</span>
    </div>
    <div className="item">
    <IoIosAnalytics />

      <span>Analytics</span>
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
