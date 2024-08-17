const knex = require('../../db/db.js');

const getAllResumes = async (req, res) => {
    const userRole = req.user?.role;

    try {
        let resumesQuery = knex('resumes')
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
                'resumes.created_at',
                'resumes.updated_at'
            );

        if (userRole === 'admin') {
            resumesQuery = resumesQuery
                .leftJoin('education', 'resumes.id', 'education.resume_id')
                .leftJoin('work_experience', 'resumes.id', 'work_experience.resume_id')
                .select(
                    knex.raw(`
                        ARRAY_AGG(jsonb_build_object(
                            'education_id', education.id,
                            'degree', education.degree,
                            'institution', education.institution,
                            'start_date', education.start_date,
                            'end_date', education.end_date,
                            'description', education.description
                        )) FILTER (WHERE education.id IS NOT NULL) AS education
                    `),
                    knex.raw(`
                        ARRAY_AGG(jsonb_build_object(
                            'work_experience_id', work_experience.id,
                            'job_title', work_experience.job_title,
                            'company', work_experience.company,
                            'start_date', work_experience.start_date,
                            'end_date', work_experience.end_date,
                            'responsibilities', work_experience.responsibilities
                        )) FILTER (WHERE work_experience.id IS NOT NULL) AS work_experience
                    `)
                )
                .groupBy('resumes.id');
        }

        const resumes = await resumesQuery;

        // Post-process the results to limit education and work experience to the first two items
        const processedResumes = resumes.map(resume => ({
            ...resume,
            education: resume.education ? resume.education.slice(0, 2) : [],
            work_experience: resume.work_experience ? resume.work_experience.slice(0, 2) : [],
        }));

        res.status(200).json({
            status: 200,
            message: 'Resumes fetched successfully',
            data: processedResumes
        });

    } catch (error) {
        console.error('Error fetching resumes:', error);
        return res.status(500).json({
            status: 500,
            error: 'Internal Server Error',
            message: 'An unexpected error occurred while fetching resumes. Please try again later.',
            type: 'Server Error'
        });
    }
};



const getResumeById = async (req, res) => {
    const resumeId = req.params.id;
    const userRole = req.user?.role;

    // Restrict access to admin users only
    if (userRole !== 'admin') {
        return res.status(403).json({
            status: 403,
            message: 'Access denied. Only admin users can access this resource.'
        });
    }

    try {
        // Fetch resume with all related data
        const resume = await knex('resumes')
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
                'resumes.created_at',
                'resumes.updated_at',
                knex.raw(`
                    jsonb_agg(
                        jsonb_build_object(
                            'education_id', education.id,
                            'degree', education.degree,
                            'institution', education.institution,
                            'start_date', education.start_date,
                            'end_date', education.end_date,
                            'description', education.description
                        )
                    ) as education
                `),
                knex.raw(`
                    jsonb_agg(
                        jsonb_build_object(
                            'work_experience_id', work_experience.id,
                            'job_title', work_experience.job_title,
                            'company', work_experience.company,
                            'start_date', work_experience.start_date,
                            'end_date', work_experience.end_date,
                            'responsibilities', work_experience.responsibilities
                        )
                    ) as work_experience
                `)
            )
            .where('resumes.id', resumeId)
            .groupBy('resumes.id')
            .first(); // Get a single resume

        // If resume not found
        if (!resume) {
            return res.status(404).json({
                status: 404,
                message: 'Resume not found.'
            });
        }

        res.status(200).json({
            status: 200,
            message: 'Resume fetched successfully',
            data: resume
        });

    } catch (error) {
        console.error('Error fetching resume:', error);
        return res.status(500).json({
            status: 500,
            error: 'Internal Server Error',
            message: 'An unexpected error occurred while fetching the resume. Please try again later.',
            type: 'Server Error'
        });
    }
};


module.exports = { getAllResumes, getResumeById };
