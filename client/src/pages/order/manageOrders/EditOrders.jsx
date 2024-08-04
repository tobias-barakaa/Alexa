import { Link } from 'react-router-dom';
import './EditOrders.css';
import { useEffect, useState } from 'react';

const EditOrders = () => {


  const [tip, setTip] = useState('');

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
  }, []);

  const editOptions = [
    { icon: '📝', title: 'Edit Blog', description: 'Modify blog posts', link: '/dashboard/editblog' },
    { icon: '✍️', title: 'Edit Article', description: 'Update articles', link: '/dashboard/editarticlecreation' },
    { icon: '📄', title: 'Edit Resume', description: 'Revise resumes', link: '/editResume' },
    { icon: '📧', title: 'Edit Email', description: 'Refine email copy', link: '/dashboard/editemailcopywriting' },
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
              <span className="edit-option-title">{option.title}</span>
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