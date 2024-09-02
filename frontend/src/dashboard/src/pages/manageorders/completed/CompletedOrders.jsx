import "../../../styles/pages/manageorders/completed/CompletedOrders.css";
import { Link } from 'react-router-dom';

const CompletedOrders = () => {
  return (
    <div className="completed-orders">
      <h2 className="heading">Choose Your Content Type</h2>
      <p className="instruction">Click on an option to select your desired service</p>
      <div className="container">
        <Link className="box" to="completedblog">
          <div className="box-icon">📝</div>
          <div className="box-title">Blog Writing</div>
        </Link>
        <Link className="box" to="completedarticle">
          <div className="box-icon">📰</div>
          <div className="box-title">Article Creation</div>
        </Link>
        
      <Link className="box" to="completedresumes">
          <div className="box-icon">📄</div>
          <div className="box-title">CV Writing</div>
        </Link>

        <Link className="box" to="completedemailcopywriting">
        <div className="box-icon">✉️</div>

        <div className="box-title">Email Copywriting</div>

        </Link>
        
      </div>
    </div>
  );
};

export default CompletedOrders;