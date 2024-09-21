import './Home.css';
import HeroSection from './HeroSection';
// import publish from '../assets/images/writer.jpg';
import complete from '../../../../../frontend/src/client/src/assets/images/complete.png';
import hand from '../../../../../frontend/src/client/src/assets/images/hand.png';
import adjust from '../../../../../frontend/src/client/src/assets/images/adjust.png';
import agenda from '../../../../../frontend/src/client/src/assets/images/agenda.png';
import { useGetCompletedOrdersByCountQuery, useGetPendingOrdersByCountQuery, useGetProcessingOrdersByCountQuery, useGetUserOrdersByCountQuery } from '../../../slices/client/orderArticleApiSlice';

const Home = () => {
  const { data: countDetails, error, isLoading } = useGetUserOrdersByCountQuery();
  const { data: pendingbyCount, error: isPendingError, isLoading: isLoadingPendingError } = useGetPendingOrdersByCountQuery();
  const { data: processingByCount, error: isProcessingError, isLoading: isLoadingProcessingError } = useGetProcessingOrdersByCountQuery();
  const { data: published, error: isPublishedError, isLoading: isLoadingPublishedError } = useGetPub();


  // Check for loading and errors
  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isPendingError) {
    return <div>...</div>;
  }
  if (isProcessingError) {
    return <div style={{ margin: 'auto' }}>...</div>;
  }

  if (error) {
    console.error('Error fetching count details:', error);
    return <div>Error fetching data</div>;
  }

  if (isLoadingPendingError) {
    console.error('Error fetching count details:', error);
    return <div>Error fetching data</div>;
  }

  if (isLoadingProcessingError) {
    console.error('Error fetching count details:', error);
    return <div>Error fetching data</div>;
  }

  // Check if countDetails exist before logging
  console.log(countDetails, 'count details');
  console.log(pendingbyCount, 'pending count');
  console.log(processingByCount, 'processing count');

  return (
    <>
      
      <div className="home-container">
      <HeroSection />

        <div className="home-box" style={{ backgroundColor: '#ffffff' }}>
        <span className="icon"><img style={{ width: "70px", height: "70px" }} src={agenda} alt="agenda" /></span>

          <span className="title">Open Projects</span>
          <span className="number">{countDetails.count}</span>
        </div>
        <div className="home-box" style={{ backgroundColor: '#ffffff' }}>
          <span className="icon"><img style={{ width: "70px", height: "70px" }} src={complete} alt="complete" /></span>
          <span className="title">Pending</span>
          <span className="number">{pendingbyCount.count}</span>
        </div>
        <div className="home-box" style={{ backgroundColor: '#ffffff' }}>
        <span className="icon"><img style={{ width: "70px", height: "70px" }} src={hand} alt="hand" /></span>

          <span className="title">Processing</span>
          <span className="number">{processingByCount.count}</span>
        </div>
        <div className="home-box" style={{ backgroundColor: '#ffffff' }}>
        <span className="icon"><img style={{ width: "70px", height: "70px" }} src={adjust} alt="adjust" /></span>
          <span className="title">Published</span>
          <span className="number">{</span>
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

export default Home;
