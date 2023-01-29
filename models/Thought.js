const { Schema, Types } = require('mongoose');

const userSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
    username: {
        required: true, 
        unique: true, 
        trim: true 
    },
    email: {
        type: String, 
        required: true, 
        unique: true, 
        match: [/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/], 
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },

    //thoughts, friends.
  },
  {
    toJSON: {
      virtuals: true,
      getters: true,
    },
    id: false,
  }
);

const User = model('user', userSchema);
module.exports = User;

//Create a virtual called friendCount that retrieves the length of the user's friends array field on query.