import React, { useState } from 'react';

const styles = {
  container: {
    width: '100%',
    minHeight: '100vh',
    background: 'linear-gradient(135deg, #f0f7ff 0%, #e3f2fd 50%, #bbdefb 100%)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '40px 20px',
  },
  mainCard: {
    width: '100%',
    maxWidth: '1200px',
    display: 'flex',
    borderRadius: '20px',
    overflow: 'hidden',
    boxShadow: '0 10px 25px rgba(0,0,0,0.08)',
    backgroundColor: 'white',
  },
  leftSection: {
    width: '50%',
    padding: '40px',
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    backgroundColor: 'white',
  },
  rightSection: {
    width: '50%',
    padding: '40px',
    background: 'linear-gradient(135deg, #ffffff 0%, #f8fbff 30%, #e6f3ff 60%, #f0f7ff 100%)',
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    overflow: 'hidden',
  },
  gradientText: {
    fontSize: '40px',
    fontWeight: 'bold',
    lineHeight: '1.2',
    background: 'linear-gradient(45deg, #2196F3, #64B5F6, #90CAF9)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    marginBottom: '20px',
  },
  input: {
    width: '100%',
    padding: '12px',
    marginBottom: '15px',
    border: '1px solid #e0e0e0',
    borderRadius: '6px',
    fontSize: '16px',
    transition: 'border-color 0.3s ease',
  },
  googleButton: {
    width: '100%',
    padding: '12px',
    backgroundColor: 'white',
    border: '1px solid #e0e0e0',
    borderRadius: '6px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '10px',
    cursor: 'pointer',
    marginBottom: '20px',
    transition: 'background-color 0.3s ease',
    ':hover': {
      backgroundColor: '#f5f5f5',
    },
  },
  testimonial: {
    marginTop: '40px',
    padding: '25px',
    background: 'linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.7) 100%)',
    borderRadius: '10px',
    boxShadow: '0 4px 15px rgba(0,0,0,0.05)',
  },
  quote: {
    fontSize: '40px',
    marginBottom: '20px',
    color: '#2196F3',
  },
  testimonialText: {
    color: '#333',
    lineHeight: '1.6',
    fontSize: '16px',
  },
  reviewerInfo: {
    display: 'flex',
    alignItems: 'center',
    marginTop: '20px',
    gap: '15px',
  },
  reviewerImage: {
    width: '50px',
    height: '50px',
    borderRadius: '50%',
    background: 'linear-gradient(135deg, #2196F3, #64B5F6)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '20px',
    color: 'white',
  },
  reviewerDetails: {
    display: 'flex',
    flexDirection: 'column',
  },
  reviewerName: {
    fontWeight: 'bold',
    color: '#333',
  },
  reviewerRole: {
    fontSize: '14px',
    color: '#666',
  }
};

const WriterAccount = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleInputFocus = (e) => {
    e.target.style.borderColor = '#2196F3';
  };

  const handleInputBlur = (e) => {
    e.target.style.borderColor = '#e0e0e0';
  };

  return (
    <div style={styles.container}>
      <div style={styles.mainCard}>
        {/* Left Section - Sign Up Form */}
        <div style={styles.leftSection}>
          <button style={styles.googleButton}>
            <span>G</span> Sign up with Google
          </button>
          
          <input
            style={styles.input}
            type="text"
            name="username"
            placeholder="Username"
            value={formData.username}
            onChange={handleInputChange}
            onFocus={handleInputFocus}
            onBlur={handleInputBlur}
          />
          
          <input
            style={styles.input}
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleInputChange}
            onFocus={handleInputFocus}
            onBlur={handleInputBlur}
          />
          
          <input
            style={styles.input}
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleInputChange}
            onFocus={handleInputFocus}
            onBlur={handleInputBlur}
          />
        </div>

        {/* Right Section - Content & Testimonial */}
        <div style={styles.rightSection}>
          <div>
            <h1 style={styles.gradientText}>
              Your entire
              <br />
              freelance
              <br />
              Workflow in one place
            </h1>
          </div>

          <div style={styles.testimonial}>
            <div style={styles.quote}>"</div>
            <p style={styles.testimonialText}>
              Enwriters has transformed how I approach freelance writing. 
              The platform's efficiency and professional community have helped me grow my career. 
              Their support team is exceptional, and the opportunities are endless. 
              I couldn't imagine working with any other platform now.
            </p>
            
            <div style={styles.reviewerInfo}>
              <div style={styles.reviewerImage}>JD</div>
              <div style={styles.reviewerDetails}>
                <div style={styles.reviewerName}>Jane Doe</div>
                <div style={styles.reviewerRole}>Client</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WriterAccount;