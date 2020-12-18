//Import libraries to use
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const fs = require('fs');
const bcrypt = require('bcrypt-nodejs')

// Create instance of Express library so we can code the API
const app = express();
//Make the instance use json format
app.use(express.json());
//make intance use body-parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.use(express.static('uploads'))

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
        cb(new Error("File not supported"), false);
    }
}
const upload = multer({
    storage: storage,
    limits: {
        fileSize: 1024 * 1024 * 3
    },
    
    fileFilter: fileFilter
})

const filevideo = (req, file, cb) => {
    if (file.mimetype === "video/mp4" || file.mimetype === "video/mwd") {
        cb(null, true);
    } else {
        cb(new Error("This is not a video file"), false);
    }
}

const uploadvideo = multer({
    storage: storage,
    limits: {
        fileSize: 1024 * 1024 * 1000
    },
    fileFilter: filevideo
})


//======================== Connection String =============================
const mongoose = require('mongoose'); // import library
mongoose.connect('mongodb://localhost/voting_office', { useNewUrlParser: true, useUnifiedTopology: true });
let db = mongoose.connection;

//Confirm connection to mongodb was successful
db.once('open', () => {
    console.log("connected to mongoDB successfully");
})

//Check if there are errors in the database
db.on('error', (err) => {
    console.log(err);
})

// load the model for newuser
let new_User = require('./models/newUser');

// load the model for photography
let photography = require('./models/photography');

let painting = require('./models/painting');


let music= require('./models/music');


//1st end-point i.e. this is the address the front end will target for a specific operation
app.get('/', (req, res) => {
    res.json("This is home page of API");
})

//get all users - usernames
app.get('/all_users', (req, res) => {
    let allUsers = [];
    new_User.find({}, (err, users) => {
        if (err) {
            res.json("error");
        }
        else {
            for (let i = 0; i < users.length; i++) {
                let dictn = {};
                dictn["id"] = users[i]['_id'];
                dictn["username"] = users[i]['username'];
                dictn["password"] = users[i]['password'];
                allUsers.push(dictn);
            }
            res.json(allUsers);
        }
    });

})

//register new users
app.post('/register', (req, res) => {
    let newUser = new new_User();
    const hash = bcrypt.hashSync(req.body.password);
    newUser.username = req.body.username;
    //password encryption
    newUser.password = hash ;

    newUser.save((err) => {
        if (err) {
            res.json("error registering user");
        } else {
            res.json("registration successful");
        }
    });

})

//login existing users
app.post('/login', (req, res,next) => {
    new_User.find({ username: req.body.username }, (err, user) => {
        if (err) {
            next("failed");
        }
        else {
            if (user.length == 0 || user[0]['password'] !== req.body.password) {
                next("failed");
            }
            else {
                res.json("success");
            }
        }
    });
})

//Register and upload Photographer content
app.post('/uploadPhotography', upload.array('photos'), (req, res, next) => {
    try{
let phot = new photography();
    phot.first_name = req.body.first_Name
    phot.last_name = req.body.last_Name
    phot.votes = req.body.votes
    for (let i = 0; i < req.files.length; i++) {
      phot.pictures.push(req.files[i]);
    }
    phot.save((err) => {
        if (err) {
            next("error uploading images");
        } else {
            res.json("Uploaded images successfully");
        }
    });
    }catch(err){
next(err);
    }
    
})


//Register and upload Music content
// app.get('/uploadMusic ',uploadvideo.array('musicsUploads'), (req, res) => {
    // let mus = new music();
    // mus.first_Name = req.body.first_Name
    // mus.last_Name = req.body.last_Name
    // mus.votes = req.body.votes
    // for (let i = 0; i < req.files.length; i++) {
    //     mus.mymusics.push(req.files[i]);
    // }
    // mus.save((err) => {
    //     if (err) {
    //         res.json("error uploading music");
    //     } else {
    //         res.json("Uploaded music successfully");
    //     }
    // });
//     res.json("see videos")
// })

app.post('/uploadMusic',uploadvideo.array("musicsUploads"), (req,res,next) =>{
    try{
    let mus = new music();
    mus.first_Name = req.body.first_Name
    mus.last_Name = req.body.last_Name
    mus.votes = req.body.votes
    for (let i = 0; i < req.files.length; i++) {
        mus.mymusics.push(req.files[i]);
    }
    mus.save((err) => {
        if (err) {
            next("error uploading music");
        } else {
            res.json("Uploaded music successfully");
        }
    });
}
catch(err){
    next(err)
}
})

//Register and upload Painting content
app.post('/uploadPainting', upload.array('paintingfolder'), (req, res) => {
    let pan = new painting();
    pan.first_Name = req.body.first_Name
    pan.last_Name = req.body.last_Name
    pan.votes = req.body.votes
    for (let i = 0; i < req.files.length; i++) {
        pan.mypaintings.push(req.files[i]);
    }
    pan.save((err) => {
        if (err) {
            res.json("error uploading painting");
        } else {
            res.json("Uploaded painting successfully");
        }
    });
})


//Get all photographers
app.get('/all_photographers', (req, res) => {
    photography.find({}, (err, photographers) => {
        if (err) {
            res.json("error");
        }
        else {
            res.json(photographers);
        }
    });

})
//========== Handle voting a photographer
app.post('/vote_photographer', (req, res) => {
    photography.updateOne({ _id: req.body.id },
        {
            $inc: {
                votes: 1
            }
        }, (err, voted) => {
            if (err) {
                res.json("error");
            } else {
                res.json("success")
            }
        })
})

//=========== Error Handler ----------------------------
app.use((req, res, next) => {
    const err = new Error("Not Found");
    err.status = 404;
    next(err);
})
app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.json({
        error: {
            status: err.status || 500,
            message: err.message
        }
    });

})
//=============================================================

//Declare a variable for our port to transmit on
//Process.env is used by cloud service if API is in the cloud and 3500 will be used by our computer to transmit
// '||' means 'OR' in JS
const port = process.env.PORT || 6001;

//Make instance of app listen for calls/requests
app.listen(port, () => console.log(`Server running on port: ${port}`));
