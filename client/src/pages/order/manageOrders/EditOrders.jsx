import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useGetBlogQuery, useUpdateBlogMutation } from '../../../slices/client/blogApiSlice';
import './EditOrders.css';

const EditOrders = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data: blog, error, isLoading } = useGetBlogQuery();
  const [updateBlog] = useUpdateBlogMutation();

  const [formState, setFormState] = useState({
    title: '',
    category: '',
    tags: '',
    excerpt: '',
    wordCount: '',
    timeFrame: '',
  });

  useEffect(() => {
    if (blog) {
      setFormState({
        title: blog.title || '',
        category: blog.category || '',
        tags: blog.tags || '',
        excerpt: blog.excerpt || '',
        wordCount: blog.wordCount || '',
        timeFrame: blog.timeFrame || '',
      });
    }
  }, [blog]);

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateBlog({ id, ...formState }).unwrap();
      navigate('/orders'); // Redirect to orders page after successful update
    } catch (err) {
      console.error('Failed to update order:', err);
    }
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading order.</div>;

  return (
    <div className="edit-orders-section">
      <h2>Edit Order</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            name="title"
            value={formState.title}
            onChange={handleChange}
            placeholder="Enter blog post title"
          />
        </div>

        <div className="form-group">
          <label htmlFor="category">Category</label>
          <input
            type="text"
            id="category"
            name="category"
            value={formState.category}
            onChange={handleChange}
            placeholder="Enter category"
          />
        </div>

        <div className="form-group">
          <label htmlFor="tags">Tags/Keywords</label>
          <input
            type="text"
            id="tags"
            name="tags"
            value={formState.tags}
            onChange={handleChange}
            placeholder="Enter tags, separated by commas"
          />
        </div>

        <div className="form-group">
          <label htmlFor="excerpt">Excerpt (Optional)</label>
          <textarea
            id="excerpt"
            name="excerpt"
            rows="3"
            value={formState.excerpt}
            onChange={handleChange}
            placeholder="Write a short excerpt"
          ></textarea>
        </div>

        <div className="form-group">
          <label htmlFor="wordCount">Word Count</label>
          <input
            type="number"
            id="wordCount"
            name="wordCount"
            value={formState.wordCount}
            onChange={handleChange}
            placeholder="Enter word count"
          />
        </div>

        <div className="form-group">
          <label htmlFor="timeFrame">Time Frame</label>
          <input
            type="text"
            id="timeFrame"
            name="timeFrame"
            value={formState.timeFrame}
            onChange={handleChange}
            placeholder="Enter time frame"
          />
        </div>

        <button type="submit" className="submit-button">Update Order</button>
      </form>
    </div>
  );
};

export default EditOrders;
