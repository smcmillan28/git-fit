// Import dependencies
const router = require('express').Router();
// const Workout = require('../models/Workout.js');

// Define get routes for each html page
router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname + "../public/index.html"));
});

router.get("/exercise", (req, res) => {
    res.sendFile(path.join(__dirname + "../public/exercise.html"));
});

router.get("/stats", (req, res) => {
    res.sendFile(path.join(__dirname + "../public/stats.html"));
});

// Export server
module.exports = router;

