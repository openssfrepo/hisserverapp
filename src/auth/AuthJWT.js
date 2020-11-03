
const jwt = require('jsonwebtoken');

const accessTokenSecret = 'hisappAuthAccessTocken';

exports.generateJWT = function(object){
    return jwt.sign(object, accessTokenSecret);
};

exports.authenticateJWT = (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (authHeader) {
        const token = authHeader.split(' ')[1];
        jwt.verify(token, accessTokenSecret, (err, user) => {
            if (err) {
                return res.sendStatus(403);
            }
            req.user = user;
            next();
        });
    } else {
        res.sendStatus(401);
    }
  };