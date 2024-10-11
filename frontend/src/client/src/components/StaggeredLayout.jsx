import React from 'react';

export default function WhyUsSection() {
  return (
    <div style={styles.container}>
      {/* Left Column */}
      <div style={styles.leftColumn}>
        <h2 style={styles.heading}>Why Us?</h2>
        <p style={styles.explanation}>
          We are a leading writing company with years of experience in delivering top-notch writing services. Our team is composed of professional writers dedicated to helping you achieve your writing goals. From blogs to articles, we cover it all with precision, quality, and on-time delivery.
        </p>
        <button style={styles.button}>Learn More</button>
      </div>

      {/* Right Columns */}
      <div style={styles.rightColumn}>
        <div style={styles.boxContainer}>
          <div style={styles.box}>
            <h3 style={styles.boxHeading}>Experienced Writers</h3>
            <p style={styles.boxText}>Our team is composed of experienced writers who are experts in various domains.</p>
          </div>
          <div style={styles.box}>
            <h3 style={styles.boxHeading}>Quality Assurance</h3>
            <p style={styles.boxText}>We ensure top quality in every piece of content, checked and verified for accuracy.</p>
          </div>
        </div>

        <div style={styles.boxContainer}>
          <div style={styles.box}>
            <h3 style={styles.boxHeading}>Timely Delivery</h3>
            <p style={styles.boxText}>We value your time and always ensure that your content is delivered on schedule.</p>
          </div>
          <div style={styles.box}>
            <h3 style={styles.boxHeading}>Custom Solutions</h3>
            <p style={styles.boxText}>Get custom writing solutions tailored to your specific requirements and audience.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: 'grid',
    gridTemplateColumns: '1fr 2fr',
    width: '100%',
    padding: '40px',
    gap: '40px',
    backgroundColor: '#f9fafb',
  },
  leftColumn: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  heading: {
    fontSize: '36px',
    fontWeight: 'bold',
    marginBottom: '20px',
    color: '#1e293b',
  },
  explanation: {
    fontSize: '18px',
    color: '#64748b',
    lineHeight: '1.6',
    marginBottom: '24px',
    maxWidth: '400px',
  },
  button: {
    backgroundColor: '#2563eb',
    color: 'white',
    padding: '12px 28px',
    borderRadius: '20px',
    border: 'none',
    cursor: 'pointer',
    fontSize: '16px',
    fontWeight: '500',
    transition: 'background-color 0.2s',
  },
  rightColumn: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  boxContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '20px',
  },
  box: {
    backgroundColor: '#ffffff',
    borderRadius: '8px',
    padding: '20px',
    height: '300px',
    width: '45%',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.3s ease',
  },
  boxHeading: {
    fontSize: '22px',
    fontWeight: 'bold',
    marginBottom: '10px',
    color: '#1e293b',
  },
  boxText: {
    fontSize: '16px',
    color: '#64748b',
    lineHeight: '1.5',
  },
};
