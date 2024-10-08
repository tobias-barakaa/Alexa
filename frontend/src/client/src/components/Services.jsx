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


       <div className="container-items">
  <Pencil className="iconn" />
  <h5 className="item-title">Article Writing</h5>
  <div className="item-description">
    We offer professional and high-quality article writing services tailored to your needs, ensuring your content is informative and engaging for your target audience.
  </div>
</div>

<div className="container-items">
  <Pencil className="iconn" />
  <h5 className="item-title">Blog Writing</h5>
  <div className="item-description">
    Our team specializes in crafting compelling blog content that helps your brand connect deeply with your readers, encouraging more interaction and loyalty.
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
          <div className="container-items-second">Right Item 1</div>
          <div className="container-items-second">Right Item 2</div>
        </div>
      </div>
    </div>
  );
};

export default Services;
