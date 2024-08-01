import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ResumeDisplay.css';
import { useParams } from 'react-router-dom';

const ResumeDisplay = () => {
    const { resumeId } = useParams();
    const [resume, setResume] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchResume = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/api/resume/get/${resumeId}`, {
                    withCredentials: true,
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });
                setResume(response.data.resume);
                setLoading(false);
            } catch (error) {
                setError('Error fetching resume data');
                setLoading(false);
            }
        };

        if (resumeId) {
            fetchResume();
        } else {
            setError('Resume ID is missing');
            setLoading(false);
        }
    }, [resumeId]);

    if (loading) return <div className="loading">Loading...</div>;
    if (error) return <div className="error">{error}</div>;

  return (
    <div className="resume-container">
      <h1>Resume Details</h1>
      <table className="resume-table">
        <tbody>
          <tr>
            <th>Full Name</th>
            <td>{resume.full_name}</td>
          </tr>
          <tr>
            <th>Job Title</th>
            <td>{resume.job_title}</td>
          </tr>
          <tr>
            <th>Email</th>
            <td>{resume.email}</td>
          </tr>
          <tr>
            <th>Phone</th>
            <td>{resume.phone}</td>
          </tr>
          <tr>
            <th>Summary</th>
            <td>{resume.summary}</td>
          </tr>
          <tr>
            <th>Skills</th>
            <td>{resume.skills}</td>
          </tr>
          <tr>
            <th>Languages</th>
            <td>{resume.languages}</td>
          </tr>
          <tr>
            <th>Certifications</th>
            <td>{resume.certifications}</td>
          </tr>
          <tr>
            <th>Achievements</th>
            <td>{resume.achievements}</td>
          </tr>
        </tbody>
      </table>

      <h2>Education</h2>
      <table className="resume-table">
        <thead>
          <tr>
            <th>Degree</th>
            <th>Institution</th>
            <th>Start Date</th>
            <th>End Date</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {resume.education.map((edu) => (
            <tr key={edu.id}>
              <td>{edu.degree}</td>
              <td>{edu.institution}</td>
              <td>{new Date(edu.start_date).toLocaleDateString()}</td>
              <td>{new Date(edu.end_date).toLocaleDateString()}</td>
              <td>{edu.description}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2>Work Experience</h2>
      <table className="resume-table">
        <thead>
          <tr>
            <th>Job Title</th>
            <th>Company</th>
            <th>Start Date</th>
            <th>End Date</th>
            <th>Responsibilities</th>
          </tr>
        </thead>
        <tbody>
          {resume.work_experience.map((exp) => (
            <tr key={exp.id}>
              <td>{exp.job_title}</td>
              <td>{exp.company}</td>
              <td>{new Date(exp.start_date).toLocaleDateString()}</td>
              <td>{new Date(exp.end_date).toLocaleDateString()}</td>
              <td>{exp.responsibilities}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

  

export default ResumeDisplay;