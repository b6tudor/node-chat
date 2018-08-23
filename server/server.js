const express = require('express');
const app = express();
const routes = require('./routes');
const path = require('path');
const publicPath = path.join(__dirname, '../public');

app.use(express.static(publicPath));
//app.set('view engine', 'html');
routes(app);






module.exports = app;

