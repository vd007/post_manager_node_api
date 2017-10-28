var express = require('express');
var router = express.Router();
var posts = require('../controllers/postsController');

router.get('/createPost', posts.create);

router.get('/getPosts', posts.GetPosts);

router.get('/updatePost', posts.update);

module.exports = router;
