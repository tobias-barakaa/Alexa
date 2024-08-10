import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "../../styles/pages/edit/EditBlog.css";
import { useGetCategoriesQuery, useGetNumberOfWordsQuery, useGetTimeFrameQuery } from "../../../../slices/client/blogApiSlice";
//import { useGetCategoriesQuery, useGetNumberOfWordsQuery, useGetTimeFrameQuery } from "../../../slices/client/blogApiSlice";

const EditModal = ({ blog, isOpen, onClose, onUpdate, category, numOfWords, durationTime }) => {
  const [formData, setFormData] = useState({
    title: blog.title,
    category_id: blog.category_id,
    tags: blog.tags,
    excerpt: blog.excerpt,
    number_of_words_id: blog.number_of_words_id,
    timeframe_id: blog.timeframe_id,
    status: blog.status,
  });
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const { data: numberofwords, isLoading: isLoadingWords, isError: isErrorWords } = useGetNumberOfWordsQuery();
  const { data: timeframe, isLoading: isLoadingTimeframe, isError: isErrorTimeframe } = useGetTimeFrameQuery();
  const { data: blogcategories, isLoading: isLoadingCategories, isError: isErrorCategories } = useGetCategoriesQuery();

  useEffect(() => {
    // Update formData with props when modal opens
    setFormData({
      title: blog.title,
      category_id: blog.category_id,
      tags: blog.tags,
      excerpt: blog.excerpt,
      number_of_words_id: blog.number_of_words_id,
      timeframe_id: blog.timeframe_id,
      status: blog.status,
    });
  }, [blog, isOpen]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdate(blog.id, formData);
    setShowSuccessMessage(true);
    setTimeout(() => {
      setShowSuccessMessage(false);
    }, 5000); // Hide after 5 seconds
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Edit Blog Post</h2>
        {showSuccessMessage && (
          <div className="success-message">Updated successfully!</div>
        )}
        <form onSubmit={handleSubmit}>
          <label htmlFor="post-title">Title</label>
          <input
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Title"
          />

          <div className="form-group">
            <label htmlFor="post-category">Category</label>
            <select
              id="post-category"
              name="category_id"
              value={formData.category_id}
              onChange={handleChange}
              className="styled-select"
              
            >
                <option value="">{category}</option>
              {isLoadingCategories ? (
                <option>Loading...</option>
              ) : isErrorCategories ? (
                <option>Error loading data</option>
              ) : (
                blogcategories.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))
              )}
            </select>
          </div>

          <label htmlFor="post-tags">Tags/Keywords</label>
          <input
            name="tags"
            value={formData.tags}
            onChange={handleChange}
            placeholder="Tags"
          />

          <label htmlFor="post-excerpt">Excerpt</label>
          <textarea
            name="excerpt"
            value={formData.excerpt}
            onChange={handleChange}
            placeholder="Excerpt"
          />

          <label htmlFor="post-word-count">Word Count</label>
          <select
            name="number_of_words_id"
            value={formData.number_of_words_id}
            onChange={handleChange}
          >
            <option value="">{numOfWords}</option>
            {isLoadingWords ? (
              <option>Loading...</option>
            ) : isErrorWords ? (
              <option>Error loading data</option>
            ) : (
              numberofwords.map((word) => (
                <option key={word.id} value={word.id}>
                  {word.words}
                </option>
              ))
            )}
          </select>

          <div className="select-wrapper">
            <label htmlFor="time-frame">Time Frame</label>
            <select
              className="custom-select"
              id="time-frame"
              name="timeframe_id"
              value={formData.timeframe_id}
              onChange={handleChange}
            >
              <option value="">{durationTime}</option>
              {isLoadingTimeframe ? (
                <option>Loading...</option>
              ) : isErrorTimeframe ? (
                <option>Error loading data</option>
              ) : (
                timeframe.map((time) => (
                  <option key={time.id} value={time.id}>
                    {time.duration}
                  </option>
                ))
              )}
            </select>
          </div>

          <button type="submit">Update</button>
          <button type="button" onClick={onClose}>
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
};

EditModal.propTypes = {
  blog: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    category_id: PropTypes.number.isRequired,
    tags: PropTypes.string.isRequired,
    excerpt: PropTypes.string.isRequired,
    number_of_words_id: PropTypes.number.isRequired,
    timeframe_id: PropTypes.number.isRequired,
    status: PropTypes.string.isRequired,
  }).isRequired,
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onUpdate: PropTypes.func.isRequired,
  category: PropTypes.string.isRequired,
  numOfWords: PropTypes.string.isRequired,
  durationTime: PropTypes.string.isRequired,
};

export default EditModal;
