import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import ServicesSection from "../components/ServicesLayout";
import './HomePage.css'

const HomePage = () => {
  

  return (
    <div>
   

      <Header />
      <div className="layout-component">

      <HeroSection />

      <ServicesSection />
      </div>
      
       
    </div>
  );
};

export default HomePage;
