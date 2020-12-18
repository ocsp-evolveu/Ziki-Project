const mongoose = require('mongoose'); // import library

let newMusicSchema = mongoose.Schema({
    content_Title: {
        type: String,
        required: true
    },
    uploaded_By: {
        type: String,
        required: true
    },
    content_Description: {
        type: String,
        required: true
    },
    creatormusicfolder: []
})

let creatormusic  = module.exports = mongoose.model("creatormusic", newMusicSchema)
