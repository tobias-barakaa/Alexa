import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import HomePage from "./client/src/pages/HomePage";
import Main from './admin/src/pages/Main';
import LoginClient from './client/src/pages/LoginClient'
import Dashboard from "./dashboard/src/pages/Dashboard"
import ArticleCreation from "./dashboard/src/pages/ArticleCreation"
import Blog from './admin/src/pages/Blog';
import BlogUser from './admin/src/pages/BlogUser';
import OrderHistory from "./dashboard/src/pages/manageorders/OrderHistory"
import EditArticleCreation from "./dashboard/src/pages/edit/EditArticleCreation"
import DashboardAdmin from './admin/src/pages/DashboardAdmin';
import DashboardMain from './dashboard/src/pages/DashboardMain';
import EditBlog from "./dashboard/src/pages/edit/EditBlog";
import AdminLogin from './admin/src/pages/AdminLogin';
import CompletedOrders from './dashboard/src/pages/manageorders/completed/CompletedOrders';
import BlogWritingComplete from './dashboard/src/pages/manageorders/completed/BlogWritingComplete';
import ArticleDetails from './admin/src/pages/ArticleDetails';
import UserDetail from './admin/src/pages/ArticleUser';
import ArticlePage from './dashboard/src/pages/manageorders/completed/ArticlePage';
import ResumeCVWritingUser from './admin/src/pages/ResumeCVWritingUser';
import CvWriting from './dashboard/src/pages/manageorders/completed/CvWriting';
import EmailCopyWriting from './admin/src/pages/EmailCopyWriting';
import EmailCopyWritingUser from './admin/src/pages/EmailCopyWritingUser';
import EmailCopyWritingComplete from './dashboard/src/pages/manageorders/completed/EmailCopyWritingComplete';
import Payment from './dashboard/src/pages/Payment';
import BlogForm from './dashboard/src/pages/BlogForm';
import UserProfile from './dashboard/src/pages/UserProfile';
import Settings from './dashboard/src/pages/Settings';
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import PasswordReset from './client/src/pages/PasswordReset';
import ForgotPassword from './client/src/pages/ForgotPassword';
import TokenExpired from './client/src/components/TokenExpired';
import Paypal from './client/src/pages/Paypal';
import SuccessPage from './client/src/pages/SuccessPage';
import FailurePage from './client/src/pages/FailPage';
import OrderArticle from './dashboard/src/pages/orders/OrderArticle';
import PrivateRoute from './client/src/components/PrivateRoute';



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
    path: "/password-reset",
    element: <PasswordReset />
  },
  {
    path: "/forgot-password/:id/:token",
    element: <ForgotPassword />
  },
  {
    path: "/forgot-password/token-expired",
    element: <TokenExpired />
  },
  {
    path: "/paypal",
    element: <Paypal />
  },
  {
    path: "/paypal/success",
    element: <SuccessPage />
  },
  {
    path: "/paypal/cancel",
    element: <FailurePage />
  },
  
 
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <Dashboard />
      </PrivateRoute>
    ),
    children: [
      {
        index: true,
        element: <DashboardMain />
      },
      {
        path: "orderarticle",
        element: <OrderArticle />
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
        path: "ordershistory",
        element: <OrderHistory />
      },
      {
        path: "payment",
        element: <Payment />
      },
    
   
      {
        path: "editblog",
        element: <EditBlog />
      },
      {
        path: "completedorders",
        element: <CompletedOrders />
      },
    
      {
        path: "editarticlecreation",
        element: <EditArticleCreation />
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

<PayPalScriptProvider>
<RouterProvider router={router} />

</PayPalScriptProvider>
  );
}

export default App;
