const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 3002 });

wss.on('connection', function connection(ws) {
  ws.on('message', function incoming(message) {
    console.log('received: %s', message);
    ws.send(`We have received your message loud and clear: ${message}`);
  });

  ws.send('something');
});

console.log(`Websocket server running on port 3002`)
