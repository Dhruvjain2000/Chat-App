socket = io();

console.log(socket.id)

window.onload = function () {
  let msg = document.getElementById('message')
  let send = document.getElementById('send')

  send.onclick = function () {
    socket.emit('sendMsg', {message: msg.value})
  }
}