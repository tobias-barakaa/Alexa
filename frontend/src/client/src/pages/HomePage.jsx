import Footer from "../components/Footer";
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
      <div className='background-lin'>
      <div className="layout-component">

      <HeroLayout />

     <Services />
      

      <StaggeredLayout />
      <Testimonials />
      <Footer />
      </div>
      </div>
    </div>
  );
};

export default HomePage;
