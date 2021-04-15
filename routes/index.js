// Importing dependencies
const router = require('express').Router();
const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');

// Define middleware
// router.use('/', homeRoutes);
router.use('/api', apiRoutes);

// Exporting to use in server.js file
module.exports = router;