const Test = require("../models/entities/Test");
const T1000Entity = require("../models/entities/T1000Entity");

exports.findAllTest = function (req, res) {
    Test.findAll()
    .then(test =>{
        console.log(test);
        res.send(test).status(200);
    });
};

exports.findAllUser = function (req, res) {
    T1000Entity.findAll()
    .then(user =>{
        console.log(user);
        res.send(user).status(200);
    });
};