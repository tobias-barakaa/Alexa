
import { StretchVerticalIcon } from 'lucide-react';
import './WhyChooseUs.css';

const WhyChooseUs = () => {
  return (
    <>

<div className="whychooseus-section">
  <p className="whychooseuse-heading">WHY CHOOSE US</p>
  <p className="testimonial-subheading">We’ve helped many achieve their goals. Heres what some of them had to say about our services.</p>
</div>




<div className="main-containerr">
  <div className="itemmm itemm1">
    <p className="item-number">01</p>
    <i className="icon-placeholder">🔥</i>
    <h3 className="item-heading">Our Expertise</h3>
    <p className="item-description">We provide high-quality writing services tailored to your needs.</p>
  </div>
  <div className="itemmm itemm2">
    <p className="item-number">02</p>
    <i className="icon-placeholder">🚀</i>
    <h3 className="item-heading">Quick Turnaround</h3>
    <p className="item-description">Timely delivery of projects, so your deadlines are always met.</p>
  </div>
  <div className="itemmm itemm3">
    <p className="item-number">03</p>
    <StretchVerticalIcon  className="icon-placeholder" />
    <h3 className="item-heading">Affordable Pricing</h3>
    <p className="item-description">Competitive pricing with the highest quality in mind.</p>
  </div>
  <div className="itemmm itemm4">
    <i className="icon-placeholder">🔑</i>
    <h3 className="item-heading">Get Started</h3>
    <p className="item-description">Let us help you bring your vision to life.</p>
    <button className="cta-button">Find Your Plan</button>
  </div>
</div>




    

    </>

  );
}

export default WhyChooseUs;
