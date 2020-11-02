var db = require("../db-config/db");

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
