import Header from "../components/Header";
import HeroLayout from "../components/HeroLayout";
import Services from "../components/Services";
import StaggeredLayout from "../components/StaggeredLayout";
import Testimonials from "../components/Testimonials";
import WhyChooseUs from "../components/WhyChooseUs";
import './HomePage.css'

const HomePage = () => {
  

  return (
    <div>
   

      <Header />
      <div className='background-lines'>
      <div className="layout-component">

      <HeroLayout />

     <Services />
      </div>
      </div>

      <StaggeredLayout />
      <Testimonials />
      
    </div>
  );
};

export default HomePage;
