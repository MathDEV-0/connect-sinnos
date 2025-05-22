const express = require('express');
const router = express.Router();
const uploadController = require('../controllers/uploadController');
const multer = require('multer');
const multerConfig = require('../config/multerConfig');
const authenticate = require('../middlewares/authMiddleware');

const upload = multer(multerConfig);

router.post('/',
  authenticate,
  upload.single('media'),
  uploadController.uploadFile
);

module.exports = router;