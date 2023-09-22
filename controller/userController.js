var mongoose = require('mongoose');
const axios = require('axios');

const UserModel = require('./../models/userModel');

exports.registrationPage = function (req, res) {

    res.render("user/registration");

}

exports.homePage = function (req, res) {

    res.render("user/home");

}

exports.createUser = function (req, res) {

    console.log(req.body);


    let crateUserModel = new UserModel();
    crateUserModel.djName = req.body.djName;
    crateUserModel.firstName = req.body.firstName;
    crateUserModel.lastName = req.body.lastName;
    crateUserModel.email = req.body.email;
    crateUserModel.contactNumber = req.body.contactNumber;
    crateUserModel.instagramUsername = req.body.instagramUsername;
    crateUserModel.customername = req.body.customername
    crateUserModel.platformname = req.body.platformname

    crateUserModel.save((err, doc) => {

    })

    let data = JSON.stringify({
        "email_address": req.body.email,
        "status": "subscribed",
        "merge_fields": {
            "FNAME": req.body.firstName,
            "LNAME": req.body.lastName
        }
    });

    let config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: 'https://us14.api.mailchimp.com/3.0/lists/e0b5292ee0/members',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Basic a2V5OjQzMWEyZjgwM2M0MmNjODFhMWJmMzZjYmFjZTBiMDY1LXVzMTQ='
        },
        data: data
    };

    axios.request(config)
        .then((response) => {
            console.log(JSON.stringify(response.data));
        })
        .catch((error) => {
            console.log(error);
        });


    res.json({ msg: 'success' });
}