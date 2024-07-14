import "./ReviewStep.css";

const ReviewStep = ({ prevStep, stepOneData, stepTwoData, cost }) => {
  const handleSubmit = () => {
    // Handle form submission
    console.log("Submitting form with data: ", {
      ...stepOneData,
      ...stepTwoData,
      cost,
    });
  };

  return (
    <div className="order-article-container">
      <div className="order-article-form">
        <h2 className="form-heading">REVIEW YOUR ORDER</h2>
        <div className="review-section">
          <p><strong>Description:</strong> {stepOneData.description}</p>
          <p><strong>Category:</strong> {stepOneData.category}</p>
          <p><strong>Author Tone:</strong> {stepOneData.authorTone}</p>
          <p><strong>Number of Words:</strong> {stepOneData.numberOfWords}</p>
        </div>
        <div className="review-section">
          <p><strong>Keywords:</strong> {stepTwoData.keywords}</p>
          <p><strong>Quantity:</strong> {stepTwoData.quantity}</p>
          <p><strong>Author Tone:</strong> {stepTwoData.authorTone}</p>
          <p><strong>Duration:</strong> {stepTwoData.duration}</p>
          <p><strong>Description:</strong> {stepTwoData.description}</p>
        </div>
        <div className="review-section">
          <h3>Cost</h3>
          <p><strong>Total Cost:</strong> ${cost.toFixed(2)}</p>
        </div>
        <div className="input-row">
          <div className="form-group">
            <button className="prev-button" onClick={prevStep}>
              Previous
            </button>
          </div>
          <div className="form-group">
            <button className="submit-button" onClick={handleSubmit}>
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewStep;
