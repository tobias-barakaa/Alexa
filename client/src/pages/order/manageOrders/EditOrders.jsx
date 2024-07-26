import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
// import { useGetBlogQuery } from '../../../slices/client/blogApiSlice';
import './EditOrders.css';

const EditOrders = () => {
  const { id: orderId } = useParams();
  
  const [formState, setFormState] = useState({
    title: '',
    category: '',
    tags: '',
    excerpt: '',
    wordCount: '',
    timeFrame: '',
  });

  useEffect(() => {
    const savedBlog = JSON.parse(localStorage.getItem('createdBlog'));
    if (savedBlog) {
      setFormState({
        title: savedBlog.title || '',
        category: savedBlog.category_id || '',
        tags: savedBlog.tags || '',
        excerpt: savedBlog.excerpt || '',
        wordCount: savedBlog.number_of_words_id || '',
        timeFrame: savedBlog.timeframe_id || '',
      });
    }
  }, []);

  return (
    <div className="edit-orders-container">
      <h2>View Order</h2>
      <form>
        <div className="form-group">
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            name="title"
            value={formState.title}
            readOnly
          />
        </div>
        <div className="form-group">
          <label htmlFor="category">Category:</label>
          <input
            type="text"
            id="category"
            name="category"
            value={formState.category}
            readOnly
          />
        </div>
        <div className="form-group">
          <label htmlFor="tags">Tags:</label>
          <input
            type="text"
            id="tags"
            name="tags"
            value={formState.tags}
            readOnly
          />
        </div>
        <div className="form-group">
          <label htmlFor="excerpt">Excerpt:</label>
          <textarea
            id="excerpt"
            name="excerpt"
            value={formState.excerpt}
            readOnly
          />
        </div>
        <div className="form-group">
          <label htmlFor="wordCount">Word Count:</label>
          <input
            type="number"
            id="wordCount"
            name="wordCount"
            value={formState.wordCount}
            readOnly
          />
        </div>
        <div className="form-group">
          <label htmlFor="timeFrame">Time Frame:</label>
          <input
            type="text"
            id="timeFrame"
            name="timeFrame"
            value={formState.timeFrame}
            readOnly
          />
        </div>
      </form>
    </div>
  );
};

export default EditOrders;
