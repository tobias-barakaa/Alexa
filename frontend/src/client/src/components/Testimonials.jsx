import React from 'react';
import './Testimonials.css';

const testimonials = [
  {
    name: 'John Doe',
    title: 'CEO of Company X',
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
    quote:
      'This service has transformed our business. The quality is exceptional, and we’ve seen a 40% increase in efficiency!',
  },
  {
    name: 'Jane Smith',
    title: 'Marketing Director at Y',
    image: 'https://randomuser.me/api/portraits/women/44.jpg',
    quote:
      'Absolutely fantastic! The attention to detail and personalized approach make this service stand out from the rest.',
  },
  {
    name: 'Sarah Parker',
    title: 'Freelance Writer',
    image: 'https://randomuser.me/api/portraits/women/48.jpg',
    quote:
      'Professional, reliable, and affordable. Highly recommended for anyone looking for quality services.',
  },
];

const Testimonial = () => {
  return (
    <div className="testimonial-container">
      <h2 className="testimonial-heading">What Our Clients Say</h2>
      <div className="testimonial-cards">
        {testimonials.map((testimonial, index) => (
          <div className="testimonial-card" key={index}>
            <div className="testimonial-image-wrapper">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="testimonial-image"
              />
            </div>
            <h3 className="testimonial-name">{testimonial.name}</h3>
            <p className="testimonial-title">{testimonial.title}</p>
            <p className="testimonial-quote">“{testimonial.quote}”</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
