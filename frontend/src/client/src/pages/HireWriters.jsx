import React from 'react';
import './HireWriters.css'; 
import centerImage from '../assets/images/woman.jpeg'; // Placeholder for profile image
import { useGetWritersQuery } from '../../../slices/admin/adminWritersApiSlice';
import { Link } from 'react-router-dom';

const HireWriters = () => {
  const { data: hire_writers, isLoading, error } = useGetWritersQuery();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading writers.</div>;
  }

  // Convert the object of writers into an array if it's not already an array
  const writersArray = Array.isArray(hire_writers) ? hire_writers : Object.values(hire_writers);
  console.log('writersArray...', writersArray);

  // Check if the first element is an array and use it for rendering
  const actualWritersArray = Array.isArray(writersArray[0]) ? writersArray[0] : writersArray;

  return (
    <div className="hire-writers-container">
      {/* Left Section */}
      <div className="writers-info">
        <div className="meet-expert">Meet Our Experts</div>
        <p>Passionate and enthusiastic professionals that you’ll love working with</p>
        {/* Order Content Button */}
        <button className="order-content-btn">Order Content</button>
      </div>

      {/* Right Section (Grid of Writers) */}
      <div className="writers-grid">
        {actualWritersArray.map(writer => (
          <div key={writer.id} className="writer-card">
            <img 
              src={centerImage}  // Use profile picture from backend or fallback to default image
              alt={writer.username}
              className="writer-img"
            />
            <div className="overlay">
              <h6>{writer.username}</h6> {/* Username from backend */}
              <p>{writer.email}</p> {/* Email from backend */}
              {/* Link to writer's profile using their username */}
              <Link to={`/writer/${writer.username}`}>
                <button className="hire-btn">View Full Profile</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HireWriters;
