import { useState, useEffect } from "react";
import "./EditModal.css";

const EditModal = ({ blog, isOpen, onClose, onUpdate }) => {
  const [formData, setFormData] = useState({
    title: blog.title,
    category_id: blog.category_id,
    tags: blog.tags,
    excerpt: blog.excerpt,
    number_of_words_id: blog.number_of_words_id,
    timeframe_id: blog.timeframe_id,
    status: blog.status,
  });
  const [numberOfWordsOptions, setNumberOfWordsOptions] = useState([]);

  useEffect(() => {
    // Fetch valid number of words options
    const fetchNumberOfWordsOptions = async () => {
      try {
        const response = await fetch('/api/numberofwords');
        const data = await response.json();
        
        // Check if data is an array before setting state
        if (Array.isArray(data)) {
          setNumberOfWordsOptions(data);
        } else {
          console.error("Expected an array but got:", data);
        }
      } catch (error) {
        console.error("Error fetching number of words options:", error);
      }
    };

    fetchNumberOfWordsOptions();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: name.includes('_id') ? parseInt(value) : value, // Ensure IDs are numbers
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdate(blog.id, formData);
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Edit Blog Post</h2>
        <form onSubmit={handleSubmit}>
          <input
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Title"
          />
          <input
            name="category_id"
            type="number"
            value={formData.category_id}
            onChange={handleChange}
            placeholder="Category ID"
          />
          <input
            name="tags"
            value={formData.tags}
            onChange={handleChange}
            placeholder="Tags"
          />
          <textarea
            name="excerpt"
            value={formData.excerpt}
            onChange={handleChange}
            placeholder="Excerpt"
          />
          <select
            name="number_of_words_id"
            value={formData.number_of_words_id}
            onChange={handleChange}
          >
            {numberOfWordsOptions.map(option => (
              <option key={option.id} value={option.id}>{option.name}</option>
            ))}
          </select>
          <input
            name="timeframe_id"
            type="number"
            value={formData.timeframe_id}
            onChange={handleChange}
            placeholder="Timeframe ID"
          />
          <select
            name="status"
            value={formData.status}
            onChange={handleChange}
          >
            <option value="draft">Draft</option>
            <option value="published">Published</option>
          </select>
          <button type="submit">Update</button>
          <button type="button" onClick={onClose}>Cancel</button>
        </form>
      </div>
    </div>
  );
};

export default EditModal;
