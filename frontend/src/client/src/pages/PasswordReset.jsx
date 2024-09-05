import { useState } from 'react';
import './PasswordReset.css'; 
import { Toast } from 'bootstrap';

const PasswordReset = () => {
    const [email, setEmail] = useState('');
    const  [message, setMessage] = useState('');
    const  setVal = (e) => {
        e.preventDefault();
        setEmail(e.target.value);
    }

    const sendLink = async(e) => {
        e.preventDefault();
        const res = await fetch('http://localhost:5000/api/users/sendpasswordlink', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({email})
        });

        const data = await res.json();

        if(data.status == 201) {
            setEmail("");
            setMessage(true)
        } else {
            Toast.show("Error in sending password reset link", {
                delay: 2000,
                autohide: true
            });
        }
        
    }

    
  return (
    <div className="reset-password-container">
      <div className="reset-password-form">
        <p className="reset-password-heading">Enter your email</p>
        
        {
            message ? <p style={{ color: "green", fontWeight: "bold" }}>Password reset link sent succesfull in Your Email</p>
            : null
        }
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
