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

    <section className="recent-activity">
  <h2>Recent Activity</h2>
  <ul className="activity-list">
    <li className="activity-item">
      <span className="activity-icon">🆕</span>
      <div className="activity-content">
        <p>New project Website Redesign created</p>
        <small>2 hours ago</small>
      </div>
    </li>
    <li className="activity-item">
      <span className="activity-icon">✅</span>
      <div className="activity-content">
        <p>Content Writing task completed in Blog Update project</p>
        <small>Yesterday</small>
      </div>
    </li>
    <li className="activity-item">
      <span className="activity-icon">💬</span>
      <div className="activity-content">
        <p>New comment on SEO Optimization task</p>
        <small>2 days ago</small>
      </div>
    </li>
  </ul>
</section>
    </>

  );
};
// 078BC8
// 056b99
// 034d6e
// 023550
export default Home;
