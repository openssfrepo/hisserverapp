const express = require("express");
const router = express.Router();
var db = require('../db-config/db');

router.get("/getAllUser", (req, res) => {
  var sql = 'select * from usertbl';
  db.execute(sql).then(response => {
    var array = []
    response.forEach(result => {
      array.push({
        Name: result.username,
        SecurityCode: result.password
      })
    });
    var data = JSON.stringify({ "result": array })
    res.send(data).status(200);
  })
});

module.exports = router;
