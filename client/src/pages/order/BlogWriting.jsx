import { useGetCategoriesQuery, useGetNumberOfWordsQuery, useGetTimeFrameQuery, useCreateBlogMutation } from "../../slices/client/blogApiSlice";
import "./BlogWriting.css";

const BlogWriting = () => {
  const { data: numberofwords, isLoading: isLoadingWords, isError: isErrorWords } = useGetNumberOfWordsQuery();
  const { data: timeframe, isLoading: isLoadingTimeframe, isError: isErrorTimeframe } = useGetTimeFrameQuery();
  const { data: blogcategories, isLoading: isLoadingCategories, isError: isErrorCategories } = useGetCategoriesQuery();
  const [createBlog] = useCreateBlogMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();
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
      const createdBlog = await createBlog(newBlog).unwrap();
      localStorage.setItem('createdBlog', JSON.stringify(createdBlog.blog));
      alert('Blog created successfully!');
    } catch (err) {
      alert('Error creating blog: ' + err.message);
    }
  };

  return (
    <div className="blog-writing-section">
      <h2>Create New Blog Post</h2>
      
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="post-title">Title</label>
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

        <button type="submit" className="submit-button">Save Post</button>
      </form>
    </div>
  );
};

export default BlogWriting;
