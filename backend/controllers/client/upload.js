const cloudinary = require('../../utils/cloudinary.js');
const knex = require("../../db/db.js");

const uploadCvWritingFile = async (req, res) => {
    try {
      const { resumes_id, user_id } = req.body;
      const uploaded_by = req.user?.userId;
  
      if (!resumes_id || !user_id) {
        return res.status(400).json({ error: 'resumes_id and user_id are required' });
      }
  
      // Upload the file to Cloudinary
      const result = await cloudinary.uploader.upload(req.file.path);
      const fileUrl = result.secure_url;
      const publicId = result.public_id;
  
      // Insert the file data into the cvwriting_uploads table
      const [fileRecord] = await knex('cvwriting_uploads').insert({
        file_url: fileUrl,
        public_id: publicId,
        recipient_id: user_id,  
        uploaded_by: uploaded_by,
        resumes_id: resumes_id,
      }).returning('*');
  
      res.json({ id: fileRecord.id, fileUrl: fileRecord.file_url });
    } catch (error) {
      console.error('Upload error:', error);
      res.status(500).json({ error: 'Failed to upload file' });
    }
  };


  const getCvWritingFiles = async (req, res) => {
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
      let query = knex('cvwriting_uploads')
        .where({ recipient_id })
        .join('resumes', 'cvwriting_uploads.resumes_id', 'resumes.id')
        .leftJoin('education', 'resumes.id', 'education.resume_id')
        .leftJoin('work_experience', 'resumes.id', 'work_experience.resume_id')
        .select(
          'cvwriting_uploads.id as file_id',
          'cvwriting_uploads.file_url',
          'cvwriting_uploads.public_id',
          'cvwriting_uploads.recipient_id',
          'cvwriting_uploads.uploaded_by',
          'cvwriting_uploads.resumes_id',
          'cvwriting_uploads.created_at',
          'resumes.full_name',
          'resumes.job_title',
          'resumes.email',
          'resumes.phone',
          'resumes.summary',
          'resumes.skills',
          'resumes.languages',
          'resumes.certifications',
          'resumes.achievements',
          'resumes.profile_pic',
          'resumes.cost',
          'resumes.status',
          'resumes.created_at as resume_created_at',
          'resumes.updated_at as resume_updated_at',
          knex.raw(`
            jsonb_agg(
              jsonb_build_object(
                'education_id', education.id,
                'degree', education.degree,
                'institution', education.institution,
                'start_date', education.start_date,
                'end_date', education.end_date,
                'description', education.description
              )
            ) as education
          `),
          knex.raw(`
            jsonb_agg(
              jsonb_build_object(
                'work_experience_id', work_experience.id,
                'job_title', work_experience.job_title,
                'company', work_experience.company,
                'start_date', work_experience.start_date,
                'end_date', work_experience.end_date,
                'responsibilities', work_experience.responsibilities
              )
            ) as work_experience
          `)
        )
        .groupBy(
          'cvwriting_uploads.id',
          'resumes.id'
        );
  
      if (userRole !== 'admin') {
        query = query.select('cvwriting_uploads.resumes_id');
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
    

module.exports = { uploadCvWritingFile, getCvWritingFiles };




// controllers/fileUploadController.js
const cloudinary = require('../../utils/cloudinary.js')
const knex = require("../../db/db.js");
const dotenv = require('dotenv');
dotenv.config();



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

    const [fileRecord] = await knex('blog_upload').insert({
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

// const getUploadedFiles = async (req, res) => {
//   try {
//     const recipient_id = req.user?.userId; 

//     if (!recipient_id) {
//       return res.status(400).json({ error: 'User ID is required' });
//     }

//     const files = await knex('blog_upload')
//       .where({ recipient_id });

//     if (files.length === 0) {
//       return res.status(404).json({ error: 'No files found' });
//     }

//     res.json(files);
//   } catch (error) {
//     console.error('Error fetching uploaded files:', error);
//     res.status(500).json({ error: 'Failed to fetch files' });
//   }
// };

// import { Resend } from 'resend';
// const { Resend } = require('resend');
// // Initialize Resend with your API key
// const resendy = new Resend('re_8RPNPTMc_BLpxdoX2dqEG3p587yNC8jTp');



// const getUploadedFiles = async (req, res) => {
//   try {
//     const recipient_id = req.user?.userId;
//     console.log('this is the recipient_id', recipient_id)

//     if (!recipient_id) {
//       return res.status(400).json({ error: 'User ID is required' });
//     }

//     // Fetch files for the user
//     const files = await knex('blog_upload')
//       .where({ recipient_id });

//     if (files.length === 0) {
//       return res.status(404).json({ error: 'No files found' });
//     }

//     // Fetch the user's email from the database using the recipient_id
//     const user = await knex('users')
//       .select('email')
//       .where({ id: recipient_id })
//       .first();

//     if (!user) {
//       return res.status(404).json({ error: 'User not found' });
//     }

//     const userEmail = user.email;

//     // Generate the email content (HTML or plain text)
//     const emailContent = `
//       <h2>Your Uploaded Files</h2>
//       <ul>
//         ${files.map(file => `<li>${file.file_name} - <a href="${file.file_url}">Download</a></li>`).join('')}
//       </ul>
//     `;

//     // Send the email with Resend
//     const { data, error } = await resendy.emails.send({
//       from: 'YourApp tobiasbarakan@gmail.com',
//       to: [userEmail],
//       subject: "This is trying just",
//       html: emailContent,
//       tags: [
//         {
//           name: "category",
//           value: "Confirm Email"
//         }
//       ]
//     });

//     if (error) {
//       console.error('Error sending email:', error);
//       return res.status(500).json({ error: 'Failed to send email' });
//     }

//     console.log('Email sent successfully:', data);

//     // Respond with the list of files
//     res.json(files);
//   } catch (error) {
//     console.error('Error fetching uploaded files:', error);
//     res.status(500).json({ error: 'Failed to fetch files' });
//   }
// };


const { Resend } = require('resend');
// Initialize Resend with your API key
const resendy = new Resend(process.env.RESEND_API_KEY);


const getUploadedFiles = async (req, res) => {
  try {
    const recipient_id = req.user?.userId;
    console.log('this is the recipient_id', recipient_id);

    if (!recipient_id) {
      return res.status(400).json({ error: 'User ID is required' });
    }

    // Fetch files for the user
    const files = await knex('blog_upload')
      .where({ recipient_id });

    if (files.length === 0) {
      return res.status(404).json({ error: 'No files found' });
    }

    // Fetch the user's email from the database using the recipient_id
    const user = await knex('users')
      .select('email')
      .where({ id: recipient_id })
      .first();

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    const userEmail = user.email;

    // Generate the email content (HTML or plain text)
    const emailContent = `
       <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #ddd; border-radius: 8px; background-color: #f9f9f9;">
    <h2 style="color: #4A90E2;">Your Uploaded Files</h2>
    <p>Hello,</p>
    <p>We have uploaded the following files for you. You can download them using the buttons below:</p>
    <ul style="list-style-type: none; padding: 0;">
      ${files.map(file => `
        <li style="margin-bottom: 15px; padding: 10px; border: 1px solid #ddd; border-radius: 8px; background-color: #fff;">
          
          <a href="${file.file_url}" download="${file.file_name}" style="display: inline-block; margin-top: 10px; padding: 10px 20px; font-size: 16px; color: #fff; background-color: #4A90E2; text-decoration: none; border-radius: 5px;">Download</a>
        </li>`).join('')}
    </ul>
    <p>If you have any questions, feel free to contact our support team.</p>
    <p style="color: #777;">Thank you,<br>YourApp Team</p>
  </div>
    `;

    // Send the email with Resend
    const { data, error } = await resendy.emails.send({
      from: 'onboarding@resend.dev',  // Correct format
      to: [userEmail],
      subject: "Your Uploaded Files",
      html: emailContent,
    });

    if (error) {
      console.error('Error sending email:', error);
      return res.status(500).json({ error: 'Failed to send email' });
    }

    console.log('Email sent successfully:', data);

    // Respond with the list of files
    res.json(files);
  } catch (error) {
    console.error('Error fetching uploaded files:', error);
    res.status(500).json({ error: 'Failed to fetch files' });
  }
};


module.exports = { uploadFile, getUploadedFiles };
