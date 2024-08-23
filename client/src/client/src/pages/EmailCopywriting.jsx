import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "../styles/pages/EmailCopywriting.css";
import FormLayout from "../dashboard/components/FormLayout";
import { useCreateEmailCopywritingMutation } from "../../../slices/client/emailCopywritingApiSlice";
import { resetForm, setErrors, setFormData, setStatus } from "../../../slices/client/emailCopywritingSlice";

const EmailCopywriting = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const formData = useSelector((state) => state.emailCopywriting.formData);
  const errors = useSelector((state) => state.emailCopywriting.errors);
  const [createEmailCopywriting] = useCreateEmailCopywritingMutation();

  const handleChange = (e) => {
    dispatch(setFormData({ [e.target.name]: e.target.value }));
  };

  const handleWordCountChange = (e) => {
    const wordCount = e.target.value;
    const cost = calculateCost(wordCount);
    dispatch(setFormData({ wordCount, cost }));
  };

  const calculateCost = (wordCount) => {
    const costPerWord = 0.1;
    const wordCountValue = wordCount === "under-100" ? 100 : parseInt(wordCount);
    return wordCountValue * costPerWord;
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.projectType) newErrors.projectType = "Project type is required.";
    if (!formData.projectDescription) newErrors.projectDescription = "Project description is required.";
    if (!formData.duration) newErrors.duration = "Duration is required.";
    if (!formData.wordCount) newErrors.wordCount = "Word count is required.";

    dispatch(setErrors(newErrors));
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    // Instead of submitting the data directly, redirect to the payment page
    navigate('/dashboard/payment', { state: { formData } });
    console.log(formData);
  };

  return (
    <FormLayout title="Request Copywriting Services">
      <form className="email-form" onSubmit={handleSubmit}>
        <div className="email-group">
          <label htmlFor="project-type" className="email-label">Type of Copywriting</label>
          <select
            id="project-type"
            name="projectType"
            className="email-select"
            value={formData.projectType}
            onChange={handleChange}
          >
            <option value="">Select Type</option>
            <option value="social">Social Media Content</option>
            <option value="website">Website Copy</option>
            <option value="blog">Blog Posts</option>
            <option value="email">Email Campaigns</option>
            <option value="ad">Ad Copy</option>
            <option value="other">Other</option>
          </select>
          {errors.projectType && <span className="error-message">{errors.projectType}</span>}
        </div>

        <div className="email-group">
          <label htmlFor="project-description" className="email-label">Project Description</label>
          <textarea
            id="project-description"
            name="projectDescription"
            className="email-textarea"
            rows="4"
            placeholder="Briefly describe your project and requirements"
            value={formData.projectDescription}
            onChange={handleChange}
          ></textarea>
          {errors.projectDescription && <span className="error-message">{errors.projectDescription}</span>}
        </div>

        <div className="email-group">
          <label htmlFor="duration" className="email-label">Preferred Deadline</label>
          <select
            id="duration"
            name="duration"
            className="email-select"
            value={formData.duration}
            onChange={handleChange}
          >
            <option value="6hrs">6 Hours</option>
            <option value="12hrs">12 Hours</option>
            <option value="1day">1 Day</option>
            <option value="2days">2 Days</option>
            <option value="1week">1 Week</option>
            <option value="2weeks">2 Weeks</option>
          </select>
          {errors.duration && <span className="error-message">{errors.duration}</span>}
        </div>

        <div className="email-group">
          <label htmlFor="word-count" className="email-label">Number of Words</label>
          <select
            id="word-count"
            name="wordCount"
            className="email-select"
            value={formData.wordCount}
            onChange={handleWordCountChange}
          >
            <option value="under-100">Under 100</option>
            {[...Array(10)].map((_, i) => (
              <option key={i + 1} value={(i + 1) * 100}>
                {(i + 1) * 100}
              </option>
            ))}
          </select>
          {errors.wordCount && <span className="error-message">{errors.wordCount}</span>}
        </div>

        <div className="cost-container">
          <div className="email-group">
            <label htmlFor="cost" className="email-label">Estimated Cost</label>
            <input
              type="text"
              id="cost"
              name="cost"
              className="email-input"
              value={`$${formData.cost.toFixed(2)}`}
              readOnly
            />
          </div>
        </div>

        <button type="submit" className="email-submit-button">Submit Request</button>
      </form>
    </FormLayout>
  );
};

export default EmailCopywriting;


