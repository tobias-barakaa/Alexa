const FileItem = ({ file }) => {
  const { file_url, blog_id, created_at } = file;

  const handleDownload = () => {
    window.open(file_url, '_blank');
  };

  return (
    <li className="file-item">
      <div className="file-info">
        <p>Blog ID: {blog_id}</p>
        <p>Created At: {new Date(created_at).toLocaleDateString()}</p>
      </div>
      <button onClick={handleDownload} className="download-button">
        Download File
      </button>
    </li>
  );
};

export default FileItem;
