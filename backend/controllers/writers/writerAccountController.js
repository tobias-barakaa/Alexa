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
      first_name,         // Added first_name
      last_name,          // Added last_name
      username,           // Added username
      bio,
      profile_pic,
      specializations,
      years_of_experience,
      samples,
      contact,
      hourly_rate,        // Adjusted to use hourly_rate instead of rate_per_word/rate_per_project
      languages,
      certifications,
      social_media_links,
      portfolio_link,
      skills,
      city,               // Added city
      country,            // Added country
      available,
      file_url,
      timezone,
      profile_visible,    // Added profile_visible
    } = req.body;

    // Create a new writer profile
    const newProfile = {
      user_id: user_id, // Use user_id directly
      first_name,         // Include first_name
      last_name,          // Include last_name
      username,           // Include username
      bio: bio || 'no bio provided yet',
      profile_pic: profile_pic || 'https://avatar.iran.liara.run/username?username=default',
      specializations: specializations || 'not provided yet',
      years_of_experience: years_of_experience || 4,
      samples: samples || 'not provided yet',
      contact: contact || 'not provided yet',
      balance: 0.00, // default balance
      available: available || false,
      profile_visible: profile_visible || true, // Default profile visibility
      city: city || null,       // Include city
      country: country || null,   // Include country
      hourly_rate: hourly_rate || null,  // Include hourly_rate
      
      // New additions
      languages: languages || 'English',
      certifications: certifications || 'none',

      // Optional fields
      social_media_links: social_media_links || null,
      portfolio_link: portfolio_link || null,
      skills: skills || null,
      file_url: file_url || '',
      timezone: timezone || null,

      // Timestamps
      created_at: knex.fn.now(),
      updated_at: knex.fn.now(),
    };

    // Insert the new profile into the writers_profile table
    await knex('writers_profile').insert(newProfile);

    res.status(201).json({ message: 'Writer profile created successfully!' });
  } catch (error) {
    console.error('Error creating writer profile:', error);
    res.status(500).json({ message: 'Server error. Please try again later.' });
  }
};


const getWriterProfileByUsername = async (req, res) => {
  try {
    // Extract the username from the URL parameters
    const { username } = req.params;

    console.log(username, 'this is the username');

    // Step 1: Query the users table to find the user_id by username
    const user = await knex('users').where({ username }).first();

    // Check if the user exists
    if (!user) {
      return res.status(404).json({ message: 'User not found.' });
    }

    // Step 2: Use the user_id to query the writers_profile table
    const writerProfile = await knex('writers_profile').where({ user_id: user.id }).first();

    // Check if the writer profile exists
    if (!writerProfile) {
      return res.status(404).json({ message: 'Writer profile not found.' });
    }

    // Return the writer's profile
    res.status(200).json(writerProfile);
  } catch (error) {
    console.error('Error retrieving writer profile:', error);
    res.status(500).json({ message: 'Server error. Please try again later.' });
  }
};


  




module.exports = { fillWriterProfile, getWriterProfileByUsername };


