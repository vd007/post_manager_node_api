var jwt  = require('jsonwebtoken');
var secret = process.env.JWT_SECRET || "VD007";
var Auth = {};


// generate the JWT
Auth.generate = function generateToken(req){
    console.log(req);
    var token = jwt.sign({
        username:  req.username
    }, secret);  // secret is defined in the environment variable JWT_SECRET
    return token;
};

Auth.decode = function validate(req, res, next) {
        var token = req.headers.authorization;
        try {
            var decoded = jwt.verify(token, secret);
        } catch (e) {
            //return authFail(res);
            res.send("unauthorized");
        }
        if(!decoded) {
            //return authFail(res);
            res.send("unauthorize");
        } else {
            //return privado(res, token);
            console.log(decoded);
            next();
        }
};



module.exports = Auth;