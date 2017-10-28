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
    var data = mongo_data.getUser(username);
    data.then(function(result) {
        console.log(result);
        res.send('respond with login '+result.toJSON()+' resource ');
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

module.exports = posts;