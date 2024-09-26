import './ArticleList.css';
import { useGetAllUsersArticlesQuery } from '../../../../slices/client/orderArticleApiSlice';


const ArticleList = () => {

  const { data: orders, isLoading, isError } = useGetAllUsersArticlesQuery();

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error loading articles.</div>;

  const articles = orders?.articles || []; 
  return (
    <div className="article-list">
      <p className='article-list-header'>Article List</p>
      {articles.map((article) => (
        <div key={article.id} className="article-card">
          <h2>{article.title}</h2>
          <p className="description">{article.description}</p>
          
          <div className="article-details">
            <span className="complexity">{article.complexity}</span>
            <span className="cost">${article.cost}</span>
            <span className="word-count">{article.word_count}</span>
          </div>
          
          <div className="article-meta">
            <span className="status">{article.status}</span>
            <span className="language">{article.language}</span>
          </div>

          <a href="#" className="view-details-button">View Details</a>
        </div>
      ))}
    </div>
  );
};

export default ArticleList;
