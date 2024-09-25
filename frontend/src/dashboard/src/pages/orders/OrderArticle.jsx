import { useState } from "react";
import "./OrderArticle.css";
import writers from "../../../../client/src/assets/images/agenda.png";
import { useOrderArticleMutation } from "../../../../slices/client/orderArticleApiSlice";
import { useNavigate } from "react-router-dom";



const OrderArticle = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    keywords: "",
    word_count: "300 words", 
    duration: "1 day", 
    complexity: "General", 
    language: "American English",
    cost: 0.07 * 300,
    quantity: 1,
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const wordCountPrices = {
    "300 words": (0.07 * 300),
    "500 words": 0.07 * 500,
    "800 words": 0.07 * 800,
    "1000 words": 0.07 * 1000,
    "1500 words": 0.07 * 1500,
    "3000 words": 0.07 * 3000
  };

  // Function to calculate cost based on complexity, duration, word count, and quantity
  const calculateCost = (complexity, duration, word_count, quantity) => {
    let baseCost = wordCountPrices[word_count] || 20; // Base cost depends on word count

    // Adjust base cost based on complexity
    switch (complexity) {
      case "Advanced":
        baseCost += 30;
        break;
      case "Expert":
        baseCost += 50;
        break;
      default:
        baseCost += 0; // General
    }

    return baseCost * quantity;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    let updatedFormData = { ...formData, [name]: value };

    // Recalculate the cost when word_count, complexity, duration, or quantity changes
    if (name === "complexity" || name === "duration" || name === "word_count" || name === "quantity") {
      const newCost = calculateCost(
        name === "complexity" ? value : formData.complexity,
        name === "duration" ? value : formData.duration,
        name === "word_count" ? value : formData.word_count,
        name === "quantity" ? value : formData.quantity
      );
      updatedFormData.cost = newCost;
    }

    setFormData(updatedFormData);
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "",
    }));
  };

  const navigate = useNavigate(); // Initialize navigate
  const [orderArticle] = useOrderArticleMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newErrors = {};
    // Validate form data
    if (!formData.title) newErrors.title = "Title is required";
    if (!formData.description) newErrors.description = "Description is required";
    if (!formData.keywords) newErrors.keywords = "Keywords are required";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setLoading(true);

    try {
      const result = await orderArticle(formData).unwrap(); // Call the RTK Query mutation
      navigate(`/dashboard/articledetails/${result.articleId}`); // Redirect to Article Details page with article ID
    } catch (error) {
      console.error('Error submitting form:', error);
      alert("Failed to place the order. Please try again.");
    } finally {
      setLoading(false);
    }
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
                id="word_count"
                name="word_count"
                className={`form-control ${errors.word_count ? "input-error" : ""}`}
                value={formData.word_count}
                onChange={handleChange}
                style={{ border: "2px solid #ccc" }}

              >
                <option value="300 words">300 words</option>
                <option value="500 words">500 words</option>
                <option value="800 words">800 words</option>
                <option value="1000 words">1000 words</option>
                <option value="1500 words">1500 words</option>
                <option value="3000 words">3000 words</option>
              </select>
            </div>
            {errors.word_count && <span className="error-message">{errors.word_count}</span>}
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
                style={{ border: "2px solid #ccc" }}

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
                style={{ border: "2px solid #ccc" }}
              >
                <option value="General">General</option>
                <option value="Advanced">Advanced</option>
                <option value="Expert">Expert</option>
                <option value="Expert">Expert</option>

              </select>
            </div>
            {errors.complexity && <span className="error-message">{errors.complexity}</span>}
          </div>


          

          <div className="form-group">
            <label className="article-label">Language:</label>
            <div className="dropdown-wrapper">
              <select
                id="language"
                name="language"
                className={`form-control ${errors.language ? "input-error" : ""}`}
                value={formData.language}
                onChange={handleChange}
              >
                <option value="Canadian English">Canadian English</option>
                <option value="American English">American English</option>
                <option value="Native English">Native English</option>
              </select>
            </div>
            {errors.language && <span className="error-message">{errors.language}</span>}
          </div>

          <div className="form-group">
  <label htmlFor="quantity" className="quantity-label">Quantity:</label>
  <select
    id="quantity"
    name="quantity"
    className="form-control"
    value={formData.quantity}
    onChange={handleChange}
  >
    {[...Array(10)].map((_, index) => (
      <option key={index} value={index + 1}>
        {index + 1}
      </option>
    ))}
  </select>
</div>


          <div className="form-group">
  <label className="article-label">Cost ($):</label>
  <input
    type="number"
    id="cost"
    name="cost"
    className={`form-control ${errors.cost ? "input-error" : ""}`}
    value={formData.cost.toFixed(2)}
    placeholder="Cost in USD"
    readOnly
    style={{ fontWeight: "bold" }}
  />
  {errors.cost && <span className="error-message">{errors.cost}</span>}
</div>





      <button type="submit" className="btn btn-primary" disabled={loading}>
            {loading ? "Placing Order..." : "Place Order"}
          </button>
        </form>
      </div>

      <div className="hire-writer-side">
        <img src={writers} className="writers-image" alt="Hire Writers" />
        <div className="hire-writers">Hire a Professional Writer</div>
        <p className="hire-writers-text">Need top-notch content? Hire one of our expert writers to craft your perfect article.</p>
        <button className="secondary">Hire a Writer</button>
      </div>
    </div>
  );
};

export default OrderArticle;
