const mongoose = require("mongoose");

let newUserSchema = mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },

})

let newUser = module.exports = mongoose.model("newUser", newUserSchema)