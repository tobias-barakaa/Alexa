import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import "../../../styles/pages/manageorders/completed/CVWriting.css"; // Ensure this path is correct

const CVWriting = () => {
  const { id: resumeId } = useParams(); // Assuming resumeId is in the URL
  const [resumeData, setResumeData] = useState([]);
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchResumeData = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/admin/resume/file/upload/retrieve`, { withCredentials: true });
        setResumeData(response.data);
      } catch (error) {
        console.error('Error fetching resume data:', error);
        setMessage('Failed to fetch resume data.');
      }
    };

    fetchResumeData();
  }, [resumeId]);

  if (!resumeData.length) return <div>Loading...</div>;

  return (
    <div className="cvwriting-container">
      {resumeData.map((resume) => (
        <div key={resume.file_id} className="resume-details">
          <h2>Resume Details</h2>
          <p><strong>Full Name:</strong> {resume.full_name}</p>
          <p><strong>Job Title:</strong> {resume.job_title}</p>
          <p><strong>Email:</strong> {resume.email}</p>
          <p><strong>Phone:</strong> {resume.phone}</p>
          <p><strong>Summary:</strong> {resume.summary}</p>
          <p><strong>Skills:</strong> {resume.skills}</p>
          <p><strong>Languages:</strong> {resume.languages}</p>
          <p><strong>Certifications:</strong> {resume.certifications}</p>
          <p><strong>Achievements:</strong> {resume.achievements}</p>
          <p><strong>Cost:</strong> ${resume.cost}</p>
          <p><strong>Status:</strong> {resume.status}</p>
          <p><strong>Created At:</strong> {new Date(resume.resume_created_at).toLocaleString()}</p>
          <p><strong>Updated At:</strong> {new Date(resume.resume_updated_at).toLocaleString()}</p>

          <h3>Education</h3>
          {resume.education && resume.education.length > 0 ? (
            resume.education.map((edu, index) => (
              <div key={index} className="resume-education">
                <p><strong>Degree:</strong> {edu.degree}</p>
                <p><strong>Institution:</strong> {edu.institution}</p>
                <p><strong>Start Date:</strong> {edu.start_date}</p>
                <p><strong>End Date:</strong> {edu.end_date}</p>
                <p><strong>Description:</strong> {edu.description}</p>
              </div>
            ))
          ) : (
            <p>No education information available.</p>
          )}

          <h3>Work Experience</h3>
          {resume.work_experience && resume.work_experience.length > 0 ? (
            resume.work_experience.map((work, index) => (
              <div key={index} className="resume-work-experience">
                <p><strong>Company:</strong> {work.company}</p>
                <p><strong>Job Title:</strong> {work.job_title}</p>
                <p><strong>Start Date:</strong> {work.start_date}</p>
                <p><strong>End Date:</strong> {work.end_date}</p>
                <p><strong>Responsibilities:</strong> {work.responsibilities}</p>
              </div>
            ))
          ) : (
            <p>No work experience information available.</p>
          )}

          <div className="download-section">
            <h3>Download Resume File</h3>
            <a 
              href={resume.file_url} 
              download={`Resume-${resume.full_name}.pdf`} 
              className="download-button"
            >
              Download Resume
            </a>
            {message && <p>{message}</p>}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CVWriting;
