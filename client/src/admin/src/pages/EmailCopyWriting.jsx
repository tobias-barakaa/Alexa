import { useEffect, useState } from "react";
import "../styles/pages/EmailCopyWriting.css";

const EmailCopyWriting = () => {
  const [emailCopywritingData, setEmailCopywritingData] = useState([]);

  useEffect(() => {
    const fetchEmailCopywritingData = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/admin/emailcopywriting/retrieve",{
          credentials: 'include',}
        );
        const data = await response.json();
        setEmailCopywritingData(data);
      } catch (error) {
        console.error("Failed to fetch email copywriting data:", error);
      }
    };

    fetchEmailCopywritingData();
  }, []);


 
  


  return (
    <div className="email-copywriting-container">
      <h1>Email Copywriting Projects</h1>
      <table className="email-copywriting-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Project Type</th>
            <th>Description</th>
            <th>Duration</th>
            <th>Word Count</th>
            <th>Cost</th>
            <th>Status</th>
            <th>Created At</th>
            <th>Updated At</th>
            <th>User ID</th>
          </tr>
        </thead>
        <tbody>
          {emailCopywritingData.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.project_type}</td>
              <td>{item.project_description}</td>
              <td>{item.duration}</td>
              <td>{item.word_count}</td>
              <td>{item.cost}</td>
              <td>{item.status}</td>
              <td>{new Date(item.created_at).toLocaleString()}</td>
              <td>{new Date(item.updated_at).toLocaleString()}</td>
              <td>{item.user_id}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmailCopyWriting;
