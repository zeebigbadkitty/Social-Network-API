const { Schema, Types, model} = require('mongoose');
const reactionSchema = require('./Reaction');

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
    },
    reaction: [reactionSchema]
  },
  {
    toJSON: {
      getters: true,
    },
    id: false,
  }
);

thoughtSchema.virtual("formattedDate").get(function() {
    const date = this.createdAt;
    return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
  });


const Thought = model('thought', thoughtSchema);
module.exports = Thought;

// Create a virtual called reactionCount that retrieves the length of the thought's reactions array field on query.