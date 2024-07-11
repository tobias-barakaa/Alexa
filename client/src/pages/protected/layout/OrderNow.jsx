import './DashboardMain.css';
import OrderNow from './OrderNow'; // Assuming OrderNow component handles ordering functionality
import WelcomeSection from './WelcomeSection'; // Assuming WelcomeSection component handles the welcome message

const DashboardMain = () => {
  return (
    <div className="dashboard-main">
      <WelcomeSection />

      <div className="features-section">
        <div className="features-content">
          <h2>Our Services</h2>
          <div className="services-container">
            <div className="service-item">
              <i className="bi bi-link-45deg"></i>
              <div className="service-content">
                <h3>Curated Links</h3>
                <p>
                  Natural link placements in existing content that is highly relevant.
                </p>
                <hr />
                <p>
                  Content already exists and is indexed in Google. <br />
                  Article is highly relevant to your website & niche. <br />
                  Drive strong authority because the content is aged.
                </p>
                <button className="order-now-btn">Order Now</button>
              </div>
            </div>
            <div className="service-item">
              <i className="bi bi-file-earmark-text"></i>
              <div className="service-content">
                <h3>Guest Posting</h3>
                <p>
                  Get high-quality guest posts published on relevant websites to
                  boost your website's authority.
                </p>
                <hr />
                <p>
                  Increase brand awareness and targeted traffic. <br />
                  Improve SEO and organic search ranking. <br />
                  Establish yourself as an industry thought leader.
                </p>
                <button className="order-now-btn">Order Now</button>
              </div>
            </div>
          </div>
          <div className="hire-writer-item">
            <img src="[path_to_image]" alt="People" className="people-image" />
            <h2>Hire a Writer</h2>
            <p>
              Did you know, you can book a call with our in-house specialists to
              go over your strategy? Book a call at a time to suit you and we
              will do what we can to help.
            </p>
            <button className="hire-writer-btn">Hire a Personal Writer</button>
          </div>
        </div>
      </div>

      <OrderNow />
    </div>
  );
};

export default DashboardMain;
