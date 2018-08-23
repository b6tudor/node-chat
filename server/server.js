const express = require('express');
const app = express();
const routes = require('./routes');

const http = require('http');
const socketIO = require('socket.io');
const server = http.createServer(app);
const io = socketIO(server);

const path = require('path');
const publicPath = path.join(__dirname, '../public');



app.use(express.static(publicPath));
//app.set('view engine', 'html');
routes(app);






module.exports = {
    app,
    server
}

