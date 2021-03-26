const T5000Entity = require("../models/entities/T5000Entity");
const JWT = require("../auth/AuthJWT");
const _bind = require("../binding/T5000bind");

exports.create = function (req, res) {
  T5000Entity.findAll({
    where: {
      prayerDate: `${req.body.prayerdate}`,
    },
  })
    .then((response) => {
      if (response.length > 0) {
        res
          .send({ result: false, msg: "schedule exist. try updated instead" })
          .status(200);
      } else {
        var obj = _bind._bindcreate(req.body);
        if (obj) {
          T5000Entity.findOrCreate({
            where: obj,
          })
            .then((response) => {
              res.send({ data: response, result: true }).status(200);
            })
            .catch((err) => {
              console.log(err);
              throw err;
            });
        }else{
          res.send({ result: false, msg: "required data missing" }).status(200);
        }
      }
    })
    .catch(function (err) {
      console.log(err);
      throw err;
    });
};
exports.selectAll = function (req, res) {
  T5000Entity.findAll()
    .then((response) => {
      res.send({ data: response, result: true }).status(200);
    })
    .catch((err) => {
      console.log(err);
      throw err;
    });
};
exports.selectOne = function (req, res) {
  T5000Entity.findAll({
    where: {
      prayerDate: `${req.body.prayerdate}`,
    },
  })
    .then((response) => {
      res.send({ data: response, result: true }).status(200);
    })
    .catch((err) => {
      console.log(err);
      throw err;
    });
};

exports.delete = function (req, res) {
  T1000Entity.destroy({
    where: {
      prayerDate: `${req.body.prayerdate}`,
    },
  })
    .then((response) => {
      res.send({ data: response, result: true }).status(200);
    })
    .catch((err) => {
      throw err;
    });
};

exports.update = function (req, res) {
  T1000Entity.findAll({
    where: {
      userName: `${req.body.prayerdate}`,
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
