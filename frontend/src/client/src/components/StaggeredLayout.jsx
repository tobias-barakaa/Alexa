import React from 'react';
import './StaggeredLayout.css';

function StaggeredLayout() {
  return (
    <div className="customers-wrapper">
      <div className="text-container">
        <div className="line-one">Customers</div>
        <div className="line-two">Trust Us</div>
        <div className="line-three">Find Out Why</div>
      </div>

      <div className="info-box info-box1">
        <h3>Heading One</h3>
        <p>
          This is a paragraph inside the right box. It explains more information about why customers trust us.
        </p>
      </div>

      <div className="bottom-container">
        <div className="info-box small-box">
          <h3>Heading Two</h3>
          <p>This box is part of the flex arrangement, aligned with the top box.</p>
        </div>
        <div className="info-box small-box">
          <h3>Heading Three</h3>
          <p>Another small box with some text and a heading inside it.</p>
        </div>
      </div>
    </div>
  );
}

export default StaggeredLayout;
