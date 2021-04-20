const router = require("express").Router();
const { Workout } = require("../models/Workout.js");
const Workout = require("../models/Workout");
const db = require("../models");

router.post("/api/workouts", ({ body }, res) => {
    db.Workout.create(body)
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});

// router.patch("/api/workouts/:id", async (req, res) => {
//     try {
//         const workout = await db.Workout.findOne({ _id: req.params.id })

//         if (workoutType === "cardio") {
//             workoutData.type = "cardio";
//             workoutData.name = cardioNameInput.value.trim();
//             workoutData.distance = Number(distanceInput.value.trim());
//             workoutData.duration = Number(durationInput.value.trim());
//         } else if (workoutType === "resistance") {
//             workoutData.type = "resistance";
//             workoutData.name = nameInput.value.trim();
//             workoutData.weight = Number(weightInput.value.trim());
//             workoutData.sets = Number(setsInput.value.trim());
//             workoutData.reps = Number(repsInput.value.trim());
//             workoutData.duration = Number(resistanceDurationInput.value.trim());
//         }

//     }
// })

// router.post("/api/workouts/bulk", ({ body }, res) => {
//     Workout.insertMany(body)
//         .then(dbWorkout => {
//             res.json(dbWorkout);
//         })
//         .catch(err => {
//             res.status(400).json(err);
//         });
// });

router.get("/api/workouts/range", (req, res) => {
    db.Workout.find({})
        .sort({ date: -1 })
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});

router.get("/api/workouts", (req, res) => {
    db.Workout.find({})
        .sort({ date: -1 })
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});

module.exports = router;