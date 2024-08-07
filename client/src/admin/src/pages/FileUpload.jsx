// FileUpload.js
import { useState } from 'react';
import axios from 'axios';

const FileUpload = () => {
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState('');

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file) {
      setMessage('Please select a file');
      return;
    }

    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await axios.post('http://localhost:5000/api/file/image/link', formData, 
        {withCredentials: true},
        {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      console.log('Upload response:', response.data);
      setMessage(`File uploaded successfully. ID: ${response.data.id}`);
    } catch (error) {
      setMessage('File upload failed');
      console.error('Upload error:', error);
    }
  };

  return (
    <div>
      <h2>File Upload</h2>
      <form onSubmit={handleSubmit}>
        <input type="file" onChange={handleFileChange} />
        <button type="submit">Upload</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default FileUpload;