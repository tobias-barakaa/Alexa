import BuiltFor from "../components/BuiltFor";
import Footer from "../components/Footer";
import Header from "../components/Header";
import HeroLayout from "../components/HeroLayout";
import LetsBuild from "../components/LetsBuild";
import Services from "../components/Services";
import StaggeredLayout from "../components/StaggeredLayout";
import Testimonials from "../components/Testimonials";
import WhyTheyLikeUs from "../components/WhyTheyLikeUs";
import './HomePage.css'

const HomePage = () => {
  

  return (
    <div>
   

      <Header />
      <div className='background-lin'>
      <div className="layout-component">

      <HeroLayout />

     <Services />
      

      <WhyTheyLikeUs />
      <BuiltFor />
      <Footer />
      </div>
      </div>
    </div>
  );
};

export default HomePage;
