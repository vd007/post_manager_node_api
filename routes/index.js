var express = require('express');
var router = express.Router();
var auth = require('../common/jwtHelper');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
  //console.log(res);
});

router.get('/auth/google/welcome/', function(req, res, next) {

    //var api_key = auth.generate(req);
    console.log("inside index user");
    console.log(req.query.code);
    var username = [];
    username['username'] = req.query.code;
    //username['username'] = req.query.code;
    if (req.query.code != undefined){
        var api_key = auth.generate(username);
        //res.render('google', { title: 'Express' });
        res.send('respond with login '+req.query.code+' with api key : '+api_key);
    }else{
        res.send('please login first');
    }
});




module.exports = router;
