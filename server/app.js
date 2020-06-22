var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// Setup socket io
const server = require('http').Server(app);
const io = require('socket.io')(server);
var socketPort = 9001;
server.listen(socketPort);

io.on('connection', (client) => {
    client.on('command', (command) => {
      io.emit('overlay', command);
    })
})

module.exports = app;
