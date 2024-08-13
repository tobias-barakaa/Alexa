import axios from 'axios';

const FileDownload = () => {
  const userInfo = JSON.parse(localStorage.getItem('userInfo'));
  const userId = userInfo?.id;

  const handleDownload = async () => {
    if (!userId) {
      console.error('Invalid user ID');
      return;
    }

    try {
      const response = await axios.get(`http://localhost:5000/api/file/url/${userId}`, {
        responseType: 'blob',
        withCredentials: true
      });

      // Assuming that your response includes a direct file URL or the file blob
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', `file_${userId}.pdf`); // Adjust the filename as needed
      document.body.appendChild(link);
      link.click();
      link.remove();
    } catch (error) {
      console.error('Download error:', error);
    }
  };

  return (
    <button onClick={handleDownload}>Download File</button>
  );
};

export default FileDownload;
