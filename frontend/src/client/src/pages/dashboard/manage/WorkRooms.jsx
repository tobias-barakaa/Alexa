import './WorkRooms.css';
import { useGetLimitedOrdersQuery } from '../../../../../slices/writers/writerApiSlice';
import Loader from '../../../components/Loader';
import { Link } from 'react-router-dom';

const Manage = () => {
  const { data: dreams, isLoading, error } = useGetLimitedOrdersQuery();

  if (isLoading) return <Loader />;
  if (error) return <p>Failed to load orders. Please try again.</p>;

  // Fetch orders from the API response
  const orders = dreams?.orders || [];

  const writerId = orders[0]?.writer_id; // Assuming writer_id is present on the first order

// Save it in localStorage as 'manager'
if (writerId) {
  localStorage.setItem('manager', writerId);
}

  const renderProjectCard = (order) => (
    <div key={order.order_id} className="project-card">
      <div className="project-header">
        <h3>{order.title}</h3>
        <span className={`status-badge ${order.is_paid ? 'status-completed' : 'status-pending'}`}>
          {order.is_paid ? 'Paid' : 'Pending Payment'}
        </span>
      </div>

      <div className="project-details">
        <div className="detail-row">
          <span className="detail-label">Order ID:</span>
          <span className="detail-value">{order.order_id}</span>
        </div>
        <div className="detail-row">
          <span className="detail-label">Amount:</span>
          <span className="detail-value">${order.amount}</span>
        </div>
        <div className="detail-row">
          <span className="detail-label">Status:</span>
          <span className="detail-value">{order.status}</span>
        </div>
        <div className="detail-row">
          <span className="detail-label">Deadline:</span>
          <span className="detail-value">{order.deadline}</span>
        </div>
        <div className="detail-row">
          <span className="detail-label">Description:</span>
          <span className="detail-value">{order.description}</span>
        </div>
      </div>

      <div className="project-actions">
        <Link to={`manage-order/${order.writer_id}`}>

        <button className="view-btn">View My Manager</button>
        </Link>
        
        {!order.is_paid && (
          <button className="paypal-btn">
            Pay with PayPal
          </button>
        )}
      </div>
    </div>
  );

  return (
    <div className="workroom-container">
      
   
        <div className="projects-grid">
          {orders.length > 0 ? (
            orders.map(order => renderProjectCard(order))
          ) : (
            <p>No active WorkRooms available.</p>
          )}
        </div>

     
    </div>
  );
};

export default Manage;
