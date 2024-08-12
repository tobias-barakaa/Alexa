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
    const { blog_id, user_id } = req.body; // Extract blog_id and recipient user_id from the request

    const result = await cloudinary.uploader.upload(req.file.path);

    const fileUrl = result.secure_url;
    const publicId = result.public_id;

    // Save the file details in the database
    const [fileRecord] = await knex('uploads').insert({
      file_url: fileUrl,
      public_id: publicId,
      recipient_id: user_id, // The user the file is for
      uploaded_by: req.user.id, // The admin uploading the file
      blog_id: blog_id,
    }).returning('*');

    res.json({ id: fileRecord.id, fileUrl: fileRecord.file_url });
  } catch (error) {
    console.error('Upload error:', error);
    res.status(500).json({ error: 'Failed to upload file' });
  }
};

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


module.exports = { uploadFile };

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