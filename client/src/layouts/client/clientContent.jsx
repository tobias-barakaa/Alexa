import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const ClientContent = ({ handleOpenModal }) => {
  return (
    <div>
      <h2>Welcome to Enwriters</h2>
      <div className="signup-buttons">
        <button className="signup-button" onClick={handleOpenModal}>Client Sign up with email</button>
        <div className="or-divider">
          <hr />
          <span>or sign up with</span>
          <hr />
        </div>
        <div className="social-buttons">
          <button className="social-button">
            <i className="bi bi-facebook"></i> Facebook
          </button>
          <button className="social-button">
            <i className="bi bi-google"></i> Google
          </button>
        </div>
        
        <p>Have an account? 

        <Link to='/login'>Sign In</Link>
        </p>
      </div>
    </div>
  );
};


ClientContent.propTypes = {
    handleOpenModal: PropTypes.func.isRequired,
  };
  

export default ClientContent;
