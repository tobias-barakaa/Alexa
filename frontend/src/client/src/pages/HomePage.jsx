import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import ServicesSection from "../components/ServicesLayout";
import WhyChooseUs from "../components/WhyChooseUs";
import './HomePage.css'

const HomePage = () => {
  

  return (
    <div>
   

      <Header />
      <div className="layout-component">

      <HeroSection />

      <ServicesSection />
      <WhyChooseUs />
      </div>
      
       
    </div>
  );
};

export default HomePage;
