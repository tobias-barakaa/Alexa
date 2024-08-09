import React, { useState } from 'react';
import { useCreateBlogMutation, useGetNumberOfWordsQuery, useGetTimeFrameQuery, useGetCategoriesQuery } from './path_to_your_blogApiSlice';

const BlogForm = () => {
  const [formData, setFormData] = useState({
    title: '',
    category_id: '',
    tags_keywords: '',
    excerpt: '',
    number_of_words_id: '',
    timeframe_id: '',
    user_id: '9faf7bba-6d23-46a8-a260-40ffe04d6708',
    status: 'draft',
  });

  const [createBlog] = useCreateBlogMutation();
  const { data: categories = [] } = useGetCategoriesQuery();
  const { data: numberOfWords = [] } = useGetNumberOfWordsQuery();
  const { data: timeFrames = [] } = useGetTimeFrameQuery();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData, 
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createBlog(formData).unwrap();
      alert('Blog post created successfully!');
    } catch (error) {
      console.error('Failed to create blog:', error);
      alert('Failed to create blog.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Title</label>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          required
        />
      </div>

      <div>
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

      <div>
        <label>Tags/Keywords</label>
        <input
          type="text"
          name="tags_keywords"
          value={formData.tags_keywords}
          onChange={handleChange}
        />
      </div>

      <div>
        <label>Excerpt</label>
        <textarea
          name="excerpt"
          value={formData.excerpt}
          onChange={handleChange}
        />
      </div>

      <div>
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

      <div>
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
              {timeFrame.name}
            </option>
          ))}
        </select>
      </div>

      <div>
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

      <button type="submit">Submit</button>
    </form>
  );
};

export default BlogForm;
