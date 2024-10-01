
import './ServicesLayout.css';
// import color from '../assets/images/supply.png';
// import contract from '../assets/images/contract.png';
// import bulk from '../assets/images/bulk.png';
import TwoColumnLayout from './TwoColumnLayout';


const ServicesLayout = () => {
  return (
    <>
    <div className="services-layout">
      <h4 className="services-heading">Our Services</h4>

       <TwoColumnLayout />

    </div>
    </>
  );
};

export default ServicesLayout;