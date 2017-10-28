var express = require('express');
var router = express.Router();
var users = require('../controllers/userController');

router.get('/registration', users.registration);

function mdl(req, res, next){
    next();
}

/* GET users listing. */
router.get('/login',mdl,users.login);

/* update users */
router.get('/update', users.update);

module.exports = router;
