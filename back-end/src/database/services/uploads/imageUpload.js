const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
  destination: path.join(__dirname, '..', '..', '..', '..', 'public', 'images'),
  filename: (_req, file, callback) => {
    const { originalname, filename } = file;
    const ext = originalname.split('.')
    callback(null, `${Date.now()}.${ext[ext.length - 1]}`);
  },
});

const imageUpload = multer({ storage });

module.exports = imageUpload;