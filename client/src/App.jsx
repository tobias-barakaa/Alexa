import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './layouts/home/HomePage';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Dashboard from './pages/protected/Dashboard';
import LoginClient from './layouts/client/LoginClient';
import DashboardMain from './pages/protected/layout/DashboardMain';
import AdminLogin from './pages/protected/FormArticle/Admin/AdminLogin';
import AdminDashboard from './pages/protected/FormArticle/Admin/adminDashboard/AdminDashboard';
import AdminMain from './pages/protected/FormArticle/Admin/adminDashboard/AdminMain';
import Users from './pages/protected/FormArticle/Admin/elements/Users';
import Writers from './pages/protected/FormArticle/Admin/elements/Writers';
import WriterRegister from './layouts/writer/WriterRegister';
import BlogWriting from './pages/order/BlogWriting';
import ArticleCreation from './pages/order/ArticleCreation';
import ResumeCVWriting from './pages/order/ResumeCVWriting';
import EmailCopywriting from './pages/order/EmailCopywriting';
import EditOrders from './pages/order/manageOrders/EditOrders';
import OrderHistory from './pages/order/manageOrders/OrderHistory';
import ResumeDisplay from './pages/order/ResumeDisplay';
import EditBlog from './pages/order/editOrders/EditBlog';
import EditEmailCopyWriting from './pages/order/editOrders/EditEmailCopyWriting';
import EditArticleCreation from './pages/order/editOrders/EditArticleCreation';

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
    path: "dashboard",
    element: <Dashboard />,
    children: [
      {
        index: true,
        element: <DashboardMain />
      },
      {
        path: "blogorder",
        element: <BlogWriting />
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
        path: "resume/:resumeId",
        element: <ResumeDisplay />
      },
      {
        path: "editblog",
        element: <EditBlog />
      },
      {
        path: "editemailcopywriting",
        element: <EditEmailCopyWriting />
      },
      {
        path: "editarticlecreation",
        element: <EditArticleCreation />
      }
    ]
  },
  {
    path: "/writer",
    element: <WriterRegister />
  },
  {
    path: "/admin",
    element: <AdminLogin />
  },
  {
    path: "/admindashboard",
    element: <AdminDashboard />,
    children: [
      {
        index: true,
        element: <AdminMain />
      },
      {
        path: "users",
        element: <Users />
      },
      {
        path: "writers",
        element: <Writers />
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
