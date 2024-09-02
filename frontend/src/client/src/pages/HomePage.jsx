// import Header from '../header/Header';
// import Home from './Home';
// import ServicesPage from '../components/ServicesPage';
// import PortfolioPage from '../components/PortfolioPage';
// import TestimonialsPage from '../components/TestimonialsPage';
// import Footer from '../components/Footer';
// import BusinessCTA from '../components/BusinessCTA';
// import Header from '../../client/src/components/Header/Header';
import ServicesPage from '../components/ServicesPage';
import PortfolioPage from '../components/PortfolioPage';
import TestimonialsPage from '../components/TestimonialsPage';
import Footer from '../components/Footer';
import BusinessCTA from '../components/BusinessCTA';

import Header from "../components/Header";
// import HeroSection from '../components/HeroSection';

const HomePage = () => {
  

  return (
    <div>
   

      <Header />
      
       {/* <HeroSection />        */}
       <ServicesPage />
       <PortfolioPage />
            <BusinessCTA />
       <TestimonialsPage />
       <Footer />
    </div>
  );
};

export default HomePage;
