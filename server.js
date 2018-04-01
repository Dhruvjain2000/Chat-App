const express = require('express');
const http = require('http')
const socketio = require('socket.io')



const app = express()
const server = http.createServer(app)
const io = socketio(server)


io.on('connection', (socket) => {
  console.log(socket.id)

  socket.on('sendMsg', (data) => {
    console.log("message received: " + data.message)
  })


})





app.use('/', express.static(__dirname + '/public'));

server.listen(4000, () => {
  console.log("Server started at port 4000")
})