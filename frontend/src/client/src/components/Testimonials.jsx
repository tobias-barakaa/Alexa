import React from 'react';
import "./Testimonials.css"
import { MessageCircle } from 'lucide-react';

export default function Testimonials() {
  const StarRating = () => (
    <div className="star-rating">
      {[1, 2, 3, 4, 5].map((star) => (
        <svg key={star} className="star" viewBox="0 0 24 24" width="20" color='red' height="20">
          <path fill="#FFD700" d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      ))}
    </div>
  );

  const QuoteIcon = () => (
    <svg className="quote-icon" width="24" height="24" viewBox="0 0 24 24">
      <path fill="currentColor" d="M10 7L8 11H11V17H5V11L7 7H10ZM18 7L16 11H19V17H13V11L15 7H18Z"/>
    </svg>
  );

  return (
    <div className="container-testimonial">
      <div className="testimonial-heading">
        <MessageCircle className="icon-animated" />
        <div className="testimonial-title">Testimonials</div>
      </div>

      {/* Subheading */}
      <h5 className="testimonial-voices">Voices of Satisfaction</h5>
      <p className="testimonial-subheading">
        Get instant answers to common questions about our services and policies.
      </p>

      <div className="testimonials-grid">
        {/* First Row */}
        <div className="testimonial-card">
          <div className="card-header">
            <StarRating />
            <QuoteIcon />
          </div>
          <p className="testimonial-text">
            "Working with this team has been an absolute pleasure. Their attention to detail and commitment to excellence has truly transformed our business operations. The results have exceeded our expectations in every way possible."
          </p>
          <hr />
          <div className="profile">
            <img src="/api/placeholder/50/50" alt="John Doe" className="profile-img" />
            <div className="profile-info">
              <h4>John Doe</h4>
              <p>Managing Partner</p>
            </div>
          </div>
        </div>

        <div className="testimonial-card tall">
          <div className="card-header">
            <StarRating color='black' style={{color: "red"}} />
            <QuoteIcon />
          </div>
          <p className="testimonial-text">
            "The level of professionalism and expertise demonstrated by the team is outstanding. They've consistently delivered beyond our expectations and have become an integral part of our success story. Their innovative solutions have helped us streamline our processes and achieve remarkable results."
          </p>
          <hr />
          <div className="profile">
            <img src="/api/placeholder/50/50" alt="Jane Smith" className="profile-img" />
            <div className="profile-info">
              <h4>Jane Smith</h4>
              <p>CEO, Tech Solutions</p>
            </div>
          </div>
          <div className="second-testimonial">
            <hr />
            <p className="testimonial-text">
              "What sets them apart is their dedication to understanding our unique needs. They don't just provide solutions; they create partnerships that drive success."
            </p>
            <hr />
            <div className="profile">
              <img src="/api/placeholder/50/50" alt="Mike Johnson" className="profile-img" />
              <div className="profile-info">
                <h4>Mike Johnson</h4>
                <p>Director of Operations</p>
              </div>
            </div>
          </div>
        </div>

        <div className="testimonial-card">
          <div className="card-header">
            <StarRating />
            <QuoteIcon />
          </div>
          <p className="testimonial-text">
            "The impact on our business has been transformative. Their strategic approach and innovative solutions have helped us achieve unprecedented growth."
          </p>
          <hr />
          <div className="profile">
            <img src="/api/placeholder/50/50" alt="Sarah Wilson" className="profile-img" />
            <div className="profile-info">
              <h4>Sarah Wilson</h4>
              <p>Marketing Director</p>
            </div>
          </div>
        </div>

        {/* Second Row */}
        <div className="testimonial-card">
          <div className="card-header">
            <StarRating className='star' />
            <QuoteIcon />
          </div>
          <p className="testimonial-text">
            "Their dedication to customer satisfaction is unmatched. Every interaction has been professional and productive."
          </p>
          <hr />
          <div className="profile">
            <img src="/api/placeholder/50/50" alt="David Brown" className="profile-img" />
            <div className="profile-info">
              <h4>David Brown</h4>
              <p>Senior Consultant</p>
            </div>
          </div>
        </div>

        <div className="testimonial-card">
          <div className="card-header">
            <StarRating  className='star' />
            <QuoteIcon />
          </div>
          <p className="testimonial-text">
            "A game-changing partnership that has revolutionized how we approach our business challenges."
          </p>
          <hr />
          <div className="profile">
            <img src="/api/placeholder/50/50" alt="Lisa Anderson" className="profile-img" />
            <div className="profile-info">
              <h4>Lisa Anderson</h4>
              <p>Project Manager</p>
            </div>
          </div>
        </div>
      </div>

     
    </div>
  );
}