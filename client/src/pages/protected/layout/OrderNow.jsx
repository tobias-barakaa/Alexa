import './OrderNow.css';
import curatedLinksIcon from '../../../assets/images/order.svg';
import naturalLinksIcon from '../../../assets/images/ongoing.svg';
import people from '../../../assets/images/peoplebg.png';

const OrderNow = () => {
  return (
    <div className="order-now">
      <div className="services-container">
        <div className='service-it'>
        <h3 className='our-services'>Our Services</h3>
        <div className="service-items">
          <div className="service-item">
            <img src={curatedLinksIcon} alt="Curated Links Icon" className="service-icon" />
            <div className="service-text">
              <h3>AI Written</h3>
              <p>Natural link placements in existing content that is highly relevant.</p>
              <hr />
              <ul>
                <li>Content already exists and is indexed in Google.</li>
                <li>Article is highly relevant to your website & niche.</li>
                <li>Drive strong authority because the content is aged.</li>
                <li>Leverages AI to generate high-quality, contextual content.</li>
              </ul>
              <button className="order-button">Order Now</button>
            </div>
          </div>
          <div className="service-item">
            <img src={naturalLinksIcon} alt="Natural Links Icon" className="service-icon" />
            <div className="service-text">
              <h3>Manually Written</h3>
              <p>Natural link placements in existing content that is highly relevant.</p>
              <hr />
              <ul>
                <li>Content already exists and is indexed in Google.</li>
                <li>Article is highly relevant to your website & niche.</li>
                <li>Drive strong authority because the content is aged.</li>
                <li>Crafted by experienced human writers for a personal touch.</li>
              </ul>
              <button className="order-button">Order Now</button>
            </div>
          </div>
        </div>
        </div>
        <div className="hire-writer-item">
          <img src={people} alt="People" className="people-image" />
          <div className="service-text">
            <h3>Hire a Writer</h3>
            <p>Did you know, you can book a call with our in-house specialists to go over your strategy? Book a call at a time to suit you and we will do what we can to help.</p>
            <button className="hire-button">Hire a Personal Writer</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderNow;