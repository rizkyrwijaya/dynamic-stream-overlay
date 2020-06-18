import openSocket from 'socket.io-client';

const socket = openSocket('http://localhost:9001');

function subscribeToCommand(getMessageFunction) {
  socket.on("overlay",(message) => getMessageFunction(message))
}

function sendToCommand(message) {
  socket.emit("commandRCV",message);
}

export { subscribeToCommand, sendToCommand };