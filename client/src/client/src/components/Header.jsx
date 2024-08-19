import '@fortawesome/fontawesome-free/css/all.min.css';
import "../styles/components/Header.css";


const Header = () => {
  return (
    <>
    <header className="headerr">
      <div className="logo">Logo</div>
      <div className="spacer"></div>
      <div className="nav-items">
        <div className="nav-item">
          <i className="fas fa-book beginner-icon" ></i>
          <span>Guide</span>
        </div>
        <div className="nav-item">
          <i className="fas fa-glasses glossary-icon" ></i>
          <span>Glossary</span>
        </div>
        <div className="nav-item">
          <i className="fas fa-book-open guides-icon"></i>
          <span>Guides</span>
        </div>
        <div className="nav-item">
          <i className="fas fa-database backups-icon"></i>
          <span>Backups</span>
        </div>
        <div className="nav-item">
          <i className="fas fa-globe ecosystem-icon"></i>
          <span>Ecosystem</span>
        </div>
      </div>

      <button className="custom-button" style={{ marginRight: "40px", padding: "12px" }}>
  This is the button
</button>

    </header>
    <hr style={{ backgroundColor: '#000000', height: '1px', border: 'none' }}/>


    </>

  );
};

export default Header;
