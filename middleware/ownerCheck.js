const Blog = require('../models/blog');

const isBlogOwnerOrAdmin = async (req, res, next) => {
  try {
    const blog = await Blog.findById(req.params.id);
    
    if (!blog) {
      return res.status(404).json({ message: 'Blog not found' });
    }

    if (
      blog.author.toString() === req.user._id.toString() || 
      req.user.role === 'admin'
    ) {
      req.blog = blog; 
      return next();
    }

    return res.status(403).json({ message: 'Not authorized to modify this blog' });
  } catch (error) {
    console.error('Owner check middleware error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

const isAccountOwnerOrAdmin = (req, res, next) => {
  if (
    req.user._id.toString() === req.params.id || 
    req.user.role === 'admin'
  ) {
    return next();
  }

  return res.status(403).json({ message: 'Not authorized to modify this account' });
};

module.exports = {
  isBlogOwnerOrAdmin,
  isAccountOwnerOrAdmin
};