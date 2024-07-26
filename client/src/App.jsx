import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './layouts/home/HomePage';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import About from './pages/About';
import Services from './pages/Services';
import Dashboard from './pages/protected/Dashboard';
import LoginClient from './layouts/client/LoginClient';
import DashboardMain from './pages/protected/layout/DashboardMain';
import ManageArticles from './pages/protected/article/ManageArticles';
import BlogPost from './pages/protected/article/BlogPost';
import Reviews from './pages/protected/article/Reviews';
import AdminLogin from './pages/protected/FormArticle/Admin/AdminLogin';
import AdminDashboard from './pages/protected/FormArticle/Admin/adminDashboard/AdminDashboard';
import AdminMain from './pages/protected/FormArticle/Admin/adminDashboard/AdminMain';
import Users from './pages/protected/FormArticle/Admin/elements/Users';
import Writers from './pages/protected/FormArticle/Admin/elements/Writers';
import WriterRegister from './layouts/writer/WriterRegister';
import BlogWriting from './pages/order/BlogWriting';
import ArticleCreation from './pages/order/ArticleCreation';
import PoetryAndSong from './pages/order/PoetryAndSong';
import ContentEditing from './pages/order/ContentEditing';
import SeoOptimization from './pages/order/SeoOptimization';
import ResumeCVWriting from './pages/order/ResumeCVWriting';
import EmailCopywriting from './pages/order/EmailCopywriting';
import EditOrders from './pages/order/manageOrders/EditOrders';
import OrderHistory from './pages/order/manageOrders/OrderHistory';

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />
  },
  {
    path: "/about",
    element: <About />
  },
  {
    path: "/services",
    element: <Services />
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
        path: "manage",
        element: <ManageArticles />
      },
      {
        path: "articlecreation",
        element: <ArticleCreation />
      },
      {
        path: "poetryandsong",
        element: <PoetryAndSong />
      },
      {
        path: "contentediting",
        element: <ContentEditing />
      },
      {
        path: "seooptimization",
        element: <SeoOptimization />
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
      {
        path: "blogposts",
        element: <BlogPost />
      },
      {
        path: "reviews",
        element: <Reviews />
      }
    ]
  }
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
