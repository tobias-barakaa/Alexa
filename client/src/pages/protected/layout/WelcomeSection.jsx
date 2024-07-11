import "./WelcomeSection.css"
import alexxa from '../../../assets/images/alexxa.png';


const WelcomeSection = () => {
  return (
    <div>
      <div className="welcome-section">
        <div className="welcome-message">
          <h1>Welcome to Dashboard, John Doe</h1>
          <p>Meet world-class publishing professionals</p>
        </div>
        <img src={alexxa} alt="Dashboard" className="dashboard-image" />
      </div>
    </div>
  )
}

export default WelcomeSection
