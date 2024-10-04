import Header from "../components/Header";
import HeroLayout from "../components/HeroLayout";
import Services from "../components/Services";
import ServicesLayout from "../components/ServicesLayout";
import './HomePage.css'

const HomePage = () => {
  

  return (
    <div>
   

      <Header />
      <div className="">

      <HeroLayout />

{/* <ServicesLayout /> */}
<Services />
      {/* <WhyChooseUs /> */}
      </div>
      
       
    </div>
  );
};

export default HomePage;
