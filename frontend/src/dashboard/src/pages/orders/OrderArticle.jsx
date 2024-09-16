import { useState } from "react";
import "./OrderArticle.css";
import writers from "../../../../client/src/assets/images/agenda.png";

const OrderArticle = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "",
    keywords: "",
    wordCount: "300 words", // default value
    duration: "1 day", // default value
    complexity: "Basic", // default value
    language: "",
    cost: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "",
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!formData.title) newErrors.title = "Title is required";
    if (!formData.description) newErrors.description = "Description is required";
    if (!formData.category) newErrors.category = "Category is required";
    if (!formData.keywords) newErrors.keywords = "Keywords are required";
    if (!formData.wordCount) newErrors.wordCount = "Word count is required";
    if (!formData.duration) newErrors.duration = "Duration is required";
    if (!formData.language) newErrors.language = "Language is required";
    if (!formData.cost) newErrors.cost = "Cost is required";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      alert("Order placed successfully!");
    }, 2000);
  };

  return (
    <div className="order-article-container">
      <div className="form-side">
        <div className="order-your-article">Order Article</div>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="article-label">Title:</label>
            <input
              type="text"
              id="title"
              name="title"
              className={`form-control ${errors.title ? "input-error" : ""}`}
              value={formData.title}
              onChange={handleChange}
              placeholder="Article Title"
            />
            {errors.title && <span className="error-message">{errors.title}</span>}
          </div>

          <div className="form-group">
            <label className="article-label">Description:</label>
            <textarea
              id="description"
              name="description"
              className={`form-control ${errors.description ? "input-error" : ""}`}
              value={formData.description}
              onChange={handleChange}
              placeholder="Brief description of the article"
            ></textarea>
            {errors.description && (
              <span className="error-message">{errors.description}</span>
            )}
          </div>

          <div className="form-group">
            <label className="article-label">Keywords:</label>
            <input
              type="text"
              id="keywords"
              name="keywords"
              className={`form-control ${errors.keywords ? "input-error" : ""}`}
              value={formData.keywords}
              onChange={handleChange}
              placeholder="Article Keywords"
            />
            {errors.keywords && <span className="error-message">{errors.keywords}</span>}
          </div>

          {/* Word Count Dropdown */}
          <div className="form-group">
            <label className="article-label">Word Count:</label>
            <div className="dropdown-wrapper">
              <select
                id="wordCount"
                name="wordCount"
                className={`form-control ${errors.wordCount ? "input-error" : ""}`}
                value={formData.wordCount}
                onChange={handleChange}
              >
                <option value="300 words">300 words</option>
                <option value="500 words">500 words</option>
                <option value="800 words">800 words</option>
                <option value="1000 words">1000 words</option>
                <option value="1500 words">1500 words</option>
                <option value="3000 words">3000 words</option>
              </select>
            </div>
            {errors.wordCount && <span className="error-message">{errors.wordCount}</span>}
          </div>

          {/* Duration Dropdown */}
          <div className="form-group">
            <label className="article-label">Duration:</label>
            <div className="dropdown-wrapper">
              <select
                id="duration"
                name="duration"
                className={`form-control ${errors.duration ? "input-error" : ""}`}
                value={formData.duration}
                onChange={handleChange}
              >
                <option value="6 hrs">6 hrs</option>
                <option value="12 hrs">12 hrs</option>
                <option value="1 day">1 day</option>
                <option value="2 days">2 days</option>
                <option value="3 days">3 days</option>
                <option value="1 week">1 week</option>
                <option value="2 weeks">2 weeks</option>
                <option value="1 month">1 month</option>
                <option value="2 months">2 months</option>
              </select>
            </div>
            {errors.duration && <span className="error-message">{errors.duration}</span>}
          </div>

          {/* Complexity Dropdown */}
          <div className="form-group">
            <label className="article-label">Complexity:</label>
            <div className="dropdown-wrapper">
              <select
                id="complexity"
                name="complexity"
                className={`form-control ${errors.complexity ? "input-error" : ""}`}
                value={formData.complexity}
                onChange={handleChange}
              >
                <option value="Basic">Basic</option>
                <option value="Advanced">Advanced</option>
                <option value="Expert">Expert</option>
                <option value="Expert">Expert</option>

              </select>
            </div>
            {errors.complexity && <span className="error-message">{errors.complexity}</span>}
          </div>


          

          <div className="form-group">
            <label className="article-label">Language:</label>
            <input
              type="text"
              id="language"
              name="language"
              className={`form-control ${errors.language ? "input-error" : ""}`}
              value={formData.language}
              onChange={handleChange}
              placeholder="Language of the Article"
            />
            {errors.language && <span className="error-message">{errors.language}</span>}
          </div>

          <div className="form-group">
            <label className="article-label">Cost ($):</label>
            <input
              type="number"
              id="cost"
              name="cost"
              className={`form-control ${errors.cost ? "input-error" : ""}`}
              value={formData.cost}
              onChange={handleChange}
              placeholder="Cost in USD"
            />
            {errors.cost && <span className="error-message">{errors.cost}</span>}
          </div>

          <button type="submit" className="btn btn-primary" disabled={loading}>
            {loading ? "Placing Order..." : "Order Article"}
          </button>
        </form>
      </div>

      <div className="hire-writer-side">
        <img src={writers} className="writers-image" alt="Hire Writers" />
        <div className="hire-writers">Hire a Professional Writer</div>
        <p>Need top-notch content? Hire one of our expert writers to craft your perfect article.</p>
        <button className="secondary">Hire a Writer</button>
      </div>
    </div>
  );
};

export default OrderArticle;
