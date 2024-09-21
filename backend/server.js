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
const adminWritersRoute = require('./routes/admin/adminWritersRoute');
const writerAccountProfileRoute = require('./routes/writer/writerAccountRoute');
//upload
// const uploadRoute = require('./routes/admin/uploadRoute');
const fileRoute = require('./routes/client/fileRoute');

// wallet
const walletRoute = require('./routes/wallet/userWalletRoute');

// Resume CV Writing

// Email Copy Writing
const orderArticleRoute = require('./routes/client/orderArticleRoute');


// blog route import

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
app.use('/api/admin/writers', adminWritersRoute);
app.use('/api/writer/fill-profile', writerAccountProfileRoute);


// Admin

//Blog Route

// client file Route Download

app.use('/api/file/url', fileRoute);

// Order 
app.use('/api/order', orderArticleRoute);

app.get('/api/config/paypal', (req, res) => res.send({clientId: process.env.PAYPAL_CLIENT_ID}));

//wallet
app.use('/api/wallet', walletRoute);

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
