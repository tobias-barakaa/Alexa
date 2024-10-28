import { useState } from 'react';
import axios from 'axios'; // Make sure to import axios
import formStyles from './formStyles';

// Separate CSS styles for cleaner code


const ProfileForm = () => {
  const [profile, setProfile] = useState({
    contact: '',
    bio: '',
    specializations: '',
    years_of_experience: '', 
    languages: '',
    timezone: '',
    image: '',
    available: false,
    profile_visible: true,
    city: '',
    country: '',
    hourly_rate: 0.00,
    certifications: '',
    social_media_links: {},
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
          image: reader.result,
        }));
      };
      reader.readAsDataURL(file);
    }
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      
      // Append the image file directly
      const imageFile = document.getElementById('image').files[0]; // Get the file directly
      if (imageFile) {
        formData.append('image', imageFile); // Append the file to FormData
      }
  
      // Append other profile data
      Object.entries(profile).forEach(([key, value]) => {
        if (key !== 'image') { // Exclude the image since it's already appended
          formData.append(key, value);
        }
      });
  
      // Send POST request to your API
      const response = await axios.post('http://localhost:5000/api/writer/fill-profile/writer-profile/fill', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        withCredentials: true,
      });
  
      console.log(response.data); // Log success message
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };
  


  return (
    <div style={formStyles.containerProfile}>
      <div style={formStyles.cardProfile}>
        <div style={formStyles.header}>
          <img
            src={profile.image}
            alt="Profile"
            style={formStyles.profileImage}
          />
          <h2 style={formStyles.title}>Great! Let’s get some details.</h2>
        </div>

        <form onSubmit={handleSubmit} style={formStyles.formContent}>
          {/* Profile Picture Upload */}
          <div style={formStyles.formGroup}>
            <label style={formStyles.label} htmlFor="image">Profile Picture</label>
            <input
              id="image"
              name="image"
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

            <div style={formStyles.formGroup}>
              <label style={formStyles.label} htmlFor="contact">Country</label>
              <input
                id="country"
                name="country"
                style={formStyles.input}
                type="text"
                value={profile.country}
                onChange={handleChange}
                placeholder="Enter your Country"
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

          <div style={formStyles.row}>
            <div style={formStyles.formGroup}>
              <label style={formStyles.label} htmlFor="hourly_rate">Years of experience</label>
              <input
                id="years_of_experience"
                name="years_of_experience"
                style={formStyles.input}
                type="number"
                step="0.01"
                value={profile.years_of_experience}
                onChange={handleChange}
              />
            </div>

            <div style={formStyles.formGroup}>
              <label style={formStyles.label} htmlFor="languages">City</label>
              <input
                id="city"
                name="city"
                style={formStyles.input}
                type="text"
                value={profile.city}
                onChange={handleChange}
              />
            </div>
          </div>

          {/* skill  */}
          <div style={formStyles.row}>
            <div style={formStyles.formGroup}>
              <label style={formStyles.label} htmlFor="hourly_rate">skills</label>
              <input
                id="skills"
                name="skills"
                style={formStyles.input}
                type="text"
                step="0.01"
                value={profile.skills}
                onChange={handleChange}
                placeholder='please separate by a comma ","'
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
           
          </div>

          {/* Total Jobs Completed and Portfolio Link */}
          <div style={formStyles.row}>
            
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
