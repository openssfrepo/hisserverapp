const Test = require("../models/entities/Test");
const T1000Entity = require("../models/entities/T1000Entity");
const uuid = require("../idgenerator/Idgenerator");
const date = require("../dateUtil/DateUtil")
const md5 = require("../encrypt/EncryptMD5")

exports.findAllTest = function (req, res) {
    Test.findAll()
        .then(test => {
            console.log(test);
            res.send(test).status(200);
        });
};

exports.findAllUser = function (req, res) {
    T1000Entity.findAll()
        .then(user => {
            console.log(user);
            res.send(user).status(200);
        });
};

exports.createUser = function (req, res) {

     var id = uuid.generateV1();
     var encryptpass = md5.encrypt('samplepass12345678')
     var encryptpass = md5.encrypt(req.body.password)
     T1000Entity.create({
        userId: 'u' + uuid,
        userName: `${req.body.username}`,
        userPass: encryptpass,
        userType: '02',
        profileId: 'p' + uuid,
        serviceId: 's'+ uuid,
        addressId: 'a'+ uuid,
        permissionId: 'p'+ uuid,
        activeFlg: '0',
        updatedBy: `${req.body.username}`,
        createdBy: `${req.body.username}`,
    })
    console.log(encryptpass)
    res.send({"userid":id, "pass":encryptpass})
}