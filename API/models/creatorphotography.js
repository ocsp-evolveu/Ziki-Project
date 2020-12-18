const mongoose = require('mongoose'); // import library

let newPhotographySchema = mongoose.Schema({
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
    creatorphotographyfolder: []
})

let creatorphotography  = module.exports = mongoose.model("creatorphotography", newPhotographySchema)
