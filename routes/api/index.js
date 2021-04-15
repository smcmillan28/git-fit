// Import dependencies
const router = require('express').Router();
const workoutRoutes = require('./workoutRoutes');

// Define router paths
router.use('/workout', workoutRoutes);

// Export paths
module.exports = router;