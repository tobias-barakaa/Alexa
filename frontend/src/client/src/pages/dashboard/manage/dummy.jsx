import { useState } from 'react';
import './WorkRooms.css';
import { useGetLimitedOrdersQuery } from '../../../../../slices/writers/writerApiSlice';
import Loader from '../../../components/Loader';
import { Link } from 'react-router-dom';
import MyManagers from './MyManagers';

const Manage = () => {
  const [activeTab, setActiveTab] = useState('workrooms');
  const { data: dreams, isLoading, error } = useGetLimitedOrdersQuery();

  if (isLoading) return <Loader />;
  if (error) return <p>Failed to load orders. Please try again.</p>;

  // Fetch orders from the API response
  const orders = dreams?.orders || [];

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
        <Link to={`/cli-wri/manage/manage-order/${order.writer_id}`}>
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
      <h1>Manage</h1>
      
      <div className="tabs-container">
        <div className="tabs">
          <button 
            className={`tab-btn ${activeTab === 'workrooms' ? 'active' : ''}`}
            onClick={() => setActiveTab('workrooms')}
          >
            WorkRooms
          </button>
          <button 
            className={`tab-btn ${activeTab === 'managers' ? 'active' : ''}`}
            onClick={() => setActiveTab('managers')}
          >
            My Managers
          </button>
        </div>
      </div>

      {activeTab === 'workrooms' && (
        <div className="projects-grid">
          {orders.length > 0 ? (
            orders.map(order => renderProjectCard(order))
          ) : (
            <p>No active WorkRooms available.</p>
          )}
        </div>
      )}

      {activeTab === 'managers' && (
        <div className="managers-section">

            <MyManagers />
          <p className="empty-managers">No managers assigned yet.</p>
        </div>
      )}
    </div>
  );
};

export default Manage;
