const knex = require("../../db/db.js");


const createResume = async (req, res) => {
    try {
        const { personalInfo, educations, experiences, skills, languages, certifications, achievements } = req.body;

        // Start a transaction
        await knex.transaction(async trx => {
            const resumeId = await trx('resumes').insert({
                user_id: req.user.id, // Assuming you have user authentication
                full_name: personalInfo.fullName,
                job_title: personalInfo.jobTitle,
                email: personalInfo.email,
                phone: personalInfo.phone,
                summary: personalInfo.summary,
                skills,
                languages,
                certifications,
                achievements
            }).returning('id');

            if (educations.length > 0) {
                const educationData = educations.map(edu => ({
                    resume_id: resumeId[0],
                    degree: edu.degree,
                    institution: edu.institution,
                    start_date: edu.startDate,
                    end_date: edu.endDate,
                    description: edu.description
                }));
                await trx('education').insert(educationData);
            }

            if (experiences.length > 0) {
                const experienceData = experiences.map(exp => ({
                    resume_id: resumeId[0],
                    job_title: exp.jobTitle,
                    company: exp.company,
                    start_date: exp.startDate,
                    end_date: exp.endDate,
                    responsibilities: exp.responsibilities
                }));
                await trx('work_experience').insert(experienceData);
            }
        });

        res.status(201).json({ message: 'Resume created successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};

module.exports = {
    createResume
};
