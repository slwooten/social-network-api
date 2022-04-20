const { ObjectId } = require('mongodb/lib');
const { Schema, model } = require('mongoose');

exports.reactionSchema = new Schema({
  reactionId: {
    type: Schema.Types.ObjectId,
    default: ObjectId({}),
  },
  reactionBody: {
    type: String,
    required: true,
    maxlength: 280,
  },
  username: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
});

