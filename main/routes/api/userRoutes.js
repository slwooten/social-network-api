const router = require('express').Router();

const {
  getUsers,
  createUser,
} = require('../../controllers/userController');

// get and create users
router.route('/').get(getUsers).post(createUser);

module.exports = router;