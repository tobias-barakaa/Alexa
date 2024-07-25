import { useGetCategoriesQuery, useGetNumberOfWordsQuery, useGetTimeFrameQuery } from "../../slices/client/blogApiSlice";
import "./BlogWriting.css";

const BlogWriting = () => {
  const { data: numberofwords, isLoading, isError } = useGetNumberOfWordsQuery();
  const { data: timeframe } = useGetTimeFrameQuery();
  const { data: blogcategories } = useGetCategoriesQuery();



  return (
    <div className="blog-writing-section">
      <h2>Create New Blog Post</h2>
      
      <form>
        <div className="form-group">
          <label htmlFor="post-title">Title</label>
          <input type="text" id="post-title" name="post-title" placeholder="Enter blog post title" />
        </div>

        <div className="form-group">
          <label htmlFor="post-category">Category</label>
          <select id="post-category" name="post-category" className="styled-select">
            <option value="" disabled selected>Select a category</option>
            {blogcategories && blogcategories.map(category => (
              <option key={category.id} value={category.id}>{category.name}</option>
            ))}
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
            <select className="custom-select" id="word-count">
              <option value="" disabled selected>Select word count</option>
              {isLoading ? (
                <option>Loading...</option>
              ) : isError ? (
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
            <select className="custom-select" id="time-frame">
              <option value="" disabled selected>Select time frame</option>
              {
                isLoading ? (
                  <option>Loading....</option>
                ) : isError ? (
                  <option>Error loading data </option>
                ) : (
                  timeframe.map(time => (
                    <option key={time.id} value={time.id}>{time.duration}</option>
                  ))
                )
              }
            </select>
          </div>
        </div>

        <button type="submit" className="submit-button">Save Post</button>
      </form>
    </div>
  );
};

export default BlogWriting;
