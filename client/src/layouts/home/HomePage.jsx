import './HomePage.css';
import backgroundImage from '../../assets/images/office.jpg';
import Header from '../header/Header';
import Layout from './Layout';

const HomePage = () => {
  return (
    <>
      <Header />
      <main style={{ backgroundImage: `url(${backgroundImage})` }}>
       <Layout />
      </main>
    </>
  );
};

export default HomePage;
