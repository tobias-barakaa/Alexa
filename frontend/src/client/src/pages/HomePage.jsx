import Header from "../components/Header";
import HeroLayout from "../components/HeroLayout";
import Services from "../components/Services";
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

      <WhyChooseUs />
      
      </div>
    </div>
  );
};

export default HomePage;
