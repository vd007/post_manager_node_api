var jwt  = require('jsonwebtoken');

var Auth = {};


// generate the JWT
Auth.generate = function generateToken(req){
    var secret = process.env.JWT_SECRET || "VD007";
    var token = jwt.sign({
        username:  req.username,
        exp:   Math.floor(new Date().getTime()/1000) + 7*24*60*60; // Note: in seconds!
}, secret);  // secret is defined in the environment variable JWT_SECRET
    return token;
};

Auth.decode = function validate(req, res, next) {
        var token = req.headers.authorization;
        try {
            var decoded = jwt.verify(token, secret);
        } catch (e) {
            //return authFail(res);
            res.send("unauthorize");
        }
        if(!decoded || decoded.username !== req.username) {
            //return authFail(res);
            res.send("unauthorize");
        } else {
            //return privado(res, token);
            console.log(decoded.toJSON());
            next();
        }
};



module.exports = Auth;