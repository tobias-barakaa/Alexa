import { useState, useEffect } from 'react';
import { useGetRecentArticleByIdQuery } from '../../../../slices/client/orderArticleApiSlice';
import './EditArticle.css'; // Import the CSS file
import { useParams } from 'react-router-dom';

const EditArticle = () => {
  const { id } = useParams();
  const { data: article, isLoading: loading, error } = useGetRecentArticleByIdQuery(id); 
  const [formData, setFormData] = useState({});
  const [isEditable, setIsEditable] = useState(true);

  useEffect(() => {
    if (article) {
      setFormData(article);
      // Check if the article is still editable (within 1 hour of creation)
      const createdAt = new Date(article.created_at);
      const oneHourLater = new Date(createdAt.getTime() + 60 * 60 * 1000);
      setIsEditable(new Date() < oneHourLater);
    }
  }, [article]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitting updated article:', formData);
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  if (!article) return <div>No article found</div>;

  return (
    <div className="edit-article-container">
      <div className="header">
        <h2>Edit Article</h2>
      </div>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input
              id="title"
              name="title"
              value={formData.title || ''}
              onChange={handleInputChange}
              disabled={!isEditable}
            />
          </div>
          <div className="form-group">
            <label htmlFor="description">Description</label>
            <textarea
              id="description"
              name="description"
              value={formData.description || ''}
              onChange={handleInputChange}
              disabled={!isEditable}
            />
          </div>
          <div className="form-group">
            <label htmlFor="keywords">Keywords</label>
            <input
              id="keywords"
              name="keywords"
              value={formData.keywords || ''}
              onChange={handleInputChange}
              disabled={!isEditable}
            />
          </div>
          <div className="form-grid">
            <div className="form-group">
              <label htmlFor="word_count">Word Count</label>
              <input
                id="word_count"
                name="word_count"
                value={formData.word_count || ''}
                onChange={handleInputChange}
                disabled={!isEditable}
              />
            </div>
            <div className="form-group">
              <label htmlFor="duration">Duration</label>
              <input
                id="duration"
                name="duration"
                value={formData.duration || ''}
                onChange={handleInputChange}
                disabled={!isEditable}
              />
            </div>
          </div>
          <div className="form-grid">
            <div className="form-group">
              <label htmlFor="complexity">Complexity</label>
              <input
                id="complexity"
                name="complexity"
                value={formData.complexity || ''}
                onChange={handleInputChange}
                disabled={!isEditable}
              />
            </div>
            <div className="form-group">
              <label htmlFor="language">Language</label>
              <input
                id="language"
                name="language"
                value={formData.language || ''}
                onChange={handleInputChange}
                disabled={!isEditable}
              />
            </div>
          </div>
          <div className="form-grid">
            <div className="form-group">
              <label htmlFor="quantity">Quantity</label>
              <input
                id="quantity"
                name="quantity"
                type="number"
                value={formData.quantity || ''}
                onChange={handleInputChange}
                disabled={!isEditable}
              />
            </div>
            <div className="form-group">
              <label htmlFor="cost">Cost</label>
              <input
                id="cost"
                name="cost"
                type="number"
                step="0.01"
                value={formData.cost || ''}
                onChange={handleInputChange}
                disabled={!isEditable}
              />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="status">Status</label>
            <input
              id="status"
              name="status"
              value={formData.status || ''}
              onChange={handleInputChange}
              disabled={!isEditable}
            />
          </div>
          <div className="form-group checkbox-group">
            <input
              id="is_paid"
              name="is_paid"
              type="checkbox"
              checked={formData.is_paid || false}
              onChange={(e) => setFormData((prev) => ({ ...prev, is_paid: e.target.checked }))}
              disabled={!isEditable}
            />
            <label htmlFor="is_paid">Is Paid</label>
          </div>
          <div className="footer">
            {isEditable ? (
              <button type="submit" className="save-button">Save Changes</button>
            ) : (
              <p className="error-message">Editing time has expired</p>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditArticle;
