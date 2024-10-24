import { useEffect, useState } from 'react';

const formStyles = {
  containerProfile: {
    display: 'flex',
    // justifyContent: 'center',
    padding: '20px',
  },
  cardProfile: {
    width: '100%',
    maxWidth: '800px',
    background: '#fff',
    borderRadius: '2px',
    padding: '20px',
    border: 'solid 1px #e0e0e0 '
  },
  header: {
    textAlign: 'center',
    marginBottom: '20px',
  },
  profileImage: {
    borderRadius: '50%',
    width: '100px',
    height: '100px',
  },
  title: {
    fontSize: '24px',
    margin: '10px 0',
  },
  formContent: {
    display: 'flex',
    flexDirection: 'column',
  },
  row: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '15px',
  },
  formGroup: {
    flex: '1',
    margin: '0 5px',
  },
  label: {
    display: 'block',
    marginBottom: '5px',
  },
  input: {
    width: '100%',
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    boxSizing: 'border-box',
  },
  inputError: {
    borderColor: 'red',
  },
  textarea: {
    width: '100%',
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    boxSizing: 'border-box',
  },
  buttonContainer: {
    textAlign: 'center',
    marginTop: '20px',
  },
  button: {
    padding: '10px 20px',
    backgroundColor: '#007BFF',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    width: 'auto'

  },
};

const ProfileForm = () => {
  const [profile, setProfile] = useState({
location: '',
  contact: '',
  bio: '',
  specializations: '',
  years_of_experience: '',
  rate_per_word: '',
  rate_per_project: '',
  languages: '',
  timezone: '',
  profile_pic: '',
  balance: 0.00,
  available: false,
  profile_visible: true,
  city: '',
  country: '',
  hourly_rate: 0.00,
  certifications: '',
  rating: 0,
  total_jobs_completed: 0,
  social_media_links: {},
  file_url: '',
  portfolio_link: '',
  skills: '',
  first_name: '',
  last_name: ''
  });

  const [errors, setErrors] = useState({});




    const [isFormComplete, setIsFormComplete] = useState(false);



  useEffect(() => {
  const fetchProfileData = async () => {
    const response = await fetch('/api/profile'); // Example endpoint
    const data = await response.json();

    // Set default values if any keys are missing
    setProfile((prevProfile) => ({
      ...prevProfile,
      ...data, // Merge fetched data
    }));
  };

  fetchProfileData();
}, []);

  const handleChange = (e) => {
  const { name, value } = e.target;
  setProfile((prevProfile) => ({
    ...prevProfile,
    [name]: value || '', // Set to empty string if value is undefined
  }));
};


  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfile((prevProfile) => ({
          ...prevProfile,
          profile_pic: reader.result,
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const validateForm = () => {
    const newErrors = {};
    for (const [key, value] of Object.entries(profile)) {
      if (key !== 'balance' && key !== 'profile_pic' && key !== 'complete' && !value) {
        newErrors[key] = true;
      }
    }
    setErrors(newErrors);
    // Update form completion status
    setIsFormComplete(Object.keys(newErrors).length === 0);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Set the complete status
      setProfile((prevProfile) => ({
        ...prevProfile,
        complete: true,
      }));
      // Submit form logic here
      console.log('Form submitted successfully:', profile);
    }
  };

  return (
    <div style={formStyles.containerProfile}>
      <div style={formStyles.cardProfile}>
        <div style={formStyles.header}>
          <img
            src={profile.profile_pic || "/api/placeholder/100/100"}
            alt="Profile"
            style={formStyles.profileImage}
          />
          <h2 style={formStyles.title}>Great! Lets get some details.</h2>
        </div>

        <form onSubmit={handleSubmit} style={formStyles.formContent}>
        
          {/* Profile Picture Upload */}
          <div style={formStyles.formGroup}>
            <label style={formStyles.label} htmlFor="profile_pic">Profile Picture</label>
            <input
              id="profile_pic"
              name="profile_pic"
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              
            />
          </div>

          {/* First and last name  */}

           <div style={formStyles.row}>
            <div style={formStyles.formGroup}>
              <label style={formStyles.label} htmlFor="location">First Name</label>
              <input
                id="first_name"
                name="first_name"
                style={{ ...formStyles.input, ...(errors.location && formStyles.inputError) }}
                type="text"
                value={profile.first_name}
                onChange={handleChange}
                placeholder="Enter your location"
                
              />
            </div>
            <div style={formStyles.formGroup}>
              <label style={formStyles.label} htmlFor="contact">Last Name</label>
              <input
                id="last_name"
                name="last_name"
                style={{ ...formStyles.input, ...(errors.contact && formStyles.inputError) }}
                type="email"
                value={profile.last_name}
                onChange={handleChange}
                placeholder="Enter your LastName"
                
              />
            </div>
          </div>

          {/* Location and Contact */}
          <div style={formStyles.row}>
            <div style={formStyles.formGroup}>
              <label style={formStyles.label} htmlFor="location">Location</label>
              <input
  id="location"
  name="location"
  type="text"
  value={profile.location || ''} // Default to empty string if undefined
  onChange={handleChange}
/>
            </div>
            <div style={formStyles.formGroup}>
              <label style={formStyles.label} htmlFor="contact">Contact</label>
              <input
                id="contact"
                name="contact"
                style={{ ...formStyles.input, ...(errors.contact && formStyles.inputError) }}
                type="email"
                value={profile.contact}
                onChange={handleChange}
                placeholder="Enter your contact"
                
              />
            </div>
          </div>

          {/* Bio and Specializations */}
          <div style={formStyles.bioRow}>
            <div style={formStyles.formGroup}>
              <label style={formStyles.label} htmlFor="bio">Bio</label>
              <textarea
                id="bio"
                name="bio"
                style={{ ...formStyles.textarea, ...(errors.bio && formStyles.inputError) }}
                value={profile.bio}
                onChange={handleChange}
                placeholder="Enter your bio"
                
              />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div style={formStyles.formGroup}>
                <label style={formStyles.label} htmlFor="specializations">Specializations</label>
                <input
                  id="specializations"
                  name="specializations"
                  style={{ ...formStyles.input, ...(errors.specializations && formStyles.inputError) }}
                  type="text"
                  value={profile.specializations}
                  onChange={handleChange}
                  placeholder="Enter your specializations"
                  
                />
              </div>
              <div style={formStyles.formGroup}>
                <label style={formStyles.label} htmlFor="years_of_experience">Years of Experience</label>
                <input
                  id="years_of_experience"
                  name="years_of_experience"
                  style={{ ...formStyles.input, ...(errors.years_of_experience && formStyles.inputError) }}
                  type="number"
                  value={profile.years_of_experience}
                  onChange={handleChange}
                  placeholder="Years of experience"
                  
                />
              </div>
            </div>
          </div>

          {/* Additional Fields */}
          <div style={formStyles.row}>
            <div style={formStyles.formGroup}>
              <label style={formStyles.label} htmlFor="rate_per_word">Rate per Word ($)</label>
              <input
                id="rate_per_word"
                name="rate_per_word"
                style={{ ...formStyles.input, ...(errors.rate_per_word && formStyles.inputError) }}
                type="number"
                step="0.01"
                value={profile.rate_per_word}
                onChange={handleChange}
                
              />
            </div>
            <div style={formStyles.formGroup}>
              <label style={formStyles.label} htmlFor="rate_per_project">Rate per Project ($)</label>
              <input
                id="rate_per_project"
                name="rate_per_project"
                style={{ ...formStyles.input, ...(errors.rate_per_project && formStyles.inputError) }}
                type="number"
                step="0.01"
                value={profile.rate_per_project}
                onChange={handleChange}
                
              />
            </div>
          </div>

          <div style={formStyles.row}>
            <div style={formStyles.formGroup}>
              <label style={formStyles.label} htmlFor="languages">Languages</label>
              <input
                id="languages"
                name="languages"
                style={{ ...formStyles.input, ...(errors.languages && formStyles.inputError) }}
                type="text"
                value={profile.languages}
                onChange={handleChange}
                
              />
            </div>
            <div style={formStyles.formGroup}>
              <label style={formStyles.label} htmlFor="timezone">Timezone</label>
              <input
                id="timezone"
                name="timezone"
                style={{ ...formStyles.input, ...(errors.timezone && formStyles.inputError) }}
                type="text"
                value={profile.timezone}
                onChange={handleChange}
                
              />
            </div>
          </div>

          {/* New Fields */}
          <div style={formStyles.row}>
            <div style={formStyles.formGroup}>
              <label style={formStyles.label} htmlFor="balance">Balance ($)</label>
              <input
                id="balance"
                name="balance"
                style={formStyles.input}
                type="number"
                step="0.01"
                value={profile.balance}
                onChange={handleChange}
                readOnly // Balance might be read-only
              />
            </div>
            <div style={formStyles.formGroup}>
              <label style={formStyles.label} htmlFor="hourly_rate">Hourly Rate ($)</label>
              <input
                id="hourly_rate"
                name="hourly_rate"
                style={{ ...formStyles.input, ...(errors.hourly_rate && formStyles.inputError) }}
                type="number"
                step="0.01"
                value={profile.hourly_rate}
                onChange={handleChange}
                
              />
            </div>
          </div>

          <div style={formStyles.row}>
            <div style={formStyles.formGroup}>
              <label style={formStyles.label} htmlFor="certifications">Certifications</label>
              <input
                id="certifications"
                name="certifications"
                style={{ ...formStyles.input, ...(errors.certifications && formStyles.inputError) }}
                type="text"
                value={profile.certifications}
                onChange={handleChange}
                
              />
            </div>
            <div style={formStyles.formGroup}>
              <label style={formStyles.label} htmlFor="rating">Rating</label>
              <input
                id="rating"
                name="rating"
                style={{ ...formStyles.input, ...(errors.rating && formStyles.inputError) }}
                type="number"
                step="0.1"
                value={profile.rating}
                onChange={handleChange}
                
              />
            </div>
          </div>

          <div style={formStyles.row}>
            <div style={formStyles.formGroup}>
              <label style={formStyles.label} htmlFor="total_jobs_completed">Total Jobs Completed</label>
              <input
                id="total_jobs_completed"
                name="total_jobs_completed"
                style={{ ...formStyles.input, ...(errors.total_jobs_completed && formStyles.inputError) }}
                type="number"
                value={profile.total_jobs_completed}
                onChange={handleChange}
                
              />
            </div>
            <div style={formStyles.formGroup}>
              <label style={formStyles.label} htmlFor="portfolio_link">Portfolio Link</label>
              <input
                id="portfolio_link"
                name="portfolio_link"
                style={{ ...formStyles.input, ...(errors.portfolio_link && formStyles.inputError) }}
                type="text"
                value={profile.portfolio_link}
                onChange={handleChange}
                
              />
            </div>
          </div>

          {/* Submit Button */}
          <div style={formStyles.buttonContainer}>
            <button type="submit" className="submit-profile-button" style={formStyles.button} disabled={!isFormComplete}>
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProfileForm;
