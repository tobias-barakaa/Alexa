import React from 'react';

const ProfileForm = () => {
  const formStyles = {
    containerProfile: {
      width: '100%',
      maxWidth: '1000px',
      margin: '0 auto',
      padding: '20px',
    },
    card: {
      borderRadius: '8px',
      padding: '20px',
    },
    header: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      marginBottom: '30px',
      textAlign: 'center',
    },
    profileImage: {
      width: '100px',
      height: '100px',
      borderRadius: '50%',
      objectFit: 'cover',
      marginBottom: '15px',
      border: '3px solid #87CEEB',
    },
    title: {
      fontSize: '24px',
      fontWeight: '500',
      color: '#333',
      margin: '10px 0',
    },
    formContent: {
      display: 'flex',
      flexDirection: 'column',
      gap: '20px',
    },
    row: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '20px',
    },
    bioRow: {
      display: 'grid',
      gridTemplateColumns: '1fr 2fr',
      gap: '20px',
    },
    formGroup: {
      display: 'flex',
      flexDirection: 'column',
      gap: '8px',
    },
    label: {
      fontSize: '14px',
      fontWeight: '500',
      color: '#444',
    },
    input: {
      padding: '10px',
      border: '1px solid #ddd',
      borderRadius: '4px',
      fontSize: '14px',
    },
    textarea: {
      padding: '10px',
      border: '1px solid #ddd',
      borderRadius: '4px',
      fontSize: '14px',
      minHeight: '120px',
      resize: 'vertical',
      transition: 'all 0.3s ease',
    },
    buttonContainer: {
      display: 'flex',
      justifyContent: 'center',
      marginTop: '20px',
    },
    button: {
      backgroundColor: '#87CEEB',
      color: 'white',
      padding: '12px 24px',
      borderRadius: '6px',
      border: 'none',
      fontSize: '16px',
      fontWeight: '500',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
    },
  };

  // CSS for hover effects
  const hoverStyles = `
    .form-input:hover, .form-input:focus {
      border: 2px solid #87CEEB !important;
      outline: none;
    }
    .form-textarea:hover, .form-textarea:focus {
      border: 2px solid #87CEEB !important;
      outline: none;
    }
    .submit-button:hover {
      background-color: #5CACEE !important;
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(135, 206, 235, 0.4);
    }
  `;

  return (
    <>
      <style>{hoverStyles}</style>
      <div style={formStyles.containerProfile}>
        <div style={formStyles.card}>
          <div style={formStyles.header}>
            <img
              src="/api/placeholder/100/100"
              alt="Profile"
              style={formStyles.profileImage}
            />
            <h2 style={formStyles.title}>Great! Let's get some details.</h2>
          </div>
          
          <div style={formStyles.formContent}>
            {/* First Row - Location and Contact */}
            <div style={formStyles.row}>
              <div style={formStyles.formGroup}>
                <label style={formStyles.label} htmlFor="location">
                  Location
                </label>
                <input
                  id="location"
                  className="form-input"
                  style={formStyles.input}
                  type="text"
                  defaultValue="New York, USA"
                  placeholder="Enter your location"
                />
              </div>
              <div style={formStyles.formGroup}>
                <label style={formStyles.label} htmlFor="contact">
                  Contact
                </label>
                <input
                  id="contact"
                  className="form-input"
                  style={formStyles.input}
                  type="email"
                  defaultValue="writer@example.com"
                  placeholder="Enter your contact"
                />
              </div>
            </div>

            {/* Second Row - Bio and Right Side Inputs */}
            <div style={formStyles.bioRow}>
              <div style={formStyles.formGroup}>
                <label style={formStyles.label} htmlFor="bio">
                  Bio
                </label>
                <textarea
                  id="bio"
                  className="form-textarea"
                  style={formStyles.textarea}
                  defaultValue="I'm an experienced writer with over 5 years of expertise in technology, marketing, and health sectors. I deliver high-quality, SEO-optimized content that engages readers."
                  placeholder="Enter your bio"
                />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div style={formStyles.formGroup}>
                  <label style={formStyles.label} htmlFor="specializations">
                    Specializations
                  </label>
                  <input
                    id="specializations"
                    className="form-input"
                    style={formStyles.input}
                    type="text"
                    defaultValue="Technology, Marketing, Health"
                    placeholder="Enter your specializations"
                  />
                </div>
                <div style={formStyles.formGroup}>
                  <label style={formStyles.label} htmlFor="experience">
                    Years of Experience
                  </label>
                  <input
                    id="experience"
                    className="form-input"
                    style={formStyles.input}
                    type="number"
                    defaultValue="5"
                    placeholder="Years of experience"
                  />
                </div>
              </div>
            </div>

            {/* Additional Fields */}
            <div style={formStyles.row}>
              <div style={formStyles.formGroup}>
                <label style={formStyles.label} htmlFor="rate_per_word">
                  Rate per Word ($)
                </label>
                <input
                  id="rate_per_word"
                  className="form-input"
                  style={formStyles.input}
                  type="number"
                  step="0.01"
                  defaultValue="0.05"
                />
              </div>
              <div style={formStyles.formGroup}>
                <label style={formStyles.label} htmlFor="rate_per_project">
                  Rate per Project ($)
                </label>
                <input
                  id="rate_per_project"
                  className="form-input"
                  style={formStyles.input}
                  type="number"
                  step="0.01"
                  defaultValue="150.00"
                />
              </div>
            </div>

            <div style={formStyles.row}>
              <div style={formStyles.formGroup}>
                <label style={formStyles.label} htmlFor="languages">
                  Languages
                </label>
                <input
                  id="languages"
                  className="form-input"
                  style={formStyles.input}
                  type="text"
                  defaultValue="English, French"
                />
              </div>
              <div style={formStyles.formGroup}>
                <label style={formStyles.label} htmlFor="timezone">
                  Timezone
                </label>
                <input
                  id="timezone"
                  className="form-input"
                  style={formStyles.input}
                  type="text"
                  defaultValue="America/New_York"
                />
              </div>
            </div>

            {/* Submit Button */}
            <div style={formStyles.buttonContainer}>
              <button className="submit-profile-button" style={formStyles.button}>
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileForm;