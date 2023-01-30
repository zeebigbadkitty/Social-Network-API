// /api/thoughts

// GET to get all thoughts

// GET to get a single thought by its _id

// POST to create a new thought (don't forget to push the created thought's _id to the associated user's thoughts array field)

// // example data
// {
//   "thoughtText": "Here's a cool thought...",
//   "username": "lernantino",
//   "userId": "5edff358a0fcb779aa7b118b"
// }
// PUT to update a thought by its _id

// DELETE to remove a thought by its _id


const router = require('express').Router();
const {getThought,getSingleThought,createThought,updateThought, deleteThought,addReaction, deleteReaction} = require ('../../controllers/thoughtController');

router.route('/').get(getThought).post(createThought);

router
  .route('/:thoughtId')
  .get(getSingleThought)
  .put(updateThought)
  .delete(deleteThought);

router.route('/:thoughtId/reactions').post(addReaction);
// /api/thoughts/:thoughtId/reactions

// POST to create a reaction stored in a single thought's reactions array field
router.route('/:thoughtId/reactions/:reactionId').delete(deleteReaction);
// DELETE to pull and remove a reaction by the reaction's reactionId value