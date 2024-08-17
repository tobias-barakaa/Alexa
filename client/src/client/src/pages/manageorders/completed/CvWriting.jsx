import React, { useState, useEffect } from 'react';
import { saveAs } from 'file-saver';

import axios from 'axios';
import { useParams } from 'react-router-dom';
import "../../../styles/pages/manageorders/completed/CVWriting.css"; // Ensure this path is correct

const CVWriting = () => {
  const { id: resumeId } = useParams(); // Assuming resumeId is in the URL
  const [resumeData, setResumeData] = useState(null);
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

  const handleDownload = async (fileUrl) => {
    try {
      const response = await axios.get(fileUrl, {
        responseType: 'blob',
      });
  
      const blob = new Blob([response.data], { type: response.headers['content-type'] });
      saveAs(blob, `Resume-${resumeData.full_name}.pdf`); // Use FileSaver to trigger the download
    } catch (error) {
      setMessage('Failed to download file.');
      console.error('Download error:', error);
    }
  };
  

  if (!resumeData) return <div>Loading...</div>;

  return (
    <div className="cvwriting-container">
      <div className="resume-details">
        <h2>Resume Details</h2>
        <p><strong>Full Name:</strong> {resumeData.full_name}</p>
        <p><strong>Job Title:</strong> {resumeData.job_title}</p>
        <p><strong>Email:</strong> {resumeData.email}</p>
        <p><strong>Phone:</strong> {resumeData.phone}</p>
        <p><strong>Summary:</strong> {resumeData.summary}</p>
        <p><strong>Skills:</strong> {resumeData.skills}</p>
        <p><strong>Languages:</strong> {resumeData.languages}</p>
        <p><strong>Certifications:</strong> {resumeData.certifications}</p>
        <p><strong>Achievements:</strong> {resumeData.achievements}</p>
        <p><strong>Cost:</strong> ${resumeData.cost}</p>
        <p><strong>Status:</strong> {resumeData.status}</p>
        <p><strong>Created At:</strong> {new Date(resumeData.resume_created_at).toLocaleString()}</p>
        <p><strong>Updated At:</strong> {new Date(resumeData.resume_updated_at).toLocaleString()}</p>

        <h3>Education</h3>
        {resumeData.education && resumeData.education.length > 0 ? (
          resumeData.education.map((edu) => (
            <div key={edu.education_id} className="resume-education">
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
        {resumeData.work_experience && resumeData.work_experience.length > 0 ? (
          resumeData.work_experience.map((work) => (
            <div key={work.work_experience_id} className="resume-work-experience">
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
          <a href={resumeData.file_url} download className="download-button">
            Download Attached File
          </a>
          <button className="download-button" onClick={() => handleDownload(resumeData?.file_url)}>Download</button>
          {message && <p>{message}</p>}
        </div>
      </div>
    </div>
  );
};

export default CVWriting;
