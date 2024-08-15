// controllers/fileUploadController.js
const cloudinary = require('../../utils/cloudinary.js')
const knex = require("../../db/db.js");

const uploadFile = async (req, res) => {
  try {
    const { blog_id, user_id } = req.body;
    const uploaded_by = req.user?.userId;

    if (!blog_id) {
      return res.status(400).json({ error: 'blog_id is required' });
    }

    const result = await cloudinary.uploader.upload(req.file.path);
    console.log(result)
    const fileUrl = result.secure_url;
    const publicId = result.public_id;

    const [fileRecord] = await knex('uploads').insert({
      file_url: fileUrl,
      public_id: publicId,
      recipient_id: user_id,
      uploaded_by: uploaded_by,
      blog_id: blog_id, 
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

