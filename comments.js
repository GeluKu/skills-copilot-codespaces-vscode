// create web server
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var fs = require('fs');
var path = require('path');
var commentsPath = path.join(__dirname, 'data/comments.json');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

// get comments
app.get('/api/comments', function(req, res) {
  fs.readFile(commentsPath, function(err, data) {
    res.setHeader('Content-Type', 'application/json');
    res.send(data);
  });
});

// post comment
app.post('/api/comments', function(req, res) {
  fs.readFile(commentsPath, function(err, data) {
    var comments = JSON.parse(data);
    var newComment = {
      id: Date.now(),