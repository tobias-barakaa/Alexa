// controllers/articleUploadController.js
const cloudinary = require('../../utils/cloudinary.js');

const knex = require("../../db/db.js");

// const uploadArticleFile = async (req, res) => {
//     try {
//       const { article_id, user_id } = req.body;
//       const uploaded_by = req.user?.userId;
  
//       if (!article_id || !user_id) {
//         return res.status(400).json({ error: 'article_id and user_id are required' });
//       }
  
//       const result = await cloudinary.uploader.upload(req.file.path);
//       const fileUrl = result.secure_url;
//       const publicId = result.public_id;
  
//       const [fileRecord] = await knex('article_upload').insert({
//         file_url: fileUrl,
//         public_id: publicId,
//         recipient_id: user_id,  
//         uploaded_by: uploaded_by,
//         article_id: article_id,
//       }).returning('*');
  
//       res.json({ id: fileRecord.id, fileUrl: fileRecord.file_url });
//     } catch (error) {
//       console.error('Upload error:', error);
//       res.status(500).json({ error: 'Failed to upload file' });
//     }
//   };

const uploadArticleFile = async (req, res) => {
  try {
    const { article_id, user_id } = req.body;  // Extract article_id and user_id from the request body
    const uploaded_by = req.user?.userId;      // Get the user ID of the person uploading the file

    // Validate the request parameters
    if (!article_id || !user_id) {
      return res.status(400).json({ error: 'article_id and user_id are required' });
    }

    // Check if a file is uploaded
    if (!req.file) {
      return res.status(400).json({ error: 'No file uploaded' });
    }

    // Upload the file to Cloudinary
    const result = await cloudinary.uploader.upload(req.file.path);
    const fileUrl = result.secure_url;
    const publicId = result.public_id;

    // Insert the file record into the database
    const [fileRecord] = await knex('article_upload')
      .insert({
        file_url: fileUrl,
        public_id: publicId,
        recipient_id: user_id,
        uploaded_by: uploaded_by,
        article_id: article_id,
        status: 'Processing',  // Default status for newly uploaded files
      })
      .returning('*');  // Return the inserted record

    // Respond with the inserted record's ID and file URL
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

//     const [fileRecord] = await knex('article_upload').insert({
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
  
//       let query = knex('article_upload').where({ recipient_id });
  
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
    // Extract user information
    const recipient_id = req.user?.userId;
    const userRole = req.user?.role;
    console.log(recipient_id, 'this is recipient_id', userRole, 'this is userRole')

    // Ensure the user is logged in
    if (!recipient_id) {
      return res.status(400).json({
        status: 400,
        error: 'Bad Request',
        message: 'User ID is required. Please ensure you are logged in and try again.',
        type: 'Client Error'
      });
    }

    // Base query to fetch uploaded article files
    let query = knex('article_upload')
      .where({ recipient_id }) // Filter by recipient_id to match the logged-in user
      .join('create', 'article_upload.article_id', 'create.id') // Join with the 'create' table (articles)
      .select(
        'article_upload.id as file_id',
        'article_upload.file_url',
        'article_upload.public_id',
        'article_upload.recipient_id',
        'article_upload.uploaded_by',
        'article_upload.article_id',
        'article_upload.created_at',
        'create.title',
        'create.description',
        'create.keywords',
        'create.complexity',
        'create.word_count',
        'create.duration',
        'create.quantity',
        'create.language',
        'create.cost',
        'create.status',
        'create.created_at as article_created_at',
        'create.updated_at as article_updated_at'
      );

    // For non-admin users, restrict the columns further
    // if (userRole !== 'admin') {
    //   query = query.select('article_upload.article_id'); // Limit columns for non-admins
    // }

    // Execute the query
    const files = await query;

    // Check if any files are found
    if (files.length === 0) {
      return res.status(404).json({
        status: 404,
        error: 'Not Found',
        message: 'No files found for the specified user.',
        type: 'Client Error'
      });
    }

    // Return the result as a JSON response
    res.json(files);
  } catch (error) {
    console.error('Error fetching uploaded files:', error);

    // Handle unexpected errors gracefully
    res.status(500).json({
      status: 500,
      error: 'Internal Server Error',
      message: 'An unexpected error occurred while fetching the uploaded files. Please try again later.',
      type: 'Server Error'
    });
  }
};

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
  
//       // Build the query
//       let query = knex('article_upload')
//         .where({ recipient_id })
//         .join('articlecreation', 'article_upload.article_id', 'articlecreation.id')
//         .select(
//           'article_upload.id as file_id',
//           'article_upload.file_url',
//           'article_upload.public_id',
//           'article_upload.recipient_id',
//           'article_upload.uploaded_by',
//           'article_upload.article_id',
//           'article_upload.created_at',
//           'articlecreation.title',
//           'articlecreation.description',
//           'articlecreation.category',
//           'articlecreation.keywords',
//           'articlecreation.complexity',
//           'articlecreation.word_count',
//           'articlecreation.duration',
//           'articlecreation.quantity',
//           'articlecreation.language',
//           'articlecreation.cost',
//           'articlecreation.status',
//           'articlecreation.created_at as article_created_at',
//           'articlecreation.updated_at as article_updated_at'
//         );
  
//       if (userRole !== 'admin') {
//         query = query.select('article_upload.article_id');
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
  

module.exports = { uploadArticleFile, getUploadedArticleFiles };
