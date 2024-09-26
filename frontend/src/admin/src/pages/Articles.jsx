import { Link } from "react-router-dom";
import { useGetArticlesQuery } from "../../../slices/admin/adminApiSlice";
import "./Articles.css";

const Articles = () => {
  // Get articles data from the backend using the custom hook
  const { data: articlesData, isLoading, isError } = useGetArticlesQuery();

  // Extract the articles array from the data
  const articles = articlesData?.articles || [];

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error loading articles.</div>;

  return (
    <div className="articles-container">
      <p className="table-title">Article Details</p>
      <div className="table-wrapper">
        <table className="articles-table">
          <thead>
            <tr>
              {/* Display the headers dynamically based on the first article's keys */}
              {articles.length > 0 && Object.keys(articles[0]).map((key) => (
                <th key={key}>{key}</th>
              ))}
            </tr>
          </thead>
          <tbody>
  {/* Map through the articles array to display each article in a new table row */}
  {articles.map((article) => (
    <tr key={article.id}>
      {Object.values(article).map((value, index) => (
        <td key={index}>
          <Link to={`/admindashboard/articles/${article.id}`}>
            {value !== null ? value.toString() : 'null'}
          </Link>
        </td>
      ))}
    </tr>
  ))}
</tbody>
        </table>
      </div>
    </div>
  );
};

export default Articles;
