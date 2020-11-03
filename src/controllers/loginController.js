// import models here
const T1000Entity = require("../models/entities/T1000Entity");
const Test = require("../models/entities/Test");
const JWT = require("../auth/AuthJWT");

exports.getUserInfo = function (req, res) {
  T1000Entity.findAll({
    where: {
      userName: `${req.body.username}`,
      userPass: `${req.body.password}`,
    },
  }).then((user) => {
    var object = {
      username: user[0].userName,
      role: user[0].permissionId,
    };
    const accessTocken = JWT.generateJWT(object);
    console.log(accessTocken);
    res.send({ userinfo: user[0], accessTocken: accessTocken }).status(200);
  });
};

exports.getAuthTest = function (req, res) {
    Test.findAll()
    .then(test =>{
        console.log(test);
        res.send(test).status(200);
    });
};
