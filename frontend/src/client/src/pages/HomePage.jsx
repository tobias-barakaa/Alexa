import BecomeWriter from "../components/BecomeWriter";
import BuiltFor from "../components/BuiltFor";
import HeroLayout from "../components/HeroLayout";
import Services from "../components/Services";
import Testimonials from "../components/Testimonials";
import WhyTheyLikeUs from "../components/WhyTheyLikeUs";
import './HomePage.css'

const HomePage = () => {
  

  return (
    <div>
    <div className='background-lin'>
      <div className="layout-component">

      <HeroLayout />

     <Services />
      

      <WhyTheyLikeUs />
      <BuiltFor />
      <Testimonials />
      <BecomeWriter />
      {/* <LetsBuild /> */}
      </div>
      </div>
    </div>
  );
};

export default HomePage;
