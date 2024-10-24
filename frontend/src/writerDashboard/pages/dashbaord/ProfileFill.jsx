import { useState } from 'react';

// Separate CSS styles for cleaner code
const formStyles = {
  containerProfile: {
    display: 'flex',
    padding: '20px',
  },
  cardProfile: {
    width: '100%',
    maxWidth: '800px',
    background: '#fff',
    borderRadius: '2px',
    padding: '20px',
    border: 'solid 1px #e0e0e0'
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
    width: 'auto',
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile((prevProfile) => ({
      ...prevProfile,
      [name]: value || '',
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

  const handleSubmit = (e) => {
    e.preventDefault();
    // Log the profile data to the console
    console.log('Profile Data:', profile);
    
    // Here you would typically send the data to the backend
    // Example: axios.post('/api/profile', profile);
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
          <h2 style={formStyles.title}>Great! Let’s get some details.</h2>
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

          {/* First and Last Name */}
          <div style={formStyles.row}>
            <div style={formStyles.formGroup}>
              <label style={formStyles.label} htmlFor="first_name">First Name</label>
              <input
                id="first_name"
                name="first_name"
                style={formStyles.input}
                type="text"
                value={profile.first_name}
                onChange={handleChange}
                placeholder="Enter your first name"
              />
            </div>
            <div style={formStyles.formGroup}>
              <label style={formStyles.label} htmlFor="last_name">Last Name</label>
              <input
                id="last_name"
                name="last_name"
                style={formStyles.input}
                type="text"
                value={profile.last_name}
                onChange={handleChange}
                placeholder="Enter your last name"
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
                value={profile.location}
                style={formStyles.input}
                onChange={handleChange}
              />
            </div>
            <div style={formStyles.formGroup}>
              <label style={formStyles.label} htmlFor="contact">Contact</label>
              <input
                id="contact"
                name="contact"
                style={formStyles.input}
                type="email"
                value={profile.contact}
                onChange={handleChange}
                placeholder="Enter your contact"
              />
            </div>
          </div>

          {/* Bio and Specializations */}
          <div style={formStyles.row}>
            <div style={formStyles.formGroup}>
              <label style={formStyles.label} htmlFor="bio">Bio</label>
              <textarea
                id="bio"
                name="bio"
                style={formStyles.textarea}
                value={profile.bio}
                onChange={handleChange}
                placeholder="Enter your bio"
              />
            </div>
            <div style={formStyles.formGroup}>
              <label style={formStyles.label} htmlFor="specializations">Specializations</label>
              <input
                id="specializations"
                name="specializations"
                style={formStyles.input}
                type="text"
                value={profile.specializations}
                onChange={handleChange}
                placeholder="Enter your specializations"
              />
            </div>
          </div>

          {/* Additional Fields */}
          <div style={formStyles.row}>
            <div style={formStyles.formGroup}>
              <label style={formStyles.label} htmlFor="rate_per_word">Rate per Word ($)</label>
              <input
                id="rate_per_word"
                name="rate_per_word"
                style={formStyles.input}
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
                style={formStyles.input}
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
                style={formStyles.input}
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
                style={formStyles.input}
                type="text"
                value={profile.timezone}
                onChange={handleChange}
              />
            </div>
          </div>

          {/* Hourly Rate */}
          <div style={formStyles.row}>
            <div style={formStyles.formGroup}>
              <label style={formStyles.label} htmlFor="hourly_rate">Hourly Rate ($)</label>
              <input
                id="hourly_rate"
                name="hourly_rate"
                style={formStyles.input}
                type="number"
                step="0.01"
                value={profile.hourly_rate}
                onChange={handleChange}
              />
            </div>
          </div>

          {/* Certifications and Rating */}
          <div style={formStyles.row}>
            <div style={formStyles.formGroup}>
              <label style={formStyles.label} htmlFor="certifications">Certifications</label>
              <input
                id="certifications"
                name="certifications"
                style={formStyles.input}
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
                style={formStyles.input}
                type="number"
                step="0.1"
                value={profile.rating}
                onChange={handleChange}
              />
            </div>
          </div>

          {/* Total Jobs Completed and Portfolio Link */}
          <div style={formStyles.row}>
            <div style={formStyles.formGroup}>
              <label style={formStyles.label} htmlFor="total_jobs_completed">Total Jobs Completed</label>
              <input
                id="total_jobs_completed"
                name="total_jobs_completed"
                style={formStyles.input}
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
                style={formStyles.input}
                type="text"
                value={profile.portfolio_link}
                onChange={handleChange}
              />
            </div>
          </div>

          {/* Submit Button */}
          <div style={formStyles.buttonContainer}>
            <button type="submit" style={formStyles.button}>
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProfileForm;
