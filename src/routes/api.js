const express = require("express");
const router = express.Router();
var db = require('../db-config/db');

router.get("/test", (req, res) => {
  var sql = 'select * from usertbl';
  db.getData(sql).then(response =>{
    var data = []
    response.forEach(result => {
      data.push({
        Name: result.username,
        SecurityCode: result.password
      })
  });
    res.send(data).status(200);
  })
});

module.exports = router;