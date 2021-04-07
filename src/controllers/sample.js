var db = require("../db-config/db");
const uuid = require("../idgenerator/Idgenerator");
const md5 = require("../encrypt/EncryptMD5")

exports.findAll = function (req, res) {
  var sql = "select * from t1000e_user";
  db.execute(sql).then((response) => {
    var array = [];
    var i = 0;
    response.forEach((result) => {
      array.push({
        id: i,
        Name: result.user_name,
        SecurityCode: result.user_pass,
      });
      i++;
    });
    res.send(response).status(200);
  });
};
exports.findOneById = function (req, res) {
  var sql = `select * from t1000e_user where user_id = ${req.params.sampleId}`;
  db.execute(sql).then((response) => {
    var array = [];
    var i = 0;
    response.forEach((result) => {
      array.push({
        id: i,
        Name: result.user_name,
        SecurityCode: result.user_pass,
      });
      i++;
    });
    res.send(array).status(200);
  });
};
exports.getUUID = function (req, res) {
  res.send(
      // {
      //   uuid1 : uuid_v1,
      //   uuid1 : uuid_v2,
      //   uuid1 : uuid_v3,
      //   uuid1 : uuid_v4,
      //   uuid1 : uuid_v5,
      // }
      md5.encrypt("BSFsonnet1414")
    )
};
