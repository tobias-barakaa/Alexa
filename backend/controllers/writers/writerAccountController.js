const knex = require('../../db/db.js');
// const cloudinary = require("../../utils/cloudinary.js").v2;
const upload = require("../../utils/multer.js")

const cloudinary = require('../../utils/cloudinary.js');

// Controller function to handle the writer profile creation

const fillWriterProfile = async (req, res) => {
  try {
    let image;

    if (req.file) {
      // Upload to Cloudinary
      const result = await cloudinary.uploader.upload(req.file.path);
      console.log(result, 'this is the result');
      image = result.secure_url; // Use the secure URL from Cloudinary
    } else {
      image = 'https://avatar.iran.liara.run/username?username=default'; // Default image
    }

    const { id: user_id, username, role } = req.user;

    if (!user_id) {
      return res.status(401).json({ message: 'Unauthorized. User not logged in.' });
    }

    if (!role || role !== 'writer') {
      return res.status(403).json({ message: 'Forbidden. User does not have writer role.' });
    }

    // Check if a profile already exists for this username
    const existingProfile = await knex('writers_profile').where({ username }).first();
    if (existingProfile) {
      return res.status(400).json({ message: 'A profile with this username already exists.' });
    }

    // Proceed to insert new profile
    const {
      first_name,
      last_name,
      bio,
      specializations,
      years_of_experience,
      contact,
      hourly_rate,
      languages,
      certifications,
      portfolio_link,
      skills,
      city,
      country,
      available,
      timezone,
      profile_visible,
    } = req.body;

    const newProfile = {
      user_id,
      username,
      first_name,
      last_name,
      bio: bio || 'no bio provided yet',
      profile_pic: image, // Set the profile_pic to the uploaded image URL
      specializations: specializations || 'not provided yet',
      years_of_experience: years_of_experience || 4,
      contact: contact || 'not provided yet',
      balance: 0.00,
      available: available || false,
      profile_visible: profile_visible || true,
      city: city || null,
      country: country || null,
      hourly_rate: hourly_rate || null,
      languages: languages || 'English',
      certifications: certifications || 'none',
      portfolio_link: portfolio_link || null,
      skills: skills || null,
      timezone: timezone || null,
      created_at: knex.fn.now(),
      updated_at: knex.fn.now(),
    };

    // Insert the new profile into writers_profile
    await knex('writers_profile').insert(newProfile);
    
    // Update the user's profile_pic in the users table
    await knex('users').where({ id: user_id }).update({ profile_pic: image });

    res.status(201).json({ message: 'Writer profile created successfully!' });
  } catch (error) {
    console.error('Error creating writer profile:', error);
    res.status(500).json({ message: 'Server error. Please try again later.' });
  }
};






// const fillWriterProfile = async (req, res) => {
//   try {
//     const result = await cloudinary.uploader.upload(req.file.path);

//     res.json(result)
//     // Use req.user.id instead of req.user.userId
//     const user_id = req.user.id;

//     console.log(user_id, 'this is user');
//     if (!user_id) {
//       return res.status(401).json({ message: 'Unauthorized. User not logged in.' });
//     }

//     // Check if the user has the "writer" role
//     if (!req.user.role || req.user.role !== 'writer') {
//       return res.status(403).json({ message: 'Forbidden. User does not have writer role.' });
//     }


//     const {
//       first_name,         // Added first_name
//       last_name,          // Added last_name
//       bio,
//       profile_pic,
//       specializations,
//       years_of_experience,
//       contact,
//       hourly_rate,        // Adjusted to use hourly_rate instead of rate_per_word/rate_per_project
//       languages,
//       certifications,
//       social_media_links,
//       portfolio_link,
//       skills,
//       city,               // Added city
//       country,            // Added country
//       available,
//       timezone,
//       profile_visible,    // Added profile_visible
//     } = req.body;

//     const user_name = req.user.username;

//     // Create a new writer profile
//     const newProfile = {
//       user_id: user_id, // Use user_id directly
//       first_name,         // Include first_name
//       last_name,          // Include last_name
//       samples: 'none',
//       username: user_name,           // Include username
//       bio: bio || 'no bio provided yet',
//       profile_pic: profile_pic || 'https://avatar.iran.liara.run/username?username=default',
//       specializations: specializations || 'not provided yet',
//       years_of_experience: years_of_experience || 4,
//       samples: samples || 'not provided yet',
//       contact: contact || 'not provided yet',
//       balance: 0.00, // default balance
//       available: available || false,
//       profile_visible: profile_visible || true, // Default profile visibility
//       city: city || null,       // Include city
//       country: country || null,   // Include country
//       hourly_rate: hourly_rate || null,  // Include hourly_rate
      
//       // New additions
//       languages: languages || 'English',
//       certifications: certifications || 'none',

//       // Optional fields
//       social_media_links: social_media_links || null,
//       portfolio_link: portfolio_link || null,
//       skills: skills || null,
//       file_url: file_url || 'https://example.com/files/resume.pdf',
//       timezone: timezone || null,

//       // Timestamps
//       created_at: knex.fn.now(),
//       updated_at: knex.fn.now(),
//     };

//     // Insert the new profile into the writers_profile table
//     await knex('writers_profile').insert(newProfile);

//     res.status(201).json({ message: 'Writer profile created successfully!' });
//   } catch (error) {
//     console.error('Error creating writer profile:', error);
//     res.status(500).json({ message: 'Server error. Please try again later.' });
//   }
// };


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


