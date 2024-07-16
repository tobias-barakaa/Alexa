import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { updateStepOneData } from '../../../slices/articleSlice';
import './StepOne.css';

const categories = ['Finance', 'Economy', 'Food', 'Travel', 'Health', 'Technology', 'Business', 'Education', 'Entertainment', 'Fashion', 'Sports', 'Science', 'Environment', 'Politics', 'Art', 'History', 'Literature', 'Music', 'Religion', 'Other'];
const authorTones = ['friendly', 'professional', 'casual', 'formal', 'humorous', 'informative', 'persuasive', 'promotional', 'technical', 'other'];
const wordCounts = ['100-200', '201-300', '301-500', '501-700', '701-1000'];

const StepOne = ({ nextStep }) => {
  const dispatch = useDispatch();
  const stepOneData = useSelector((state) => state.article?.stepOneData);

  const handleChange = (field, value) => {
    dispatch(updateStepOneData({ [field]: value }));
  };

  return (
    <div className="order-article-container">
      <div className="order-article-form">
        <h2 className="form-heading">ORDER ARTICLE AND CONTENT</h2>
        <div className="form-group">
          <label htmlFor="description" className="form-label">Description:</label>
          <input
            type="text"
            id="description"
            placeholder="Description"
            value={stepOneData?.description}
            onChange={(e) => handleChange('description', e.target.value)}
            className="description-input"
          />
        </div>
        <div className="input-row">
          <div className="form-group">
            <label htmlFor="category" className="form-label">Choose a category:</label>
            <div className="dropdown-container">
              <select
                id="category"
                value={stepOneData?.category}
                onChange={(e) => handleChange('category', e.target.value)}
                className="category-dropdown"
              >
                <option value="">Select a category</option>
                {categories.map((cat, index) => (
                  <option key={index} value={cat}>{cat}</option>
                ))}
              </select>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="author-tone" className="form-label">Authors tone:</label>
            <div className="dropdown-container">
              <select
                id="author-tone"
                value={stepOneData?.authorTone}
                onChange={(e) => handleChange('authorTone', e.target.value)}
                className="author-tone-dropdown"
              >
                <option value="">Select authors tone</option>
                {authorTones.map((tone, index) => (
                  <option key={index} value={tone}>{tone}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="word-count" className="form-label">Number of words:</label>
          <div className="dropdown-container">
            <select
              id="word-count"
              value={stepOneData?.numberOfWords}
              onChange={(e) => handleChange('numberOfWords', e.target.value)}
              className="word-count-dropdown"
            >
              <option value="">Select number of words</option>
              {wordCounts.map((count, index) => (
                <option key={index} value={count}>{count}</option>
              ))}
            </select>
          </div>
        </div>
        <div className="form-group">
          <button onClick={nextStep} className="next-button">Next</button>
        </div>
      </div>
    </div>
  );
};

StepOne.propTypes = {
  nextStep: PropTypes.func.isRequired,
};

export default StepOne;
