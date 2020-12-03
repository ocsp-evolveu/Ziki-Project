const express = require("express");
const bodyparser = require("body-parser");
const cors = require("cors");
const fs = require("fs");
const mongoose = require("mongoose");
const nodemon = require("nodemon");
const { Console } = require("console");

//create instance for libraries and make it accept JSON format
 const app = express();
 
 app.use(express.json());
 app.use(bodyparser.urlencoded({extended:false}));
 app.use(cors());
 app.use(express.static('uploads'));  //uploads folder

 //connect the username and database to the API
 mongoose.connect("mongodb://localhost:27017/OCSP",{useNewUrlParser:true,useUnifiedTopology:true});

 let db = mongoose.connection; 
 //confirm connection to the mongodb was successful
 db.once("open",()=>{console.log("connected to mongodb successful");})
 //check if there is error in the database
 db.on("error",(err)=>{console.log(err);})
 //load model
 let new_Users = require("./models/newUser");
 //declare a variable for our port to transmit on
 const port = process.env.PORT || 6001;
 //make instance for our app to listen for calls and request
 app.listen(port,()=>console.log(`server running on port:${port}`));
 

 app.post('/submit', (req, res) => {
    let newUser = new new_Users();
    newUser.firstName = req.body.firstName;
    newUser.lastName = req.body.lastName;
    newUser.email = req.body.email;
    newUser.password = req.body.password;

    newUser.save((err) => {
        if (err) {
            res.json("error registering user");
        } else {
            res.json("registration successful");
        }
    });

})

app.post('/signin', (req, res) => {
    new_Users.find({ email: req.body.email }, (err, user) => {
        if (err) {
            res.json("failed");
        }
        else {
            if (user.length == 0 || user[0]['password'] !== req.body.password) {
                res.json("failed");
            }
            else {
                res.json("sign in successful");
            }
        }
    });
})



 //multer library allows uploads of images, videos into the database
 const multer = require('multer');
 const storage = multer.diskStorage({
     destination: (req, file, cb) => {
         cb(null, './uploads/');
     },
     filename: (req, file, cb) => {
         cb(null, file.originalname);
     }
 })
 const fileFilter = (req, file, cb) => {
    if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
        cb(null, true);
    } else {
        cb(null, false);
    }
}
const upload = multer({
    storage: storage,
    limits: {
        fileSize: 1024 * 1024 * 3
    },
    fileFilter: fileFilter
})
// load the model for photography 
let photography = require('./models/photography');
app.post('/uploadPhotography', upload.array('photos'), (req, res) => {
    let phot = new photography();
    phot.first_name = req.body.first_Name
    phot.last_name = req.body.last_Name
    phot.votes = req.body.votes
    for (let i = 0; i < req.files.length; i++) {
        phot.pictures.push(req.files[i]);
    }
    phot.save((err) => {
        if (err) {
            res.json("error uploading images");
        } else {
            res.json("Uploaded images successfully");
            
        }
    });
})
