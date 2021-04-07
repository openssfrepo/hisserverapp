const T1000Entity = require("../models/entities/T1000Entity");
const uuid = require("../idgenerator/Idgenerator");
const date = require("../dateUtil/DateUtil");
const md5 = require("../encrypt/EncryptMD5");
const _bind = require("../binding/T1000bind");

exports.createUser = function (req, res) {
  T1000Entity.findAll({
    where: {
      userName: `${req.body.username}`,
    },
  })
    .then((user) => {
      if (user.length > 0) {
        res.send({ result: false, msg: "user exists" }).status(200);
      } else {
        var obj = _bind._bindcreate(req.body);
        if (obj) {
          T1000Entity.findOrCreate({
            where: obj,
          })
            .then((user) => {
              res.send({ data: user, result: true }).status(200);
            })
            .catch((err) => {
              console.log(err);
              throw err;
            });
        } else {
          res.send({ result: false, msg: "required data missing" }).status(200);
        }
      }
    })
    .catch(function (err) {
      console.log(err);
      throw err;
    });
};

exports.findAllUser = function (req, res) {
  T1000Entity.findAll()
    .then((user) => {
      res.send({ data: user, result: true }).status(200);
    })
    .catch((err) => {
      throw err;
    });
};

exports.findUser = function (req, res) {
  var encryptpass = md5.encrypt(req.body.password);
  T1000Entity.findAll({
    where: {
      userName: `${req.body.username}`,
      password: encryptpass,
    },
  })
    .then((user) => {
      res.send({ data: user, result: true }).status(200);
    })
    .catch((err) => {
      throw err;
    });
};

exports.deleteUser = function (req, res) {
  var encryptpass = md5.encrypt(req.body.password);
  T1000Entity.destroy({
    where: {
      userName: `${req.body.username}`,
      userPass: encryptpass,
    },
  })
    .then((user) => {
      res.send({ data: user, result: true }).status(200);
    })
    .catch((err) => {
      throw err;
    });
};

exports.updateUser = function (req, res) {
  var encryptpass = md5.encrypt(req.body.password);
  T1000Entity.findAll({
    where: {
      userName: `${req.body.username}`,
      userPass: encryptpass,
    },
  }).then((user) => {
    if (user.length > 0) {
      var obj = _bind._bindupdate(req.body);
      if (Object.keys(obj).length > 0) {
        T1000Entity.update(obj, {
          where: {
            userName: `${req.body.username}`,
            password: encryptpass,
          },
        })
          .then((user) => {
            res.send({ data: user, result: true }).status(200);
          })
          .catch((err) => {
            throw err;
          });
      } else {
        res.send({ result: false, msg: "no item for update" }).status(200);
      }
    }else{
      res.send({ result: false, msg: "user not found." }).status(200);
    }
  });
};
