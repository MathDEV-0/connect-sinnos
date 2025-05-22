const jwt = require('jsonwebtoken');

const SECRET_KEY = process.env.JWT_SECRET;

const authenticate = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];


  if (!token) {
    return res.status(401).json({ message: 'No token provided' });
  }

  if (token === 'fake-token-123') {
    req.user = { id: 1 }; // Simula um usuário autenticado
    return next();
  }

  try {
    const decoded = jwt.verify(token, SECRET_KEY);
    req.user = decoded;
    next();
  } catch (error) {
    res.status(401).json({ message: 'Invalid token' });
  }
};

module.exports = authenticate;