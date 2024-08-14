// controllers/fileUploadController.js
const cloudinary = require('../../utils/cloudinary.js')
const knex = require("../../db/db.js");

// cloudinary.config({
//   cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
//   api_key: process.env.CLOUDINARY_API_KEY,
//   api_secret: process.env.CLOUDINARY_API_SECRET
// });

// const uploadFile = async (req, res) => {
//   try {
//     const result = await cloudinary.uploader.upload(req.file.path);
//     res.json(result);
//   } catch (error) {
    
//   }
// }
const uploadFile = async (req, res) => {
  try {
    const { blog_id, user_id } = req.body;
    const uploaded_by = req.user?.userId;

    if (!blog_id) {
      return res.status(400).json({ error: 'blog_id is required' });
    }

    const result = await cloudinary.uploader.upload(req.file.path);
    const fileUrl = result.secure_url;
    const publicId = result.public_id;

    const [fileRecord] = await knex('uploads').insert({
      file_url: fileUrl,
      public_id: publicId,
      recipient_id: user_id,
      uploaded_by: uploaded_by,
      blog_id: blog_id, // Ensure blog_id is included here
    }).returning('*');

    res.json({ id: fileRecord.id, fileUrl: fileRecord.file_url });
  } catch (error) {
    console.error('Upload error:', error);
    res.status(500).json({ error: 'Failed to upload file' });
  }
};

const getUploadedFiles = async (req, res) => {
  try {
    const recipient_id = req.user?.userId; // Ensure the user is logged in

    if (!recipient_id) {
      return res.status(400).json({ error: 'User ID is required' });
    }

    // Fetch all files for the recipient
    const files = await knex('uploads')
      .where({ recipient_id });

    if (files.length === 0) {
      return res.status(404).json({ error: 'No files found' });
    }

    res.json(files);
  } catch (error) {
    console.error('Error fetching uploaded files:', error);
    res.status(500).json({ error: 'Failed to fetch files' });
  }
};




module.exports = { uploadFile, getUploadedFiles };


// const uploadFile = async (req, res) => {
//   try {
//     const allowedMimeTypes = ['application/pdf', 'application/zip', 'text/csv'];
//     if (!req.file) {
//       return res.status(400).json({ error: 'No file uploaded' });
//     }

//     if (!allowedMimeTypes.includes(req.file.mimetype)) {
//       return res.status(400).json({ error: 'Invalid file type' });
//     }

//     const result = await cloudinary.uploader.upload(req.file.path, {
//       resource_type: 'raw'
//     });

//     const user_id = req.user?.userId;
//     const blog_id = req.params.blogId;

//     if (!user_id || !blog_id) {
//       return res.status(400).json({ error: 'Missing user ID or blog ID' });
//     }

//     const [insertResult] = await knex('fields').insert({
//       cloudinary_url: result.secure_url,
//       public_id: result.public_id,
//       filename: req.file.originalname,
//       user_id,
//       blog_id
//     }).returning('id');

//     const insertedId = insertResult.id;

//     const uploadedFile = await knex('fields')
//       .where('id', insertedId)
//       .first();

//     res.json({
//       message: 'File uploaded successfully',
//       file: {
//         id: uploadedFile.id,
//         cloudinary_url: uploadedFile.cloudinary_url,
//         public_id: uploadedFile.public_id,
//         filename: uploadedFile.filename,
//         user_id: uploadedFile.user_id,
//         blog_id: uploadedFile.blog_id,
//         created_at: uploadedFile.created_at,
//         updated_at: uploadedFile.updated_at
//       }
//     });
//   } catch (error) {
//     console.error('Upload error:', error);
//     res.status(500).json({ error: 'Upload failed' });
//   }
// };


// const downloadFile = async (req, res) => {
//   try {
//     // Fetch the file details from the database
//     const file = await knex('fields')
//       .where({ id: req.params.id })
//       .first();

//     if (!file) {
//       return res.status(404).json({ error: 'File not found' });
//     }

//     // Ensure the user is logged in and matches the file's user_id
//     if (req.user?.userId !== file.user_id) {
//       return res.status(403).json({ error: 'You do not have permission to access this file' });
//     }

//     // Ensure the blog_id matches the one associated with the file (if necessary)
//     if (req.params.blogId && req.params.blogId !== String(file.blog_id)) {
//       return res.status(403).json({ error: 'Invalid blog ID for this file' });
//     }

//     // Redirect to the Cloudinary URL to download the file
//     res.redirect(file.cloudinary_url);
//   } catch (error) {
//     console.error('Download error:', error);
//     res.status(500).json({ error: 'Download failed' });
//   }
// };



// const uploadFile = async (req, res) => {
  
//   // console.log(req.file)
//   try {
//     if (!req.file) {
//       return res.status(400).json({ error: 'No file uploaded' });
//     }

//     const result = await cloudinary.uploader.upload(req.file.path, {
//       resource_type: 'raw'
//     });

//     // Store file info in database
//     const [id] = await knex('files').insert({
//       cloudinary_url: result.secure_url,
//       public_id: result.public_id,
//       filename: req.file.originalname
//     }).returning('id');

//     res.json({ message: 'File uploaded successfully', id, url: result.secure_url });
//   } catch (error) {
//     console.error('Upload error:', error);
//     res.status(500).json({ error: 'Upload failed' });
//   }
// };

// const downloadFile = async (req, res) => {
//   try {
//     const file = await knex('files').where({ id: req.params.id }).first();
//     if (!file) {
//       return res.status(404).json({ error: 'File not found' });
//     }

//     res.redirect(file.cloudinary_url);
//   } catch (error) {
//     console.error('Download error:', error);
//     res.status(500).json({ error: 'Download failed' });
//   }
// };

// module.exports = { uploadFile, downloadFile };