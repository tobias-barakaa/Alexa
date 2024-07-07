import ClientContent from '../client/clientContent'
import WriterContent from '../writer/writerContent'

const Layout = () => {
  return (
    <div>
       <div className="overlay">
          <div className="content-left">
            <h1>Market leader in lead <br />generation within the <br /> Benelux Benelux</h1>
            <p>
              We help large and small businesses in the Netherlands and Belgium get a
              consistent stream of unique leads and better brand awareness.
            </p>
            <div className="content-buttons">
              <button className="btn-outline">Learn More</button>
              <button className="btn-primary">Get Started</button>
            </div>
          </div>
          
          <div className="content-right">
      <div className="signup-container">
        <ClientContent />
        <WriterContent />
      </div>
    </div>
         
        </div>
    </div>
  )
}

export default Layout
