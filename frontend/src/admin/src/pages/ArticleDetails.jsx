import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useGetArticleByIdQuery, useUploadArticleFileMutation } from '../../../slices/admin/adminApiSlice';
import "./ArticleDetails.css";

const ArticleDetails = () => {
  const { id } = useParams(); 
  const { data, isLoading, isError } = useGetArticleByIdQuery(id);
  const [status, setStatus] = useState('');
  const [file, setFile] = useState(null);

  // Import the mutation hook
  const [uploadArticleFile] = useUploadArticleFileMutation();

  const articleData = data?.article;
  console.log('Article data:', articleData?.user_id);

  const handleStatusChange = (e) => {
    setStatus(e.target.value);
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile && (selectedFile.type === 'application/pdf' || selectedFile.type === 'text/csv')) {
      setFile(selectedFile);
    } else {
      alert('Please upload only PDF or CSV files.');
      e.target.value = null;
    }
  };

  const handleUpdateStatus = () => {
    console.log('Status updated:', status);
  };

  const handleSend = async () => {
    if (!file) {
      alert('Please choose a file to upload.');
      return;
    }

    if (!status) {
      alert('Please select a status before uploading.');
      return;
    }

    // Prepare the payload for the mutation
    const payload = {
      article_id: articleData.id,
      user_id: articleData.user_id,
      file,
      status, // Include status in the payload
    };

    try {
      // Call the mutation and handle response
      const result = await uploadArticleFile(payload).unwrap();
      alert('File uploaded successfully!');
      console.log('Response:', result);
    } catch (error) {
      console.error('Error sending file:', error);
      alert('An error occurred while uploading the file.');
    }
  };

  if (isLoading) return <div>Loading article details...</div>;
  if (isError) return <div>Error loading article details.</div>;

  return (
    <div className="article-details">
      <div className="left-side">
        <p>Article Details</p>
        <div className="table-container">
          <table>
            <tbody>
              {articleData ? (
                Object.entries(articleData).map(([key, value]) => (
                  <tr key={key}>
                    <td>{key}</td>
                    <td>{typeof value === 'object' ? JSON.stringify(value) : value.toString()}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={2}>No data available</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
      <div className="right-side">
        <div className="control-group">
          <label htmlFor="status-select">Update Status</label>
          <select id="status-select" value={status} onChange={handleStatusChange}>
            <option value="">Select Status</option>
            <option value="processing">Processing</option>
            <option value="completed">Completed</option>
            <option value="failed">Failed</option>
            <option value="published">Published</option>
            <option value="received">Received</option>
          </select>
        </div>
        <div className="control-group">
          <label htmlFor="file-upload">Upload File (PDF or CSV)</label>
          <div className="file-upload-wrapper">
            <label className="custom-file-upload" htmlFor="file-upload">
              Choose File
            </label>
            <input id="file-upload" type="file" accept=".pdf,.csv" onChange={handleFileChange} />
            <span className="file-name">{file ? file.name : 'No file chosen'}</span>
          </div>
        </div>
        <div className="button-group">
          <button onClick={handleUpdateStatus}>Update Status</button>
          <button onClick={handleSend}>Send</button>
        </div>
      </div>
    </div>
  );
};

export default ArticleDetails;
