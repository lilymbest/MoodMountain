const Post = require('../models/moodData')

module.exports = {
    getAllPost,
    create
}

function create(req, res) {
    const mood = new mood(req.body)
    mood.save(function(){
        res.status(201).json(mood)
    })
}

