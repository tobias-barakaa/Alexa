// const multer = require('multer');
// const path = require('path');

// const storage = multer({
//     storage: multer.diskStorage({}),
//     fileFilter: (req, file, cb) => {
//         const ext = path.extname(file.originalname);
//         if (ext !== '.csv' && ext !== '.pdf' && ext !== '.jpeg' && ext !== '.png' && ext !== '.jpg') {
//             cb(new Error('File type is not supported'), false);
//             return;
//         }
//         cb(null, true);
//     }
// })



// module.exports = storage;


const multer = require('multer');
const path = require('path');

// Set up storage configuration
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/'); // Directory where files will be stored
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); // Unique filename
  }
});

// Initialize multer with storage and file filter
const upload = multer({
  storage: storage,
  fileFilter: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    if (!['.csv', '.pdf', '.jpeg', '.png', '.jpg'].includes(ext)) {
      cb(new Error('File type is not supported'), false);
      return;
    }
    cb(null, true);
  }
});

module.exports = upload;
