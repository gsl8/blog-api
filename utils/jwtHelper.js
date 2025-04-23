const jwt = require('jsonwebtoken');

const secretKey = process.env.JWT_SECRET || 'Zw+GVtnwuVyiMd+fQRA3/L8qesm7esxEf4LaweTCRVI=';

const generateToken = (payload) => {
  return jwt.sign(payload, secretKey, { expiresIn: '1h' });
};

const verifyToken = (token) => {
  return jwt.verify(token, secretKey);
};

module.exports = {
  generateToken,
  verifyToken,
};
