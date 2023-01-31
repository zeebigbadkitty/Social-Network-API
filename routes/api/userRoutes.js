// /api/users

// GET all users

// GET a single user by its _id and populated thought and friend data

// POST a new user:

// // example data
// {
//   "username": "lernantino",
//   "email": "lernantino@gmail.com"
// }
// PUT to update a user by its _id

// DELETE to remove user by its _id

// BONUS: Remove a user's associated thoughts when deleted.



const router = require('express').Router();
const {getUser,getSingleUser,createUser,updateUser, deleteUser, addFriend, deleteFriend} = require ('../../controllers/userController');

router.route('/').get(getUser).post(createUser);

router
  .route('/:userId')
  .get(getSingleUser)
  .put(updateUser)
  .delete(deleteUser);

  // /api/users/:userId/friends/:friendId

  router.route('/:userId/friends/:friendId').post(addFriend).delete(deleteFriend);


// (/api/user) brings us here.

module.exports = router;