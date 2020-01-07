'use strict';

var express = require('express-server/socket-server');
var server = express();
var compression = require('compression'),
  bodyParser = require('body-parser'),
  fileUpload = require('express-fileupload'),
  fs = require('fs'),
  cors = require('cors'),
  http = require('http');
var http_port = 8088;

server.use(cors());
server.use(express.static('src'));
server.use(compression());
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({extended: true}));
server.use(fileUpload());
server.use(require('./routs'));


http.createServer(server).listen(http_port, function () {
  console.log('Server listening on http port ' + http_port);
});
