import React from 'react';
import { FaQuoteLeft, FaStar } from 'react-icons/fa';
import reviewerImage1 from '../assets/images/tobby.png'; // First reviewer's image
import reviewerImage2 from '../assets/images/tobby.png'; // Second reviewer's image
import reviewerImage3 from '../assets/images/tobby.png'; // Third reviewer's image
import reviewerImage4 from '../assets/images/tobby.png'; // Fourth reviewer's image

import './Testimonials.css';

const Testimonials = () => {
  const testimonials = [
    {
      image: reviewerImage1,
      text: "A heartfelt thank you to the all-volunteer team that built and launched The ImmuneCorps, a site to connect those who need help with those who can help.",
      name: "John Doe",
      role: "Client/Freelancer",
    },
    {
      image: reviewerImage2,
      text: "Their service transformed my business. I've never felt more supported and confident in my decisions. Highly recommend working with them! The results speak for themselves.",
      name: "Jane Smith",
      role: "Client/Freelancer",
    },
    {
      image: reviewerImage3,
      text: "The team at Enwriters exceeded my expectations. Professional, timely, and always available for questions. I couldn't be happier with the results.",
      name: "Alice Johnson",
      role: "Business Owner",
    },
    {
      image: reviewerImage4,
      text: "Incredible experience! Their attention to detail and commitment to quality made all the difference in my project. Will definitely hire again.",
      name: "Bob Brown",
      role: "Entrepreneur",
    },
  ];

  return (
    <div className="testimonials-section">
      {/* Heading */}
      <div className='built-on-trust'>BUILT ON TRUST</div>
      <div className='what-out-clients-are-saying'>What our clients are saying</div>

      {/* Testimonial Container */}
      <div className="testimonial-container">
        {testimonials.map((testimonial, index) => (
          <div className="testimonial-item" key={index}>
            <div className="testimonial-left">
              <div className="icon-box">
                <FaQuoteLeft size={30} className="quote-icon" />
              </div>
              <img src={testimonial.image} alt={`Reviewer ${index + 1}`} className="reviewer-image" />
            </div>
            <div className="testimonial-right">
              <p className="review-text">{testimonial.text}</p>
              <div className="stars-rating">
                {[...Array(5)].map((star, index) => (
                  <FaStar key={index} className="star-icon" />
                ))}
              </div>
              <p className="reviewer-name">{testimonial.name}</p>
              <p className="reviewer-role">{testimonial.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
