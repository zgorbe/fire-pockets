var express = require('express');
var morgan = require('morgan');
var port = process.env.PORT || 3000;
var app = express();
 
app.use(express.static(__dirname));
app.use(morgan('dev'));
app.get('/', function(request, response) {
    response.sendfile(__dirname + '/index.html');
}).listen(port);
