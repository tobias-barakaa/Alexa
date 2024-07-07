import React from 'react';
import './ModalRegister.css';

const ModalRegister = ({ handleCloseModal }) => {
  return (
    <div className="modal-backdrop">
      <div className="modal-content">
        <div className="modal-header">
          <h2>Client</h2>
          <button onClick={handleCloseModal} className="modal-close-button">&times;</button>
        </div>
        <div className="modal-body">
          <form>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" required />
            <button type="submit">Sign Up</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ModalRegister;
