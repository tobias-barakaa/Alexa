import { ArrowRight } from "lucide-react";
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
          <div className="container-items">container-items 1</div>
          <div className="container-items">container-items 2</div>
        </div>

        <div className="vertical-line"></div>
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
