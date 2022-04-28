const router = require('express').Router();

const {
  getUsers,
  createUser,
  getSingleUser,
  updateUser,
  deleteUser,
  addFriend,
  deleteFriend,
} = require('../../controllers/userController');

// get and create users
router.route('/').get(getUsers).post(createUser);

// get single user and update user by ID
router.route('/:userId').get(getSingleUser).put(updateUser).delete(deleteUser);

// add and delete friend from user's friend list
router.route('/:userId/friends/:friendId').put(addFriend).delete(deleteFriend);

module.exports = router;