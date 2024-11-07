const jwt = require('jsonwebtoken');

const authMiddleware = (role) => (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) return res.status(401).json({ message: 'Authentication token required' });

  jwt.verify(token, 'your_jwt_secret_key', (err, decoded) => {
    if (err) return res.status(403).json({ message: 'Invalid token' });

    if (role && decoded.role !== role) {
      return res.status(403).json({ message: 'Insufficient permissions' });
    }

    req.user = decoded;
    next();
  });
};

module.exports = authMiddleware;