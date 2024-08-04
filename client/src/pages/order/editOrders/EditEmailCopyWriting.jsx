import React, { useState, useEffect } from 'react';
import axios from 'axios';
import UpdateModalEmailCopywriting from './UpdateModalEmailCopywriting';
import './EditEmailCopyWriting.css';

const EditEmailCopyWriting = () => {
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [, forceUpdate] = useState();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedRequest, setSelectedRequest] = useState(null);

  useEffect(() => {
    fetchRequests();
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      forceUpdate(Date.now());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const fetchRequests = async () => {
    try {
      setLoading(true);
      const response = await axios.get('http://localhost:5000/api/emailcopywriting/getall',{
        withCredentials: true
      });
      console.log('API Response:', response.data);
      
      const requestsData = Array.isArray(response.data) ? response.data : 
                           (response.data.requests || response.data.data || []);
      
      setRequests(requestsData);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching requests:', error);
      setError('Failed to fetch requests. Please try again later.');
      setLoading(false);
    }
  };

  const handleEdit = (request) => {
    setSelectedRequest(request);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedRequest(null);
    fetchRequests(); // Refresh the data after closing the modal
  };

  const handleDelete = (id) => {
    console.log('Delete request:', id);
    // Implement delete functionality
  };

  const calculateTimeLeft = (createdAt) => {
    const difference = +new Date(createdAt) + 30 * 60 * 1000 - +new Date();
    return Math.max(0, Math.floor(difference / 1000));
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!Array.isArray(requests)) {
    return <div>Error: Received invalid data format from the server.</div>;
  }

  return (
    <div className="edit-email-copywriting">
      <h1>Edit Email Copywriting Requests</h1>
      {requests.length === 0 ? (
        <p>No requests found.</p>
      ) : (
        <div className="request-list">
          {requests.map((request) => {
            const timeLeft = calculateTimeLeft(request.created_at);
            if (timeLeft === 0) return null;

            return (
              <div key={request.id} className="request-item">
                <h3>{request.project_type}</h3>
                <p><strong>Description:</strong> {request.project_description}</p>
                <p><strong>Deadline:</strong> {request.deadline}</p>
                <p><strong>Word Count:</strong> {request.word_count}</p>
                <p><strong>Cost:</strong> ${request.cost}</p>
                <p><strong>Status:</strong> {request.status}</p>
                <p><strong>Time left to edit/delete:</strong> {formatTime(timeLeft)}</p>
                <button onClick={() => handleEdit(request)} className="edit-button" disabled={timeLeft === 0}>Edit</button>
                <button onClick={() => handleDelete(request.id)} className="delete-button" disabled={timeLeft === 0}>Delete</button>
              </div>
            );
          })}
        </div>
      )}
      <UpdateModalEmailCopywriting
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        requestData={selectedRequest}
      />
    </div>
  );
};

export default EditEmailCopyWriting;