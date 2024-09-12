import "./BlogForm.css";

const BlogForm = () => {
  return (
    <div className="blog-form-container">
      <nav className="side-nav">
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#posts">Posts</a></li>
          <li><a href="#categories">Categories</a></li>
          <li><a href="#tags">Tags</a></li>
        </ul>
      </nav>
      <div className="main-content">
        <nav className="top-nav">
          <ul>
            <li><a href="#profile">Profile</a></li>
            <li><a href="#settings">Settings</a></li>
            <li><a href="#logout">Logout</a></li>
          </ul>
        </nav>
        <div className="form-container">
          {/* <h2>Create New Blog Post</h2> */}
          {/* <form>
            <div className="form-group">
              <label htmlFor="title">Title:</label>
              <input type="text" id="title" name="title" required />
            </div>
            <div className="form-group">
              <label htmlFor="content">Content:</label>
              <textarea id="content" name="content" rows="10" required></textarea>
            </div>
            <div className="form-group">
              <label htmlFor="category">Category:</label>
              <select id="category" name="category">
                <option value="">Select a category</option>
                <option value="technology">Technology</option>
                <option value="lifestyle">Lifestyle</option>
                <option value="travel">Travel</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="tags">Tags:</label>
              <input type="text" id="tags" name="tags" placeholder="Separate tags with commas" />
            </div>
            <button type="submit">Publish Post</button>
          </form> */}
        </div>
      </div>
      
    </div>
  );
};

export default BlogForm;