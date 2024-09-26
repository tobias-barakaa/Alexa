import { useState } from "react";
import { useGetAllUsersArticlesQuery } from "../../../../slices/client/orderArticleApiSlice";
import DeleteButtonWithModal from "../../components/DeleteButtonWithModal";
import "./OrderHistory.css";
import { useEffect } from "react";


const OrderHistory = () => {
  const { data: orders, isLoading, isError } = useGetAllUsersArticlesQuery();

  const [drafts, setDrafts] = useState([]);

  useEffect(() => {
    if (orders) {
      console.log(orders); // Log the structure of orders
      setDrafts(orders.articles || []); 
    }
  }, [orders]);

  const handleDeleteDraft = (deletedId) => {
    setDrafts((prevDrafts) => prevDrafts.filter(draft => draft.id !== deletedId));
  };

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error loading articles.</div>;
  



  return (
    <div className="history-container">
      <h2>History</h2>
      <ul className="history-list">
        {drafts.map((item) => (
          <li key={item.id} className="history-item">
            <div className="item-header">
              <h3>{item.title}</h3>
              <span className="status">{item.status}</span>
            </div>
            <p className="description">{item.description}</p>
            <div className="item-details">
              <span>Complexity: {item.complexity}</span>
              <span>Cost: ${item.cost}</span>
              <span>Word Count: {item.word_count}</span>
            </div>
            <div className="item-meta">
              <span>Order ID: {item.order_id}</span>
              <span>Language: {item.language}</span>
              <span>Created: {new Date(item.created_at).toLocaleDateString()}</span>
            </div>
            <DeleteButtonWithModal articleId={item.id} onDelete={() => handleDeleteDraft(item.id)} />
          </li>
        ))}
      </ul>
     
    </div>
  );
};

export default OrderHistory;