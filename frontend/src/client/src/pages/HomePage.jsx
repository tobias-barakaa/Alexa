import Header from "../components/Header";
import HeroLayout from "../components/HeroLayout";
// import HeroSection from "../components/HeroSection";
import ServicesSection from "../components/ServicesLayout";
import WhyChooseUs from "../components/WhyChooseUs";
import './HomePage.css'

const HomePage = () => {
  

  return (
    <div>
   

      <Header />
      <div className="layout-componen">

      <HeroLayout />

      <ServicesSection />
      <WhyChooseUs />
      </div>
      
       
    </div>
  );
};

export default HomePage;
