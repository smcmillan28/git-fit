// Setting up resistance model    
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const resistanceSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: "Must enter a name for workout"
  },
  weight: {
    type: Number,
    required: "Must enter a valid number"
  },
  sets: {
    type: Number,
    required: "Must enter a valid number"
  },
  reps: {
    type: Number,
    required: "Must enter a valid number"
  },
  duration: {
    type: Number,
    required: "Must enter a valid number"
  },
  date: {
    type: Date,
    default: Date.now
  }
});

const Resistance = mongoose.model("Resistance", resistanceSchema);

module.exports = Resistance;