const knex = require('../../db/db.js');


const axios = require("axios");
const cloudinary = require('../../utils/cloudinary.js')

// controllers/client/fileController.js
// const downloadFile = async (req, res) => {
//   const { userId } = req.params;

//   try {
//     const upload = await knex('uploads')
//       .where('recipient_id', userId)
//       .first();

//     if (!upload) {
//       return res.status(404).json({ error: 'No file found for this user' });
//     }

//     // Depending on how you want to handle the file, you could:
//     // 1. Redirect the user to the file URL (for cloud-hosted files like on Cloudinary)
//     res.redirect(upload.file_url);

//     // 2. Or stream the file directly to the client (useful for private file storage)
//     // e.g., if you download the file from a service and stream it to the client.
//   } catch (error) {
//     console.error('Error fetching the file:', error);
//     res.status(500).json({ error: 'An error occurred while fetching the file' });
//   }
// };


const downloadFile = async (req, res) => {
  const { userId } = req.params;

  try {
    const uploads = await knex('uploads')
      .where('recipient_id', userId)
      .select('*')
      .orderBy('created_at', 'desc');

    if (uploads.length === 0) {
      return res.status(404).json({ error: 'No files found for this user' });
    }

    res.json(uploads);
  } catch (error) {
    console.error('Error fetching the files:', error);
    res.status(500).json({ error: 'An error occurred while fetching the files' });
  }
};
const getFileId = async (req, res) => {
  const { fileId } = req.params;
  const userId = req.user.id;

  try {
    const file = await knex('uploads')  // Assuming 'uploads' is the correct table
      .where({ id: fileId, recipient_id: userId })
      .first();

    if (!file) {
      return res.status(404).json({ error: 'File not found or you don\'t have permission to access it' });
    }

    res.redirect(file.file_url);
  } catch (error) {
    console.error('Error downloading the file:', error);
    res.status(500).json({ error: 'An error occurred while downloading the file' });
  }
};


// const getFileId = async (req, res) => {
//     const { fileId } = req.params;
//     const userId = req.user.id; // Assuming you have authentication middleware
  
//     try {
//       const file = await knex('file_uploads')
//         .where({ id: fileId, recipient_id: userId })
//         .first();
  
//       if (!file) {
//         return res.status(404).json({ error: 'File not found or you don\'t have permission to access it' });
//       }
  
//       res.redirect(file.file_url);
//     } catch (error) {
//       console.error('Error downloading the file:', error);
//       res.status(500).json({ error: 'An error occurred while downloading the file' });
//     }
//   }



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

module.exports = { downloadFile, fetchAllUploads, getFileId };




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