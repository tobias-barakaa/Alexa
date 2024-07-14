import './OrderNow.css';

const OrderNow = () => {
  return (
    <div className="order-now">
      <p className="explanation">
        Choose your preferred option:
      </p>
      <div className="button-container">
        <div className="button-group">
          <button className="order-button">Order Now</button>
          <p className="button-description">Place an order directly</p>
        </div>
        <div className="button-group">
          <button className="hire-button">Hire a Personal Writer</button>
          <p className="button-description">Get a dedicated writer for your project</p>
        </div>
      </div>
    </div>
  );
};

export default OrderNow;