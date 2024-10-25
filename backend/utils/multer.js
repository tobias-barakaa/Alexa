const multer = require('multer');
const path = require('path');

const storage = multer({
    storage: multer.diskStorage({}),
    fileFilter: (req, file, cb) => {
        const ext = path.extname(file.originalname);
        if (ext !== '.csv' && ext !== '.pdf') {
            cb(new Error('File type is not supported'), false);
            return;
        }
        cb(null, true);
    }
})

module.exports = storage;
