const router = require('express').Router();

const {
  getUsers,
  createUser,
  getSingleUser,
  updateUser,
  deleteUser
} = require('../../controllers/userController');

// get and create users
router.route('/').get(getUsers).post(createUser);

// get single user and update user by ID
router.route('/:userId').get(getSingleUser).put(updateUser).delete(deleteUser);

module.exports = router;