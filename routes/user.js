const express = require('express');
const { check } = require('express-validator');
const router = express.Router();
const {
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser
} = require('../controllers/userController');
const auth = require('../middleware/auth');
const { isAdmin } = require('../middleware/roleCheck');
const { isAccountOwnerOrAdmin } = require('../middleware/ownerCheck');


router.get('/', auth, isAdmin, getAllUsers);


router.get('/:id', getUserById);

router.put(
  '/:id',
  [
    auth,
    isAccountOwnerOrAdmin,
    [
      check('name', 'Name is required').optional(),
      check('email', 'Please include a valid email').optional().isEmail(),
      check('bio', 'Bio cannot exceed 500 characters').optional().isLength({ max: 500 })
    ]
  ],
  updateUser
);


router.delete('/:id', auth, isAdmin, deleteUser);

module.exports = router;