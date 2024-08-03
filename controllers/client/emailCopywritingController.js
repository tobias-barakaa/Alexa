const knex = require("../../db/db.js");


const emailCopywritingCreate = async (req, res) => {
    try {
      const { projectType, projectDescription, deadline, wordCount, cost } = req.body;
  
      let userId = null;
      if (req.user && req.user.userId) {
        userId = req.user.userId;
      }
  
      // Prepare the new request object
      const newRequest = {
        user_id: userId,
        project_type: projectType,
        project_description: projectDescription,
        deadline: deadline,
        word_count: wordCount,
        cost: cost,
      };
  
      // Insert the new email copywriting request and return the inserted ID
      const [insertedId] = await knex('emailcopywriting')
        .returning('id')
        .insert(newRequest);
  
      // Prepare the response
      const responseMessage = userId 
        ? 'Email copywriting request created successfully and associated with your account' 
        : 'Email copywriting request created successfully. Log in to associate it with your account';
  
      res.status(201).json({ 
        message: responseMessage,
        requestId: insertedId
      });
  
    } catch (error) {
      console.error('Error creating email copywriting request:', error);
      res.status(500).json({ message: 'Error creating email copywriting request', error: error.message });
    }
  };
  
  

  const getEmailCopyWriting = async (req, res) => {
    try {
      // Ensure the user is authenticated
      const userId = req.user && req.user.userId;
  
      if (!userId) {
        return res.status(403).json({ message: 'User not authenticated. Access denied.' });
      }
  
      const thirtyMinutesAgo = new Date(Date.now() - 30 * 60 * 1000); // Calculate the time 30 minutes ago
  
      // Query for requests created by the user within the last 30 minutes
      const recentRequests = await knex('emailcopywriting')
        .where('user_id', userId)  // Filter by user ID
        .andWhere('created_at', '>=', thirtyMinutesAgo) // Filter by creation time
        .select('*');
  
      if (recentRequests.length > 0) {
        // If there are recent requests, return them
        return res.status(200).json({
          message: 'Recent email copywriting requests retrieved successfully.',
          requests: recentRequests,
        });
      } else {
        // If no recent requests, return all requests created by the user
        const allUserRequests = await knex('emailcopywriting')
          .where('user_id', userId) // Filter by user ID
          .select('*');
          
        return res.status(200).json({
          message: 'No recent requests found. Returning all requests created by the user.',
          requests: allUserRequests,
        });
      }
    } catch (error) {
      console.error('Error retrieving email copywriting requests:', error);
      res.status(500).json({ message: 'Error retrieving email copywriting requests', error: error.message });
    }
  };
  
  

//   const getEmailCopyWriting = async (req, res) => {
//     try {
//       let query = knex('emailcopywriting');
  
//       // If user is logged in, only fetch their requests
//       if (req.user && req.user.userId) {
//         query = query.where('user_id', req.user.userId);
//       } else {
//         // For non-logged in users, return an error
//         return res.status(401).json({ message: 'Please log in to view your requests' });
//       }
  
//       const requests = await query.select();
  
//       res.status(200).json({
//         message: 'Email copywriting requests retrieved successfully',
//         requests: requests
//       });
  
//     } catch (error) {
//       console.error('Error fetching email copywriting requests:', error);
//       res.status(500).json({ message: 'Error fetching email copywriting requests', error: error.message });
//     }
//   }
  

// const getEmailCopyWriting = async (req, res) => {
//     try {
//       const now = new Date();
//       const thirtyMinutesAgo = new Date(now - 30 * 60 * 1000); // 30 minutes ago
  
//       let query = knex('emailcopywriting');
  
//       // If user is logged in, only fetch their requests
//       if (req.user && req.user.userId) {
//         query = query
//           .where('user_id', req.user.userId)
//           .andWhere('created_at', '<', thirtyMinutesAgo); // Filter by creation time
//       } else {
//         // For non-logged in users, return an error
//         return res.status(401).json({ message: 'Please log in to view your requests' });
//       }
  
//       const requests = await query.select();
  
//       if (requests.length === 0) {
//         return res.status(404).json({ message: 'No email copywriting requests found.' });
//       }
  
//       res.status(200).json({
//         message: 'Email copywriting requests retrieved successfully',
//         requests: requests,
//       });
//     } catch (error) {
//       console.error('Error fetching email copywriting requests:', error);
//       res.status(500).json({ message: 'Error fetching email copywriting requests', error: error.message });
//     }
//   };
  


module.exports = {emailCopywritingCreate, getEmailCopyWriting}
