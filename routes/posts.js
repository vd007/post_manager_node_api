var express = require('express');
var router = express.Router();
var posts = require('../controllers/postsController');
var auth = require('../common/jwtHelper');

router.get('/createPost', auth.decode,posts.create);

router.get('/getPosts', auth.decode,posts.GetPosts);

router.get('/updatePost', auth.decode,posts.update);

router.get('/deletePost', auth.decode,posts.delete);

module.exports = router;
