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
