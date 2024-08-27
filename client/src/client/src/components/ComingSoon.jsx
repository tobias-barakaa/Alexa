// ComingSoon.jsx
import './ComingSoon.css';

const ComingSoon = () => {
  return (
    <div className="coming-soon">
      <div className="content">
        <h1>Coming Soon</h1>
        <div className="icon">🚀</div>
        <p>We are working on something exciting!</p>
        <p className="description">
          This feature is currently under development and will be available in the near future. 
          We appreciate your patience and cannot wait to share it with you.
        </p>
        <div className="features">
          <h2>What to expect:</h2>
          <ul>
            <li>Advanced writing analytics</li>
            <li>AI-powered content suggestions</li>
            <li>Collaborative editing tools</li>
            <li>Integrated publishing platform</li>
          </ul>
        </div>
        <button className="notify-button">Notify me when its ready</button>
      </div>
    </div>
  );
};

export default ComingSoon;