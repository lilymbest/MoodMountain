const mongoose = require('mongoose');

const moodSchema = new mongoose.Schema({
    notes: String,
    sleep: Number,
    
    euphoric: {
        type: Number,
        default: 1,
      },
      happy:{
        type: Number,
        default: 1,
      },
      neutral: {
        type: Number,
        default: 1,
      },
      tense: {
        type: Number,
        default: 1,
      },
      sad: {
        type: Number,
        default: 1,
      },
      user: []
})

module.exports = mongoose.model('MoodData', moodSchema);