const mongoose = require('mongoose');

const moodSchema = new mongoose.Schema({
    euphoric: Number,
    Happy: Number,
    Neutral: Number,
    Tense: Number,
    Sad: Number,
})

module.exports = mongoose.model('MoodData', moodSchema);