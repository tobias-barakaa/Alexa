import './TwoColumnLayout.css';
import white from '../assets/images/white.png';
import printer from '../assets/images/printer.png';
import bulk from '../assets/images/bulk.png';
import seo from '../assets/images/seo.png';



import "./TwoColumnLayout.css";
const TwoColumnLayout = () => {
  return (
    <div className="containerr">





<div className="service-section">
    <div className="leftcontent">
        <img src={seo} alt="Service Image" className="service-imagee" />
    </div>
    <div className="rightcontent">
    <h5 className="service-heading">Highest<br />Density</h5>
    <p className="service-desc">
        And outstanding productivity<br />
        for warehouses of any<br />
        shape and size
    </p>
</div>

</div>









        <div className='boxxes'>
    <div className="left-divv">
        <h1 className="leftt-heading">Our Expertise</h1>
        <div className="leftt-description">
            We deliver high-quality content tailored to your needs.
        </div>
        <img src={white} alt="Left Icon" className="right-icon" />
    </div>
    <div className="right-div">
        <h1 className="rightt-heading">Expert Solutions</h1>
        <div className="rightt-description">
            Innovative solutions for every business challenge.
        </div>
        <img src={printer} alt="Right Icon" className="right-icon" />
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



</div>


  );
};

export default TwoColumnLayout;
