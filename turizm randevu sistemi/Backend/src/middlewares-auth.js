const jwt = require('jsonwebtoken');
module.exports = (roles = []) => (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) return res.status(401).json({ error: 'Token gerekli' });
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    if (roles.length && !roles.includes(decoded.role)) return res.status(403).json({ error: 'Yetkisiz' });
    req.user = decoded;
    next();
  } catch {
    res.status(401).json({ error: 'Geçersiz token' });
  }
};