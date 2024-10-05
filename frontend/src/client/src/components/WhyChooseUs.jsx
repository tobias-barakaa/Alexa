
import './WhyChooseUs.css';

const WhyChooseUs = () => {
  return (
    <>

<div className="whychooseus-section">
  <p className="whychooseuse-heading">WHY CHOOSE US</p>
  <p className="testimonial-subheading">We’ve helped many achieve their goals. Heres what some of them had to say about our services.</p>
</div>



<div className="why-choose-container">
  {/* Left Section */}
  <div className="why-choose-left">


    <div className="text-container">
      <p className="sub-text">
        Some of the common aspects<br />
        of our branding and visual identity projects
      </p>
    </div>


    <div className="text-container">
      <p className="sub-text">
        Some of the common aspects<br />
        of our branding and visual identity projects
      </p>
    </div>



  </div>

  {/* Right Section */}
  <div className="why-choose-right">
    <div className="content-wrapper">
      <div className="text-container">
        <h1 className="main-heading">
          How we<br />
          <span className="highlight-text">Work</span>
        </h1>
        <p className="sub-text">
          Some of the common aspects<br />
          of our branding and visual identity projects
        </p>
      </div>
    </div>
  </div>
</div>



    

    </>

  );
}

export default WhyChooseUs;
