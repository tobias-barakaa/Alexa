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
import HireWriters from './dashboard/src/pages/HireWriters';
import HeroLayout from './client/src/components/HeroLayout';
import Layout from './client/src/pages/Layout';
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />, // Assuming you have a Layout component for the main structure
    children: [
      {
        index: true,
        element: <Layout /> // This renders the HeroLayout when the index route is hit.
      },
      {
        path: "/contact-us",
        element: <Contacts /> // This defines the Contacts page as a separate route.
      },
    ]
  },
  {
    path: "/contact-us",
    element: <Contacts /> // This defines the Contacts page as a separate route.
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
    path: "/paypal/success",
    element: <SuccessPage />
  },
  {
    path: "/paypal/cancel",
    element: <FailurePage />
  },
  {
    path: "/hire-writers",
    element: <HireWriters />
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
