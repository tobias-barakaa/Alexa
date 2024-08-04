import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './RecentResumes.css'; // Add your CSS file here

const RecentResumes = () => {
  const [resumes, setResumes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchResumes = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/resume/getrecent', {
          withCredentials: true,
          headers: {
            'Content-Type': 'application/json'
          }
        });
        setResumes(response.data.resumes);
        setLoading(false);
      } catch (error) {
        setError('Error fetching resumes');
        setLoading(false);
      }
    };

    fetchResumes();
  }, []);

  const handleEdit = (resumeId) => {
    // Redirect to edit page or show edit form
    console.log(`Edit resume with ID: ${resumeId}`);
    // Example: navigate(`/edit/${resumeId}`);
  };

  const handleDelete = async (resumeId) => {
    try {
      await axios.delete(`http://localhost:5000/api/resume/delete/${resumeId}`, {
        withCredentials: true,
        headers: {
          'Content-Type': 'application/json'
        }
      });
      setResumes(resumes.filter(resume => resume.id !== resumeId));
    } catch (error) {
      setError('Error deleting resume');
    }
  };

  if (loading) return <div className="loading">Loading...</div>;
  if (error) return <div className="error">{error}</div>;

  return (
    <div className="recent-resumes">
      <h1>Recent Resumes</h1>
      {resumes.length === 0 ? (
        <p>No recent resumes found.</p>
      ) : (
        resumes.map(resume => (
          <div key={resume.id} className="resume-card">
            <h2>{resume.full_name}</h2>
            <p><strong>Job Title:</strong> {resume.job_title}</p>
            <p><strong>Email:</strong> {resume.email}</p>
            <p><strong>Phone:</strong> {resume.phone}</p>
            <p><strong>Summary:</strong> {resume.summary}</p>
            <div className="actions">
              <button onClick={() => handleEdit(resume.id)}>Edit</button>
              <button onClick={() => handleDelete(resume.id)}>Delete</button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default RecentResumes;
