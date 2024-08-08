import './HomePage.css';
// import Header from '../header/Header';
import Home from './Home';
import ServicesPage from './ServicesPage';
import PortfolioPage from './PortfolioPage';
import TestimonialsPage from './TestimonialsPage';
import Footer from './Footer';
import BusinessCTA from './BusinessCTA';
import Header from '../../client/src/components/Header/Header';

const HomePage = () => {
  

  return (
    <div>
   

      <Header />
       {/* <Home /> */}
       <ServicesPage />
       <PortfolioPage />
            <BusinessCTA />
       <TestimonialsPage />
       <Footer />
    </div>
  );
};

export default HomePage;
