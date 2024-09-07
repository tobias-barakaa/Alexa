import "./TokenExpired.css";
import { Link } from 'react-router-dom';

const TokenExpired = () => {
  return (
    <div className="error-container">
      <h1>Token Expired</h1>
      <p>Oops, it seems like your session has expired. Please log in again to continue.</p>
      <Link to="/login" className="btn">Log In Again</Link>
    </div>
  )
}

export default TokenExpired
