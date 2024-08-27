const {WebSocketServer} = require('ws');

let wss;

 function initializeWebSocketServer(server) {

    let user = 0
    if (!wss) {
        wss = new WebSocketServer({ server });  
        wss.on('connection',   (ws) => {
            console.log('New client connected' );

            ws.on('message', (data , binary) => {
                console.log('Received:', data.toString()  );
            });

            ws.on('close', () => {
                console.log('Client disconnected');
            });

        
        });
    }
    
}

function getWebSocketServer() {
    
  return wss;
    

}

module.exports = { initializeWebSocketServer, getWebSocketServer };
