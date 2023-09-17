var mongoose = require('mongoose');
const UserModel = require('./../models/userModel');

exports.registrationPage = function (req, res) {

        res.render("user/registration");
    
}

exports.homePage = function (req, res) {

    res.render("user/home");

}

exports.createUser = function (req, res){

    console.log(req.body);
        

        let crateUserModel = new UserModel();
          crateUserModel.djName = req.body.djName;
          crateUserModel.firstName = req.body.firstName;
          crateUserModel.lastName = req.body.lastName;
          crateUserModel.email = req.body.email;
          crateUserModel.contactNumber = req.body.contactNumber;
          crateUserModel.instagramUsername = req.body.instagramUsername;

          crateUserModel.save((err, doc) => { 

          })
      
    
      res.json({msg:'success'});
}