// controllers/articleUploadController.js
const cloudinary = require('../../utils/cloudinary.js');
const knex = require("../../db/db.js");

const uploadArticleFile = async (req, res) => {
    try {
      const { article_id, user_id } = req.body;
      const uploaded_by = req.user?.userId;
  
      // Ensure both article_id and user_id are provided
      if (!article_id || !user_id) {
        return res.status(400).json({ error: 'article_id and user_id are required' });
      }
  
      const result = await cloudinary.uploader.upload(req.file.path);
      const fileUrl = result.secure_url;
      const publicId = result.public_id;
  
      const [fileRecord] = await knex('upload_articles').insert({
        file_url: fileUrl,
        public_id: publicId,
        recipient_id: user_id,  // This should not be null
        uploaded_by: uploaded_by,
        article_id: article_id,
      }).returning('*');
  
      res.json({ id: fileRecord.id, fileUrl: fileRecord.file_url });
    } catch (error) {
      console.error('Upload error:', error);
      res.status(500).json({ error: 'Failed to upload file' });
    }
  };
  

// const uploadArticleFile = async (req, res) => {
//   try {
//     const { article_id, user_id } = req.body;
//     const uploaded_by = req.user?.userId;

//     if (!article_id) {
//       return res.status(400).json({ error: 'article_id is required' });
//     }

//     const result = await cloudinary.uploader.upload(req.file.path);
//     console.log(result);
//     const fileUrl = result.secure_url;
//     const publicId = result.public_id;

//     const [fileRecord] = await knex('upload_articles').insert({
//       file_url: fileUrl,
//       public_id: publicId,
//       recipient_id: user_id,
//       uploaded_by: uploaded_by,
//       article_id: article_id, // Ensure article_id is included here
//     }).returning('*');

//     res.json({ id: fileRecord.id, fileUrl: fileRecord.file_url });
//   } catch (error) {
//     console.error('Upload error:', error);
//     res.status(500).json({ error: 'Failed to upload file' });
//   }
// };

// const getUploadedArticleFiles = async (req, res) => {
//     try {
//       const recipient_id = req.user?.userId;
//       const userRole = req.user?.role;
  
//       if (!recipient_id) {
//         return res.status(400).json({
//           status: 400,
//           error: 'Bad Request',
//           message: 'User ID is required. Please ensure you are logged in and try again.',
//           type: 'Client Error'
//         });
//       }
  
//       let query = knex('upload_articles').where({ recipient_id });
  
//       if (userRole === 'admin') {
//         query = query.select('id', 'file_url', 'public_id', 'recipient_id', 'uploaded_by', 'article_id', 'created_at');
//       } else {
//         query = query.select('id', 'file_url', 'public_id', 'recipient_id', 'article_id', 'created_at');
//       }
  
//       const files = await query;
  
//       if (files.length === 0) {
//         return res.status(404).json({
//           status: 404,
//           error: 'Not Found',
//           message: 'No files found for the specified user.',
//           type: 'Client Error'
//         });
//       }
  
//       res.json(files);
//     } catch (error) {
//       console.error('Error fetching uploaded files:', error);
  
//       res.status(500).json({
//         status: 500,
//         error: 'Internal Server Error',
//         message: 'An unexpected error occurred while fetching the uploaded files. Please try again later.',
//         type: 'Server Error'
//       });
//     }
//   };
  
const getUploadedArticleFiles = async (req, res) => {
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
      let query = knex('upload_articles')
        .where({ recipient_id })
        .join('articlecreation', 'upload_articles.article_id', 'articlecreation.id')
        .select(
          'upload_articles.id as file_id',
          'upload_articles.file_url',
          'upload_articles.public_id',
          'upload_articles.recipient_id',
          'upload_articles.uploaded_by',
          'upload_articles.article_id',
          'upload_articles.created_at',
          'articlecreation.title',
          'articlecreation.description',
          'articlecreation.category',
          'articlecreation.keywords',
          'articlecreation.complexity',
          'articlecreation.word_count',
          'articlecreation.duration',
          'articlecreation.quantity',
          'articlecreation.language',
          'articlecreation.cost',
          'articlecreation.status',
          'articlecreation.created_at as article_created_at',
          'articlecreation.updated_at as article_updated_at'
        );
  
      if (userRole !== 'admin') {
        query = query.select('upload_articles.article_id');
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
  

module.exports = { uploadArticleFile, getUploadedArticleFiles };
