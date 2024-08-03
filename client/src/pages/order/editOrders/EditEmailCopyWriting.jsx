import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./EditEmailCopyWriting.css";

const EditEmailCopyWriting = () => {
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRequests = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/emailcopywriting/getall', {
          withCredentials: true // This is important if you're using cookie-based authentication
        });
        setRequests(response.data.requests);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch requests. Please try again later.');
        setLoading(false);
      }
    };

    fetchRequests();
  }, []);

  const handleEdit = (id) => {
    // Navigate to an edit page or show an edit form
    console.log(`Edit request with ID: ${id}`);
    // Example: redirect to an edit page or open a modal
    // window.location.href = `/edit-request/${id}`;
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/emailcopywriting/${id}`, {
        withCredentials: true // This is important if you're using cookie-based authentication
      });
      // Remove the deleted request from the state
      setRequests(requests.filter(request => request.id !== id));
    } catch (err) {
      setError('Failed to delete request. Please try again later.');
    }
  };

  const calculateRemainingTime = (createdAt) => {
    const now = new Date();
    const createdTime = new Date(createdAt);
    const timeElapsed = now - createdTime;
    const timeRemaining = 30 * 60 * 1000 - timeElapsed;
    return timeRemaining > 0 ? timeRemaining : 0;
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="edit-email-copywriting">
      <h1>Edit Email Copywriting Requests</h1>
      {requests.length === 0 ? (
        <p>No requests found.</p>
      ) : (
        <ul className="request-list">
          {requests.map((request) => {
            const [remainingTime, setRemainingTime] = useState(calculateRemainingTime(request.created_at));

            useEffect(() => {
              const interval = setInterval(() => {
                const newRemainingTime = calculateRemainingTime(request.created_at);
                setRemainingTime(newRemainingTime);
              }, 1000);

              return () => clearInterval(interval);
            }, [request.created_at]);

            if (remainingTime <= 0) {
              return null;
            }

            const minutes = Math.floor((remainingTime / 1000 / 60) % 60);
            const seconds = Math.floor((remainingTime / 1000) % 60);

            return (
              <li key={request.id} className="request-item">
                <h3>{request.project_type}</h3>
                <p><strong>Description:</strong> {request.project_description}</p>
                <p><strong>Deadline:</strong> {new Date(request.deadline).toLocaleDateString()}</p>
                <p><strong>Word Count:</strong> {request.word_count}</p>
                <p><strong>Time Remaining:</strong> {`${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`}</p>
                <button onClick={() => handleEdit(request.id)} className="edit-button">Edit</button>
                <button onClick={() => handleDelete(request.id)} className="delete-button">Delete</button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default EditEmailCopyWriting;
