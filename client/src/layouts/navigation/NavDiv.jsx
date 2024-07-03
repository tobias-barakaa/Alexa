import "./NavDiv.css";
const NavDiv = () => {
  return (
    <div className="navbar">
        <div className="container">
            <div className="logo">Enwriters.</div>
            <button className="hire-writers">Hire Personal Writer</button>
            <div className="social-media">
                <div className="social-item">
                    <i className="fab fa-facebook-f"></i>
                    <span>Facebook</span>
                </div>
                <div className="social-item">
                    <i className="fab fa-twitter"></i>
                    <span>Twitter</span>
                </div>
                <div className="social-item">
                <i class="bi bi-facebook"></i>
                    <span>LinkedIn</span>
                </div>
            </div>
            <div className="dropdown">
                <button className="ask-question">
                    <i className="fas fa-question-circle"></i>
                    Ask Question
                </button>
                <div className="dropdown-content">
                    <a href="#">Data Entry</a>
                    <a href="#">Poetry</a>
                    <a href="#">Blog Writing</a>
                    <a href="#">Social Media Post Writers</a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default NavDiv;
