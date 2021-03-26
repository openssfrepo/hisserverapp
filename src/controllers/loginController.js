// import models here
const T1000Entity = require("../models/entities/T1000Entity");
const Test = require("../models/entities/Test");
const JWT = require("../auth/AuthJWT");
const md5 = require("../encrypt/EncryptMD5");

exports.getUserInfo = function (req, res) {
  var encryptpass = md5.encrypt(req.body.password);
  T1000Entity.findAll({
    where: {
      userName: `${req.body.username}`,
      userPass: encryptpass,
    },
  })
    .then((user) => {
      if (user.length > 0) {
        var object = {
          username: user[0].userName,
          role: user[0].permissionId,
        };
        const accessTocken = JWT.generateJWT(object);
        console.log(accessTocken);
        res.send({ userinfo: user[0], accessTocken: accessTocken, result:true }).status(200);
      }else{
        res.send({result:false})
      }
    })
    .catch(function (err) {
      console.log(err);
      throw err;
    });
};

exports.getAuthTest = function (req, res) {
  Test.findAll().then((test) => {
    console.log(test);
    res.send(test).status(200);
  });
};
