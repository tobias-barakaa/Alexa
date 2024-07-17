const express = require('express');
const dotenv = require('dotenv');
const cors = require("cors");
const cookieParser = require("cookie-parser");
const helmet = require('helmet');
const morgan = require('morgan');

// Route imports
const AdminRoute = require('./routes/admin/adminRoute');
const userRoutes = require('./routes/client/clientRoute');
const writerRoute = require('./routes/writer/writerRoute');
const articleRoutes = require('./routes/client/articleRoute');
const articleAdminRoute = require('./routes/admin/articleAdminRoute');
const adminWritersRoute = require('./routes/admin/adminWritersRoute');
const writerAccountProfileRoute = require('./routes/writer/writerAccountRoute');

// Load environment variables
dotenv.config();

const app = express();

// Middleware
app.use(helmet()); // Adds various HTTP headers for security
app.use(morgan('dev')); // Logging middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// CORS configuration
const corsOptions = {
  origin: process.env.FRONTEND_URL || 'http://localhost:5173', // Adjust this to your frontend URL
  credentials: true,
  optionsSuccessStatus: 200
};
app.use(cors(corsOptions));

// Routes
app.use('/api/users', userRoutes);
app.use("/api/admin", AdminRoute);
app.use("/api/writer", writerRoute);
app.use('/api/articles', articleRoutes);
app.use('/api/admin/articles', articleAdminRoute);
app.use('/api/admin/writers', adminWritersRoute);
app.use('/api/writer/fill-profile', writerAccountProfileRoute);

// 404 handler
app.use((req, res, next) => {
  res.status(404).json({ message: "Resource not found" });
});

// Global error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(err.status || 500).json({
    message: err.message || 'An unexpected error occurred',
    error: process.env.NODE_ENV === 'production' ? {} : err
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// Graceful shutdown
process.on('SIGTERM', () => {
  console.log('SIGTERM signal received: closing HTTP server');
  app.close(() => {
    console.log('HTTP server closed');
  });
});















// const express = require('express');
// const bodyParser = require('body-parser');
// const dotenv = require('dotenv');
// const cors = require("cors");
// const cookieParser = require("cookie-parser");
// const AdminRoute = require('./routes/admin/adminRoute');
// const userRoutes = require('./routes/client/clientRoute');
// const writerRoute = require('./routes/writer/writerRoute');
// const articleRoutes = require('./routes/client/articleRoute');
// const articleAdminRoute = require('./routes/admin/articleAdminRoute');
// const adminWritersRoute = require('./routes/admin/adminWritersRoute');
// const writerAccountProfileRoute = require('./routes/writer/writerAccountRoute');

// dotenv.config();

// const app = express();

// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use(cors()); 
// app.use(cookieParser());
// app.use(bodyParser.json());

// app.use('/api/users', userRoutes);
// app.use("/api/admin", AdminRoute);
// app.use("/api/writer", writerRoute);
// app.use('/api/articles', articleRoutes);
// app.use('/api/admin/articles', articleAdminRoute);
// app.use('/api/admin/writers', adminWritersRoute);
// app.use('/api/writer/fill-profile', writerAccountProfileRoute);

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });



// const express = require('express');
// const bodyParser = require('body-parser');
// const dotenv = require('dotenv')
// const cors = require("cors");
// const cookieParser = require("cookie-parser");
// const AdminRoute = require('./routes/admin/adminRoute');
// const userRoutes = require('./routes/client/clientRoute');
// const writerRoute = require('./routes/writer/writerRoute');
// const articleRoutes = require('./routes/client/articleRoute');
// const articleAdminRoute = require('./routes/admin/articleAdminRoute');
// const adminWritersRoute = require('./routes/admin/adminWritersRoute');
// const writerAccountProfileRoute = require('./routes/writer/writerAccountRoute');

// dotenv.config();



// const app = express();

// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use(cors());
// app.use(cookieParser());
// app.use(bodyParser.json());


// app.use('/api/users', userRoutes);
// app.use("/api/admin", AdminRoute)
// app.use("/api/writer", writerRoute)

// app.use('/api/articles', articleRoutes);

// // Admin
// app.use('/api/admin/articles', articleAdminRoute);
// app.use('/api/admin/writers', adminWritersRoute);

// // Writer

// app.use('/api/writer/fill-profile', writerAccountProfileRoute)



// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}`);
// });


