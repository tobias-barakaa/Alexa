import PropTypes from 'prop-types';
import './ConfirmationModal.css';

const ConfirmationModal = ({ isOpen, onClose, onConfirm }) => {
  if (!isOpen) return null;

  return (
    <div className="confirmation-modal-overlay">
      <div className="confirmation-modal">
        <h2>Confirm Deletion</h2>
        <p>Are you sure you want to delete this blog post? This action cannot be undone.</p>
        <div className="modal-buttons">
          <button onClick={onConfirm} className="confirm-button">Yes, Delete</button>
          <button onClick={onClose} className="cancel-button">Cancel</button>
        </div>
      </div>
    </div>
  );
};

ConfirmationModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onConfirm: PropTypes.func.isRequired,
};

export default ConfirmationModal;
