import './PortfolioPage.css';

const PortfolioPage = () => {
  const portfolioItems = [
    {
      title: "Tech Industry Blog Series",
      client: "TechCorp Inc.",
      description: "A series of 10 blog posts about emerging technologies, resulting in a 40% increase in organic traffic.",
      link: "https://techcorp.com/blog",
      backgroundImage: "/path/to/tech-background.jpg"
    },
    {
      title: "E-commerce SEO Campaign",
      client: "FashionRetail Co.",
      description: "Comprehensive SEO strategy that improved search rankings for 50 key product pages, leading to a 75% increase in organic sales.",
      metrics: "75% increase in organic sales",
      backgroundImage: "/path/to/ecommerce-background.jpg"
    },
    {
      title: "Health and Wellness Article Series",
      client: "Wellness World",
      description: "Created 20 in-depth articles on various health topics, establishing the client as an authority in the wellness space.",
      link: "https://wellnessworld.com/articles",
      backgroundImage: "/path/to/health-background.jpg"
    }
  ];

  return (
    <div className="portfolio-page">
      <h1>Our Portfolio</h1>
      <div className="portfolio-grid">
        {portfolioItems.map((item, index) => (
          <div key={index} className="portfolio-item">
            <div 
              className="portfolio-title" 
              style={{backgroundImage: `url(${item.backgroundImage})`}}
            >
              <h2>{item.title}</h2>
            </div>
            <div className="portfolio-content">
              <h3>Client: {item.client}</h3>
              <p>{item.description}</p>
              {item.link && <a href={item.link} target="_blank" rel="noopener noreferrer">View Project</a>}
              {item.metrics && <p className="metrics">Results: {item.metrics}</p>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PortfolioPage;