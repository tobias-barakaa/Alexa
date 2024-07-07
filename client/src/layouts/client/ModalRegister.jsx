import './ModalRegister.css';

const ModalRegister = ({ handleCloseModal }) => {

  // Function to handle clicks on the backdrop
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      handleCloseModal();
    }
  };

  return (
    <div className="modal-backdrop" onClick={handleBackdropClick}>
      <button onClick={handleCloseModal} className="modal-close-button">&times;</button>

      <div className="modal-content">

        
        <div className="modal-body">


            
        <div className="containerr">
    <h1 className="title">Take your career to new heights</h1>
    <p>Already have an account? <a href="#" className="link">Sign In</a></p>
    <button className="google-btn">
    <i className="bi bi-google"></i>Sign up with Google
    </button>
    <div className="input-container">
      <input type="text" placeholder="First Name" />
      <input type="text" placeholder="Last Name" />
    </div>
    <input type="email" placeholder="Email Address" className="full-width-input" />
    <input type="password" placeholder="Password" className="full-width-input" />
    <input type="password" placeholder="Confirm Password" className="full-width-input" />
    <div className="checkbox">
      <input type="checkbox" />
      <label>I agree to the Workfalls Terms of Service and Privacy Policy</label>
    </div>
    <button className="signup-btn">Sign Up as Client</button>
  </div>


        </div>
      </div>
    </div>
  );
};

export default ModalRegister;
