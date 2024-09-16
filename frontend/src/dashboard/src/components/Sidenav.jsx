import Profile from './Profile'

const Sidenav = () => {
  return (
    <div className="sidebar-menu">
        <ul>
          <li className="header-menu">
            <span>Orders</span>
          </li>
       
          <li>
            <a href="#">
              <i className="fa fa-book"></i>
              <span>Create Article</span>
            </a>
          </li>
         

          <li>
            <a href="#">
              <i className="fa fa-book"></i>
              <span>Edit Requests</span>
            </a>
          </li>

          <li>
            <a href="#">
              <i className="fa fa-book"></i>
              <span>Drafts</span>
            </a>
          </li>


          <li className="sidebar-dropdown">
            <a href="#">
              <i className="fa fa-tachometer-alt"></i>
              <span>Pricing</span>
            </a>
            
          </li>
          
     
         
         
          <li className="header-menu">
            <span>Manage Orders</span>
          </li>
   
          <li>
            <a href="#">
              <i className="fa fa-book"></i>
              <span>View All Articles</span>
            </a>
          </li>

          

          <li>
            <a href="#">
              <i className="fa fa-book"></i>
              <span>Published</span>
            </a>
          </li>

          <li>
            <a href="#">
              <i className="fa fa-book"></i>
              <span>Archived</span>
            </a>
          </li>


          <li>
            <a href="#">
              <i className="fa fa-book"></i>
              <span>Order History</span>
            </a>
          </li>

        </ul>

      
      <Profile />

      </div>
  )
}

export default Sidenav
