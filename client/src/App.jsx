import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './layouts/home/HomePage';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import About from './pages/About';
import Services from './pages/Services';
import Dashboard from './pages/protected/Dashboard';
import LoginClient from './layouts/client/LoginClient';
import DashboardMain from './pages/protected/layout/DashboardMain';
import OrderArticles from './pages/protected/article/OrderArticles';
import ManageArticles from './pages/protected/article/ManageArticles';
import BlogPost from './pages/protected/article/BlogPost';

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
        path: "dashboardmain",
        element: <DashboardMain />
      },
      {
        path: "order",
        element: <OrderArticles />
      },
      {
        path: "manage",
        element: <ManageArticles />
      },
      {
        path: "blogposts",
        element: <BlogPost />
      }
    ]
  },
]);



function App() {

  return (
    <RouterProvider router={router}>
    <HomePage />
    </RouterProvider>
  )
}

export default App
