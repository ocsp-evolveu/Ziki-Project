const mongoose = require('mongoose'); // import library

let newPaintingSchema = mongoose.Schema({
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
    paintfolder: []
})

let painting = module.exports = mongoose.model("painting", newPaintingSchema);
