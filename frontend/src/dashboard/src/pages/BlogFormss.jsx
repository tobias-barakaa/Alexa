import React from 'react';
import './BlogForm.css';

const BlogForm = () => {
  return (
    <div className="blog-form-container">
      {/* Sidebar */}
      <div className="sidebar">
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#profile">Profile</a></li>
          <li><a href="#settings">Settings</a></li>
          <li><a href="#logout">Logout</a></li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="main-content">
        {/* Navigation Bar */}
        <div className="navbar">
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#profile">Profile</a></li>
            <li><a href="#settings">Settings</a></li>
            <li><a href="#logout">Logout</a></li>
          </ul>
        </div>

        {/* Blog Form */}
        <div className="form-section">
          <h2>Create Blog</h2>
          <form>
            <div className="form-group">
              <label>Title:</label>
              <input type="text" name="title" placeholder="Enter blog title" />
            </div>

            <div className="form-group">
              <label>Category:</label>
              <select name="category">
                <option value="">Select Category</option>
                <option value="tech">Tech</option>
                <option value="health">Health</option>
              </select>
            </div>

            <div className="form-group">
              <label>Content:</label>
              <textarea name="content" placeholder="Write your blog..."></textarea>
            </div>

            <button type="submit">Submit</button>
          </form>

          <form>
            <div className="form-group">
              <label>Title:</label>
              <input type="text" name="title" placeholder="Enter blog title" />
            </div>

            <div className="form-group">
              <label>Category:</label>
              <select name="category">
                <option value="">Select Category</option>
                <option value="tech">Tech</option>
                <option value="health">Health</option>
              </select>
            </div>

            <div className="form-group">
              <label>Content:</label>
              <textarea name="content" placeholder="Write your blog..."></textarea>
            </div>

            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BlogForm;
