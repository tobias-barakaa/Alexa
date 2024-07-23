import './ServicesPage.css';

const ServicesPage = () => {
  const services = [
    {
      title: "Blog Writing",
      description: "Engaging, SEO-optimized blog posts tailored to your audience and industry.",
      icon: "📝"
    },
    {
      title: "Article Writing",
      description: "In-depth, well-researched articles to establish your authority in your field.",
      icon: "📰"
    },
    {
      title: "SEO Content Creation",
      description: "Content strategically created to boost your search engine rankings and visibility.",
      icon: "🔍"
    },
    {
      title: "Keyword Research",
      description: "Comprehensive keyword analysis to target the right audience and improve SEO.",
      icon: "🔑"
    }
  ];

  return (
    <div className="services-page">
      <h1>Our Services</h1>
      <div className="services-grid">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <div className="service-icon">{service.icon}</div>
            <h2>{service.title}</h2>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
      <div className="case-study">
  <div className="case-study-content">
    <h2>Case Study: Boosting Organic Traffic</h2>
    <p>For client XYZ, we increased organic traffic by 150% over 6 months through strategic content creation and SEO optimization.</p>
  </div>
</div>
    </div>
  );
};

export default ServicesPage;