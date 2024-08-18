import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import '../styles/pages/ArticleUser.css'; 

const EmailCopyWritingUser = () => {
  const { id: emailCopywriting_id } = useParams(); 
  const [emailCopywriting, setEmailCopywriting] = useState(null);
  const [status, setStatus] = useState('');
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchEmailCopywriting = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/admin/emailcopywriting/retrieve/${emailCopywriting_id}`, { withCredentials: true });
        setEmailCopywriting(response.data);
        setStatus(response.data.status);
      } catch (error) {
        console.error('Error fetching email copywriting request:', error);
      }
    };

    fetchEmailCopywriting();
  }, [emailCopywriting_id]);

  const handleStatusChange = (e) => {
    setStatus(e.target.value);
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpdate = () => {
    console.log('Updating status to:', status);
    // Add logic for updating the status if needed
  };

  const handleSend = async () => {
    if (!file) {
      setMessage('Please select a file.');
      return;
    }
  
    const formData = new FormData();
    formData.append('file', file);
    formData.append('emailCopywriting_id', emailCopywriting_id);
    formData.append('user_id', emailCopywriting.user_id); // Assuming emailCopywriting.user_id is the recipient_id
  
    try {
      const response = await axios.post(`http://localhost:5000/api/admin/emailcopywriting/upload`, formData, {
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

  if (!emailCopywriting) return <div>Loading...</div>;

  return (
    <div className='article-details-container'>
      <div className='article-details-left'>
        <h2>Email Copywriting Details</h2>
        <p><strong>Project Type:</strong> {emailCopywriting.project_type}</p>
        <p><strong>Project Description:</strong> {emailCopywriting.project_description}</p>
        <p><strong>Duration:</strong> {emailCopywriting.duration}</p>
        <p><strong>Word Count:</strong> {emailCopywriting.word_count}</p>
        <p><strong>Cost:</strong> ${emailCopywriting.cost}</p>
        <p><strong>Status:</strong> {emailCopywriting.status}</p>
        <p><strong>Created At:</strong> {new Date(emailCopywriting.created_at).toLocaleString()}</p>
        <p><strong>Updated At:</strong> {new Date(emailCopywriting.updated_at).toLocaleString()}</p>
        <p><strong>User ID:</strong> {emailCopywriting.user_id}</p>
        <p><strong>Email:</strong> {emailCopywriting.email}</p>
      </div>
      <div className='article-details-right'>
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

export default EmailCopyWritingUser;
