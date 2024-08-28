import { useState, useEffect } from 'react';
import axios from 'axios';
import '../../styles/pages/edit/EditArticleCreation.css';
// import ConfirmationModal from './ConfirmationModal'; // Import your modal component
// import { useDeleteArticleMutation } from '../../slices/articleApiSlice';
import ConfirmationModal from './DeleteConfirmationModal';
import { useDeleteArticleMutation } from '../../../../slices/client/articleCreationApiSlice';
import Warning from '../../dashboard/components/Warning';

const EditArticleCreation = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error,setError] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [articleToDelete, setArticleToDelete] = useState(null);
  const [deleteArticle] = useDeleteArticleMutation();

  useEffect(() => {
    fetchArticles();
  }, []);

  const fetchArticles = async () => {
    try {
      setLoading(true);
      const response = await axios.get('http://localhost:5000/api/articlecreation/getarticle', { withCredentials: true });
      setArticles(response.data.articles);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching articles:', error);
      setError('Failed to fetch articles. Please try again later.');
      setLoading(false);
    }
  };

  const handleDeleteClick = (id) => {
    setArticleToDelete(id);
    setIsModalOpen(true);
  };

  const handleConfirmDelete = async () => {
    if (articleToDelete) {
      try {
        await deleteArticle(articleToDelete).unwrap();
        setArticles(articles.filter(article => article.id !== articleToDelete));
      } catch (error) {
        setError('Failed to delete article. Please try again later.');
      }
    }
    setIsModalOpen(false);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setArticleToDelete(null);
  };

  if (loading) {
    return <div className="loading">Loading...</div>;
  }


  return (
    <div className="edit-article-creation">
      <h1>Edit Article Creation Requests</h1>
      {articles.length === 0 ? (
        <Warning message={error} />
      ) : (
        <div className="article-list">
          {articles.map((article) => (
            <div key={article.id} className="article-item">
              <h2>{article.title}</h2>
              <p className="description"><strong>Description:</strong> {article.description}</p>
              <div className="article-details">
                <p><strong>Keywords:</strong> {article.keywords}</p>
                <p><strong>Category:</strong> {article.category}</p>
                <p><strong>Word Count:</strong> {article.word_count}</p>
                <p><strong>Complexity:</strong> {article.complexity}</p>
                <p><strong>Cost:</strong> ${article.cost}</p>
                <p style={{ backgroundColor: "green", color: "white" }}><strong>Status:</strong> {article.status}</p>
                <p><strong>Created:</strong> {new Date(article.created_at).toLocaleString()}</p>
              </div>
              <div className="article-actions">
                <button className="edit-button">Edit</button>
                <button onClick={() => handleDeleteClick(article.id)} className="delete-button">Delete</button>
              </div>
            </div>
          ))}
        </div>
      )}
      <ConfirmationModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onConfirm={handleConfirmDelete}
      />
    </div>
  );
};

export default EditArticleCreation;
