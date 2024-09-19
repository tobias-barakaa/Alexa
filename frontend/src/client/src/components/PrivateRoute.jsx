import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const PrivateRoute = ({ children }) => {
  const { userInfo } = useSelector((state) => state.auth);

  // If userInfo exists, render the children (the protected component); otherwise, redirect to login
  return userInfo ? children : <Navigate to="/" replace />;
};

export default PrivateRoute;
