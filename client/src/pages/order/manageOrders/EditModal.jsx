import { useState } from "react";
import "./EditModal.css";
import { useGetCategoriesQuery, useGetNumberOfWordsQuery, useGetTimeFrameQuery } from "../../../slices/client/blogApiSlice";

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

  const { data: numberofwords, isLoading: isLoadingWords, isError: isErrorWords } = useGetNumberOfWordsQuery();
  const { data: timeframe, isLoading: isLoadingTimeframe, isError: isErrorTimeframe } = useGetTimeFrameQuery();
  const { data: blogcategories, isLoading: isLoadingCategories, isError: isErrorCategories } = useGetCategoriesQuery();

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
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Edit Blog Post</h2>
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
              required
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
              required
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

export default EditModal;
