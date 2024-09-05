import { useState } from 'react';
import './PasswordReset.css'; 

const PasswordReset = () => {
    const [email, setEmail] = useState('');
    const  setVal = (e) => {
        e.preventDefault();
        setEmail(e.target.value);
    }

    const sendLink = async(e) => {
        e.preventDefault();
        console.log(email);
    }

    
  return (
    <div className="reset-password-container">
      <div className="reset-password-form">
        <p className="reset-password-heading">Enter your email</p>
        <form>
          <input
            type="email"
            className="reset-password-input"
            placeholder="Enter your email"
            value={email}
            onChange={setVal}
          />
          <button type="submit" className="reset-password-button"
          onClick={sendLink}
          >Send</button>
        </form>
      </div>
    </div>
  );
};

export default PasswordReset;
