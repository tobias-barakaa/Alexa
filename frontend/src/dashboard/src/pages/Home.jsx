import { Link } from 'react-router-dom';
import './Home.css';
import { useGetLatestQuery } from '../../../slices/client/blogApiSlice';
import HeroSection from './HeroSection';
// import publish from '../assets/images/writer.jpg';
import complete from '../../../../../frontend/src/client/src/assets/images/complete.png';
import hand from '../../../../../frontend/src/client/src/assets/images/hand.png';
import adjust from '../../../../../frontend/src/client/src/assets/images/adjust.png';
import agenda from '../../../../../frontend/src/client/src/assets/images/agenda.png';





const Home = () => {
  const { data, isLoading, isError, error } = useGetLatestQuery();

  if (isLoading) {
    return <div>Loading latest blogs...</div>;
  }

  if (isError) {
    return <div>Error: {error?.message || 'Failed to load latest blogs.'}</div>;
  }

  const latestBlogCount = data?.blogs?.length || 0;

  return (
    <>
      
      <div className="home-container">
      <HeroSection />

        <div className="home-box" style={{ backgroundColor: '#ffffff' }}>
        <span className="icon"><img style={{ width: "70px", height: "70px" }} src={agenda} alt="agenda" /></span>

          <span className="title">Open Projects</span>
          <span className="number">12</span>
        </div>
        <div className="home-box" style={{ backgroundColor: '#ffffff' }}>
          <span className="icon"><img style={{ width: "70px", height: "70px" }} src={complete} alt="complete" /></span>
          <span className="title">Pending</span>
          <span className="number">5</span>
        </div>
        <div className="home-box" style={{ backgroundColor: '#ffffff' }}>
        <span className="icon"><img style={{ width: "70px", height: "70px" }} src={hand} alt="hand" /></span>

          <span className="title">Completed</span>
          <span className="number">28</span>
        </div>
        <Link to="edit" className="home-box" style={{ backgroundColor: '#ffffff' }}>
        <span className="icon"><img style={{ width: "70px", height: "70px" }} src={adjust} alt="adjust" /></span>
          <span className="title">Latest</span>
          <span className="number">{latestBlogCount}</span>
        </Link>
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

export default Home;
