import './LearnMore.css';

const LearnMore = () => {
  return (
    <div className="learn-more">
      <h1>Learn More About Writing and Content Creation</h1>
      
      <section className="article-writing">
        <h2>Article Writing</h2>
        <p>Discover the art of crafting compelling articles that engage readers and convey information effectively. Learn about research techniques, structuring your content, and developing your unique voice.</p>
        <a href="#" className="resource-link">Article Writing Guide</a>
      </section>
      
      <section className="blog-creation">
        <h2>Blog Creation</h2>
        <p>Explore the world of blogging, from choosing your niche to building an audience. We will cover topics such as content planning, SEO optimization, and monetization strategies.</p>
        <a href="#" className="resource-link">Blogging 101</a>
      </section>
      
      <section className="cv-writing">
        <h2>CV and Resume Writing</h2>
        <p>Learn how to create standout CVs and resumes that highlight your skills and experiences. We will guide you through formatting, content selection, and tailoring your document to specific job applications.</p>
        <a href="#" className="resource-link">CV Writing Tips</a>
      </section>
      
      <section className="content-strategy">
        <h2>Content Strategy</h2>
        <p>Delve into the principles of content strategy, including audience analysis, content planning, and measuring success. Discover how to create a cohesive content ecosystem that drives engagement and achieves your goals.</p>
        <a href="#" className="resource-link">Content Strategy Fundamentals</a>
      </section>
      
      <section className="workshops">
        <h2>Writing Workshops</h2>
        <p>Join our interactive workshops to hone your writing skills, receive feedback, and connect with other writers. We offer sessions on various topics, from creative writing to technical documentation.</p>
        <a href="#" className="resource-link">Upcoming Workshops</a>
      </section>
      
      <section className="resources">
        <h2>Additional Resources</h2>
        <ul>
          <li><a href="#">Writing Tools and Software</a></li>
          <li><a href="#">Grammar and Style Guides</a></li>
          <li><a href="#">Freelance Writing Opportunities</a></li>
          <li><a href="#">Publishing Resources</a></li>
        </ul>
      </section>
    </div>
  );
};

export default LearnMore;