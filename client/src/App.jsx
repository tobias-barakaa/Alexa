import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './layouts/home/HomePage';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import About from './pages/About';
import Services from './pages/Services';
import Dashboard from './pages/protected/Dashboard';
import LoginClient from './layouts/client/LoginClient';
import DashboardMain from './pages/protected/layout/DashboardMain';
// import OrderArticles from './pages/protected/article/OrderArticles';
import ManageArticles from './pages/protected/article/ManageArticles';
import BlogPost from './pages/protected/article/BlogPost';
import Reviews from './pages/protected/article/Reviews';
// import StepForm from './pages/protected/FormArticle/StepForm';
import AdminLogin from './pages/protected/FormArticle/Admin/AdminLogin';
import AdminDashboard from './pages/protected/FormArticle/Admin/adminDashboard/AdminDashboard';
import AdminMain from './pages/protected/FormArticle/Admin/adminDashboard/AdminMain';
import Users from './pages/protected/FormArticle/Admin/elements/Users';
import Writers from './pages/protected/FormArticle/Admin/elements/Writers';
import WriterRegister from './layouts/writer/WriterRegister';
import BlogWriting from './pages/order/BlogWriting';
import ArticleCreation from './pages/order/ArticleCreation';

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
    path: "/servies",
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
        path: "reviews",
        element: <Reviews />
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
  } ]
}
]);



function App() {

  return (
    <RouterProvider router={router}>
    <HomePage />
    </RouterProvider>
  )
}

export default App
