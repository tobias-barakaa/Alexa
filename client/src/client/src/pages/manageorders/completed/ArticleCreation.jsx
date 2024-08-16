import React from 'react';

const ArticleCreation = ({ articleData }) => {
  if (!articleData) {
    return <div>Loading article data...</div>;
  }

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleString();
  };

  return (
    <div className="article-container">
      <h1>{articleData.title}</h1>
      <p><strong>Description:</strong> {articleData.description}</p>
      <div className="article-details">
        <p><strong>Category:</strong> {articleData.category}</p>
        <p><strong>Keywords:</strong> {articleData.keywords}</p>
        <p><strong>Complexity:</strong> {articleData.complexity}</p>
        <p><strong>Word Count:</strong> {articleData.word_count}</p>
        <p><strong>Duration:</strong> {articleData.duration}</p>
        <p><strong>Quantity:</strong> {articleData.quantity}</p>
        <p><strong>Language:</strong> {articleData.language}</p>
        <p><strong>Cost:</strong> ${articleData.cost}</p>
        <p><strong>Status:</strong> {articleData.status}</p>
        <p><strong>Created At:</strong> {formatDate(articleData.article_created_at)}</p>
        <p><strong>Updated At:</strong> {formatDate(articleData.article_updated_at)}</p>
      </div>
      <div className="file-download">
        <h2>Attached File</h2>
        <p><strong>File ID:</strong> {articleData.file_id}</p>
        <a 
          href={articleData.file_url} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="download-button"
        >
          Download Article PDF
        </a>
      </div>
    </div>
  );
};

export default ArticleCreation;