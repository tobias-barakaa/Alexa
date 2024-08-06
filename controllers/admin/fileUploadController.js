// controllers/fileUploadController.js
const cloudinary = require('cloudinary').v2;
const knex = require("../../db/db.js");

// Cloudinary configuration
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

exports.uploadFile = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: 'No file uploaded' });
    }

    const result = await cloudinary.uploader.upload(req.file.path, {
      resource_type: 'auto'
    });

    // Store file info in database
    const [id] = await knex('files').insert({
      cloudinary_url: result.secure_url,
      public_id: result.public_id,
      filename: req.file.originalname
    });

    res.json({ message: 'File uploaded successfully', id, url: result.secure_url });
  } catch (error) {
    console.error('Upload error:', error);
    res.status(500).json({ error: 'Upload failed' });
  }
};

exports.downloadFile = async (req, res) => {
  try {
    const file = await knex('files').where({ id: req.params.id }).first();
    if (!file) {
      return res.status(404).json({ error: 'File not found' });
    }

    res.redirect(file.cloudinary_url);
  } catch (error) {
    console.error('Download error:', error);
    res.status(500).json({ error: 'Download failed' });
  }
};