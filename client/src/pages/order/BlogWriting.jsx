import { useNavigate } from "react-router-dom";
import { useGetCategoriesQuery, useGetNumberOfWordsQuery, useGetTimeFrameQuery, useCreateBlogMutation } from "../../slices/client/blogApiSlice";
import "./BlogWriting.css";
import { useState } from "react";
import "./Overall.css"

const BlogWriting = () => {
  const { data: numberofwords, isLoading: isLoadingWords, isError: isErrorWords } = useGetNumberOfWordsQuery();
  const { data: timeframe, isLoading: isLoadingTimeframe, isError: isErrorTimeframe } = useGetTimeFrameQuery();
  const { data: blogcategories, isLoading: isLoadingCategories, isError: isErrorCategories } = useGetCategoriesQuery();
  const [createBlog] = useCreateBlogMutation();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
  
    const formData = new FormData(e.target);
    const newBlog = {
      title: formData.get('post-title'),
      category_id: formData.get('post-category'),
      tags: formData.get('post-tags'),
      excerpt: formData.get('post-excerpt'),
      number_of_words_id: formData.get('word-count'),
      timeframe_id: formData.get('time-frame'),
    };
  
    try {
      // Simulate a 5-second delay
      await new Promise(resolve => setTimeout(resolve, 5000));
  
      await createBlog(newBlog).unwrap();
      
      // Show success message
      alert('Blog post submitted successfully!');
      
      // Redirect to dashboard
      navigate('/dashboard');
    } catch (err) {
      alert('Error creating blog: ' + err.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="blog-writing-section" id="page-section">
      
      <form onSubmit={handleSubmit} className={isSubmitting ? 'blurred' : ''} id="form-input">
      <div className="create-input-container">
  <p className="create-input">Create New Blog Post</p>
</div>

        <div className="form-group">
          <label htmlFor="post-title" className="title">Title</label>
          <input type="text" id="post-title" name="post-title" placeholder="Enter blog post title" required />
        </div>

        <div className="form-group">
          <label htmlFor="post-category">Category</label>
          <select id="post-category" name="post-category" className="styled-select" required>
            <option value="" disabled selected>Select a category</option>
            {isLoadingCategories ? (
              <option>Loading...</option>
            ) : isErrorCategories ? (
              <option>Error loading data</option>
            ) : (
              blogcategories.map(category => (
                <option key={category.id} value={category.id}>{category.name}</option>
              ))
            )}
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="post-tags">Tags/Keywords</label>
          <input type="text" id="post-tags" name="post-tags" placeholder="Enter tags, separated by commas" />
        </div>

        <div className="form-group">
          <label htmlFor="post-excerpt">Excerpt(Optional)</label>
          <textarea id="post-excerpt" name="post-excerpt" rows="3" placeholder="Write a short excerpt"></textarea>
        </div>

        <div className="select-container">
          <div className="select-wrapper">
            <label htmlFor="word-count">Word Count</label>
            <select className="custom-select" id="word-count" name="word-count" required>
              <option value="" disabled selected>Select word count</option>
              {isLoadingWords ? (
                <option>Loading...</option>
              ) : isErrorWords ? (
                <option>Error loading data</option>
              ) : (
                numberofwords.map(word => (
                  <option key={word.id} value={word.id}>{word.words}</option>
                ))
              )}
            </select>
          </div>

          <div className="select-wrapper">
            <label htmlFor="time-frame">Time Frame</label>
            <select className="custom-select" id="time-frame" name="time-frame" required>
              <option value="" disabled selected>Select time frame</option>
              {isLoadingTimeframe ? (
                <option>Loading...</option>
              ) : isErrorTimeframe ? (
                <option>Error loading data</option>
              ) : (
                timeframe.map(time => (
                  <option key={time.id} value={time.id}>{time.duration}</option>
                ))
              )}
            </select>
          </div>
        </div>

        <button type="submit" className="submit-button">
          
        {isSubmitting ? <div className="loader"></div> : <span>Save Post</span>}
        </button>
      </form>
    </div>
  );
};

export default BlogWriting;
