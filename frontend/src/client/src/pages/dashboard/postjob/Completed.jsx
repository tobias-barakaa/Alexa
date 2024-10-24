import React from 'react';

const styles = {
  container: {
    padding: '32px 40px',
    maxWidth: '800px',
    margin: '0 auto',
    backgroundColor: 'white',
    borderRadius: '16px',
    fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
    border: "solid 1px #f0f0f0",
    marginBottom: '32px'
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '32px',
    paddingBottom: '24px',
    borderBottom: '1px solid #f0f0f0'
  },
  title: {
    fontSize: '24px',
    fontWeight: '600',
    color: '#1a1a1a',
    margin: 0,
    letterSpacing: '-0.02em'
  },
  completedButton: {
    backgroundColor: '#000',
    color: 'white',
    padding: '8px 20px',
    borderRadius: '24px',
    border: 'none',
    fontSize: '14px',
    fontWeight: '500',
    letterSpacing: '0.3px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
    transition: 'transform 0.2s ease, box-shadow 0.2s ease',
    cursor: 'pointer'
  },
  detailsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '32px',
    marginBottom: '40px',
    padding: '24px',
    backgroundColor: '#fafafa',
    borderRadius: '12px'
  },
  detailCard: {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px'
  },
  label: {
    color: '#666',
    fontSize: '14px',
    fontWeight: '500',
    textTransform: 'uppercase',
    letterSpacing: '0.5px'
  },
  value: {
    color: '#1a1a1a',
    fontSize: '18px',
    fontWeight: '600'
  },
  descriptionSection: {
    marginBottom: '40px'
  },
  descriptionTitle: {
    color: '#1a1a1a',
    fontSize: '18px',
    fontWeight: '600',
    marginBottom: '16px',
    letterSpacing: '-0.01em'
  },
  description: {
    color: '#4a4a4a',
    lineHeight: '1.6',
    fontSize: '15px'
  },
  buttonContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '16px',
    marginTop: '32px'
  },
  primaryButton: {
    padding: '14px 24px',
    backgroundColor: '#000',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    fontSize: '15px',
    fontWeight: '500',
    transition: 'all 0.2s ease',
    boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
    letterSpacing: '0.3px',
    ':hover': {
      transform: 'translateY(-1px)',
      boxShadow: '0 4px 12px rgba(0,0,0,0.12)'
    }
  },
  secondaryButton: {
    padding: '14px 24px',
    backgroundColor: '#0a3e89',  // Rich blue
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    fontSize: '15px',
    fontWeight: '500',
    transition: 'all 0.2s ease',
    boxShadow: '0 2px 8px rgba(10, 62, 137, 0.15)',
    letterSpacing: '0.3px'
  },
  downloadButton: {
    padding: '14px 24px',
    backgroundColor: '#1e40af',  // Deep blue
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    fontSize: '15px',
    fontWeight: '500',
    transition: 'all 0.2s ease',
    boxShadow: '0 2px 8px rgba(30, 64, 175, 0.15)',
    letterSpacing: '0.3px'
  }
};

const Completed = () => {
  const handleButtonHover = (e) => {
    e.target.style.transform = 'translateY(-1px)';
    e.target.style.boxShadow = '0 4px 12px rgba(0,0,0,0.12)';
  };

  const handleButtonLeave = (e) => {
    e.target.style.transform = 'translateY(0)';
    e.target.style.boxShadow = '0 2px 8px rgba(0,0,0,0.08)';
  };

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h2 style={styles.title}>Project Title</h2>
        <button 
          style={styles.completedButton}
          onMouseEnter={handleButtonHover}
          onMouseLeave={handleButtonLeave}
        >
          Completed
        </button>
      </div>
      
      <div style={styles.detailsGrid}>
        <div style={styles.detailCard}>
          <p style={styles.label}>Budget</p>
          <p style={styles.value}>$5,000</p>
        </div>
        
        <div style={styles.detailCard}>
          <p style={styles.label}>Deadline</p>
          <p style={styles.value}>October 30, 2024</p>
        </div>
        
        <div style={styles.detailCard}>
          <p style={styles.label}>Payment Status</p>
          <p style={styles.value}>Paid</p>
        </div>
      </div>
      
      <div style={styles.descriptionSection}>
        <h3 style={styles.descriptionTitle}>Description</h3>
        <p style={styles.description}>
          Project requirements and description details go here. This section can be expanded
          to include all the necessary project information and specifications.
        </p>
      </div>
      
      <div style={styles.buttonContainer}>
        <button 
          style={styles.primaryButton}
          onMouseEnter={handleButtonHover}
          onMouseLeave={handleButtonLeave}
        >
          Mark as Complete
        </button>
        <button 
          style={styles.secondaryButton}
          onMouseEnter={handleButtonHover}
          onMouseLeave={handleButtonLeave}
        >
          Request Revision
        </button>
        <button 
          style={styles.downloadButton}
          onMouseEnter={handleButtonHover}
          onMouseLeave={handleButtonLeave}
        >
          Download File
        </button>
      </div>
    </div>
  );
};

export default Completed;