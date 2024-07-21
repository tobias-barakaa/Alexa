import { Link } from "react-router-dom"

const WriterContent = () => {
  return (
    <div>

<div className="account-selection">
          <div className="vertical-divider"></div>
          <div className="account-options">
            <h3>become a writer account</h3>
            <p>Have an account? <Link to="/login">Login</Link></p>
            <div className="account-type-selector">
              <div className="account-type-option"><span><Link to='/writer'>Writer</Link></span></div>
            </div>
          </div>
        </div>
      
    </div>
  )
}

export default WriterContent
