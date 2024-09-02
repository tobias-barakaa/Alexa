import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import '../styles/pages/ResumeCVWritingUser.css';

const ResumeCVWritingUser = () => {
  const { id: resumeId } = useParams();
  const [resume, setResume] = useState(null);
  const [status, setStatus] = useState('');
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchResume = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/admin/cvwriting/retrieve/${resumeId}`, { withCredentials: true });
        setResume(response.data.data);
        setStatus(response.data.data.status);
      } catch (error) {
        console.error('Error fetching resume:', error);
      }
    };

    fetchResume();
  }, [resumeId]);

  const handleStatusChange = (e) => {
    setStatus(e.target.value);
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpdate = () => {
    console.log('Updating status to:', status);
  };

  const handleSend = async () => {
    if (!file) {
      setMessage('Please select a file.');
      return;
    }
  
    const formData = new FormData();
    formData.append('file', file);
    formData.append('resumes_id', resumeId); // Change to 'resumes_id' if that’s what the backend expects
    formData.append('user_id', resume?.user_id); 
  
    for (let [key, value] of formData.entries()) {
      console.log(key, value);
    }
  
    try {
      const response = await axios.post(`http://localhost:5000/api/admin/resume/file/upload`, formData, {
        withCredentials: true,
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      setMessage(`File uploaded successfully. ID: ${response.data.id}`);
    } catch (error) {
      setMessage('File upload failed.');
      console.error('Upload error:', error);
    }
  };

  if (!resume) return <div>Loading...</div>;

  return (
    <div className='resume-details-container'>
      <div className='resume-details-left'>
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
        <p><strong>Created At:</strong> {new Date(resume.created_at).toLocaleString()}</p>
        <p><strong>Updated At:</strong> {new Date(resume.updated_at).toLocaleString()}</p>

        <h3>Education</h3>
        {resume.education.map((edu) => (
          <div key={edu.education_id} className='resume-education'>
            <p><strong>Degree:</strong> {edu.degree}</p>
            <p><strong>Institution:</strong> {edu.institution}</p>
            <p><strong>Start Date:</strong> {edu.start_date}</p>
            <p><strong>End Date:</strong> {edu.end_date}</p>
            <p><strong>Description:</strong> {edu.description}</p>
          </div>
        ))}

        <h3>Work Experience</h3>
        {resume.work_experience.map((work) => (
          <div key={work.work_experience_id} className='resume-work-experience'>
            <p><strong>Company:</strong> {work.company}</p>
            <p><strong>Job Title:</strong> {work.job_title}</p>
            <p><strong>Start Date:</strong> {work.start_date}</p>
            <p><strong>End Date:</strong> {work.end_date}</p>
            <p><strong>Responsibilities:</strong> {work.responsibilities}</p>
          </div>
        ))}
      </div>
      <div className='resume-details-right'>
        <h2>Actions</h2>
        <div className='form-group'>
          <label htmlFor='status'>Status:</label>
          <select value={status} onChange={handleStatusChange}>
            <option value='Pending'>Pending</option>
            <option value='Processing'>Processing</option>
            <option value='Completed'>Completed</option>
          </select>
          <button onClick={handleUpdate}>Update</button>
        </div>
        <div className='form-group'>
          <label>Upload File:</label>
          <input type='file' onChange={handleFileChange} />
          <button onClick={handleSend} className='send-button'>Send</button>
          {message && <p>{message}</p>}
        </div>
      </div>
    </div>
  );
};

export default ResumeCVWritingUser;
