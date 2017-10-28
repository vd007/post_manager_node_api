var mongo_data  = require('../models/mongo_utils');

var posts = {};

posts.create = function(req, res, next) {
    var username = req['query']['username'];
    var title = req['query']['title'];
    var content = req['query']['content'];
    var status = req['query']['status'];
    var respond  = mongo_data.createPost(username,title,content,status);
    res.send('saved post for '+req['query']['username']+' resource ');
};

posts.GetPosts = function(req, res, next) {
    var username = req['query']['username'];
    var data = mongo_data.getPosts(username);
    data.then(function(result) {
        console.log(result);
        result = JSON.stringify(result);
        res.send('respond with '+result+' resource ');
    })
};

posts.update = function(req, res, next) {
    var username = req['query']['username'];
    var title = req['query']['title'];
    var content = req['query']['content'];
    var status = req['query']['status'];
    var post_id = req['query']['post_id'];
    var respond  = mongo_data.updatePost(username,title,content,status,post_id);
    res.send('respond for '+post_id+' update resource');
};

posts.delete = function(req, res, next) {
    var username = req['query']['username'];
    var post_id = req['query']['post_id'];
    var respond  = mongo_data.deletePost(username,post_id);
    res.send('respond for '+post_id+' delete resource');
};

module.exports = posts;