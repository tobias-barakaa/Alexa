import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const PrivateRoute = ({ children }) => {
  const { userInfo } = useSelector((state) => state.auth);

  return userInfo ? children : <Navigate to="/" replace />;
};

export default PrivateRoute;
