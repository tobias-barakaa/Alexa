import { useState, useEffect } from 'react';
import axios from 'axios';
import "../../styles/pages/edit/RecentResumes.css";
import { useNavigate } from 'react-router-dom';
// import Warning from '../../dashboard/components/Warning';
import Warning from '../../components/Warning';

const RecentResumes = () => {
  const [resumes, setResumes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  // const resumeId = localStorage.getItem('resumecvid');


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
    navigate(`/dashboard/editresume/${resumeId}`)
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
        <Warning />
      ) : (
        resumes.map(resume => (
          <div key={resume.id} className="resume-card">
            <h2>{resume.full_name}</h2>
            <p><strong>Job Title:</strong> {resume.job_title}</p>
            <p><strong>Email:</strong> {resume.email}</p>
            <p><strong>Phone:</strong> {resume.phone}</p>
            <p><strong>Summary:</strong> {resume.summary}</p>
            <p><strong>Skills:</strong> {resume.skills}</p>
            <p><strong>Languages:</strong> {resume.languages}</p>
            <p><strong>Certifications:</strong> {resume.certifications}</p>
            <p><strong>Achievements:</strong> {resume.achievements}</p>

            {resume.education.length > 0 && (
              <div className="education">
                <h3>Education</h3>
                <ul>
                  {resume.education.map(edu => (
                    <li key={edu.id}>
                      <p><strong>Degree:</strong> {edu.degree}</p>
                      <p><strong>Institution:</strong> {edu.institution}</p>
                      <p><strong>Start Date:</strong> {new Date(edu.start_date).toLocaleDateString()}</p>
                      <p><strong>End Date:</strong> {new Date(edu.end_date).toLocaleDateString()}</p>
                      <p><strong>Description:</strong> {edu.description}</p>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {resume.work_experience.length > 0 && (
              <div className="work-experience">
                <h3>Work Experience</h3>
                <ul>
                  {resume.work_experience.map(work => (
                    <li key={work.id}>
                      <p><strong>Job Title:</strong> {work.job_title}</p>
                      <p><strong>Company:</strong> {work.company}</p>
                      <p><strong>Start Date:</strong> {new Date(work.start_date).toLocaleDateString()}</p>
                      <p><strong>End Date:</strong> {new Date(work.end_date).toLocaleDateString()}</p>
                      <p><strong>Responsibilities:</strong> {work.responsibilities}</p>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="actions">
              <button onClick={() => handleEdit(resume.id)}>Edit</button>
              <button onClick={() => handleDelete(resume.id)} className="delete">Delete</button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default RecentResumes;
