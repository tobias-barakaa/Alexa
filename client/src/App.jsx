import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './layouts/home/HomePage';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import About from './pages/About';
import Services from './pages/Services';
import Dashboard from './pages/protected/Dashboard';

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
    path: "/dashboard",
    element: <Dashboard />
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
