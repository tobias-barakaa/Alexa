const knex = require('../../db/db.js');

const uploadEmailCopywritingFile = async (req, res) => {
    try {
      const { email_copywriting_id, user_id } = req.body;
      const uploaded_by = req.user?.userId;
  
      if (!email_copywriting_id || !user_id) {
        return res.status(400).json({ error: 'email_copywriting_id and user_id are required' });
      }
  
      const result = await cloudinary.uploader.upload(req.file.path);
      const fileUrl = result.secure_url;
      const publicId = result.public_id;
  
      const [fileRecord] = await knex('email_copywriting_uploads')
        .insert({
          file_url: fileUrl,
          public_id: publicId,
          recipient_id: user_id,
          uploaded_by: uploaded_by,
          email_copywriting_id: email_copywriting_id,
        })
        .returning('*');
  
      res.json({ id: fileRecord.id, fileUrl: fileRecord.file_url });
    } catch (error) {
      console.error('Upload error:', error);
      res.status(500).json({ error: 'Failed to upload file' });
    }
  };


  const getUploadedEmailCopywritingFiles = async (req, res) => {
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
      let query = knex('email_copywriting_uploads')
        .where({ recipient_id })
        .join('emailcopywriting', 'email_copywriting_uploads.email_copywriting_id', 'emailcopywriting.id')
        .select(
          'email_copywriting_uploads.id as file_id',
          'email_copywriting_uploads.file_url',
          'email_copywriting_uploads.public_id',
          'email_copywriting_uploads.recipient_id',
          'email_copywriting_uploads.email_copywriting_id',
          'email_copywriting_uploads.created_at',
          'emailcopywriting.project_type',
          'emailcopywriting.project_description',
          'emailcopywriting.duration',
          'emailcopywriting.word_count',
          'emailcopywriting.cost',
          'emailcopywriting.status',
          'emailcopywriting.created_at as request_created_at',
          'emailcopywriting.updated_at as request_updated_at'
        );
  
      if (userRole !== 'admin') {
        query = query.select('email_copywriting_uploads.email_copywriting_id');
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
  
  
  module.exports = {uploadEmailCopywritingFile, getUploadedEmailCopywritingFiles};
  