function wordCount(str) {
    return str.trim().split(/\s+/).length;
}

async function createWriter(req, res) {
    const { user_id, bio, specializations, years_of_experience, hourly_rate, writing_samples, contact_info, cv_url } = req.body;

    const wordCountSamples = wordCount(writing_samples);

    if (wordCountSamples < 100 || wordCountSamples > 500) {
        return res.status(400).json({ message: 'Writing samples must be between 100 and 500 words.' });
    }

    try {
        const [newWriter] = await knex('writers').insert({
            user_id,
            bio,
            specializations,
            years_of_experience,
            hourly_rate,
            writing_samples,
            contact_info,
            cv_url
        }).returning('*');

        res.status(201).json(newWriter);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'An error occurred while creating the writer profile.' });
    }
}
