const T3000Entity = require("../models/entities/T3000Entity");
const JWT = require("../auth/AuthJWT");

exports.create = function (req, res) {
  T3000Entity.create({
    prayerId: `${req.body.prayerId}`,
    prayerDate: `${req.body.prayerDate}`,
    shehriStart: `${req.body.shehriStart}`,
    shehriFinish: `${req.body.shehriFinish}`,
    fajrAzan: `${req.body.fajrAzan}`,
    fajrIqamah: `${req.body.fajrIqamah}`,
    sunrise: `${req.body.sunrise}`,
    dhuhrAzan: `${req.body.dhuhrAzan}`,
    dhuhrIqamah: `${req.body.dhuhrIqamah}`,
    asrAzan: `${req.body.asrAzan}`,
    asrIqamah: `${req.body.asrIqamah}`,
    iftarStart: `${req.body.iftarStart}`,
    iftarFinish: `${req.body.iftarFinish}`,
    magribAzan: `${req.body.magribAzan}`,
    magribIqamah: `${req.body.magribIqamah}`,
    ishaAzan: `${req.body.ishaAzan}`,
    ishaIqamah: `${req.body.ishaIqamah}`,
    jummahFlg: `${req.body.jummahFlg}`,
    jummahAzan: `${req.body.jummahAzan}`,
    jummahKhuthbhaFirst: `${req.body.jummahKhuthbhaFirst}`,
    jummahIqamahFirst: `${req.body.jummahIqamahFirst}`,
    jummahKhuthbhaSecond: `${req.body.jummahKhuthbhaSecond}`,
    jummahIqamahSecond: `${req.body.jummahIqamahSecond}`,
    sunset: `${req.body.sunset}`,
    updatedBy: `${req.body.updatedBy}`,
    updatedAt: `${req.body.updatedAt}`,
    createdBy: `${req.body.createdBy}`,
    createdAt: `${req.body.createdAt}`,
  }).then((response) => {
    console.log(response);
    res.send(response);
  });
};
exports.selectAll = function (req, res) {
  T3000Entity.findAll().then((response) => {
    res.send(response).status(200);
  });
};
exports.selectOne = function (req, res) {
  T3000Entity.findAll({
    where: {
      prayerDate: `${req.body.prayerDate}`,
    },
  }).then((response) => {

    res.send({results:response}).status(200);
  });
};
