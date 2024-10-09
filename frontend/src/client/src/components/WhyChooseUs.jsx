import {  } from 'lucide-react';
import './WhyChooseUs.css';

const WhyChooseUs = () => {
  return (
    <>


<section class="hero-section">
  <div class="heading-container">
    <div class="bg-shape"></div>
    <div class="bg-shape"></div>
    <h3 class="stacked-heading">
      <span class="heading-line">Why</span>
      <span class="heading-line">Choose</span>
      <span class="heading-line">Us</span>
    </h3>
  </div>
</section>


    
      <div className="whychooseus-section">
        <p className="whychooseuse-heading">WHY CHOOSE US</p>
        <p className="testimonial-subheading">We’ve helped many achieve their goals. Here's what some of them had to say about our services.</p>
      </div>

      <div className="main-containerr">
        <div className="itemmm itemm1">
          <p className="item-number">01</p>
          {/* <FireIcon className="icon-placeholder" /> */}
          <h3 className="item-heading">Our Expertise</h3>
          <p className="item-description">We provide high-quality writing services tailored to your needs.</p>
        </div>
        <div className="itemmm itemm2">
          <p className="item-number">02</p>
          {/* <RocketIcon className="icon-placeholder" /> */}
          <h3 className="item-heading">Quick Turnaround</h3>
          <p className="item-description">Timely delivery of projects, so your deadlines are always met.</p>
        </div>
        <div className="itemmm itemm3">
          <p className="item-number">03</p>
          {/* <DollarSignIcon className="icon-placeholder" /> */}
          <h3 className="item-heading">Affordable Pricing</h3>
          <p className="item-description">Competitive pricing with the highest quality in mind.</p>
        </div>
        <div className="itemmm itemm4">
          {/* <KeyIcon className="icon-placeholder" /> */}
          <h3 className="item-heading">Get Started</h3>
          <p className="item-description">Let us help you bring your vision to life.</p>
          <button className="cta-button">Find Your Plan</button>
        </div>
      </div>
    </>
  );
}

export default WhyChooseUs;
