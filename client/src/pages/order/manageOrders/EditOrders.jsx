import { Link } from 'react-router-dom';
import './EditOrders.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

const EditOrders = () => {
  const [tip, setTip] = useState('');
  const [editBlogCount, setEditBlogCount] = useState(0);
  const [editArticleCount, setEditArticleCount] = useState(0);
  const [editEmailCount, setEditEmailCount] = useState(0);
  const [editResumeCount, setEditResumeCount] = useState(0); 

  const tips = [
    "Use power words to make your content more engaging.",
    "Break up long paragraphs to improve readability.",
    "Always proofread your content before publishing.",
    "Use subheadings to organize your thoughts and guide readers.",
    "Incorporate relevant statistics to add credibility to your writing.",
    "Start with a strong hook to capture your audience's attention.",
    "Use active voice for more impactful writing.",
    "Include a clear call-to-action in your content.",
    "Optimize your content for SEO by including relevant keywords.",
    "Use analogies to explain complex ideas simply."
  ];

  useEffect(() => {
    setTip(tips[Math.floor(Math.random() * tips.length)]);
    
    const fetchBlogCount = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/blog/getcount', {
          withCredentials: true,
          headers: {
            'Content-Type': 'application/json',
          }
        });
        setEditBlogCount(response.data.count); 
      } catch (error) {
        console.error('Error fetching blog count:', error);
      }
    };

    const fetchArticleCount = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/articlecreation/articlecount', {
          withCredentials: true,
          headers: {
            'Content-Type': 'application/json',
          }
        });
        setEditArticleCount(response.data.count); 
      } catch (error) {
        console.error('Error fetching article count:', error);
      }
    };

    const fetchEmailCount = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/emailcopywriting/getcount', {
          withCredentials: true,
          headers: {
            'Content-Type': 'application/json',
          }
        });
        setEditEmailCount(response.data.count);
      } catch (error) {
        console.error('Error fetching email copywriting count:', error);
      }
    };

    const fetchResumeCount = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/resume/getcount', {
          withCredentials: true,
          headers: {
            'Content-Type': 'application/json',
          }
        });
        setEditResumeCount(response.data.count); 
      } catch (error) {
        console.error('Error fetching resume count:', error);
      }
    };

    fetchBlogCount();
    fetchArticleCount();
    fetchEmailCount();
    fetchResumeCount(); 
  }, []);

  // const resumeId = localStorage.getItem('resumecvid');

  const editOptions = [
    { icon: '📝', title: 'Edit Blog', description: 'Modify blog posts', link: '/dashboard/editblog', count: editBlogCount },
    { icon: '✍️', title: 'Edit Article', description: 'Update articles', link: '/dashboard/editarticlecreation', count: editArticleCount },
    { icon: '📄', title: 'Edit Resume', description: 'Revise resumes', link: '/dashboard/getrecentresume', count: editResumeCount }, // Include resume count
    { icon: '📧', title: 'Edit Email', description: 'Refine email copy', link: '/dashboard/editemailcopywriting', count: editEmailCount },
  ];

  return (
    <div className="edit-orders-container">
      <h1>Edit Your Content</h1>
      <p className="subtitle">Select an option to edit your content</p>
      <div className="warning">
        Warning: Content can only be edited within 30 minutes of posting.
      </div>
      <div className="edit-options-grid">
        {editOptions.map((option, index) => (
          <Link to={option.link} key={index} className="edit-option-link">
            <div className="edit-option-box">
              <span className="edit-option-icon">{option.icon}</span>
              <span className="edit-option-title">
                {option.title}
                {option.title === 'Edit Blog' && <span style={{ color: "red" }}> ({editBlogCount})</span>}
                {option.title === 'Edit Article' && <span style={{ color: "red" }}> ({editArticleCount})</span>}
                {option.title === 'Edit Resume' && <span style={{ color: "red" }}> ({editResumeCount})</span>}
                {option.title === 'Edit Email' && <span style={{ color: "red" }}> ({editEmailCount})</span>}
              </span>
              <span className="edit-option-description">{option.description}</span>
            </div>
          </Link>
        ))}
      </div>

      <div className="content-tip">
        <h3>Content Creation Tip:</h3>
        <p>{tip}</p>
      </div>
    </div>
  );
};

export default EditOrders;
