// Setting up workout model    
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now
  },
  exercises: [
    {
      type: {
        type: String,
        required: "Must be either 'resistance' or 'cardio'"
      },
      name: {
        type: String,
        required: "Must be valid string"
      },
      duration: {
        type: Number,
      },
      distance: {
        type: Number,
      },
      weight: {
        type: Number,
      },
      reps: {
        type: Number,
      },
      sets: {
        type: Number,
      },
    }
  ]
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;