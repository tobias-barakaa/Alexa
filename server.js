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
const articleCreationRouter = require('./routes/client/articleCreationRoute');
const resumeRoute = require('./routes/client/resumeRoute');
const emailCopywritingRoute = require('./routes/client/emailCopywritingRoute');
//Admin
const blogAdminRoute = require('./routes/admin/blogRoute');
//upload
const uploadRoute = require('./routes/admin/uploadRoute');
const fileRoute = require('./routes/client/fileRoute');
const articleCreationRoute = require('./routes/admin/articleCreation')
const articleCreationUploadRoute = require('./routes/admin/articleCreationUploadFile')

// Resume CV Writing
const cvResumeWritingRoute = require('./routes/admin/cvResumeWritingRoute');
const cvResumeWritingUploadRoute = require('./routes/admin/resumeCvWritingUploadRoute');




// blog route import
const blogRoute = require('./routes/client/blogRoute');

// Load environment variables
dotenv.config();

const app = express();

// Middleware
app.use(helmet()); // Adds various HTTP headers for security
app.use(morgan('dev')); // Logging middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// CORS configuration
const allowedOrigins = [
  'http://127.0.0.1:5173',
  'http://localhost:5173',
  'http://localhost:3000',
  'http://localhost:3001',
  'http://localhost:3002',  
  'http://localhost:3003',
];
const corsOptions = {
  origin: (origin, callback) => {
    if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  methods: "GET,POST,PUT,DELETE,OPTIONS",
  credentials: true,
  optionsSuccessStatus: 200
};
app.use(cors(corsOptions));
app.use(cookieParser());

// Routes
app.use('/api/users', userRoutes);
app.use("/api/admin", AdminRoute);
app.use("/api/writer", writerRoute);
app.use('/api/articles', articleRoutes);
app.use('/api/admin/articles', articleAdminRoute);
app.use('/api/admin/writers', adminWritersRoute);
app.use('/api/writer/fill-profile', writerAccountProfileRoute);


// Admin
app.use('/api/blog', blogAdminRoute);

//Blog Route
app.use('/api/blog', blogRoute);

// Artice Creation
app.use('/api/articlecreation', articleCreationRouter);

// Resume Creation
app.use('/api/resume', resumeRoute);


// Email Creation
app.use('/api/emailcopywriting', emailCopywritingRoute);

// Admin file Route
app.use('/api/file/image', uploadRoute);

// client file Route Download

app.use('/api/file/url', fileRoute);

// admin Article Creation
app.use('/api/admin/article', articleCreationRoute)


// admin file Route Download

app.use('/api/article', fileRoute);

// admin Article Creation Upload
app.use('/api/admin/article', articleCreationUploadRoute)

// admin Resume CV Wrting 
app.use('/api/admin/cvwriting', cvResumeWritingRoute);

// admin Resume CV writing upload
app.use('/api/admin/resume', cvResumeWritingUploadRoute)




// 404 handler
app.use((req, res, next) => {
  res.status(404).json({ message: "Resource not found" });
});

// upload file

// Global error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(err.status || 500).json({
    message: err.message || 'An unexpected error occurred',
    error: process.env.NODE_ENV === 'production' ? {} : err
  });
});

const PORT = process.env.PORT || 5000;
const server = app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// Graceful shutdown
process.on('SIGTERM', () => {
  console.log('SIGTERM signal received: closing HTTP server');
  server.close(() => {
    console.log('HTTP server closed');
    process.exit(0); // Ensure process exits after server closes
  });
});

process.on('SIGINT', () => {
  console.log('SIGINT signal received: closing HTTP server');
  server.close(() => {
    console.log('HTTP server closed');
    process.exit(0); // Ensure process exits after server closes
  });
});


// const express = require('express');
// const dotenv = require('dotenv');
// const cors = require("cors");
// const cookieParser = require("cookie-parser");
// const helmet = require('helmet');
// const morgan = require('morgan');

// // Route imports
// const AdminRoute = require('./routes/admin/adminRoute');
// const userRoutes = require('./routes/client/clientRoute');
// const writerRoute = require('./routes/writer/writerRoute');
// const articleRoutes = require('./routes/client/articleRoute');
// const articleAdminRoute = require('./routes/admin/articleAdminRoute');
// const adminWritersRoute = require('./routes/admin/adminWritersRoute');
// const writerAccountProfileRoute = require('./routes/writer/writerAccountRoute');

// // Load environment variables
// dotenv.config();

// const app = express();

// // Middleware
// app.use(helmet()); // Adds various HTTP headers for security
// app.use(morgan('dev')); // Logging middleware
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// // CORS configuration

// const allowedOrigins = [
//   'http://127.0.0.1:5173',
//   'http://localhost:5173',
//   'http://localhost:3000',
//   'http://localhost:3001',
//   'http://localhost:3002',  
//   'http://localhost:3003',
// ]
// const corsOptions = {
//   origin: (origin, callback) => {
//       if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
//           callback(null, true)
//       } else {
//           callback(new Error('Not allowed by CORS'));
//       }
//   },
//   methods: "GET,POST,PUT,DELETE,OPTIONS",
//   credentials:true,         
//   optionsSuccessStatus: 200
// }

// app.use(cors(corsOptions));
// app.use(cookieParser());




// // Routes
// app.use('/api/users', userRoutes);
// app.use("/api/admin", AdminRoute);
// app.use("/api/writer", writerRoute);
// app.use('/api/articles', articleRoutes);
// app.use('/api/admin/articles', articleAdminRoute);
// app.use('/api/admin/writers', adminWritersRoute);
// app.use('/api/writer/fill-profile', writerAccountProfileRoute);

// 404 handler
// app.use((req, res, next) => {
//   res.status(404).json({ message: "Resource not found" });
// });

// app.use((err, req, res, next) => {
//   console.error(err.stack);
//   const status = err.status || 500;
//   res.status(status).json({
//     message: err.message || 'An unexpected error occurred',
//     error: process.env.NODE_ENV === 'production' ? {} : err
//   });
// });

// // Global error handle
// const server = app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });

// process.on('SIGTERM', () => {
//   console.log('SIGTERM signal received: closing HTTP server');
//   server.close(() => {
//     console.log('HTTP server closed');
//     process.exit(0); // Ensure process exits after server closes
//   });
// });

// process.on('SIGINT', () => {
//   console.log('SIGINT signal received: closing HTTP server');
//   server.close(() => {
//     console.log('HTTP server closed');
//     process.exit(0); // Ensure process exits after server closes
//   });
// });


// Global error handler
// app.use((err, req, res, next) => {
//   console.error(err.stack);
//   res.status(err.status || 500).json({
//     message: err.message || 'An unexpected error occurred',
//     error: process.env.NODE_ENV === 'production' ? {} : err
//   });
// });

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });

// // Graceful shutdown
// process.on('SIGTERM', () => {
//   console.log('SIGTERM signal received: closing HTTP server');
//   app.close(() => {
//     console.log('HTTP server closed');
//   });
// });















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


