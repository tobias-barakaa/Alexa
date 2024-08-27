import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import HomePage from './layouts/home/HomePage';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import HomePage from './client/src/pages/HomePage';
import Main from './admin/src/pages/Main';
// import HomePage from './client/src/home/HomePage';
// import Dashboard from './pages/protected/Dashboard';
// import LoginClient from './layouts/client/LoginClient';
// import DashboardMain from './pages/protected/layout/DashboardMain';
// import AdminLogin from './pages/protected/FormArticle/Admin/AdminLogin';
// import AdminDashboard from './pages/protected/FormArticle/Admin/adminDashboard/AdminDashboard';
// import AdminMain from './pages/protected/FormArticle/Admin/adminDashboard/AdminMain';
// import Users from './pages/protected/FormArticle/Admin/elements/Users';
// import Writers from './pages/protected/FormArticle/Admin/elements/Writers';
// import WriterRegister from './layouts/writer/WriterRegister';
// import BlogWriting from './pages/order/BlogWriting';
// import ArticleCreation from './pages/order/ArticleCreation';
// import ResumeCVWriting from './pages/order/ResumeCVWriting';
// import EmailCopywriting from './pages/order/EmailCopywriting';
// import EditOrders from './pages/order/manageOrders/EditOrders';
// import OrderHistory from './pages/order/manageOrders/OrderHistory';
// import ResumeDisplay from './pages/order/ResumeDisplay';
// import EditBlog from './pages/order/editOrders/EditBlog';
// import EditEmailCopyWriting from './pages/order/editOrders/EditEmailCopyWriting';
// import EditArticleCreation from './pages/order/editOrders/EditArticleCreation';
// // import EditResume from './pages/order/editOrders/EditResume';
// import RecentResumes from './pages/order/editOrders/RecentResumes';
// import EditResume from './pages/order/editOrders/EditResume';
// import DashboardAdmin from './admin/src/pages/DashboardAdmin';
// import Blog from './admin/src/pages/Blog';
// import Main from './admin/src/pages/Main';
// import BlogUser from './admin/src/pages/BlogUser';
// import BlogForm from './client/src/pages/BlogForm';
// import ArticleCreation from './client/src/pages/ArticleCreation';
// import ResumeCVWriting from './client/src/pages/ResumeCVWriting';
// import EmailCopywriting from './client/src/pages/EmailCopywriting';
// import LoginClient from './client/src/pages/LoginClient';
import LoginClient from './client/src/pages/LoginClient'
// import Dashboard from './client/src/pages/Dashboard';
import Dashboard from './client/src/pages/Dashboard';
// import DashboardMain from './client/src/pages/DashboardMain';

import ArticleCreation from './client/src/pages/ArticleCreation';
// import DashboardMain from './client/src/pages/DashboardMain';
// import AdminLogin from './client/src/pages/AdminLogin';
// import Blog from './client/src/pages/Blog';
import Blog from './admin/src/pages/Blog';
import BlogUser from './admin/src/pages/BlogUser';
// import BlogUser from './client/src/pages/BlogUser'; EditResume
// import Writers from './client/src/pages/Writers';
// import WriterRegister from './client/src/pages/WriterRegister';
// import BlogForm from './client/src/pages/BlogForm';
// import ArticleCreation from './client/src/pages/ArticleCreation';
import ResumeCVWriting from './client/src/pages/ResumeCVWriting';
import EmailCopywriting from './client/src/pages/EmailCopywriting';
// import EditOrders from './admin/src/pages/'
import OrderHistory from './client/src/pages/manageorders/OrderHistory'
// import ResumeDisplay from './admin/src/pages/'
// import EditBlog from './client/src/pages/EditBlog';
// import EditEmailCopyWriting from './client/src/pages/EditEmailCopyWriting';
import EditEmailCopyWriting from './client/src/pages/edit/EditEmailCopyWriting'
import EditArticleCreation from './client/src/pages/edit/EditArticleCreation'
// import RecentResumes from './client/src/pages'
import EditResume from './client/src/pages/edit/EditResume'

// import RecentResumes from './client/src/pages/RecentResumes';
// import EditResume from './client/src/pages/EditResume';
// import DashboardAdmin from './client/src/pages/DashboardAdmin';
import DashboardAdmin from './admin/src/pages/DashboardAdmin';
import DashboardMain from './client/src/dashboard/DashboardMain';
import EditBlog from './client/src/pages/edit/EditBlog';
import EditOrders from './client/src/pages/edit/EditOrders';
// import Main from './client/src/pages/Main';
// import EditOrders from './client/src/dashboard/'
import RecentResumes from './client/src/pages/edit/RecentResumes'
// import CompletedOrders from './client/src/pages/manageorders/CompletedOrders';
import AdminLogin from './admin/src/pages/AdminLogin';
import CompletedOrders from './client/src/pages/manageorders/completed/CompletedOrders';
import BlogWritingComplete from './client/src/pages/manageorders/completed/BlogWritingComplete';
import ArticleDetails from './admin/src/pages/ArticleDetails';
import UserDetail from './admin/src/pages/ArticleUser';
import ArticlePage from './client/src/pages/manageorders/completed/ArticlePage';
import ResumeCVWritingDetails from './admin/src/pages/ResumeCVWritingDetails';
import ResumeCVWritingUser from './admin/src/pages/ResumeCVWritingUser';
import CvWriting from './client/src/pages/manageorders/completed/CvWriting';
import EmailCopyWriting from './admin/src/pages/EmailCopyWriting';
import EmailCopyWritingUser from './admin/src/pages/EmailCopyWritingUser';
import EmailCopyWritingComplete from './client/src/pages/manageorders/completed/EmailCopyWritingComplete';
import AboutPage from './client/src/pages/AboutPage';
import Payment from './client/src/pages/Payment';
import BlogForm from './client/src/pages/BlogForm';
import UserProfile from './client/src/pages/UserProfile';
import Settings from './client/src/pages/Settings';
import ComingSoon from './client/src/components/ComingSoon';
import LearnMore from './client/src/components/LearnMore';
// import AboutPage from './client/src/pages/AboutPage';





const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />
  },
  
  {
    path: "/login",
    element: <LoginClient />
  },
  {
    path: "/about",
    element: <AboutPage />
  },
  {
    path: "/comingsoon",
    element: <ComingSoon />
  },
  {
    path: "/learnmore",
    element: <LearnMore />
  },
  {
    path: "dashboard",
    element: <Dashboard />,
    children: [
      {
        index: true,
        element: <DashboardMain />
      },
      {
        path: "blogorder",
        element: <BlogForm />
      },
     
      {
        path: "articlecreation",
        element: <ArticleCreation />
      },
      
     
     
      {
        path: "resumecvwriting",
        element: <ResumeCVWriting />
      },
      {
        path: "emailcopywriting",
        element: <EmailCopywriting />
      },
      {
        path: "editorders",
        element: <EditOrders />
      },                         
      {
        path: "ordershistory",
        element: <OrderHistory />
      },
      {
        path: "payment",
        element: <Payment />
      },
      // {
      //   path: "resume/:resumeId",
      //   element: <ResumeDisplay />
      // },
   
      {
        path: "editblog",
        element: <EditBlog />
      },
      {
        path: "completedorders",
        element: <CompletedOrders />
      },
      {
        path: "editemailcopywriting",
        element: <EditEmailCopyWriting />
      },
      {
        path: "editarticlecreation",
        element: <EditArticleCreation />
      },
      {
        path: "getrecentresume",
        element: <RecentResumes />
      },
      {
        path: "editresume/:resumeId",
        element: <EditResume />
      },
      {
        path: "completedorders/completedblog",
        element: <BlogWritingComplete />
      },
      {
        path: "completedorders/completedarticle",
        element: <ArticlePage />
      },
      {
        path: "completedorders/completedresumes",
        element: <CvWriting />
      },
      {
        path: "completedorders/completedemailcopywriting",
        element: <EmailCopyWritingComplete />
      },
      {
        path: "profile",
        element: <UserProfile />
      },
      {
        path: "settings",
        element: <Settings />
      }
    ]
  },
  // {
  //   path: "/writer",
  //   element: <WriterRegister />
  // },
  {
    path: "/admin",
    element: <AdminLogin />
  },
  {
    path: "/admindashboard",
    element: <DashboardAdmin />,
    children: [
      {
        index: true,
        element: <Main />
      },
      {
        path: "blog",
        element: <Blog />
      },
      // {
      //   path: "writers",
      //   element: <Writers />
      // },
      {
        path: "bloguser/:id",
        element: <BlogUser />
      },

      {
        path: "articles",
        element: <ArticleDetails />
      },
      {
        path: "articleuser/:id",
        element: <UserDetail />
      },
      {
        path: "resumes",
        element: <ResumeCVWritingDetails />
      },
      {
        path: "resumeuser/:id",
        element: <ResumeCVWritingUser />
      },
      {
        path: "emailcopywriting",
        element: <EmailCopyWriting />
      },
      {
        path: "emailcopywriting/:id",
        element: <EmailCopyWritingUser />
      },
      

      
      
    ]
  }
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
