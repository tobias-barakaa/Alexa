const knex = require('../../db/db.js');

const getWriters = async (req, res) => {
    try {
        const writers = await knex('users')
            .select(
                'users.id',
                'users.username',
                'users.email',
                'users.profile_pic',
                'roles.name as role',
                'users.balance',
                'users.created_at',
                'users.updated_at'
            )
            .join('roles', 'users.role_id', 'roles.id')
            .where('roles.name', 'writer');

        res.status(200).json({ writers });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'An error occurred while fetching writers' });
    }
};


const assignArticle = async (req, res) => {
    const { article_id, writer_id } = req.body;

    try {
        const article = await knex('articles').where({ id: article_id }).first();

        if (!article) {
            return res.status(404).json({ message: 'Article not found' });
        }

        const updatedArticle = await knex('articles')
            .where({ id: article_id })
            .update({
                writer_id,
                status: 'in_progress',
                updated_at: knex.fn.now(),
            })
            .returning('*');

        return res.status(200).json({ message: 'Article assigned successfully', article: updatedArticle[0] });
    } catch (error) {
        console.error('Error during article assignment:', error);
        return res.status(500).json({ message: 'An error occurred during article assignment' });
    }
};


const getWriterProfiles = async (req, res) => {
    try {
        const writerProfiles = await knex('writers')
            .select(
                'writers.id',
                'writers.user_id',
                'writers.bio',
                'writers.profile_pic',
                'writers.specializations',
                'writers.years_of_experience',
                'writers.samples',
                'writers.contact',
                'writers.balance',
                'writers.available',
                'writers.last_available_update',
                'writers.status',
                'writers.created_at',
                'writers.updated_at'
            );

        if (writerProfiles.length > 0) {
            return res.status(200).json({ message: 'Writer profiles retrieved successfully', writers: writerProfiles });
        } else {
            return res.status(404).json({ message: 'No writer profiles found' });
        }
    } catch (error) {
        console.error('Error retrieving writer profiles:', error);
        return res.status(500).json({ message: 'An error occurred while retrieving writer profiles' });
    }
};



const getWriterProfile = async (req, res) => {
  try {
    // Extract the username from the URL parameters
    const { username } = req.params; 

    console.log(username, 'this is username');

    // Query to get the writer's profile from the database
    const writerProfile = await knex('writer_profile').where({ username }).first();

    // Check if the profile exists
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

const updateWriterStatus = async (req, res) => {
    const { writerId } = req.params;
    const { status } = req.body;

    try {
        // Check if the status is valid
        const validStatuses = ['pending', 'approved', 'rejected'];
        if (!validStatuses.includes(status)) {
            return res.status(400).json({ message: 'Invalid status' });
        }

        // Update the writer's status in the database
        const updatedWriter = await knex('writers')
            .where({ id: writerId })
            .update({
                status,
                updated_at: knex.fn.now()
            })
            .returning('*');

        if (updatedWriter.length === 0) {
            return res.status(404).json({ message: 'Writer not found' });
        }

        // Send a response with the updated writer profile
        return res.status(200).json({ message: `Writer status updated to ${status}`, writer: updatedWriter[0] });
    } catch (error) {
        console.error('Error updating writer status:', error);
        return res.status(500).json({ message: 'An error occurred while updating writer status' });
    }
};

module.exports = {getWriters, assignArticle, getWriterProfiles};
