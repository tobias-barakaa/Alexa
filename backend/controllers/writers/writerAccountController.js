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
                Rates/Price per Word or per Project,
                Experience Level: Let the writer specify their experience level (e.g., Beginner, Intermediate, Expert).
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
