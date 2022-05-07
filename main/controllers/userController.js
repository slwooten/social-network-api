const User = require('../models/User');

module.exports = {
  // gets all users
  getUsers(req, res) {
    User.find()
      .then((users) => res.json(users))
      .catch((err) => res.status(500).json(err));
  },

  // creates new user
  createUser(req, res) {
    User.create(req.body)
      .then((userData) => res.json(userData))
      .catch((err) => res.status(500).json(err));
  },

  // gets single user
  getSingleUser(req, res) {
    User.findOne({ _id: req.params.userId })
      .select('-__v')
      .then((user) =>
        !user
          ? res.status(404).json({ message: 'No user found with that ID' })
          : res.json(user)
      )
      .catch((err) => res.status(500).json(err));
  },

  // updates single user
  updateUser(req, res) {
    User.updateOne(
      {
        "userId": req.params.userId
      },
      {
        $set: { "username": req.body.username }
      }
    )
      .then((user) => res.json(user))
      .catch((err) => res.status(500).json(err));
  },

  // deletes user
  deleteUser(req, res) {
    User.deleteOne({ 'userId': req.params.userId })
      .then(() => res.json({ message: 'User deleted.' }))
      .catch((err) => res.status(500).json(err));
  },

  // adds friend
  addFriend(req, res) {
    User.updateOne(
      {
        'userId': req.params.userId
      },
      {
        $addToSet: { friends: req.params.friendId }
      }
    )
      .then(() => res.json({ message: 'Added Friend.' }))
      .catch((err) => res.status(500).json(err));
  },
  deleteFriend(req, res) {
    User.deleteOne(
      {
        'userId': req.params.userId
      },
      {
        $pull: { friends: req.params.friendId }
      }
    )
      .then(() => res.json({ message: 'Removed Friend.' }))
      .catch((err) => res.status(500).json(err));
  },
}
