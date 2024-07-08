import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './layouts/home/HomePage';
import { createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />
  },
  {
    path: "/",
    element: <About />
  }
]);



function App() {

  return (
    <div>
    <HomePage />
    </div>
  )
}

export default App
