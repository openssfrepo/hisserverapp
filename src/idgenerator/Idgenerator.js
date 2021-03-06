const uuid = require('uuid');

exports.generateV1 = function() {
    return uuid.v1();
};
exports.generateV2 = function() {
    return uuid.v2();
}
exports.generateV3 = function() {
    return uuid.v3();
}
exports.generateV4 = function() {
    return uuid.v4();
}
exports.generateV5 = function() {
    return uuid.v5();
}
exports.validateV1 =function (uuid) {
    return uuid.validate(uuid) && uuid.version(uuid) === 1;
}
exports.validateV2 =function (uuid) {
    return uuid.validate(uuid) && uuid.version(uuid) === 2;
}
exports.validateV3 =function (uuid) {
    return uuid.validate(uuid) && uuid.version(uuid) === 3;
}
exports.validateV4 =function (uuid) {
    return uuid.validate(uuid) && uuid.version(uuid) === 4;
}
exports.validateV5 =function (uuid) {
    return uuid.validate(uuid) && version(uuid) === 5;
}