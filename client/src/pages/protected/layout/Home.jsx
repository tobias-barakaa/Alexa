import './Home.css';

const Home = () => {
  return (
    <>
    
<div className="professionals-section">
  <div className="text-content">
    <h2>Meet world-className publishing professionals</h2>
    <p>Browse profiles and collaborate on projects.</p>
  </div>
  <div className="image-container">
    <img src="path_to_your_image.jpg" alt="Publishing professionals" />
  </div>
  <hr className="divider" />
</div>
    <div className="home-container">



    <div className="home-box" style={{ backgroundColor: '#ffffff' }}>
  <span className="icon">📂</span>
  <span className="title">Open Projects</span>
  <span className="number">12</span>
</div>
<div className="home-box" style={{ backgroundColor: '#ffffff' }}>
  <span className="icon">⏳</span>
  <span className="title">Pending</span>
  <span className="number">5</span>
</div>
<div className="home-box" style={{ backgroundColor: '#ffffff' }}>
  <span className="icon">✅</span>
  <span className="title">Completed</span>
  <span className="number">28</span>
</div>
<div className="home-box" style={{ backgroundColor: '#ffffff' }}>
  <span className="icon">💾</span>
  <span className="title">Saved</span>
  <span className="number">7</span>
</div>
    </div>
    </>

  );
};
// 078BC8
// 056b99
// 034d6e
// 023550
export default Home;
