import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import "../styles/pages/ResumeCVWritingDetails.css";

const ResumeCVWritingDetails = () => {
  const [resumes, setResumes] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchResumes = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/admin/cvwriting/retrieve', {
          withCredentials: true,
        });

        if (response.data.status === 200) {
          setResumes(response.data.data);
        } else {
          console.error('Failed to fetch resumes:', response.data.message);
        }
      } catch (error) {
        console.error('Error fetching resumes:', error);
      }
    };

    fetchResumes();
  }, []);

  const truncateWord = (word) => {
    return word.split(' ').map(w => w.slice(0, 2)).join(' ');
  };

  const handleRowClick = (resumeId) => {
    navigate(`/resumes/${resumeId}`);
  };

  return (
    <div className="resume-table-container">
      <table className="resume-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Full Name</th>
            <th>Job Title</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Summary</th>
            <th>Skills</th>
            <th>Languages</th>
            <th>Certifications</th>
            <th>Achievements</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {resumes.map((resume) => (
            <tr key={resume.id} onClick={() => handleRowClick(resume.id)} className="clickable-row">
              <td>{resume.id}</td>
              <td>{truncateWord(resume.full_name)}</td>
              <td>{truncateWord(resume.job_title)}</td>
              <td>{truncateWord(resume.email)}</td>
              <td>{truncateWord(resume.phone)}</td>
              <td>{truncateWord(resume.summary)}</td>
              <td>{truncateWord(resume.skills)}</td>
              <td>{truncateWord(resume.languages)}</td>
              <td>{truncateWord(resume.certifications)}</td>
              <td>{truncateWord(resume.achievements)}</td>
              <td>{truncateWord(resume.status)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ResumeCVWritingDetails;
