import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-box" style={{ backgroundColor: '#078BC8' }}>
        <span>📰 News</span>
        <span>Latest Updates</span>
      </div>
      <div className="home-box" style={{ backgroundColor: '#056b99' }}>
        <span>📚 Resources</span>
        <span>Useful Materials</span>
      </div>
      <div className="home-box" style={{ backgroundColor: '#034d6e' }}>
        <span>📊 Reports</span>
        <span>Performance Metrics</span>
      </div>
      <div className="home-box" style={{ backgroundColor: '#023550' }}>
        <span>📅 Events</span>
        <span>Upcoming Activities</span>
      </div>
    </div>
  );
};

export default Home;
