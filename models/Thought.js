const { Schema, Types } = require('mongoose');

const thoughtSchema = new Schema(
  {
    thoughtId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
    thoughtText: {
        type: String, 
        required: true,
        minlength: 1, 
        maxlength: 280,
    },
    username: {
        type: String, 
        required: true, 
    },
    createdAt: {
      type: Date,
      default: Date.now,
      //Use a getter method to format the timestamp on query
    },
    reactions: {
    //reactions (These are like replies) Array of nested documents created with the reactionSchema
    },
  },
  {
    toJSON: {
      getters: true,
    },
    id: false,
  }
);

const Thought = model('thought', thoughtSchema);
module.exports = Thought;

// Create a virtual called reactionCount that retrieves the length of the thought's reactions array field on query.