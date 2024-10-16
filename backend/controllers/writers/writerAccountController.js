const knex = require('../../db/db.js');



const fillWriterProfile = async (req, res) => {
    const { bio, profile_pic, specializations, years_of_experience, samples, contact } = req.body;
    const { id: user_id } = req.user; 

    try {
        const existingWriter = await knex('writers').where({ user_id }).first();
        if (existingWriter) {
            return res.status(400).json({ message: 'Writer profile already exists' });
        }

        const [newWriterProfile] = await knex('writers')
            .insert({
                id: knex.raw('gen_random_uuid()'),
                user_id,
                bio: bio || 'no bio provided yet',
                profile_pic: profile_pic || 'https://avatar.iran.liara.run/username?username=default',
                specializations: specializations || 'not provided yet',
                years_of_experience: years_of_experience || 4,
                samples: samples || 'not provided yet',
                contact: contact || 'not provided yet',
                balance: 0.00,
                available: false,
                status: 'pending',
                created_at: knex.fn.now(),
                updated_at: knex.fn.now(),
                












                
                    id: knex.raw('gen_random_uuid()'), // Unique ID for the writer profile
                    user_id, // Foreign key linking to the user's account
                    bio: bio || 'no bio provided yet', // Writer bio, defaults to placeholder
                    profile_pic: profile_pic || 'https://avatar.iran.liara.run/username?username=default', // Profile picture link, default if not provided
                    specializations: specializations || 'not provided yet', // Writer's specialization fields
                    years_of_experience: years_of_experience || 4, // Years of experience, default to 4
                    samples: samples || 'not provided yet', // Portfolio samples (links or file paths), placeholder if not provided
                    contact: contact || 'not provided yet', // Contact details (email, phone, or others)
                    balance: 0.00, // Initial balance for writer payments
                    available: available || false, // Availability status, whether the writer is accepting new work
                    status: status || 'pending', // Writer's account status (pending, approved, active)
                    created_at: knex.fn.now(), // Timestamp when the profile was created
                    updated_at: knex.fn.now(), // Timestamp when the profile was last updated
                    
                    // New additions based on your request
                    rate_per_word: rate_per_word || null, // Rate per word the writer charges, default is null if not specified
                    rate_per_project: rate_per_project || null, // Optional rate per project (for fixed-fee jobs)
                    experience_level: experience_level || 'Beginner', // Default to 'Beginner' if not specified ('Beginner', 'Intermediate', 'Expert')
                    languages: languages || 'English', // Languages the writer is proficient in (default to 'English')
                    certifications: certifications || 'none', // Optional field for certifications
                    
                    // Optional fields for enhancing the writer's profile
                    rating: 0, // Initial rating, which can increase as the writer completes projects
                    total_jobs_completed: 0, // Track how many jobs the writer has completed
                    social_media_links: social_media_links || null, // Optional links to the writer's LinkedIn, personal website, etc.
                  
                  













            })
            .returning('*');

        if (newWriterProfile) {
            return res.status(201).json({ message: 'Writer profile created successfully', writer: newWriterProfile });
        } else {
            return res.status(400).json({ message: 'Failed to create writer profile' });
        }
    } catch (error) {
        console.error('Error creating writer profile:', error);
        return res.status(500).json({ message: 'An error occurred during writer profile creation' });
    }
};

module.exports = { fillWriterProfile };
