import './AboutPage.css'; 
import articlesImage from '../assets/images/br.jpg';
import cvImage from '../assets/images/brr.jpg';
import blogsImage from '../assets/images/people.jpg';
import emailImage from '../assets/images/order.svg';



const AboutPage = () => {
    return (
      <div className="about-page">
        <h1 className="about-title">About Our Professional Writing Assistant</h1>
        <p className="about-description">
          Welcome to our Professional Writing Assistant platform, where we specialize in providing top-notch writing services across a variety of needs. Whether you require captivating articles, standout CVs, engaging blogs, or persuasive email copywriting, we have you covered.
        </p>
  
        <div className="about-service">
          <h2 className="service-title articles-title">Article Writing</h2>
          <div className="about-content">
            <img src={articlesImage} alt="Article Writing" className="about-image" />
            <p className="about-text">
              Our article writing service is designed to deliver well-researched, insightful, and engaging content tailored to your specific needs. Whether you need content for your website, magazine, or other platforms, our team of skilled writers ensures that each piece is unique and impactful.
            </p>
          </div>
        </div>
  
        <div className="about-service">
          <h2 className="service-title cv-title">CV Writing</h2>
          <div className="about-content">
            <img src={cvImage} alt="CV Writing" className="about-image" />
            <p className="about-text">
              A well-crafted CV is your first step toward landing your dream job. Our CV writing service focuses on creating personalized resumes that highlight your strengths and achievements, helping you stand out in a competitive job market.
            </p>
          </div>
        </div>
  
        <div className="about-service">
          <h2 className="service-title blogs-title">Blog Writing</h2>
          <div className="about-content">
            <img src={blogsImage} alt="Blog Writing" className="about-image" />
            <p className="about-text">
              Blogs are a powerful way to share your voice with the world. Our blog writing service helps you create content that resonates with your audience, drives engagement, and enhances your online presence. Let us help you articulate your ideas clearly and effectively.
            </p>
          </div>
        </div>
  
        <div className="about-service">
          <h2 className="service-title email-title">Email Copywriting</h2>
          <div className="about-content">
            <img src={emailImage} alt="Email Copywriting" className="about-image" />
            <p className="about-text">
              Effective email copywriting can make or break your communication strategy. Our service is designed to craft compelling emails that not only capture attention but also inspire action. Whether for marketing campaigns or personal communication, we deliver results-driven content.
            </p>
          </div>
        </div>
      </div>
    );
  };
  
  export default AboutPage;
