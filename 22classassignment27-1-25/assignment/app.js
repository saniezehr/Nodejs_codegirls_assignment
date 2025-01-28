var express = require ('express');
var app = express()
var http = require('http').createServer(app)
var io = require('socket.io')(http)
var count = 0;

app.use(express.static(__dirname));


app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});



io.on('connection', (socket) => {

    console.log("user is connected")
    count++

    io.emit('usercount',count)

    socket.on('chat message', (msg) => {
        io.emit('chat message', msg);
      });
    

    socket.on('disconnect', (socket) =>{
        console.log("disconnected");
        count--;
        io.emit("usercount" ,count)
    })


});

http.listen(3000, () => {
  console.log('server running at http://localhost:3000');
});
