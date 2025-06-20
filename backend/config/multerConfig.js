const multer = require('multer');
const path = require('path');
const fs = require('fs');

const pendrivePath = 'home/buguy/Documentos/CODE/Sinos-Connect/uploads';

module.exports = {
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, pendrivePath);
    },
    filename: (req, file, cb) => {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
      const ext = path.extname(file.originalname);
      cb(null, file.fieldname + '-' + uniqueSuffix + ext);
    }
  }),
  fileFilter: (req, file, cb) => {
    const allowedTypes = ['image/jpeg', 'image/png', 'image/gif', 'video/mp4'];
    if (allowedTypes.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error('Tipo de arquivo não suportado'), false);
    }
  },
  limits: {
    fileSize: 50 * 1024 * 1024 // 50MB
  }
};

