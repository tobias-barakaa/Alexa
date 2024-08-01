const knex = require("../../db/db.js");


// Example Express.js Controller

const createResume = async (req, res) => {
    const { personalInfo, educations, experiences, skills, languages, certifications, achievements } = req.body;
    const userId = req.user?.userId; // Assuming req.user contains the logged-in user info

    console.log('Received data:', {
        personalInfo,
        educations,
        experiences,
        skills,
        languages,
        certifications,
        achievements
    });

    try {
        await knex.transaction(async (trx) => {
            // Insert resume data
            const [resume] = await trx('resumes').insert({
                full_name: personalInfo.fullName,
                job_title: personalInfo.jobTitle,
                email: personalInfo.email,
                phone: personalInfo.phone,
                summary: personalInfo.summary,
                user_id: userId, // Include user_id
                skills,
                languages,
                certifications,
                achievements
            }).returning('*');

            const resumeId = resume.id;
            console.log('Inserted resume:', resume);

            // Insert education data
            for (const education of educations) {
                const [insertedEducation] = await trx('education').insert({
                    degree: education.degree,
                    institution: education.institution,
                    start_date: education.startDate,
                    end_date: education.endDate,
                    description: education.description,
                    resume_id: resumeId
                }).returning('*');
                
                console.log('Inserted education:', insertedEducation);
            }

            // Insert work experience data
            for (const experience of experiences) {
                const [insertedExperience] = await trx('work_experience').insert({
                    job_title: experience.jobTitle,
                    company: experience.company,
                    start_date: experience.startDate,
                    end_date: experience.endDate,
                    responsibilities: experience.responsibilities,
                    resume_id: resumeId
                }).returning('*');
                
                console.log('Inserted work experience:', insertedExperience);
            }

            // Commit the transaction
            await trx.commit();
            console.log('Transaction committed');

            // Fetch and return the full resume with related data
            const fullResume = await knex('resumes')
                .leftJoin('education', 'resumes.id', 'education.resume_id')
                .leftJoin('work_experience', 'resumes.id', 'work_experience.resume_id')
                .select(
                    'resumes.id',
                    'resumes.user_id',
                    'resumes.full_name',
                    'resumes.job_title',
                    'resumes.email',
                    'resumes.phone',
                    'resumes.summary',
                    'resumes.skills',
                    'resumes.languages',
                    'resumes.certifications',
                    'resumes.achievements',
                    'education.id as education_id',
                    'education.degree',
                    'education.institution',
                    'education.start_date',
                    'education.end_date',
                    'education.description',
                    'work_experience.id as work_experience_id',
                    'work_experience.job_title',
                    'work_experience.company',
                    'work_experience.start_date',
                    'work_experience.end_date',
                    'work_experience.responsibilities'
                )
                .where('resumes.id', resumeId)
                .first();

            console.log('Fetched full resume:', fullResume);

            return res.status(201).json({ 
                message: 'Resume created successfully!',
                resume: fullResume 
            });
        });
    } catch (error) {
        console.error('Error creating resume:', error);
        return res.status(500).json({ error: 'Failed to create resume' });
    }
};

const getResumeById = async (req, res) => {
    const resumeId = req.params.id;
    const userId = req.user?.userId; // Assuming req.user contains the logged-in user info

    try {
        // Fetch the resume along with related data
        const resumeData = await knex('resumes')
            .leftJoin('education', 'resumes.id', 'education.resume_id')
            .leftJoin('work_experience', 'resumes.id', 'work_experience.resume_id')
            .leftJoin('users', 'resumes.user_id', 'users.id')
            .select(
                'resumes.id as resume_id',
                'resumes.user_id',
                'resumes.full_name',
                'resumes.job_title',
                'resumes.email',
                'resumes.phone',
                'resumes.summary',
                'resumes.skills',
                'resumes.languages',
                'resumes.certifications',
                'resumes.achievements',
                'education.id as education_id',
                'education.degree',
                'education.institution',
                'education.start_date',
                'education.end_date',
                'education.description',
                'work_experience.id as work_experience_id',
                'work_experience.job_title',
                'work_experience.company',
                'work_experience.start_date',
                'work_experience.end_date',
                'work_experience.responsibilities',
                'users.id as user_id',
                'users.first_name as user_first_name', // Adjust column name
                'users.last_name as user_last_name',   // Adjust column name
                'users.email as user_email'
            )
            .where('resumes.id', resumeId)
            .first();

        if (!resumeData) {
            return res.status(404).json({ message: 'Resume not found' });
        }

        // Structure the response
        const response = {
            resume: {
                id: resumeData.resume_id,
                user_id: resumeData.user_id,
                full_name: resumeData.full_name,
                job_title: resumeData.job_title,
                email: resumeData.email,
                phone: resumeData.phone,
                summary: resumeData.summary,
                skills: resumeData.skills,
                languages: resumeData.languages,
                certifications: resumeData.certifications,
                achievements: resumeData.achievements,
                education: [],
                work_experience: [],
                user: {
                    id: resumeData.user_id,
                    first_name: resumeData.user_first_name, // Adjust field
                    last_name: resumeData.user_last_name,   // Adjust field
                    email: resumeData.user_email
                }
            }
        };

        // Add education data
        if (resumeData.education_id) {
            response.resume.education.push({
                id: resumeData.education_id,
                degree: resumeData.degree,
                institution: resumeData.institution,
                start_date: resumeData.start_date,
                end_date: resumeData.end_date,
                description: resumeData.description
            });
        }

        // Add work experience data
        if (resumeData.work_experience_id) {
            response.resume.work_experience.push({
                id: resumeData.work_experience_id,
                job_title: resumeData.job_title,
                company: resumeData.company,
                start_date: resumeData.start_date,
                end_date: resumeData.end_date,
                responsibilities: resumeData.responsibilities
            });
        }

        return res.status(200).json(response);
    } catch (error) {
        console.error('Error fetching resume:', error);
        return res.status(500).json({ error: 'Failed to fetch resume' });
    }
};



module.exports = {
    createResume,
    getResumeById
};
