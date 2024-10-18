const knex = require('../../db/db.js');




// Controller function to handle the writer profile creation
const fillWriterProfile = async (req, res) => {
    try {
      // Use req.user.id instead of req.user.userId
      const user_id = req.user.id;
  
      console.log(user_id, 'this is user');
      if (!user_id) {
        return res.status(401).json({ message: 'Unauthorized. User not logged in.' });
      }
  
      // Check if the user has the "writer" role
      if (!req.user.role || req.user.role !== 'writer') {
        return res.status(403).json({ message: 'Forbidden. User does not have writer role.' });
      }
  
      const {
        bio,
        profile_pic,
        specializations,
        years_of_experience,
        samples,
        contact,
        rate_per_word,
        rate_per_project,
        experience_level,
        languages,
        certifications,
        social_media_links,
        portfolio_link,
        skills,
        location,
        timezone,
        available,
        file_url, // Added file_url here
      } = req.body;
  
      // Create a new writer profile
      const newProfile = {
        user_id: user_id, // Use user_id directly
        bio: bio || 'no bio provided yet',
        profile_pic: profile_pic || 'https://avatar.iran.liara.run/username?username=default',
        specializations: specializations || 'not provided yet',
        years_of_experience: years_of_experience || 4,
        samples: samples || 'not provided yet',
        contact: contact || 'not provided yet',
        balance: 0.00, // default balance
        available: available || false,
        status: 'Pending', // default status
  
        // New additions
        rate_per_word: rate_per_word || null,
        rate_per_project: rate_per_project || null,
        experience_level: experience_level || 'Beginner',
        languages: languages || 'English',
        certifications: certifications || 'none',
  
        // Optional fields
        social_media_links: social_media_links || null,
        portfolio_link: portfolio_link || null,
        skills: skills || null,
        location: location || null,
        timezone: timezone || null,
        file_url: file_url || '',
  
        // Timestamps
        created_at: knex.fn.now(),
        updated_at: knex.fn.now(),
      };
  
      // Insert the new profile into the writer_profile table
      await knex('writer_profile').insert(newProfile);
  
      res.status(201).json({ message: 'Writer profile created successfully!' });
    } catch (error) {
      console.error('Error creating writer profile:', error);
      res.status(500).json({ message: 'Server error. Please try again later.' });
    }
  };
 
  


  

module.exports = { fillWriterProfile };


