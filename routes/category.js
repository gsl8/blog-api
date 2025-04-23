const express = require('express');
const { check } = require('express-validator');
const router = express.Router();
const {
  getAllCategories,
  getCategoryById,
  createCategory,
  updateCategory,
  deleteCategory
} = require('../controllers/categoryController');
const auth = require('../middleware/auth');
const { isAdmin } = require('../middleware/roleCheck');


router.get('/', getAllCategories);


router.get('/:id', getCategoryById);


router.post(
  '/',
  [
    auth,
    isAdmin,
    [
      check('name', 'Name is required').not().isEmpty(),
      check('description', 'Description cannot exceed 500 characters').optional().isLength({ max: 500 })
    ]
  ],
  createCategory
);


router.put(
  '/:id',
  [
    auth,
    isAdmin,
    [
      check('name', 'Name is required').optional(),
      check('description', 'Description cannot exceed 500 characters').optional().isLength({ max: 500 })
    ]
  ],
  updateCategory
);


router.delete('/:id', auth, isAdmin, deleteCategory);

module.exports = router;