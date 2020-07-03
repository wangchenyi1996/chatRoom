const express = require('express')
const app = express()
const port = 3000

var server = app.listen(3008)
var io = require('socket.io').listen(server);
//引入socket.js
require('./model/socket.js')(io);
