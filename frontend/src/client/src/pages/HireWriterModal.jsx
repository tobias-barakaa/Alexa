import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import './HireWriterModal.css';
import { usePlaceOrderMutation } from '../../../slices/writers/writerApiSlice';
import { setFormData } from '../../../slices/writers/placeOrderSlice';
import { DollarSign } from 'lucide-react';

const projectTypes = [
  { id: 'blog', label: 'Blog Post', icon: '📝' },
  { id: 'article', label: 'Article', icon: '📰' },
  { id: 'technical', label: 'Technical Writing', icon: '💻' },
  { id: 'creative', label: 'Creative Writing', icon: '✨' },
  { id: 'copywriting', label: 'Copywriting', icon: '🎯' },
  { id: 'social', label: 'Social Media Content', icon: '📱' },
  { id: 'ebook', label: 'eBook', icon: '📚' },
  { id: 'other', label: 'Other', icon: '📋' }
];

const deadlines = ['12hrs', '1 day', '2 days', '1 week'];

const HireWriterModal = ({ writer, onClose }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [placeOrder] = usePlaceOrderMutation();
  const [step, setStep] = useState(1);
  
  // Set default value for the deadline to '12hrs'
  const [formData, setFormDataState] = useState({
    projectType: '',
    title: '',
    description: '',
    budget: '',
    deadline: '12hrs',  // Default to '12hrs'
    requirements: '',
    writerId: writer.id,  // Include writer.id
  });
  
  const [errors, setErrors] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newErrors = {};
    if (!formData.title) newErrors.title = 'Title is required';
    if (!formData.description) newErrors.description = 'Description is required';
    if (!formData.budget) newErrors.budget = 'Budget is required';
    if (!formData.deadline) newErrors.deadline = 'Deadline is required';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});

    // Dispatch the form data including writer information
    dispatch(setFormData(formData));
    console.log(formData, 'this is form data yawa')

    try {
     const result = await placeOrder({ ...formData });
     console.log(result, 'this is the result')
      navigate(`/cli-wri/manage/${result?.data?.order_id * Math.random() * 10000000}`);
    } catch (error) {
      console.error("Error placing order:", error);
    }
  };

  const handleChange = (e) => {
    setFormDataState({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="modal-close" onClick={onClose}>×</button>

        <div className="modal-header">
          <h2>Hire {writer.first_name} {writer.last_name}</h2>
          <div className="steps-indicator">
            <div className={`step ${step >= 1 ? 'active' : ''}`}>1</div>
            <div className="step-line"></div>
            <div className={`step ${step >= 2 ? 'active' : ''}`}>2</div>
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          {step === 1 ? (
            <div className="step-content">
              <h3>What type of content do you need?</h3>
              <div className="project-types-grid">
                {projectTypes.map(type => (
                  <label 
                    key={type.id} 
                    className={`project-type-card ${formData.projectType === type.id ? 'selected' : ''}`}
                  >
                    <input
                      type="radio"
                      name="projectType"
                      value={type.id}
                      checked={formData.projectType === type.id}
                      onChange={handleChange}
                    />
                    <span className="project-type-icon">{type.icon}</span>
                    <span className="project-type-label">{type.label}</span>
                  </label>
                ))}
              </div>
              <button 
                type="button" 
                className="next-button"
                onClick={() => setStep(2)}
                disabled={!formData.projectType}
              >
                Next Step
                <span className="button-arrow">→</span>
              </button>
            </div>
          ) : (
            <div className="step-content">
              <h3>Project Details</h3>
              <div className="form-group">
                <label>Project Title</label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  placeholder="E.g., Technical Blog Post about AI"
                  required
                  className={errors.title ? 'error' : ''}
                />
                {errors.title && <span className="error-message">{errors.title}</span>}
              </div>

              <div className="form-group">
                <label>Description</label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  placeholder="Describe your project requirements..."
                  required
                  className={errors.description ? 'error' : ''}
                ></textarea>
                {errors.description && <span className="error-message">{errors.description}</span>}
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Budget</label>
                  <div className="input-icon-group">
                    <input
                      type="number"
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      placeholder="Enter amount"
                      min="0"
                      required
                      className={errors.budget ? 'error' : ''}
                    />
                    <span className="input-icon"><DollarSign /></span>
                  </div>
                  {errors.budget && <span className="error-message">{errors.budget}</span>}
                </div>

                <div className="form-group">
                  <label>Deadline</label>
                  <select
                    name="deadline"
                    value={formData.deadline}  // Set default value
                    onChange={handleChange}
                    required
                    className={errors.deadline ? 'error' : ''}
                  >
                    <option value="">Select deadline</option>
                    {deadlines.map(deadline => (
                      <option key={deadline} value={deadline}>{deadline}</option>
                    ))}
                  </select>
                  {errors.deadline && <span className="error-message">{errors.deadline}</span>}
                </div>
              </div>

              <div className="form-group">
                <label>Requirements (Optional)</label>
                <textarea
                  name="requirements"
                  value={formData.requirements}
                  onChange={handleChange}
                  placeholder="Any special requirements?"
                ></textarea>
              </div>

              <div className="button-group">
                <button 
                  type="button" 
                  className="back-button"
                  onClick={() => setStep(1)}
                >
                  Back
                </button>
                <button type="submit" className="submit-button">
                  Create Project
                </button>
              </div>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default HireWriterModal;
