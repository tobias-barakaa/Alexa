const knex = require("../../db/db.js");


const getEmailCopywritingRequests = async (req, res) => {
    try {
      const userId = req.user?.userId;
      const userRole = req.user?.role;
  
      // Check if the user is logged in
      if (!userId) {
        return res.status(400).json({
          status: 400,
          error: 'Bad Request',
          message: 'User ID is required. Please ensure you are logged in and try again.',
          type: 'Client Error'
        });
      }
  
      // Build the query
      let query = knex('emailcopywriting')
        .select(
          'id',
          'project_type',
          'project_description',
          'duration',
          'word_count',
          'cost',
          'status',
          'created_at',
          'updated_at',
          'user_id'
        );
  
      // If the user is not an admin, filter by their user ID
      if (userRole !== 'admin') {
        query = query.where({ user_id: userId });
      }
  
      const requests = await query;
  
      // Check if any requests were found
      if (requests.length === 0) {
        return res.status(404).json({
          status: 404,
          error: 'Not Found',
          message: 'No email copywriting requests found.',
          type: 'Client Error'
        });
      }
  
      // Respond with the list of requests
      res.json(requests);
    } catch (error) {
      console.error('Error fetching email copywriting requests:', error);
  
      res.status(500).json({
        status: 500,
        error: 'Internal Server Error',
        message: 'An unexpected error occurred while fetching email copywriting requests. Please try again later.',
        type: 'Server Error'
      });
    }
  };


  const getEmailCopywritingById = async (req, res) => {
    try {
      const { id } = req.params;
      const userRole = req.user?.role;
  
      // Validate the provided ID
      if (!id) {
        return res.status(400).json({
          status: 400,
          error: 'Bad Request',
          message: 'Request ID is required.',
          type: 'Client Error'
        });
      }
  
      // Build the query to fetch the email copywriting request by ID
      const query = knex('emailcopywriting')
        .where({ 'emailcopywriting.id': id })
        .join('users', 'emailcopywriting.user_id', 'users.id')
        .select(
          'emailcopywriting.id',
          'emailcopywriting.project_type',
          'emailcopywriting.project_description',
          'emailcopywriting.duration',
          'emailcopywriting.word_count',
          'emailcopywriting.cost',
          'emailcopywriting.status',
          'emailcopywriting.created_at',
          'emailcopywriting.updated_at',
          'users.id as user_id',
          'users.full_name',
          'users.email'
        )
        .first();
  
      // Execute the query
      const request = await query;
  
      // Check if the request was found
      if (!request) {
        return res.status(404).json({
          status: 404,
          error: 'Not Found',
          message: `No email copywriting request found with ID ${id}.`,
          type: 'Client Error'
        });
      }
  
      // If the user is not an admin, check if they own the request
      if (userRole !== 'admin' && request.user_id !== req.user?.userId) {
        return res.status(403).json({
          status: 403,
          error: 'Forbidden',
          message: 'You do not have permission to view this request.',
          type: 'Client Error'
        });
      }
  
      // Respond with the request details
      res.json(request);
    } catch (error) {
      console.error('Error fetching email copywriting request by ID:', error);
  
      res.status(500).json({
        status: 500,
        error: 'Internal Server Error',
        message: 'An unexpected error occurred while fetching the email copywriting request. Please try again later.',
        type: 'Server Error'
      });
    }
  };
  
module.exports = {getEmailCopywritingRequests, getEmailCopywritingById};  