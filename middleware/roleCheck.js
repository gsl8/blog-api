const isAdmin = (req, res, next) => {
    if (!req.user) {
      return res.status(401).json({ message: 'Authentication required' });
    }
  
    if (req.user.role !== 'admin') {
      return res.status(403).json({ message: 'Admin access required' });
    }
  
    next();
  };
  
  const isAuthorOrAdmin = (req, res, next) => {
    if (!req.user) {
      return res.status(401).json({ message: 'Authentication required' });
    }
  
    if (req.user.role !== 'author' && req.user.role !== 'admin') {
      return res.status(403).json({ message: 'Not authorized' });
    }
  
    next();
  };
  
  module.exports = {
    isAdmin,
    isAuthorOrAdmin
  };