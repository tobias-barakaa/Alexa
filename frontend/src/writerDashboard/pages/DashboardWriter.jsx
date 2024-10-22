import { useEffect, useState } from 'react';
import { Search, Bell, User, ChevronDown, Menu } from 'lucide-react';
import { Outlet, useNavigate } from 'react-router-dom';
import Footer from '../../client/src/components/Footer';

const styles = `
  .dashboard-container-writer {
    min-height: 100vh;
    background-color: #ffffff;
  }

  .writer-dashboard-hd {
    border-bottom: 1px solid #e5e5e5;
    background: #f5f5f5;
  }

  .header-content-writer {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0px 20px;
  }

  .top-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 64px;
  }

  .left-section {
    display: flex;
    align-items: center;
    gap: 16px;
  }

  .logo {
    font-size: 20px;
    font-weight: bold;
  }

  .search-container {
    position: relative;
  }

  .search-input {
    padding: 5px 14px;
    padding-right: 40px;
    border: 1px solid #e5e5e5;
    border-radius: 4px;
    width: 340px;
  }

  .search-icon {
    position: absolute;
    right: 12px;
    top: 50%;
    transform: translateY(-50%);
    color: #666;
  }

  .right-section {
    display: flex;
    align-items: center;
    gap: 16px;
  }

  .navigation-writer-dashboard {
    display: flex;
    align-items: center;
    gap: 16px;
    height: 39px;
    font-weight: bold;
  }

  .navigation-items {
    padding: 8px 16px;
    border: 1px solid transparent;
    border-radius: 0px;
    cursor: pointer;
    background: none;
  }

  .navigation-items.active {
    background: white;
    border-color: #e5e5e5;
    border-bottom: none;
  }

  .main-content {
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
  }

  .task-queue {
    margin-top: 20px;
  }

  .task-card {
    background: white;
    padding: 16px;
    border: 1px solid #e5e5e5;
    margin-bottom: 12px;
    border-radius: 8px;
  }

  .task-title {
    font-size: 18px;
    font-weight: bold;
  }

  .claim-button {
    background: #078BC8;
    color: white;
    border: none;
    padding: 8px 16px;
    border-radius: 4px;
    cursor: pointer;
  }

  .current-projects {
    margin-top: 40px;
  }

  .completed-projects {
    margin-top: 40px;
  }

  .payments {
    margin-top: 40px;
  }
`;

const WriterDashboard = () => {
  const [activeTab, setActiveTab] = useState('Dashboard');
  const [tasks, setTasks] = useState([]); // Available jobs
  const [currentProjects, setCurrentProjects] = useState([]); // Active projects
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);

  const navItems = ['Dashboard', 'Available Jobs', 'Current Projects', 'Payments'];
  const navigate = useNavigate();

  const handleTabClick = (item) => {
    setActiveTab(item);
    localStorage.setItem('activeTab', item);
    // Navigate to the appropriate route based on the tab
    if (item === 'Dashboard') {
      navigate('/writer-dashboard');
    } else if (item === 'Available Jobs') {
      navigate('/writer-dashboard/available-jobs');
    } else if (item === 'Current Projects') {
      navigate('/writer-dashboard/current-projects');
    } else if (item === 'Payments') {
      navigate('/writer-dashboard/payments');
    }
  };

  useEffect(() => {
    const savedTab = localStorage.getItem('activeTab');
    if (savedTab) {
      setActiveTab(savedTab);
    }

    // Fetch available tasks (dummy data here)
    setTasks([
      { id: 1, title: 'Blog Post on Technology', category: 'Blog', deadline: '3 Days', complexity: 'Medium' },
      { id: 2, title: 'Product Review Article', category: 'Review', deadline: '5 Days', complexity: 'Easy' },
    ]);

    // Fetch current projects
    setCurrentProjects([
      { id: 1, title: 'SEO Article on Marketing', deadline: '2 Days', status: 'In Progress' },
    ]);
  }, []);

  const handleClaimTask = (taskId) => {
    // Logic to claim the task
    console.log('Task claimed:', taskId);
  };

  return (
    <>
      <style>{styles}</style>
      <div className="dashboard-container-writer">
        <header className="writer-dashboard-hd">
          <div className="header-content-writer">
            <div className="top-header">
              <div className="left-section">
                <div className="logo">Writer LOGO</div>
                <div className="search-container">
                  <input
                    type="text"
                    className="search-input"
                    placeholder="Search Jobs"
                  />
                  <Search className="search-icon" size={20} />
                </div>
              </div>

              <div className="right-section">
                <button className="icon-button">
                  <Bell size={24} color="#666" />
                </button>

                <div className="dropdown-container">
                  <button
                    className="icon-button"
                    onClick={() => setShowProfileDropdown(!showProfileDropdown)}
                  >
                    <User size={24} color="#666" />
                    <ChevronDown size={16} color="#666" />
                  </button>
                  {showProfileDropdown && (
                    <div className="dropdown-content">
                      <a href="#">Profile</a>
                      <a href="#">Settings</a>
                      <a href="#">Logout</a>
                    </div>
                  )}
                </div>
              </div>
            </div>

            <nav className="navigation-writer-dashboard">
              {navItems.map((item) => (
                <button
                  key={item}
                  className={`navigation-items ${activeTab === item ? 'active' : ''}`}
                  onClick={() => handleTabClick(item)}
                >
                  {item}
                </button>
              ))}
            </nav>
          </div>
        </header>

        <main className="main-content">
          {/* Available Jobs */}
          {activeTab === 'Available Jobs' && (
            <section className="task-queue">
              <h2>Available Jobs</h2>
              {tasks.map((task) => (
                <div key={task.id} className="task-card">
                  <h3 className="task-title">{task.title}</h3>
                  <p>Category: {task.category}</p>
                  <p>Deadline: {task.deadline}</p>
                  <p>Complexity: {task.complexity}</p>
                  <button className="claim-button" onClick={() => handleClaimTask(task.id)}>
                    Claim Task
                  </button>
                </div>
              ))}
            </section>
          )}

          {/* Current Projects */}
          {activeTab === 'Current Projects' && (
            <section className="current-projects">
              <h2>Current Projects</h2>
              {currentProjects.map((project) => (
                <div key={project.id} className="task-card">
                  <h3 className="task-title">{project.title}</h3>
                  <p>Deadline: {project.deadline}</p>
                  <p>Status: {project.status}</p>
                </div>
              ))}
            </section>
          )}

          {/* Payments */}
          {activeTab === 'Payments' && (
            <section className="payments">
              <h2>Payment Details</h2>
              <p>Here will be details about the writer's earnings.</p>
            </section>
          )}
        </main>
        <Footer />
      </div>
    </>
  );
};

export default WriterDashboard;
