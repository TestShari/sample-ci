var express = require('express');
var api = express();

api.get('/', function(re, res, next){
    res.send('Hello World');
});

console.log("Server started on port 3000...");
api.listen(3000);

module.exports = api;