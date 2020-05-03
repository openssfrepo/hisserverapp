const express = require("express");
const router = express.Router();
var db = require("../db-config/db");

router.get("/getAllUser", (req, res) => {
  var sql = "select * from usertbl";
  db.execute(sql).then((response) => {
    var array = [];
    var i = 0;
    response.forEach((result) => {
      array.push({
        id: i,
        Name: result.username,
        SecurityCode: result.password,
      });
      i++;
    });
    res.send(array).status(200);
  });
});

module.exports = router;
