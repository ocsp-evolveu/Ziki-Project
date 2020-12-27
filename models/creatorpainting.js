const mongoose = require('mongoose'); // import library

let newPaintingSchema = mongoose.Schema({
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
    creatorpaintingfolder: []
})

let creatorpainting  = module.exports = mongoose.model("creatorpainting", newPaintingSchema)
