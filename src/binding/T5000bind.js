const uuid = require("../idgenerator/Idgenerator");

exports._bindcreate = function (req_body) {
  var obj = {};
  obj.prayerId = uuid.generateV1();
  if (req_body.hasOwnProperty("prayerdate")) {
    if (req_body.prayerdate != "") {
      obj.prayerDate = req_body.prayerdate;
    } else {
      return false;
    }
  } else {
    return false;
  }
  obj.shehriStart = _check_key_value(req_body, "shehristart");
  obj.shehriFinish = _check_key_value(req_body, "shehrifinish");
  obj.fajrAzan = _check_key_value(req_body, "fajrazan");
  obj.fajrIqamah = _check_key_value(req_body, "fajriqamah");
  obj.sunrise = _check_key_value(req_body, "sunrise");
  obj.dhuhrAzan = _check_key_value(req_body, "dhuhrazan");
  obj.dhuhrIqamah = _check_key_value(req_body, "dhuhriqamah");
  obj.asrAzan = _check_key_value(req_body, "asrazan");
  obj.asrIqamah = _check_key_value(req_body, "asriqamah");
  obj.sunset = _check_key_value(req_body, "sunset");
  obj.iftarStart = _check_key_value(req_body, "iftarstart");
  obj.iftarFinish = _check_key_value(req_body, "iftarfinish");
  obj.magribAzan = _check_key_value(req_body, "magribazan");
  obj.magribIqamah = _check_key_value(req_body, "magribiqamah");
  obj.ishaAzan = _check_key_value(req_body, "ishaazan");
  obj.ishaIqamah = _check_key_value(req_body, "ishaiqamah");
  obj.jummahFlg = _check_key_value(req_body, "jummahflg");
  obj.jummahAzan = _check_key_value(req_body, "jummahazan");
  obj.jummahKhuthbha = _check_key_value(req_body, "jummahkhuthba");
  obj.jummahIqamah = _check_key_value(req_body, "jummahiqamah");
  obj.createdBy = _check_key_value(req_body, "createdby");
  obj.updatedBy = _check_key_value(req_body, "updatedby");
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
