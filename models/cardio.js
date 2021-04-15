// Setting up cardio model    
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const cardioSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: "Must enter a name for workout"
  },
  distance: {
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

const Cardio = mongoose.model("Cardio", cardioSchema);

module.exports = Cardio;