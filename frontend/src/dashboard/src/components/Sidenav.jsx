import { Link } from "react-router-dom";
import Profile from "../pages/profile/Profile";
import "./Sidenav.css"
import { BookOpenCheck, BringToFront, FileStack, Gem, GitPullRequest, Newspaper, ScanSearch } from "lucide-react";

const Sidenav = () => {
  return (
    <div className="sidebar-menu">
        <ul>
          <li className="header-menu">
            <span>Orders</span>
          </li>
       
          <li>
            <Link to="/dashboard/orderarticle">
              <BringToFront className="icon-menu" />
              <span>Order Article</span>
            </Link>
          </li>
         

         

          <li>
            <Link to="/dashboard/editall">
            <Newspaper className="icon-menu" />

              <span>Edit Requests</span>
            </Link>
          </li>

          <li>
            <Link to="/dashboard/drafts">
              <GitPullRequest className="icon-menu" />
              <span>Drafts</span>
            </Link>
          </li>


          <li className="sidebar-dropdown">
            <Link to="/dashboard/pricing">
              <Gem className="icon-menu" />
              <span>Pricing</span>
            </Link>
            
          </li>
          
     
         
         
          <li className="header-menu">
            <span>Manage Orders</span>
          </li>
   
          <li>
            <Link to="/dashboard/all-orders">
              <ScanSearch className="icon-menu" />
              <span>View All Articles</span>
            </Link>
          </li>

          

          <li>
            <a href="#">
              <BookOpenCheck className="icon-menu" />
              <span>Published</span>
            </a>
          </li>

         

          <li>
            <Link to="/dashboard/history">
              <FileStack className="icon-menu" />
              <span>Order History</span>
            </Link>
          </li>

        </ul>

      
      <Profile />

      </div>
  )
}

export default Sidenav
