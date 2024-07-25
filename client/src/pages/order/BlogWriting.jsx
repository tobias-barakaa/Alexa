import "./BlogWriting.css";

const BlogWriting = () => {
  return (
    <div>
        <div className="blog-writing-section">
  <h2>Create New Blog Post</h2>
  
  <form>
    <div className="form-group">
      <label >Title</label>
      <input type="text" id="post-title"
      name="post-title" placeholder="Enter blog post title" />
    </div>

    

    <div className="form-group">
  <label htmlFor="post-category">Category</label>
  <select id="post-category" name="post-category" className="styled-select">
    <option value="">Select a category</option>
    <option value="technology">Technology</option>
    <option value="lifestyle">Lifestyle</option>
    <option value="business">Business</option>
  </select>
</div>


    <div className="form-group">
      <label >Tags/Keywords</label>
      <input type="text" id="post-tags"
      name="post-tags" placeholder="Enter tags, separated by commas" />
    </div>

       <div className="form-group">
      <label >Excerpt(Optional)</label>
      <textarea id="post-excerpt" name="post-excerpt" rows="3" placeholder="Write a short excerpt"></textarea>
    </div>

    

    <div className="select-container">
  <div className="select-wrapper">
    <select className="custom-select" id="word-count">
      <option value="" disabled selected>Select word count</option>
      <option value="100">100 words</option>
      <option value="250">250 words</option>
      <option value="500">500 words</option>
      <option value="1000">1000 words</option>
      <option value="2000">2000 words</option>
    </select>
  </div>

  <div className="select-wrapper">
    <select className="custom-select" id="time-frame">
      <option value="" disabled selected>Select time frame</option>
      <option value="3h">3 hours</option>
      <option value="12h">12 hours</option>
      <option value="1d">1 day</option>
      <option value="2d">2 days</option>
      <option value="3d">3 days</option>
      <option value="1w">1 week</option>
      <option value="2w">2 weeks</option>
    </select>
  </div>
</div>

    <button type="submit" className="submit-button">Save Post</button>
  </form>
</div>
      
    </div>
  )
}

export default BlogWriting
