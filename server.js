// Will need to establish connection and dependencies through this file
const express = require("express");
const mongoose = require("mongoose");
const path = require("path");

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

// Defining routes to each html page
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname + "/public/index.html"));
});

app.get("/exercise", (req, res) => {
    res.sendFile(path.join(__dirname + "/public/exercise.html"));
});

app.get("/stats", (req, res) => {
    res.sendFile(path.join(__dirname + "/public/stats.html"));
});


mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
    useNewUrlParser: true,
    useFindAndModify: false
});

// routes
app.use(require("./routes/index"));

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
});