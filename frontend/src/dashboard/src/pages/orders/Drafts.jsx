// Drafts.js
import './Drafts.css';
import { useGetUnpaidArticlesByUserQuery } from '../../../../slices/client/orderArticleApiSlice';
import DeleteButtonWithModal from '../../components/DeleteButtonWithModal';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

const Drafts = () => {
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  const { data, isLoading } = useGetUnpaidArticlesByUserQuery();
  const [drafts, setDrafts] = useState([]);

  useEffect(() => {
    setDrafts(data?.articles || []); 
  }, [data]);

  const handleDeleteDraft = (deletedId) => {
    setDrafts((prevDrafts) => prevDrafts.filter(draft => draft.id !== deletedId));
  };

  if (isLoading) return <div>Loading...</div>;

  if (drafts.length === 0) {
    return (
      <div className="no-drafts-message">
        <h2>No Unpaid Drafts Available</h2>
        <p>It seems you do not have any unpaid drafts at the moment. Create one to get started!</p>
      </div>
    );
  }
  
  return (
    <div className="drafts-container">
      {drafts.map((draft) => (
        <div key={draft.id} className="draft-card">
          <h2 className="draft-title">{draft.title}</h2>
          <p className="draft-description">{draft.description}</p>
          <div className="draft-details">
            <p><strong>Keywords:</strong> {draft.keywords}</p>
            <p><strong>Word Count:</strong> {draft.word_count}</p>
            <p><strong>Duration:</strong> {draft.duration}</p>
            <p><strong>Complexity:</strong> {draft.complexity}</p>
            <p><strong>Language:</strong> {draft.language}</p>
            <p><strong>Quantity:</strong> {draft.quantity}</p>
            <p><strong>Cost:</strong> ${draft.cost}</p>
            <p><strong>Status:</strong> <span className={`status-${draft.status.toLowerCase()}`}>{draft.status}</span></p>
            <p><strong>Created:</strong> {formatDate(draft.created_at)}</p>
          </div>
          <div className="draft-actions">
            <DeleteButtonWithModal articleId={draft.id} onDelete={() => handleDeleteDraft(draft.id)} />
            {!draft.is_paid ? (
              <Link to={`/dashboard/articledetails/${draft.id}`} className="pay-btn-link">
                Pay
              </Link>
            ) : (
              <button className="pay-btn" disabled>
                Paid
              </button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Drafts;
