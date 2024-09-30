
import './ServicesLayout.css';
import color from '../assets/images/supply.png';
import contract from '../assets/images/contract.png';
import bulk from '../assets/images/bulk.png';


const ServicesLayout = () => {
  return (
    <>
    <div className="services-layout">
      <h4 className="services-heading">Awards and recognition</h4>

    
     

      <div className="services-box-container">
        <div className="services-box">
          <div className="services-text">
            <h4 className="hech4">This is a heading</h4>
            Design more visually striking and refined, consider incorporating a modern and elegant aesthetic.
            Design more visually striking and refined, consider incorporating a modern and elegant aesthetic.
          </div>
          <img src={color} className="services-icon" alt="icon 1" />
        </div>

        <div className="services-box">
          <div className="services-text">
            <h4 className="hech4">This is a heading</h4>
            Design more visually striking and <br /> refined, consider incorporating a modern <br /> and elegant aesthetic.
            <br /> Design more visually striking and <br />
          </div>
          <img src={contract} className="services-icon" alt="icon 2" />
        </div>
      </div>

      <div className="service-offer">
    <h6 className="service-title">Article Writing<br /> Services</h6>
    <div className="service-description">
        We offer top-quality article writing<br />
         services for businesses and <br />
          blog posts, <br />
    </div>
    <img src={bulk} alt="Service Image" className="service-image" />
</div>

      <div className="services-box-three-container">
        <div className="large-service-box">
        <div className="services-text">
            <h4 className="hech4">This is a heading</h4>
            Design more visually striking and <br /> refined, consider incorporating a modern <br /> and elegant aesthetic.
            <br /> Design more visually striking and <br />
          </div>
          <img src={color} className="services-icon" alt="icon 3" />
        </div>

        <div className="right-boxes">
          <div className="small-service-box">
            <h4 className="hech4">Right box 1 heading</h4>
            <img src={contract} className="services-icon" alt="icon 4" />
          </div>
          <div className="small-service-box">
            <h4 className="hech4">Right box 2 heading</h4>
            <img src={color} className="services-icon" alt="icon 5" />
          </div>
        </div>
      </div>



     




    </div>
    </>
  );
};

export default ServicesLayout;