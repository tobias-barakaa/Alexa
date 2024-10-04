import React from 'react';
import './Services.css';  // Import the CSS file

const Services = () => {
  return (
    <div className="services-container">
      {/* Left Side */}
      <div className="frameonecontent">
       
        
        <div className="frameonecontentbox">
        <div className="services-header">
        SERVICES
      </div>
      <p className="services-description">
        Physical, digital, meta-physical – We’ll find <br /> creative solution for all your<br /> business problems.
      </p>
        </div>

        <div className='box-frame'>
            <div className='frame-box'>
                first box
            </div>
            <div className='frame-box'>
                second box
            </div>
            <div className='frame-box'>
                second box
            </div>
        </div>
      </div>

      {/* Right Side */}
      <div className="frametwocontent">
        
        
        <div className="frametwocontentbox">
          <h3 className="service-title">Service 6</h3>
          <p>Description for service 6</p>
        </div>
        <div className='box2-frame'>
            <div className='frame2-box'>
                first box
            </div>
            <div className='frame2-box'>
                second box
            </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
