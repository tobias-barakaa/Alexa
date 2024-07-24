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
        <span>📰 News</span>
        <span>Latest Updates</span>
      </div>
      <div className="home-box" style={{ backgroundColor: '#ffffff' }}>
        <span>📚 Resources</span>
        <span>Useful Materials</span>
      </div>
      <div className="home-box" style={{ backgroundColor: '#ffffff' }}>
        <span>📊 Reports</span>
        <span>Performance Metrics</span>
      </div>
      <div className="home-box" style={{ backgroundColor: '#ffffff' }}>
        <span>📅 Events</span>
        <span>Upcoming Activities</span>
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
