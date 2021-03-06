var md5 = require('md5');

exports.encrypt = function(str) {
    return md5(str);
};