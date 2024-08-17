const cloudinary = require('../../utils/cloudinary.js');
const knex = require("../../db/db.js");

const uploadCvWritingFile = async (req, res) => {
    try {
      const { resumes_id, user_id } = req.body;
      const uploaded_by = req.user?.userId;
  
      if (!resumes_id || !user_id) {
        return res.status(400).json({ error: 'resumes_id and user_id are required' });
      }
  
      // Upload the file to Cloudinary
      const result = await cloudinary.uploader.upload(req.file.path);
      const fileUrl = result.secure_url;
      const publicId = result.public_id;
  
      // Insert the file data into the cvwriting_uploads table
      const [fileRecord] = await knex('cvwriting_uploads').insert({
        file_url: fileUrl,
        public_id: publicId,
        recipient_id: user_id,  
        uploaded_by: uploaded_by,
        resumes_id: resumes_id,
      }).returning('*');
  
      res.json({ id: fileRecord.id, fileUrl: fileRecord.file_url });
    } catch (error) {
      console.error('Upload error:', error);
      res.status(500).json({ error: 'Failed to upload file' });
    }
  };


  const getCvWritingFiles = async (req, res) => {
    try {
      const recipient_id = req.user?.userId;
      const userRole = req.user?.role;
  
      if (!recipient_id) {
        return res.status(400).json({
          status: 400,
          error: 'Bad Request',
          message: 'User ID is required. Please ensure you are logged in and try again.',
          type: 'Client Error'
        });
      }
  
      // Build the query
      let query = knex('cvwriting_uploads')
        .where({ recipient_id })
        .join('resumes', 'cvwriting_uploads.resumes_id', 'resumes.id')
        .leftJoin('education', 'resumes.id', 'education.resume_id')
        .leftJoin('work_experience', 'resumes.id', 'work_experience.resume_id')
        .select(
          'cvwriting_uploads.id as file_id',
          'cvwriting_uploads.file_url',
          'cvwriting_uploads.public_id',
          'cvwriting_uploads.recipient_id',
          'cvwriting_uploads.uploaded_by',
          'cvwriting_uploads.resumes_id',
          'cvwriting_uploads.created_at',
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
          'resumes.created_at as resume_created_at',
          'resumes.updated_at as resume_updated_at',
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
        .groupBy(
          'cvwriting_uploads.id',
          'resumes.id'
        );
  
      if (userRole !== 'admin') {
        query = query.select('cvwriting_uploads.resumes_id');
      }
  
      const files = await query;
  
      if (files.length === 0) {
        return res.status(404).json({
          status: 404,
          error: 'Not Found',
          message: 'No files found for the specified user.',
          type: 'Client Error'
        });
      }
  
      res.json(files);
    } catch (error) {
      console.error('Error fetching uploaded files:', error);
  
      res.status(500).json({
        status: 500,
        error: 'Internal Server Error',
        message: 'An unexpected error occurred while fetching the uploaded files. Please try again later.',
        type: 'Server Error'
      });
    }
  };
    

module.exports = { uploadCvWritingFile, getCvWritingFiles };