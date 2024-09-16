import Profile from "../pages/profile/Profile";
import { BookOpenCheck, BringToFront, FileArchive, FileStack, Gem, GitPullRequest, Newspaper, ScanSearch, Square } from "lucide-react";

const Sidenav = () => {
  return (
    <div className="sidebar-menu">
        <ul>
          <li className="header-menu">
            <span>Orders</span>
          </li>
       
          <li>
            <a href="#">
              <BringToFront className="fa fa-book" />
              <span>Create Article</span>
            </a>
          </li>
         

          <li>
            <a href="#">
              <Newspaper className="fa fa-book" />
              <span>Edit Requests</span>
            </a>
          </li>

          <li>
            <a href="#">
              <GitPullRequest className="fa fa-book" />
              <span>Drafts</span>
            </a>
          </li>


          <li className="sidebar-dropdown">
            <a href="#">
              <Gem className="fa fa-book" />
              <span>Pricing</span>
            </a>
            
          </li>
          
     
         
         
          <li className="header-menu">
            <span>Manage Orders</span>
          </li>
   
          <li>
            <a href="#">
              <ScanSearch />
              <span>View All Articles</span>
            </a>
          </li>

          

          <li>
            <a href="#">
              <BookOpenCheck />
              <span>Published</span>
            </a>
          </li>

          <li>
            <a href="#">
              <FileArchive />
              <span>Archived</span>
            </a>
          </li>


          <li>
            <a href="#">
              <FileStack />
              <span>Order History</span>
            </a>
          </li>

        </ul>

      
      <Profile />

      </div>
  )
}

export default Sidenav
