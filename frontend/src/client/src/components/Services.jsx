import React from 'react';
import './Services.css';  // Import the CSS file

const Services = () => {
  return (
    <div className="services-container">
      {/* Left Side */}
      <div className="frameonecontent">
       
        
        <div className="frameonecontentbox">
          <h3 className="service-title">Service 3</h3>
          <p>Description for service 3</p>
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
