import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
// import writers from "../../../client/src/assets/images/writers.jpg";
import writers from '../../../../client/src/assets/images/agenda.png';
// import Loader from "../components/Loader";
import "./OrderArticle.css";

const OrderArticle = () => {
  const [formData, setFormData] = useState({
    title: "",
    category: "",
    tags: "",
    wordCount: "",
    duration: "",
    cost: 0,
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [computedCost, setComputedCost] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    // Compute cost dynamically based on wordCount and duration
    const wordPrice = formData.wordCount * 0.05;
    const durationPrice = formData.duration === "Express" ? 20 : 10;
    setComputedCost(wordPrice + durationPrice);
  }, [formData.wordCount, formData.duration]);

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
    if (!formData.category) newErrors.category = "Category is required";
    if (!formData.tags) newErrors.tags = "Tags/Keywords are required";
    if (!formData.wordCount) newErrors.wordCount = "Word count is required";
    if (!formData.duration) newErrors.duration = "Duration is required";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setLoading(true);
    // Submit the form here, e.g. call an API
    // After success:
    setLoading(false);
    navigate("/dashboard");
  };

  return (
    <div className="form-layout-container">
      <div className="order-form-container">
        <div className="form-section">
          <div>Order Article</div>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label className="label">Title:</label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                className={`form-control ${
                  errors.title ? "input-error" : ""
                }`}
                placeholder="Enter article title"
              />
              {errors.title && (
                <span className="error-message">{errors.title}</span>
              )}
            </div>

            <div className="form-group">
              <label className="label">Category:</label>
              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                className={`form-control ${
                  errors.category ? "input-error" : ""
                }`}
              >
                <option value="">Select Category</option>
                {/* Add categories dynamically here */}
                <option value="Tech">Tech</option>
                <option value="Business">Business</option>
                <option value="Health">Health</option>
              </select>
              {errors.category && (
                <span className="error-message">{errors.category}</span>
              )}
            </div>

            <div className="form-group">
              <label className="label">Tags/Keywords:</label>
              <input
                type="text"
                name="tags"
                value={formData.tags}
                onChange={handleChange}
                className={`form-control ${
                  errors.tags ? "input-error" : ""
                }`}
                placeholder="Enter tags/keywords"
              />
              {errors.tags && (
                <span className="error-message">{errors.tags}</span>
              )}
            </div>

            <div className="form-group">
              <label className="label">Word Count:</label>
              <select
                name="wordCount"
                value={formData.wordCount}
                onChange={handleChange}
                className={`form-control ${
                  errors.wordCount ? "input-error" : ""
                }`}
              >
                <option value="">Select Word Count</option>
                <option value="500">500 words</option>
                <option value="1000">1000 words</option>
                <option value="1500">1500 words</option>
              </select>
              {errors.wordCount && (
                <span className="error-message">{errors.wordCount}</span>
              )}
            </div>

            <div className="form-group">
              <label className="label">Duration:</label>
              <select
                name="duration"
                value={formData.duration}
                onChange={handleChange}
                className={`form-control ${
                  errors.duration ? "input-error" : ""
                }`}
              >
                <option value="">Select Duration</option>
                <option value="Standard">Standard (2 days)</option>
                <option value="Express">Express (1 day)</option>
              </select>
              {errors.duration && (
                <span className="error-message">{errors.duration}</span>
              )}
            </div>

            <div className="form-group">
              <label className="label">Estimated Cost:</label>
              <div className="cost-value">${computedCost.toFixed(2)}</div>
            </div>

            <button type="submit" className="btn btn-primary" disabled={loading}>
              {loading ? "Submitting..." : "Submit Order"}
            </button>
          </form>
        </div>

        <div className="writer-section">
          <img src={writers} alt="Writers" className="writers-image" />
          <h2>Hire a Personal Writer</h2>
          <p>Need help? Contact a professional writer for assistance!</p>
          <button className="btn btn-secondary">Hire a Writer</button>
        </div>
      </div>
    </div>
  );
};

export default OrderArticle;
