const knex = require("../../db/db.js");


// Example Express.js Controller

const createResume = async (req, res) => {
    const { personalInfo, educations,profile_pic, experiences,cost, skills, languages, certifications, achievements } = req.body;
    const userId = req.user?.userId; // Assuming req.user contains the logged-in user info

    console.log('Received data:', {
        personalInfo,
        educations,
        experiences,
        skills,
        languages,
        certifications,
        achievements,
        cost,
        profile_pic
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
                achievements,
                cost,
                profile_pic
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
                    'resumes.profile_pic',
                    'resumes.cost',
                    'resumes.status',
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

// const getResumeById = async (req, res) => {
//     const resumeId = req.params.id;
//     console.log(resumeId)
//     const userId = req.user?.userId; // Assuming req.user contains the logged-in user info

//     try {
//         // Fetch the resume along with related data
//         const resumeData = await knex('resumes')
//             .leftJoin('education', 'resumes.id', 'education.resume_id')
//             .leftJoin('work_experience', 'resumes.id', 'work_experience.resume_id')
//             .leftJoin('users', 'resumes.user_id', 'users.id')
//             .select(
//                 'resumes.id as resume_id',
//                 'resumes.user_id',
//                 'resumes.full_name',
//                 'resumes.job_title',
//                 'resumes.email',
//                 'resumes.phone',
//                 'resumes.summary',
//                 'resumes.skills',
//                 'resumes.languages',
//                 'resumes.certifications',
//                 'resumes.achievements',
//                 'education.id as education_id',
//                 'education.degree',
//                 'education.institution',
//                 'education.start_date',
//                 'education.end_date',
//                 'education.description',
//                 'work_experience.id as work_experience_id',
//                 'work_experience.job_title as work_job_title',
//                 'work_experience.company',
//                 'work_experience.start_date as work_start_date',
//                 'work_experience.end_date as work_end_date',
//                 'work_experience.responsibilities',
//                 'users.id as user_id',
//                 'users.first_name as user_first_name',
//                 'users.last_name as user_last_name',
//                 'users.email as user_email'
//             )
//             .where('resumes.id', resumeId);

//         if (!resumeData || resumeData.length === 0) {
//             return res.status(404).json({ message: 'Resume not found' });
//         }

//         // Structure the response
//         const response = {
//             resume: {
//                 id: resumeData[0].resume_id,
//                 user_id: resumeData[0].user_id,
//                 full_name: resumeData[0].full_name,
//                 job_title: resumeData[0].job_title,
//                 email: resumeData[0].email,
//                 phone: resumeData[0].phone,
//                 summary: resumeData[0].summary,
//                 skills: resumeData[0].skills,
//                 languages: resumeData[0].languages,
//                 certifications: resumeData[0].certifications,
//                 achievements: resumeData[0].achievements,
//                 education: [],
//                 work_experience: [],
//                 user: {
//                     id: resumeData[0].user_id,
//                     first_name: resumeData[0].user_first_name,
//                     last_name: resumeData[0].user_last_name,
//                     email: resumeData[0].user_email
//                 }
//             }
//         };

//         // Add education data
//         resumeData.forEach(row => {
//             if (row.education_id) {
//                 response.resume.education.push({
//                     id: row.education_id,
//                     degree: row.degree,
//                     institution: row.institution,
//                     start_date: row.start_date,
//                     end_date: row.end_date,
//                     description: row.description
//                 });
//             }
//         });

//         // Add work experience data
//         resumeData.forEach(row => {
//             if (row.work_experience_id) {
//                 response.resume.work_experience.push({
//                     id: row.work_experience_id,
//                     job_title: row.work_job_title,
//                     company: row.company,
//                     start_date: row.work_start_date,
//                     end_date: row.work_end_date,
//                     responsibilities: row.responsibilities
//                 });
//             }
//         });

//         return res.status(200).json(response);
//     } catch (error) {
//         console.error('Error fetching resume:', error);
//         return res.status(500).json({ error: 'Failed to fetch resume' });
//     }
// };


const getRecentResumes = async (req, res) => {
    try {
        const now = new Date();
        const thirtyMinutesAgo = new Date(now.getTime() - 30 * 60 * 1000); // 30 minutes ago

        // Query to fetch resumes created within the last 30 minutes
        const recentResumes = await knex('resumes')
            .leftJoin('education', 'resumes.id', 'education.resume_id')
            .leftJoin('work_experience', 'resumes.id', 'work_experience.resume_id')
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
                'work_experience.job_title as work_job_title',
                'work_experience.company',
                'work_experience.start_date as work_start_date',
                'work_experience.end_date as work_end_date',
                'work_experience.responsibilities'
            )
            .where('resumes.created_at', '>=', thirtyMinutesAgo)
            .orderBy('resumes.created_at', 'desc');

        // Structure the response
        const response = {
            resumes: []
        };

        // Add resumes data
        recentResumes.forEach(row => {
            let resume = response.resumes.find(r => r.id === row.resume_id);
            if (!resume) {
                resume = {
                    id: row.resume_id,
                    user_id: row.user_id,
                    full_name: row.full_name,
                    job_title: row.job_title,
                    email: row.email,
                    phone: row.phone,
                    summary: row.summary,
                    skills: row.skills,
                    languages: row.languages,
                    certifications: row.certifications,
                    achievements: row.achievements,
                    education: [],
                    work_experience: []
                };
                response.resumes.push(resume);
            }

            // Add education data
            if (row.education_id) {
                resume.education.push({
                    id: row.education_id,
                    degree: row.degree,
                    institution: row.institution,
                    start_date: row.start_date,
                    end_date: row.end_date,
                    description: row.description
                });
            }

            // Add work experience data
            if (row.work_experience_id) {
                resume.work_experience.push({
                    id: row.work_experience_id,
                    job_title: row.work_job_title,
                    company: row.company,
                    start_date: row.work_start_date,
                    end_date: row.work_end_date,
                    responsibilities: row.responsibilities
                });
            }
        });

        return res.status(200).json(response);
    } catch (error) {
        console.error('Error fetching recent resumes:', error);
        return res.status(500).json({ error: 'Failed to fetch recent resumes' });
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
                'resumes.created_at',
                'education.id as education_id',
                'education.degree',
                'education.institution',
                'education.start_date',
                'education.end_date',
                'education.description',
                'work_experience.id as work_experience_id',
                'work_experience.job_title as work_job_title',
                'work_experience.company',
                'work_experience.start_date as work_start_date',
                'work_experience.end_date as work_end_date',
                'work_experience.responsibilities'
            )
            .where('resumes.id', resumeId);

        if (!resumeData || resumeData.length === 0) {
            return res.status(404).json({ message: 'Resume not found' });
        }

        // Check if the user is the owner of the resume
        if (resumeData[0].user_id !== userId) {
            return res.status(403).json({ message: 'Unauthorized access' });
        }

        // Check if the resume is within the 30-minute limit
        const createdAt = new Date(resumeData[0].created_at);
        const now = new Date();
        const thirtyMinutes = 30 * 60 * 1000; // 30 minutes in milliseconds

        if (now - createdAt > thirtyMinutes) {
            return res.status(403).json({ message: 'Resume access has expired' });
        }

        // Structure the response
        const response = {
            resume: {
                id: resumeData[0].resume_id,
                user_id: resumeData[0].user_id,
                full_name: resumeData[0].full_name,
                job_title: resumeData[0].job_title,
                email: resumeData[0].email,
                phone: resumeData[0].phone,
                summary: resumeData[0].summary,
                skills: resumeData[0].skills,
                languages: resumeData[0].languages,
                certifications: resumeData[0].certifications,
                achievements: resumeData[0].achievements,
                education: [],
                work_experience: []
            }
        };

        // Add education data
        resumeData.forEach(row => {
            if (row.education_id) {
                response.resume.education.push({
                    id: row.education_id,
                    degree: row.degree,
                    institution: row.institution,
                    start_date: row.start_date,
                    end_date: row.end_date,
                    description: row.description
                });
            }
        });

        // Add work experience data
        resumeData.forEach(row => {
            if (row.work_experience_id) {
                response.resume.work_experience.push({
                    id: row.work_experience_id,
                    job_title: row.work_job_title,
                    company: row.company,
                    start_date: row.work_start_date,
                    end_date: row.work_end_date,
                    responsibilities: row.responsibilities
                });
            }
        });

        return res.status(200).json(response);
    } catch (error) {
        console.error('Error fetching resume:', error);
        return res.status(500).json({ error: 'Failed to fetch resume' });
    }
};

const getResumeCount = async (req, res) => {
    try {
        const now = new Date();
        const thirtyMinutesAgo = new Date(now.getTime() - 30 * 60 * 1000); // 30 minutes ago

        // Query to count resumes created within the last 30 minutes
        const countData = await knex('resumes')
            .where('created_at', '>=', thirtyMinutesAgo)
            .count('id as count');

        const count = countData[0].count;

        return res.status(200).json({ count });
    } catch (error) {
        console.error('Error fetching resume count:', error);
        return res.status(500).json({ error: 'Failed to fetch resume count' });
    }
};

// const getResumeById = async (req, res) => {
//     const resumeId = req.params.id;
//     const userId = req.user?.userId; // Assuming req.user contains the logged-in user info

//     try {
//         // Fetch the resume along with related data
//         const resumeData = await knex('resumes')
//             .leftJoin('education', 'resumes.id', 'education.resume_id')
//             .leftJoin('work_experience', 'resumes.id', 'work_experience.resume_id')
//             .select(
//                 'resumes.id as resume_id',
//                 'resumes.user_id',
//                 'resumes.full_name',
//                 'resumes.job_title',
//                 'resumes.email',
//                 'resumes.phone',
//                 'resumes.summary',
//                 'resumes.skills',
//                 'resumes.languages',
//                 'resumes.certifications',
//                 'resumes.achievements',
//                 'education.id as education_id',
//                 'education.degree',
//                 'education.institution',
//                 'education.start_date',
//                 'education.end_date',
//                 'education.description',
//                 'work_experience.id as work_experience_id',
//                 'work_experience.job_title as work_job_title',
//                 'work_experience.company',
//                 'work_experience.start_date as work_start_date',
//                 'work_experience.end_date as work_end_date',
//                 'work_experience.responsibilities'
//             )
//             .where('resumes.id', resumeId);

//         if (!resumeData || resumeData.length === 0) {
//             return res.status(404).json({ message: 'Resume not found' });
//         }

//         // Check if the user is the owner of the resume
//         if (resumeData[0].user_id !== userId) {
//             return res.status(403).json({ message: 'Unauthorized access' });
//         }

//         // Structure the response
//         const response = {
//             resume: {
//                 id: resumeData[0].resume_id,
//                 user_id: resumeData[0].user_id,
//                 full_name: resumeData[0].full_name,
//                 job_title: resumeData[0].job_title,
//                 email: resumeData[0].email,
//                 phone: resumeData[0].phone,
//                 summary: resumeData[0].summary,
//                 skills: resumeData[0].skills,
//                 languages: resumeData[0].languages,
//                 certifications: resumeData[0].certifications,
//                 achievements: resumeData[0].achievements,
//                 education: [],
//                 work_experience: []
//             }
//         };

//         // Add education data
//         resumeData.forEach(row => {
//             if (row.education_id) {
//                 response.resume.education.push({
//                     id: row.education_id,
//                     degree: row.degree,
//                     institution: row.institution,
//                     start_date: row.start_date,
//                     end_date: row.end_date,
//                     description: row.description
//                 });
//             }
//         });

//         // Add work experience data
//         resumeData.forEach(row => {
//             if (row.work_experience_id) {
//                 response.resume.work_experience.push({
//                     id: row.work_experience_id,
//                     job_title: row.work_job_title,
//                     company: row.company,
//                     start_date: row.work_start_date,
//                     end_date: row.work_end_date,
//                     responsibilities: row.responsibilities
//                 });
//             }
//         });

//         return res.status(200).json(response);
//     } catch (error) {
//         console.error('Error fetching resume:', error);
//         return res.status(500).json({ error: 'Failed to fetch resume' });
//     }
// };




module.exports = {
    createResume,
    getRecentResumes,
    getResumeById,
    getResumeCount
};
