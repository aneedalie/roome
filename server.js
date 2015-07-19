var express = require('express');
var app = express();

const PORT = process.env.PORT || 8080;
var router = express.Router();

app.get('/', function(req, res){
    res.send('Roome server is currently running ☆(^･ω･ ^=)ﾉ')
});

var server = app.listen(PORT, function(){
    var host = server.address().address;
    console.log('roome listening at port %s', PORT);
});