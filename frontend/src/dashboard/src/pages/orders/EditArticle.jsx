import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
// import { useUpdateArticleMutation } from "../../../../slices/client/articleApiSlice"; // Assuming you have this API slice
import { useGetRecentArticleByIdQuery, useUpdateArticleMutation } from "../../../../slices/client/orderArticleApiSlice";
import "./EditArticle.css";

const EditArticle = () => {
  const { id } = useParams();
  const { data: articleData, isLoading: articleLoading } = useGetRecentArticleByIdQuery(id); // Fetch article data
  
  const [updateArticle] = useUpdateArticleMutation();
  
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    keywords: "",
    word_count: "300 words", 
    duration: "1 day", 
    complexity: "General", 
    language: "American English",
    cost: 0, 
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

  const calculateCost = (complexity, duration, word_count, quantity) => {
    let baseCost = wordCountPrices[word_count] || 20;

    switch (complexity) {
      case "Advanced":
        baseCost += 30;
        break;
      case "Expert":
        baseCost += 50;
        break;
      default:
        baseCost += 0;
    }

    return baseCost * quantity;
  };

  // Populate form fields with article data when articleData is fetched
  useEffect(() => {
    if (articleData && articleData.article) {
      setFormData({
        title: articleData.article.title || "",
        description: articleData.article.description || "",
        keywords: articleData.article.keywords || "",
        word_count: articleData.article.word_count || "300 words",
        duration: articleData.article.duration || "1 day",
        complexity: articleData.article.complexity || "General",
        language: articleData.article.language || "American English",
        cost: parseFloat(articleData.article.cost) || 0, 
        quantity: articleData.article.quantity || 1,
      });
    }
  }, [articleData]);
  

  const handleChange = (e) => {
    const { name, value } = e.target;

    let updatedFormData = { ...formData, [name]: value };

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

  const handleSubmit = async (e) => {
    e.preventDefault();
  console.log('formData:', formData);


    const newErrors = {};
    if (!formData.title) newErrors.title = "Title is required";
    if (!formData.description) newErrors.description = "Description is required";
    if (!formData.keywords) newErrors.keywords = "Keywords are required";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setLoading(true);

    try {
      await updateArticle({ id, ...formData }, { headers: { 'Content-Type': 'application/json' } }).unwrap();
      navigate(`/dashboard/edit-detail/${id}`);
    } catch (error) {
      console.error('Error updating article:', error);
      alert("Failed to update the article. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (articleLoading) return <div>Loading article data...</div>;

  return (
    <div className="edit-article-container">
      <div className="form-side">
        <div className="edit-your-article">Edit Article</div>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="article-label">Title:</label>
            <input
              type="text"
              id="title"
              name="title"
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
              value={formData.description}
              onChange={handleChange}
              placeholder="Brief description of the article"
            ></textarea>
            {errors.description && <span className="error-message">{errors.description}</span>}
          </div>

          <div className="form-group">
            <label className="article-label">Keywords:</label>
            <input
              type="text"
              id="keywords"
              name="keywords"
              value={formData.keywords}
              onChange={handleChange}
              placeholder="Article Keywords"
            />
            {errors.keywords && <span className="error-message">{errors.keywords}</span>}
          </div>

          {/* Word Count Dropdown */}
          <div className="form-group">
            <label className="article-label">Word Count:</label>
            <select
              id="word_count"
              name="word_count"
              value={formData.word_count}
              onChange={handleChange}
            >
              <option value="300 words">300 words</option>
              <option value="500 words">500 words</option>
              <option value="800 words">800 words</option>
              <option value="1000 words">1000 words</option>
              <option value="1500 words">1500 words</option>
              <option value="3000 words">3000 words</option>
            </select>
            {errors.word_count && <span className="error-message">{errors.word_count}</span>}
          </div>

          {/* Duration Dropdown */}
          <div className="form-group">
            <label className="article-label">Duration:</label>
            <select
              id="duration"
              name="duration"
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
            {errors.duration && <span className="error-message">{errors.duration}</span>}
          </div>

          {/* Complexity Dropdown */}
          <div className="form-group">
            <label className="article-label">Complexity:</label>
            <select
              id="complexity"
              name="complexity"
              value={formData.complexity}
              onChange={handleChange}
            >
              <option value="General">General</option>
              <option value="Advanced">Advanced</option>
              <option value="Expert">Expert</option>
            </select>
            {errors.complexity && <span className="error-message">{errors.complexity}</span>}
          </div>

          <div className="form-group">
            <label className="article-label">Language:</label>
            <select
              id="language"
              name="language"
              value={formData.language}
              onChange={handleChange}
            >
              <option value="Canadian English">Canadian English</option>
              <option value="American English">American English</option>
              <option value="Native English">Native English</option>
            </select>
            {errors.language && <span className="error-message">{errors.language}</span>}
          </div>

          <div className="form-group">
            <label className="article-label">Quantity:</label>
            <select
              id="quantity"
              name="quantity"
              value={formData.quantity}
              onChange={handleChange}
            >
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={4}>4</option>
              <option value={5}>5</option>
              <option value={6}>6</option>
              <option value={7}>7</option>
              <option value={8}>8</option>
              <option value={9}>9</option>
              <option value={10}>10</option>

            </select>
            {errors.quantity && <span className="error-message">{errors.quantity}</span>}
          </div>

          {/* Cost */}
          <div className="form-group">
            <label className="article-label">Cost:</label>
            <input
              type="number"
              id="cost"
              name="cost"
              value={formData.cost.toFixed(2)}
              readOnly
            />
          </div>

          <button type="submit" className="submit-btn">
            {loading ? "Updating..." : "Update Article"}
          </button>
        </form>
      </div>

    </div>
  );
};

export default EditArticle;
