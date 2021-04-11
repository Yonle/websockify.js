const net = require("net");
const WebSocket = require("ws");

function tcp_ws (target, forwardTo) {
	if (!target && !forwardTo) return null;
	var wss = new WebSocket.Server(forwardTo);
	wss.on('connection', async function (ws, req) {
		var socket = await new net.Socket().connect(target.port, target.hostname);
		var duplex = WebSocket.createWebSocketStream(ws);
		socket.pipe(duplex).pipe(socket);
		req.on('close', socket.destroy);
		duplex.on('error', console.error);
		socket.on('error', console.error);
	});
}

async function ws_tcp (target, port, hostname) {
	if (!target && !forwardTo) return null;
	var server = await new net.Server();
	server.listen(port, hostname || '0.0.0.0');

	server.on('connection', socket => {
		var wss = new WebSocket(target);
		var duplex = WebSocket.createWebSocketStream(wss);
		duplex.pipe(socket).pipe(duplex);
		socket.on('close', () => wss.close());
		socket.on('error', console.error);
		duplex.on('error', console.error);
	});
}

module.exports.tcp = tcp_ws;
module.exports.ws = ws_tcp;
