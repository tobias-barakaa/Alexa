// controllers/fileUploadController.js
const cloudinary = require('cloudinary').v2;
const knex = require("../../db/db.js");

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

const uploadFile = async (req, res) => {
  try {
    const allowedMimeTypes = ['application/pdf', 'application/zip', 'text/csv'];
    if (!req.file) {
      return res.status(400).json({ error: 'No file uploaded' });
    }

    if (!allowedMimeTypes.includes(req.file.mimetype)) {
      return res.status(400).json({ error: 'Invalid file type' });
    }

    const result = await cloudinary.uploader.upload(req.file.path, {
      resource_type: 'raw'
    });

    const user_id = req.user?.userId;
    const blog_id = req.params.blogId;

    if (!user_id || !blog_id) {
      return res.status(400).json({ error: 'Missing user ID or blog ID' });
    }

    const insertResult = await knex('fields').insert({
      cloudinary_url: result.secure_url,
      public_id: result.public_id,
      filename: req.file.originalname,
      user_id,
      blog_id
    }).returning('id');

    if (!Array.isArray(insertResult) || insertResult.length === 0) {
      throw new Error('Failed to insert file information into the database');
    }

    const [id] = insertResult;

    res.json({ message: 'File uploaded successfully', id, url: result.secure_url });
  } catch (error) {
    console.error('Upload error:', error);
    res.status(500).json({ error: 'Upload failed' });
  }
};

const downloadFile = async (req, res) => {
  try {
    const file = await knex('fields').where({ id: req.params.id }).first();
    if (!file) {
      return res.status(404).json({ error: 'File not found' });
    }

    res.redirect(file.cloudinary_url);
  } catch (error) {
    console.error('Download error:', error);
    res.status(500).json({ error: 'Download failed' });
  }
};

module.exports = { uploadFile, downloadFile };

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