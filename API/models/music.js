const mongoose = require('mongoose'); // import library

let newMusicSchema = mongoose.Schema({
    first_name: {
        type: String,
        required: true
    },
    last_name: {
        type: String,
        required: true
    },
    votes: {
        type: Number,
        required: true
    },
    musicfolder: []
})

let music = module.exports = mongoose.model("music", newMusicSchema)
