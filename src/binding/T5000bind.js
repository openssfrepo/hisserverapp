const uuid = require("../idgenerator/Idgenerator");

exports._bindcreate = function (req_body) {
  var obj = {};
  obj.prayerId = uuid.generateV1();
  if (req_body.hasOwnProperty("prayerDate")) {
    if (req_body.prayerDate != "") {
      obj.prayerDate = req_body.prayerDate;
    } else {
      return false;
    }
  } else {
    return false;
  }
  obj.shehriStart = _check_key_value(req_body, "shehriStart");
  obj.shehriFinish = _check_key_value(req_body, "shehriFinish");
  obj.fajrAzan = _check_key_value(req_body, "fajrAzan");
  obj.fajrIqamah = _check_key_value(req_body, "fajrIqamah");
  obj.sunrise = _check_key_value(req_body, "sunrise");
  obj.dhuhrAzan = _check_key_value(req_body, "dhuhrazan");
  obj.dhuhrIqamah = _check_key_value(req_body, "dhuhrAzan");
  obj.asrAzan = _check_key_value(req_body, "asrAzan");
  obj.asrIqamah = _check_key_value(req_body, "asrIqamah");
  obj.sunset = _check_key_value(req_body, "sunset");
  obj.iftarStart = _check_key_value(req_body, "iftarStart");
  obj.iftarFinish = _check_key_value(req_body, "iftarFinish");
  obj.magribAzan = _check_key_value(req_body, "magribAzan");
  obj.magribIqamah = _check_key_value(req_body, "magribIqamah");
  obj.ishaAzan = _check_key_value(req_body, "ishaAzan");
  obj.ishaIqamah = _check_key_value(req_body, "ishaIqamah");
  obj.jummahFlg = _check_key_value(req_body, "jummahFlg");
  obj.jummahAzan = _check_key_value(req_body, "jummahAzan");
  obj.jummahKhuthbha = _check_key_value(req_body, "jummahKhuthbha");
  obj.jummahIqamah = _check_key_value(req_body, "jummahIqamah");
  obj.createdBy = _check_key_value(req_body, "createdBy");
  obj.updatedBy = _check_key_value(req_body, "updatedBy");
  return obj;
};

function _check_key_value(req_body, key) {
  if (req_body.hasOwnProperty(key)) {
    if (req_body[key] != "") {
      return req_body[key];
    } else {
      return "";
    }
  } else {
    return "";
  }
}
