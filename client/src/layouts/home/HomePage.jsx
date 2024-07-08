import './HomePage.css';
import Header from '../header/Header';
import Layout from './Layout';
// import { useGetArticlesQuery } from '../../slices/articlesApiSlice';

const HomePage = () => {
// const { data, isLoading, error } = useGetArticlesQuery();
  

  return (
    <div>
    {/* {isLoading ? (
      <h2>Loading...</h2>
    ) : error ? (<div>{error.data.message || error.message}</div>) : (<>
    
    </>) } */}

      <Header />
       <Layout />
    </div>
  );
};

export default HomePage;
