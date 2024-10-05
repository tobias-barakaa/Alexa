import React from 'react';
import './WhyChooseUs.css'; // Assuming your CSS will be in this file

const WhyChooseUs = () => {
  return (
    <div className="choose-us-container">
      <div className="choose-left-screen">
        <div className="choose-box">
          <h3>Heading 1</h3>
          <p>This is an explanation of what explains the heading. It can describe why this aspect is important and beneficial for the users.</p>
        </div>
        <div className="choose-box">
          <h3>Heading 2</h3>
          <p>This is another explanation for a different heading, elaborating why this point is valuable to users and worth considering.</p>
        </div>
        {/* Add more boxes as needed */}
      </div>

      <div className="choose-right-screen">
        <div className="choose-heading">
          <h2>Why Choose Us</h2>
        </div>
      </div>
    </div>
  );
}

export default WhyChooseUs;
