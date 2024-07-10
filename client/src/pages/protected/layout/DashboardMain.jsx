import './DashboardMain.css'

const DashboardMain = () => {
  return (
    <div className="dashboard-main">
          <div className="dashboard-boxes">
            <div className="dashboard-box leads">
              <i className="bi bi-0-square-fill"></i>
              <div className="box-content">
                <h3>Leads</h3>
                <p>1,234</p>
              </div>
            </div>
            <div className="dashboard-box clients">
              <i className="bi bi-0-square-fill"></i>
              <div className="box-content">
                <h3>Clients</h3>
                <p>567</p>
              </div>
            </div>
            <div className="dashboard-box projects">
              <i className="bi bi-0-square-fill"></i>
              <div className="box-content">
                <h3>Projects</h3>
                <p>89</p>
              </div>
            </div>
            <div className="dashboard-box revenue">
              <i className="bi bi-0-square-fill"></i>
              <div className="box-content">
                <h3>Revenue</h3>
                <p>$12,345</p>
              </div>
            </div>
          </div>
          
        </div>
  )
}

export default DashboardMain
