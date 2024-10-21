import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import HomePage from "./client/src/pages/HomePage";
import Main from './admin/src/pages/Main';
import LoginClient from './client/src/pages/LoginClient';
import Dashboard from "./dashboard/src/pages/Dashboard";
import DashboardAdmin from './admin/src/pages/DashboardAdmin';
import DashboardMain from './dashboard/src/pages/DashboardMain';
import AdminLogin from './admin/src/pages/AdminLogin';
import UserProfile from './dashboard/src/pages/UserProfile';
import Settings from './dashboard/src/pages/Settings';
import PasswordReset from './client/src/pages/PasswordReset';
import ForgotPassword from './client/src/pages/ForgotPassword';
import TokenExpired from './client/src/components/TokenExpired';
import SuccessPage from './client/src/pages/SuccessPage';
import FailurePage from './client/src/pages/FailPage';
import OrderArticle from './dashboard/src/pages/orders/OrderArticle';
import PrivateRoute from './client/src/components/PrivateRoute';
import ArticleDetailsOrder from './dashboard/src/pages/orders/ArticleDetailsOrder';
import { PayPalScriptProvider } from '@paypal/react-paypal-js';
import  ClientWallet from './dashboard/src/pages/wallet/ClientWallet';
import EditAll from './dashboard/src/pages/orders/EditAll';
import EditArticle from './dashboard/src/pages/orders/EditArticle';
import EditDetails from './dashboard/src/pages/orders/EditDetails';
import Drafts from './dashboard/src/pages/orders/Drafts';
import Pricing from './dashboard/src/pages/orders/Pricing';
import ArticleList from './dashboard/src/pages/manage orders/ArticleList';
import OrderHistory from './dashboard/src/pages/manage orders/OrderHistory';
import Articles from './admin/src/pages/Articles';
import ArticleDetails from './admin/src/pages/ArticleDetails';
import Published from './dashboard/src/pages/orders/Published';
import Contacts from './client/src/pages/Contacts';
import HireWriters from './client/src/pages/HireWriters';
import MainLayout from './client/src/pages/MainLayout';
import WriterAccount from './client/src/pages/WriterAccount';
import ProfileFill from './client/src/pages/ProfileFill';
import SignInWriter from './client/src/pages/SignInWriter';
import DashboardWriter from './writerDashboard/pages/DashboardWriter';
import WriterProfile from './client/src/pages/WriterProfile';
import WriterDashboard from './client/src/pages/dashboard/WriterDashboard';
import Manage from './client/src/pages/dashboard/Manage';
import PostJob from './client/src/pages/dashboard/postjob/PostJob';
import Payments from './client/src/pages/dashboard/Payments';
import MainLayoutClient from './client/src/pages/dashboard/MainLayout';
import CustomPost from './client/src/pages/dashboard/postjob/CustomPost';
import MyFavorites from './client/src/pages/dashboard/postjob/MyFavorites';
import FindAWriter from './client/src/pages/dashboard/postjob/FindAWriter';
import JobListings from './client/src/pages/dashboard/postjob/JobListings';
const router = createBrowserRouter([
  {
    path: "",
    element: <MainLayout />,  // Use MainLayout for pages with header/footer
    children: [
      {
        index: true,  // This makes HomePage the default route when path is "/"
        element: <HomePage />,
      },
      {
        path: "contact-us",  // No need for "/" prefix inside children
        element: <Contacts />,
      },
      {
        path: "/hire-writers",
        element: <HireWriters />
      },
      {
        path: "/writer/:username",
        element: <WriterProfile />
      },
      
    ],
  },

  {
    path: "/login",
    element: <LoginClient />
  },
  

  {
    path: "/cli-wri",
    element: <WriterDashboard />,  // Use MainLayout for pages with header/footer
    children: [
      {
        index: true,  // This makes HomePage the default route when path is "/"
        element: <MainLayoutClient />,
      },
      {
        path: "projects/hire",
        element: <PostJob />,
        children: [
          {
            index: true,
            element: <CustomPost />
          },
          {
            path: "favorites",
            element: <MyFavorites />
          },
          {
            path: "find-writer",
            element: <FindAWriter />
          },
          {
            path: "job-listings",
            element: <JobListings />
          }
        ]
      },
      {
        path: "manage/:id",
        element: <Manage />,
      },
      {
        path: "payments/",
        element: <Payments />,
      },
            
    ],
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
    path: "/paypal/success",
    element: <SuccessPage />
  },
  {
    path: "/paypal/cancel",
    element: <FailurePage />
  },
  {
    path: "/writer-account",
    element: <WriterAccount />
  },
  {
    path: "/login-writer",
    element: <SignInWriter />
  },
  {
    path: "/profile-fill",
    element: <ProfileFill />
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
        path: "articledetails/:id",
        element: <ArticleDetailsOrder />
      },
      {
        path: "wallet",
        element: <ClientWallet />
      },
      {
        path: "editall",
        element: <EditAll />
      },
      {
        path: "drafts",
        element: <Drafts />
      },
      {
        path: "edit-article/:id",
        element: <EditArticle />
      },
      {
        path: "edit-detail/:id",
        element: <EditDetails />
      },
      {
        path: "published",
        element: <Published />
      },
      {
        path: "pricing",
        element: <Pricing />
      },
      {
        path: "all-orders",
        element: <ArticleList />
      },
      {
        path: "history",
        element: <OrderHistory />
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
        path: "articles",
        element: <Articles />
      },
      {
        path: "articles/:id",
        element: <ArticleDetails />
      },
      
    ]
  },




  {
    path: "/writer-dashboard",
    element: (
      <PrivateRoute>
        <DashboardWriter />
        </PrivateRoute>
    ),
    children: [
      {
        index: true,
        element: <DashboardWriter />
      }
      
    ]
  },

]);

function App() {
  return (
    <PayPalScriptProvider>
      <RouterProvider router={router} />
    </PayPalScriptProvider>
  );
}

export default App;
