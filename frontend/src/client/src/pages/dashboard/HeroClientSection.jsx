import React from 'react';
import { PinIcon, FileText } from 'lucide-react';

const styles = `
  .hero-container {
    display: flex;
    gap: 30px;
    padding: 20px;
    max-width: 1200px;
    margin: 0 auto;
  }

  .hero-card {
    width: 350px;
    height: 200px;
    border: 1px solid #cacaca;
    border-radius: 4px;
    overflow: hidden;
  }

  .card-header {
    height: 50px;
    background-color: #f5f5f5;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 16px;
    border-bottom: 1px solid #e5e5e5;
  }

  .card-header h3 {
    margin: 0;
    font-size: 16px;
    font-weight: 500;
  }

  .header-link {
    display: flex;
    align-items: center;
    gap: 8px;
    text-decoration: none;
    color: #333;
    font-size: 14px;
  }

  .header-link:hover {
    color: #666;
  }

  .card-content {
    padding: 16px;
  }

  .content-title {
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 16px;
  }

  .content-links {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  .content-link {
    text-decoration: none;
    color: #2563eb;
    font-size: 14px;
  }

  .content-link:hover {
    text-decoration: underline;
  }

  .empty-state {
    color: #666;
    font-size: 14px;
  }
`;

const HeroClientSection = () => {
  return (
    <>
      <style>{styles}</style>
      <div className="hero-container">
        {/* Hire Card */}
        <div className="hero-card">
          <div className="card-header">
            <h3>Hire</h3>
            <a href="#" className="header-link">
              Post a Job
              <PinIcon size={16} />
            </a>
          </div>
          <div className="card-content">
            <div className="content-title">Ready to Hire?</div>
            <div className="content-links">
              <a href="#" className="content-link">
                Post a job and get Quotes
              </a>
              <a href="#" className="content-link">
                Find Freelancers and request Quotes
              </a>
              <a href="#" className="content-link">
                Rehire Freelancers from previous jobs
              </a>
            </div>
          </div>
        </div>

        {/* Manage Card */}
        <div className="hero-card">
          <div className="card-header">
            <h3>Manage</h3>
            <a href="#" className="header-link">
              My Managers
            </a>
          </div>
          <div className="card-content">
            <a href="#" className="content-link">
              View Active Projects
            </a>
          </div>
        </div>

        {/* Payments Card */}
        <div className="hero-card">
          <div className="card-header">
            <h3>Payments</h3>
            <a href="#" className="header-link">
              Create Invoice
              <FileText size={16} />
            </a>
          </div>
          <div className="card-content">
            <div className="empty-state">
              There are no new invoices.
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroClientSection;