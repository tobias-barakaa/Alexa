import './MyComponent.css';

const MyComponent = () => {
  return (
    <div className="content-container">
      <div className="text-content">
        <h1>Meet world-class publishing professionals</h1>
        <p>Browse profiles and collaborate on projects.</p>
      </div>
      <div className="image-content">
        <img src="your-image-source.jpg" alt="Publishing Professionals" />
        <hr />
      </div>
    </div>
  );
};

export default MyComponent;
