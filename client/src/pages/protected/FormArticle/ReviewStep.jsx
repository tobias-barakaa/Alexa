import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { useOrderArticlesMutation } from '../../../slices/articlesApiSlice';
import "./ReviewStep.css";

const ReviewStep = ({ prevStep }) => {
  const stepOneData = useSelector((state) => state.article?.stepOneData);
  const stepTwoData = useSelector((state) => state.article?.stepTwoData);
  const cost = useSelector((state) => state.article?.totalCost);

  const [orderArticles, { isLoading, isError, isSuccess, error }] = useOrderArticlesMutation();

  const handleSubmit = async () => {
    try {
      const orderData = {
        ...stepOneData,
        ...stepTwoData,
        cost,
      };
      console.log("Submitting form with data: ", orderData);
      await orderArticles(orderData).unwrap();
      console.log("Order submitted successfully!");
    } catch (err) {
      console.error("Failed to submit order: ", err);
    }
  };

  return (
    <div className="order-article-container">
      <div className="order-article-form">
        <h2 className="form-heading">REVIEW YOUR ORDER</h2>
        <div className="review-section">
          <p><strong>Description:</strong> {stepOneData?.description}</p>
          <p><strong>Category:</strong> {stepOneData?.category}</p>
          <p><strong>Author Tone:</strong> {stepOneData?.authorTone}</p>
          <p><strong>Number of Words:</strong> {stepOneData?.numberOfWords}</p>
        </div>
        <div className="review-section">
          <p><strong>Keywords:</strong> {stepTwoData?.keywords}</p>
          <p><strong>Quantity:</strong> {stepTwoData?.quantity}</p>
          <p><strong>Author Tone:</strong> {stepTwoData?.authorTone}</p>
          <p><strong>Duration:</strong> {stepTwoData?.duration}</p>
        </div>
        <div className="review-section">
          <h3>Cost</h3>
          <p><strong>Total Cost:</strong> ${cost?.toFixed(2)}</p>
        </div>
        <div className="input-row">
          <div className="form-group">
            <button className="prev-button" onClick={prevStep} disabled={isLoading}>
              Previous
            </button>
          </div>
          <div className="form-group">
            <button className="submit-button" onClick={handleSubmit} disabled={isLoading}>
              {isLoading ? 'Submitting...' : 'Submit'}
            </button>
          </div>
        </div>
        {isError && <p className="error-message">Error: {error?.data?.message || 'Failed to submit order'}</p>}
        {isSuccess && <p className="success-message">Order submitted successfully!</p>}
      </div>
    </div>
  );
};

ReviewStep.propTypes = {
  prevStep: PropTypes.func.isRequired,
};

export default ReviewStep;
