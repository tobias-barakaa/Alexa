import { SwitchCamera } from 'lucide-react';
import './WhyChooseUs.css';
import WhatTheySay from './WhatTHEYSAY';

const WhyChooseUs = () => {
  return (
    <>


<div className="search-container">
      <div className="right-content-manage">
        <div className="contentt-wrapper">

          <div className="heading-line">
  <span className="heading-text">Your Search</span>
  <SwitchCamera className="camera-icon" />
  <span className="heading-text">Ends With Us</span>
</div>


          <h3 className="main-headingg">
            Customers Trusts us <br />
            find Out Why
          </h3> 

          
<div className='about-us-headline'>
          <p className="about-us-description">
            At our core, we believe in transforming complex challenges 
          </p>
          </div>
        </div>
      </div>

    <WhatTheySay />

    </div>



    

      
    </>
  );
}

export default WhyChooseUs;
