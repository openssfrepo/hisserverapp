const uuid = require("../idgenerator/Idgenerator");
var md5 = require("../encrypt/EncryptMD5");

exports._bindcreate = function (req_body) {
  var obj = {};
  obj.userId = uuid.generateV1();
  if (req_body.hasOwnProperty("username")) {
    if (req_body.username != "") {
      obj.userName = req_body.username;
      obj.createdBy = req_body.username;
      obj.updatedBy = req_body.username;
    } else {
      return false;
    }
  } else {
    return false;
  }
  if (req_body.hasOwnProperty("password")) {
    if (req_body.password != "") {
      var encryptpass = md5.encrypt(req_body.password);
      obj.userPass = encryptpass;
    } else {
      return false;
    }
  } else {
    return false;
  }
  if (req_body.hasOwnProperty("userstatus")) {
    if (req_body.userstatus != "") {
      obj.userStatus = req_body.userstatus;
    } else {
      obj.userStatus = "0";
    }
  } else {
    obj.userStatus = "0";
  }
  if (req_body.hasOwnProperty("usertype")) {
    if (req_body.usertype != "") {
      obj.userType = req_body.usertype;
    } else {
      obj.userType = "0";
    }
  } else {
    obj.userType = "0";
  }
  if (req_body.hasOwnProperty("permissionid")) {
    if (req_body.permissionid != "") {
      obj.permissionId = req_body.permissionid;
    } else {
      obj.permissionId = "0";
    }
  } else {
    obj.permissionId = "0";
  }
  if (req_body.hasOwnProperty("name")) {
    if (req_body.name != "") {
      obj.name = req_body.name;
    } else {
      obj.name = "";
    }
  } else {
    obj.name = "";
  }
  if (req_body.hasOwnProperty("email")) {
    if (req_body.email != "") {
      obj.email = req_body.email;
    } else {
      obj.email = "";
    }
  } else {
    obj.email = "";
  }
  if (req_body.hasOwnProperty("phoneno")) {
    if (req_body.phoneno != "") {
      obj.phoneNo = req_body.phoneno;
    } else {
      obj.phoneNo = "";
    }
  } else {
    obj.phoneNo = "";
  }
  return obj;
};

exports._bindupdate = function (req_body) {
  var obj = {};
  if (req_body.hasOwnProperty("updatepassword")) {
    var encryptpass = md5.encrypt(req_body.updatepassword);
    obj.userPass = encryptpass;
  }
  if (req_body.hasOwnProperty("userstatus")) {
    obj.userStatus = req_body.userstatus;
  }
  if (req_body.hasOwnProperty("usertype")) {
    obj.userType = req_body.usertype;
  }
  if (req_body.hasOwnProperty("permissionid")) {
    obj.permissionId = req_body.permissionid;
  }
  if (req_body.hasOwnProperty("name")) {
    obj.name = req_body.name;
  }
  if (req_body.hasOwnProperty("email")) {
    obj.email = req_body.email;
  }
  if (req_body.hasOwnProperty("phoneno")) {
    obj.phoneNo = req_body.phoneno;
  }
  if (req_body.hasOwnProperty("updatedby")) {
    obj.updatedBy = req_body.updatedby;
  }
  return obj;
};
