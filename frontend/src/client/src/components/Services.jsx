import { ArrowRight } from 'lucide-react';
import './Services.css'; 
import { useState } from 'react';
import { Pencil } from 'lucide-react'; 



const Services = () => {
    const [isHovered, setIsHovered] = useState(false);





    const ServiceBox = ({ icon: Icon, title, description }) => {
        return (
            <div className="frame-box">
            <div className="icon-wrapper">
              <Pencil size={44} className="iconnn" /> {/* Replace with your icon component */}
            </div>
            <h3 className="titlee">Article Writing</h3>
            <div className="descriptionn">
              We provide high-quality article writing services that cater to various industries and niches.
            </div>
          </div>
        );
      };

      


      const services1 = [
        {
          icon: Pencil,
          title: "Article Writing",
          description: "We provide high-quality article writing services that cater to various industries and niches.",
        },
        {
          icon: Pencil,
          title: "Blog Writing",
          description: "Our blog writing service ensures engaging content that helps you connect with your audience.",
        },

        {
            icon: Pencil,
            title: "Blog Writing",
            description: "Our blog writing service ensures engaging content that helps you connect with your audience.",
          },
        // Add more services here...
      ];



      const services2 = [
        {
          icon: Pencil,
          title: "Article Writing",
          description: "We provide high-quality article writing services that cater to various industries and niches.",
        },
        {
          icon: Pencil,
          title: "Blog Writing",
          description: "Our blog writing service ensures engaging content that helps you connect with your audience.",
        },

        

        
      ];




  return (
    <div className="services-container">
      {/* Left Side */}
      <div className="frameonecontent">
       
        
        <div className="frameonecontentbox">
        <div className="services-header">
        SERVICES
      </div>
      <p className="services-description">
        Physical, digital, meta-physical – We’ll find <br /> creative solution for all your<br /> business problems.
      </p>
        </div>

        <div className='box-frame'>
            {/* <div className='frame-box'>
                first box
            </div> */}




{services1.map((service, index) => (
        <ServiceBox
          key={index}
          icon={service.icon}
          title={service.title}
          description={service.description}
        />
      ))}












            
        </div>
      </div>

      {/* Right Side */}
      <div className="frametwocontent">
        
        
        <div className="frametwocontentbox">
        <button 
          className={`view-services-button ${isHovered ? 'hovered' : ''}`}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <span>VIEW SERVICES</span>
          <ArrowRight 
            size={24} 
            className={`arrow-icon ${isHovered ? 'hovered' : ''}`}
          />
          <div className="view-services-button-after" />
        </button>

        </div>
        <div className='box2-frame'>
        {services2.map((service, index) => (
        <ServiceBox
          key={index}
          icon={service.icon}
          title={service.title}
          description={service.description}
        />
      ))}
            
        </div>
      </div>
    </div>
  );
};

export default Services;
