const express = require('express');
const { check } = require('express-validator');
const router = express.Router();
const {
  getAllBlogs,
  getBlogById,
  createBlog,
  updateBlog,
  deleteBlog,
  getBlogsByCategory,
  searchBlogs
} = require('../controllers/blogController');
const auth = require('../middleware/auth');
const { isAuthorOrAdmin } = require('../middleware/roleCheck');
const { isBlogOwnerOrAdmin } = require('../middleware/ownerCheck');

// Temporary debug route for testing
router.get('/debug', async (req, res) => {
  res.json({ msg: 'Blog route works!' });
});

// Existing routes
router.get('/', getAllBlogs);
router.get('/search', searchBlogs);
router.get('/category/:categoryId', getBlogsByCategory);
router.get('/:id', getBlogById);

router.post(
  '/',
  [
    auth,
    isAuthorOrAdmin,
    [
      check('title', 'Title is required').not().isEmpty(),
      check('content', 'Content is required').not().isEmpty(),
      check('category', 'Category is required').not().isEmpty()
    ]
  ],
  createBlog
);

router.put(
  '/:id',
  [
    auth,
    isBlogOwnerOrAdmin,
    [
      check('title', 'Title is required').optional(),
      check('content', 'Content is required').optional(),
      check('category', 'Category is required').optional()
    ]
  ],
  updateBlog
);

router.delete('/:id', auth, isBlogOwnerOrAdmin, deleteBlog);

module.exports = router;
