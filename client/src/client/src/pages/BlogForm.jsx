import { useState, useEffect } from 'react';
import { useCreateBlogMutation, useGetCategoriesQuery, useGetNumberOfWordsQuery, useGetTimeFrameQuery } from '../../../slices/client/blogApiSlice';
import "../styles/pages/BlogForm.css";

const BlogForm = () => {
  const [formData, setFormData] = useState({
    title: '',
    category_id: '',
    tags: '',
    excerpt: '',
    number_of_words_id: '',
    timeframe_id: '',
    cost: 0,
  });

  const [createBlog] = useCreateBlogMutation();
  const { data: categories = [] } = useGetCategoriesQuery();
  const { data: numberOfWords = [] } = useGetNumberOfWordsQuery();
  const { data: timeFrames = [] } = useGetTimeFrameQuery();

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
    const { ...submitData } = formData;
    try {
      await createBlog(submitData).unwrap();
      alert('Blog post created successfully!');
    } catch (error) {
      console.error('Failed to create blog:', error);
      alert('Failed to create blog.');
    }
  };

  return (
    <div className="blog-form-container">
        <p className="blog-form-title">Create Your Blog Post</p>

      <div className="blog-form-inner">
        <input className='input-class' placeholder='Title' />
        <form onSubmit={handleSubmit} className="blog-form">
        <div className="form-group row">
    <label className="col-sm-2 col-form-label col-form-label-lg">Title</label>
    <div className="col-sm-10">
      <input type="email" className="form-control form-control-lg"
      id="colFormLabelLg" placeholder="col-form-label-lg" />
    </div>
  </div>
          {/* <div className="form-group">
            <label className="form-label">Title</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="form-control"
              required
            />
          </div> */}

          <div className="form-group">
            <label className="form-label">Category</label>
            <select
              name="category_id"
              value={formData.category_id}
              onChange={handleChange}
              className="form-control"
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
            <label className="form-label">Tags/Keywords</label>
            <input
              type="text"
              name="tags"
              value={formData.tags}
              onChange={handleChange}
              className="form-control"
            />
          </div>

          <div className="form-group">
            <label className="form-label">Excerpt</label>
            <textarea
              name="excerpt"
              value={formData.excerpt}
              onChange={handleChange}
              className="form-control"
            />
          </div>

          <div className="form-group">
            <label className="form-label">Number of Words</label>
            <select
              name="number_of_words_id"
              value={formData.number_of_words_id}
              onChange={handleChange}
              className="form-control"
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
            <label className="form-label">Timeframe</label>
            <select
              name="timeframe_id"
              value={formData.timeframe_id}
              onChange={handleChange}
              className="form-control"
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
            <label className="form-label">Estimated Cost: ${formData.cost.toFixed(2)}</label>
          </div>

          <button type="submit" className="submit-button">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default BlogForm;
