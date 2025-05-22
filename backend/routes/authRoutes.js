const express = require('express');
const router = express.Router();

const { login } = require('../controllers/authController');
const middleware = require('../middlewares/authMiddleware');

router.post('/login', login);

module.exports = router;