// DeleteButtonWithModal.js
import { useState } from 'react';
import './DeleteButtonWithModal.css'; // Optional for styling
import { useDeleteArticleMutation } from '../../../slices/client/orderArticleApiSlice';

const DeleteButtonWithModal = ({ articleId, onDelete }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [deleteArticle, { isLoading }] = useDeleteArticleMutation();

  const handleDelete = async () => {
    try {
      await deleteArticle(articleId).unwrap();
      setIsModalOpen(false); // Close modal after successful delete
      onDelete(); // Call the onDelete callback to update the draft list
      console.log("Article deleted successfully");
    } catch (error) {
      console.error("Failed to delete article:", error);
    }
  };

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      {/* The Delete Button */}
      <div className="delete-button" onClick={openModal}>
        <i className="fas fa-trash-alt"></i> Delete
      </div>

      {/* Modal Component */}
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>Are you sure you want to delete this article?</h2>
            <div className="modal-actions">
              <button className="modal-btn yes-btn" onClick={handleDelete} disabled={isLoading}>
                {isLoading ? 'Deleting...' : 'Yes'}
              </button>
              <button className="modal-btn no-btn" onClick={closeModal}>
                No
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default DeleteButtonWithModal;
