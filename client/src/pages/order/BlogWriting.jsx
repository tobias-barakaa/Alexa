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
      <label >Content</label>
      <textarea id="post-content" name="post-content" rows="10" placeholder="Write your blog post here"></textarea>
    </div>

    <div className="form-group">
      <label >Category</label>
      <select id="post-category" name="post-category">
        <option value="">Select a category</option>
        <option value="technology">Technology</option>
        <option value="lifestyle">Lifestyle</option>
        <option value="business">Business</option>
      </select>
    </div>

    <div className="form-group">
      <label >Tags</label>
      <input type="text" id="post-tags"
      name="post-tags" placeholder="Enter tags, separated by commas" />
    </div>

    <div className="form-group">
      <label >Featured Image</label>
      <input type="file" id="featured-image"
      name="featured-image" />
    </div>

    <div className="form-group">
      <label >Excerpt</label>
      <textarea id="post-excerpt" name="post-excerpt" rows="3" placeholder="Write a short excerpt"></textarea>
    </div>

    <div className="form-group">
      <label>Publishing Options</label>
      <div>
        <input type="radio" id="draft"
        name="post-status" value="draft" />
        <label >Save as Draft</label>
      </div>
      <div>
        <input type="radio" id="publish" name="post-status" value="publish" />
        <label >Publish Now</label>
      </div>
    </div>

    <button type="submit" className="submit-button">Save Post</button>
  </form>
</div>
      
    </div>
  )
}

export default BlogWriting
