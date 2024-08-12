const knex = require("../../db/db.js");
const axios = require("axios");
const cloudinary = require('../../utils/cloudinary.js')

// controllers/client/fileController.js

const downloadFile = async (req, res) => {
  try {
    const { fileId, blogId } = req.params;  // Assuming fileId and blogId are passed as URL parameters
    const userId = req.user?.userId; // Ensure the user is logged in

    if (!fileId || !blogId || !userId) {
      return res.status(400).json({ error: 'File ID, Blog ID, and User ID are required' });
    }

    // Fetch the file that matches the file_id, blog_id, and recipient_id
    const fileRecord = await knex('uploads')
      .where({ id: fileId, blog_id: blogId, recipient_id: userId })
      .first();

    if (!fileRecord) {
      return res.status(404).json({ error: 'File not found' });
    }

    res.json({ fileUrl: fileRecord.file_url });
  } catch (error) {
    console.error('Download error:', error);
    res.status(500).json({ error: 'Failed to download file' });
  }
};


const fetchAllUploads = async (req, res) => {
  try {
    const uploads = await knex('uploads').select('*');  // Fetch all columns from the 'uploads' table

    if (uploads.length === 0) {
      return res.status(404).json({ error: 'No uploads found' });
    }

    res.json(uploads);
  } catch (error) {
    console.error('Fetch uploads error:', error);
    res.status(500).json({ error: 'Failed to fetch uploads' });
  }
};

module.exports = { downloadFile, fetchAllUploads };




// const downloadFile = async (req, res) => {
//   try {
//     const { blog_id } = req.params;
//     const user_id = req.user.userId; // Get the current logged-in user

//     // Find the file associated with the blog and recipient user
//     const file = await knex('uploads')
//       .where({ blog_id: blog_id, recipient_id: user_id })
//       .first();

//     // If no file is found or the user is not authorized, return an error
//     if (!file) {
//       return res.status(404).json({ error: 'File not found or access denied' });
//     }

//     // If everything is okay, return the file URL
//     res.json({ fileUrl: file.file_url });
//   } catch (error) {
//     console.error('Download error:', error);
//     res.status(500).json({ error: 'Failed to retrieve the file' });
//   }
// };

// module.exports = { getFileForBlog };

// const downloadFile = async (req, res) => {
//   try {
//     const result = await cloudinary.uploader.upload(req.file.path);
//     res.json(result);
//   } catch (error) {
    
//   }
// }

// const downloadFile = async (req, res) => {
//   console.log(req.user, 'this is the user you have been waiting for');
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

//     // Fetch the file from Cloudinary
//     const response = await axios.get(file.cloudinary_url, {
//       responseType: 'stream', // Stream the file content
//     });

//     // Set the headers for file download
//     res.setHeader('Content-Disposition', `attachment; filename="${file.filename}"`);
//     res.setHeader('Content-Type', response.headers['content-type']);

//     // Pipe the file stream directly to the response
//     response.data.pipe(res);

//   } catch (error) {
//     console.error('Download error:', error);
//     res.status(500).json({ error: 'Download failed' });
//   }
// };

// const downloadFile = async (req, res) => {
//   console.log(req.user, 'this is the user you have been waiting for');
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

//     // Fetch the file from Cloudinary
//     const response = await axios.get(file.cloudinary_url, {
//       responseType: 'stream', // Stream the file content
//     });

//     // Set the headers for file download
//     res.setHeader('Content-Disposition', `attachment; filename="${file.filename}"`);
//     res.setHeader('Content-Type', response.headers['content-type']);

//     // Pipe the file stream directly to the response
//     response.data.pipe(res);

//   } catch (error) {
//     console.error('Download error:', error);
//     res.status(500).json({ error: 'Download failed' });
//   }
// };


// const downloadFile = async (req, res) => {
//   console.log(req.user, 'this is the user you have been waiting for')
//     try {
//       // Fetch the file details from the database
//       const file = await knex('fields')
//         .where({ id: req.params.id })
//         .first();
  
//       if (!file) {
//         return res.status(404).json({ error: 'File not found' });
//       }
  
//       // Ensure the user is logged in and matches the file's user_id
//       if (req.user?.userId !== file.user_id) {
//         return res.status(403).json({ error: 'You do not have permission to access this file' });
//       }
  
//       // Ensure the blog_id matches the one associated with the file (if necessary)
//       if (req.params.blogId && req.params.blogId !== String(file.blog_id)) {
//         return res.status(403).json({ error: 'Invalid blog ID for this file' });
//       }
  
//       // Redirect to the Cloudinary URL to download the file
//       res.redirect(file.cloudinary_url);
//     } catch (error) {
//       console.error('Download error:', error);
//       res.status(500).json({ error: 'Download failed' });
//     }
//   };

// module.exports = { downloadFile };