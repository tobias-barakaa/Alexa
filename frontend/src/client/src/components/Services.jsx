import { ArrowRight, Pencil } from "lucide-react";
import "./Services.css";
import { useState } from "react";

const Services = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="services-container">
      <div className="frameonecontent">
        <div className="frameonecontentbo">
          <div className="services-header">SERVICES</div>
          <p className="services-description">
            Physical, digital, meta-physical – We’ll find <br /> creative
            solution for all your
            <br /> business problems.
          </p>
        </div>

        


        <div className="left-container">

        <div className='container-border'>
  <div className="container-items">
    <div className="icon-container">
      <ArrowRight className="direction-icon" />
      <Pencil className="iconn" />
    </div>
    <h5 className="item-title">Article Writing</h5>
    <div className="item-description">
      We offer professional and high-quality article writing services tailored to your needs, ensuring your content is informative and engaging for your target audience.
    </div>
  </div>
</div>

<div className='container-border2'>
  <div className="container-items">
    <div className="icon-container">
      <ArrowRight className="direction-icon" />
      <Pencil className="iconn" />
    </div>
    <h5 className="item-title">Article Writing</h5>
    <div className="item-description">
      We offer professional and high-quality article writing services tailored to your needs, ensuring your content is informative and engaging for your target audience.
    </div>
  </div>
</div>
</div>



     </div>


      {/* Right Side */}
      <div className="frametwocontent">
        <button
          className={`view-services-button ${isHovered ? "hovered" : ""}`}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <span className="view-services-header">VIEW SERVICES</span>
          <ArrowRight
            size={24}
            className={`arrow-icon ${isHovered ? "hovered" : ""}`}
          />
          <div className="view-services-button-after" />
        </button>

        <div className="right-containerr">


<div className='container-border3'>
          <div className="container-items-second">
            <div className="icon-container">
            <ArrowRight className="direction-icon" />
            <Pencil className="iconn" />

            </div>
            <h5 className="item-title">Article Writing</h5>
    <div className="item-description">
      We offer professional and high-quality article writing services tailored to your needs, ensuring your content is informative and engaging for your target audience.
    </div>
          </div>
          </div>



          <div className='container-border4'>
          <div className="container-items-second">
            <div className="icon-container">
            <ArrowRight className="direction-icon" />
            <Pencil className="iconn" />

            </div>
            <h5 className="item-title">Article Writing</h5>
    <div className="item-description">
      We offer professional and high-quality article writing services tailored to your needs, ensuring your content is informative and engaging for your target audience.
    </div>
          </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Services;
