import './HireWriters.css'; 
import centerImage from '../assets/images/woman.jpeg'; // Placeholder for profile image
import { useGetWritersQuery } from '../../../slices/admin/adminWritersApiSlice';
import { Link } from 'react-router-dom';
import Loader from '../components/Loader';

const HireWriters = () => {
  const { data: hire_writers, isLoading, error } = useGetWritersQuery();

  if (isLoading) {
    return <Loader />;  // Display the loader when content is loading
  }

  if (error) {
    return <div>Error loading writers.</div>;
  }

  // Convert the object of writers into an array if it's not already an array
  const writersArray = Array.isArray(hire_writers) ? hire_writers : Object.values(hire_writers);

  // Check if the first element is an array and use it for rendering
  const actualWritersArray = Array.isArray(writersArray[0]) ? writersArray[0] : writersArray;

  // Check if there are any writers available
  if (actualWritersArray.length === 0) {
    return (
      <div className="no-writers-container">
        <div className='no-writers'>No Writers Available</div>
        <p>Currently, there are no writers available for hire. Please check back later.</p>

        <a href="/" className="go-back-button">Go Back</a>

      </div>
    );
  }

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
              src={writer.profile_pic}  // Use profile picture from backend or fallback to default image
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
