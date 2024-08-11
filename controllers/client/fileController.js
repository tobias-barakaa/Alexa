const knex = require("../../db/db.js");


const downloadFile = async (req, res) => {
  console.log(req.user, 'this is the user you have been waiting for')
    try {
      // Fetch the file details from the database
      const file = await knex('fields')
        .where({ id: req.params.id })
        .first();
  
      if (!file) {
        return res.status(404).json({ error: 'File not found' });
      }
  
      // Ensure the user is logged in and matches the file's user_id
      if (req.user?.userId !== file.user_id) {
        return res.status(403).json({ error: 'You do not have permission to access this file' });
      }
  
      // Ensure the blog_id matches the one associated with the file (if necessary)
      if (req.params.blogId && req.params.blogId !== String(file.blog_id)) {
        return res.status(403).json({ error: 'Invalid blog ID for this file' });
      }
  
      // Redirect to the Cloudinary URL to download the file
      res.redirect(file.cloudinary_url);
    } catch (error) {
      console.error('Download error:', error);
      res.status(500).json({ error: 'Download failed' });
    }
  };

module.exports = { downloadFile };