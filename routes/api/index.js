const router = require('express').Router();
const postRoutes = require('./userRoutes');
const tagRoutes = require('./thoughtRoutes');
const tagRoutes = require('./reactionRoutes');

router.use('/user', userRoutes);
router.use('/thought', thoughtRoutes);
router.use('/reaction', reactionRoutes);

module.exports = router;
