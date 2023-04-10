var MongoClient= require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/"
const mongoose = require("mongoose");

var userSchema = new mongoose.Schema({

    id : {},
    name: String,
    email:String
});

var userModel=mongoose.model('users',userSchema);


exports.getUsers=function(req,res){
    mongoose.connect(
    "mongodb://localhost:27017/userdb",
    ).then(() => {
        userModel
        .find()
        .then(
            (data) => {
                res.send(data)
            });
        })
        .catch((err) => {
        console.log(err);
    })
}


exports.addUser=function(req,res){
    mongoose.connect(
    "mongodb://localhost:27017/userdb",
    ).then(() => {
        console.log(`CONNECTED TO MONGO!`);
        var user = new userModel({
            name : req.body.name,
            email: req.body.email
        }
        )
        user.save().then(
            console.log("Data Inserted "),
            res.send("Data Inserted Succesfully")
        )
    })
    .catch((err) => {
        console.log(err);
    })
}


exports.getUser=function(req,res){
    mongoose.connect(
    "mongodb://localhost:27017/userdb",
    ).then(() => {
        userModel
        .findById(req.params.id)
        .then(
            (data) => {
                console.log(data)
                res.send(data)
            });
        })
        .catch((err) => {
        console.log(err);
    })
}
