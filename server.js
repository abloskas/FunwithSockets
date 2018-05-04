const express = require('express');
const app = express();
app.use(express.static(__dirname + "/views"));
const server = app.listen(5000);
const io = require('socket.io')(server);
var arr = [];   
io.on('connection', function (socket) { //2
  
  socket.on('formsubmit', function(data){ 
    arr.push(data);
    console.log('hello, world');
 
    var rand = Math.floor(Math.random()*1000)+1;
    io.emit('formsubmit', {num: rand, arr: arr});
  });

});
