import { useState, useEffect } from 'react';
import { useCreateBlogMutation, useGetCategoriesQuery, useGetNumberOfWordsQuery, useGetTimeFrameQuery } from '../../../slices/client/blogApiSlice';
import "../styles/pages/BlogForm.css";

const BlogForm = () => {
  const [formData, setFormData] = useState({
    title: '',
    category_id: '',
    tags_keywords: '',
    excerpt: '',
    number_of_words_id: '',
    timeframe_id: '',
    status: 'draft',
    cost: 0, // Calculated cost
  });

  const [createBlog] = useCreateBlogMutation();
  const { data: categories = [] } = useGetCategoriesQuery();
  const { data: numberOfWords = [] } = useGetNumberOfWordsQuery();
  const { data: timeFrames = [] } = useGetTimeFrameQuery();

  // Calculate cost whenever number_of_words_id or timeframe_id changes
  useEffect(() => {
    const selectedWord = numberOfWords.find(word => word.id === parseInt(formData.number_of_words_id));
    const selectedTimeFrame = timeFrames.find(time => time.id === parseInt(formData.timeframe_id));

    let cost = 0;
    if (selectedWord && selectedTimeFrame) {
      cost = selectedWord.word_count * 0.05 + selectedTimeFrame.timeframe.length * 2;
    }
    
    setFormData(prevData => ({
      ...prevData,
      cost,
    }));
  }, [formData.number_of_words_id, formData.timeframe_id, numberOfWords, timeFrames]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData, 
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { cost, ...submitData } = formData;
    try {
      await createBlog(submitData).unwrap();
      alert('Blog post created successfully!');
    } catch (error) {
      console.error('Failed to create blog:', error);
      alert('Failed to create blog.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="blog-form">
      <div className="form-group">
        <label>Title</label>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label>Category</label>
        <select
          name="category_id"
          value={formData.category_id}
          onChange={handleChange}
          required
        >
          <option value="">Select Category</option>
          {categories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </select>
      </div>

      <div className="form-group">
        <label>Tags/Keywords</label>
        <input
          type="text"
          name="tags_keywords"
          value={formData.tags_keywords}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label>Excerpt</label>
        <textarea
          name="excerpt"
          value={formData.excerpt}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label>Number of Words</label>
        <select
          name="number_of_words_id"
          value={formData.number_of_words_id}
          onChange={handleChange}
          required
        >
          <option value="">Select Number of Words</option>
          {numberOfWords.map((word) => (
            <option key={word.id} value={word.id}>
              {word.name}
            </option>
          ))}
        </select>
      </div>

      <div className="form-group">
        <label>Timeframe</label>
        <select
          name="timeframe_id"
          value={formData.timeframe_id}
          onChange={handleChange}
          required
        >
          <option value="">Select Timeframe</option>
          {timeFrames.map((timeFrame) => (
            <option key={timeFrame.id} value={timeFrame.id}>
              {timeFrame.timeframe}
            </option>
          ))}
        </select>
      </div>

      <div className="form-group">
        <label>Status</label>
        <select
          name="status"
          value={formData.status}
          onChange={handleChange}
          required
        >
          <option value="draft">Draft</option>
          <option value="published">Published</option>
        </select>
      </div>

      <div className="form-group">
        <label>Estimated Cost: ${formData.cost.toFixed(2)}</label>
      </div>

      <button type="submit" className="submit-button">Submit</button>
    </form>
  );
};

export default BlogForm;
