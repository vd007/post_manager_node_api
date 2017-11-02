var express = require('express');
var router = express.Router();
var users = require('../controllers/userController');
var auth = require('../common/jwtHelper');
var passportGoogle = require('../auth/google');

router.get('/registration', users.registration);

function mdl(req, res, next){
    next();
}

/* GET users listing. */
router.get('/login',mdl,users.login);

/* update users */
router.get('/update', auth.decode, users.update);


/* LOGOUT ROUTER */
router.get('/logout', function(req, res){
    req.logout();
    res.redirect('/');
});

/* GOOGLE ROUTER */
router.get('/google', passportGoogle.authenticate('google', { scope: 'https://www.google.com/m8/feeds' }));

router.get('/auth/google/welcome/',users.googleLogin);

module.exports = router;
