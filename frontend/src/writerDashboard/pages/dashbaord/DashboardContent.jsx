import React, { useState } from 'react';

const styles = {
  containerDashboard: {
    backgroundColor: '#f5f5f5',
  },
  statsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '20px',
    marginBottom: '30px',
  },
  statCard: {
    backgroundColor: 'white',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
  },
  sectionTitle: {
    fontSize: '20px',
    fontWeight: 'bold',
    marginBottom: '20px',
    color: '#333',
  },
  activeProjectsSection: {
    backgroundColor: 'white',
    padding: '20px',
    borderRadius: '8px',
    marginBottom: '30px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
  },
  projectTable: {
    width: '100%',
    borderCollapse: 'collapse',
  },
  tableHeader: {
    textAlign: 'left',
    padding: '12px',
    borderBottom: '2px solid #eee',
    color: '#666',
  },
  tableCell: {
    padding: '12px',
    borderBottom: '1px solid #eee',
  },
  badge: {
    padding: '6px 12px',
    borderRadius: '12px',
    fontSize: '12px',
    fontWeight: 'bold',
  },
  upcomingDeadlines: {
    backgroundColor: 'white',
    padding: '20px',
    borderRadius: '8px',
    marginBottom: '30px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
  },
  deadlineItem: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '12px',
    borderBottom: '1px solid #eee',
  },
  earningsChart: {
    backgroundColor: 'white',
    padding: '20px',
    borderRadius: '8px',
    marginBottom: '30px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
  },
  button: {
    padding: '8px 16px',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  }
};

const DashboardContent = () => {


  return (
    <div style={styles.containerDashboard}>

<h1 style={{ margin: 0, fontSize: '24px', color: '#333', marginBottom: "20px" }}>
          Welcome to Writer Dashboard
        </h1>
      {/* Stats Overview */}
      <div style={styles.statsGrid}>
        <div style={styles.statCard}>
          <h3 style={{fontSize: '14px', color: '#666', marginBottom: '8px'}}>Active Projects</h3>
          <div style={{fontSize: '24px', fontWeight: 'bold'}}>5</div>
          <div style={{color: '#4caf50', fontSize: '14px'}}>↑ 2 from last week</div>
        </div>
        <div style={styles.statCard}>
          <h3 style={{fontSize: '14px', color: '#666', marginBottom: '8px'}}>Earnings This Month</h3>
          <div style={{fontSize: '24px', fontWeight: 'bold'}}>$1,250</div>
          <div style={{color: '#4caf50', fontSize: '14px'}}>↑ $300 from last month</div>
        </div>
        <div style={styles.statCard}>
          <h3 style={{fontSize: '14px', color: '#666', marginBottom: '8px'}}>Average Rating</h3>
          <div style={{fontSize: '24px', fontWeight: 'bold'}}>4.8/5.0</div>
          <div style={{color: '#4caf50', fontSize: '14px'}}>↑ 0.2 from last month</div>
        </div>
        <div style={styles.statCard}>
          <h3 style={{fontSize: '14px', color: '#666', marginBottom: '8px'}}>Words Written</h3>
          <div style={{fontSize: '24px', fontWeight: 'bold'}}>25,000</div>
          <div style={{color: '#4caf50', fontSize: '14px'}}>This month</div>
        </div>
      </div>   

      
    </div>
  );
};

export default DashboardContent;