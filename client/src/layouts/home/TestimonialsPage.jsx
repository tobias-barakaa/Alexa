import './TestimonialsPage.css';

const TestimonialsPage = () => {
  const testimonials = [
    {
      name: "John Smith",
      company: "Tech Innovators Ltd.",
      quote: "The content created by this team has significantly boosted our online presence. Our organic traffic has increased by 200% in just 6 months!",
      image: "/path/to/john-smith-image.jpg"
    },
    {
      name: "Sarah Johnson",
      company: "E-commerce Solutions Inc.",
      quote: "Their SEO expertise is unmatched. Our product pages now rank on the first page for multiple high-value keywords.",
      image: "/path/to/sarah-johnson-image.jpg"
    },
    {
      name: "Michael Chen",
      company: "Global Health Initiatives",
      quote: "The blog posts they've written for us have established our brand as a thought leader in the health tech space. Truly impressive work!",
      image: "/path/to/michael-chen-image.jpg"
    }
  ];

  return (
    <div className="testimonials-page">
      <h1>What Our Clients Say</h1>
      <div className="testimonials-grid">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-card">
            <img src={testimonial.image} alt={testimonial.name} className="client-image" />
            <blockquote>{testimonial.quote}</blockquote>
            <p className="client-name">{testimonial.name}</p>
            <p className="client-company">{testimonial.company}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialsPage;