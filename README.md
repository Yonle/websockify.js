# websockify.js
A websockify written in javascript, But with 2 Converting Method.

## API

### `module.tcp`
A function that convert TCP into WS. There's a required parameter's:
	- `target`[Object] A TCP Server target to convert to
	- `forwardTo`[Object] A websocket `new WebSocket(....)`.

#### Example
```js
const { tcp } = require('websockify.js');

tcp({
	hostname: 'localhost',
	port: 8080
}, { port: 9090 });
// Now forwarding tcp://localhost:8080 to ws://localhost:9090
```

### `module.ws`
A function that convert TCP into WS. There's a required parameter's:
	- `target`[String] A Websocket Server target to convert to
	- `forwardToPort`[Number/String] Forward to port?
	- `forwardToHostname`[String] *<optional>* Forward to hostname?

#### Example
```js
const { ws } = require('websockify.js');

ws('ws://localhost:8080', 9090, 'localhost');
// Now forwarding ws://localhost:8080 to tcp://localhost:9090
```

# Community
- [Discord](https://quickstream.yonle.repl.co/discord)
- [Telegram](https://t.me/yonlecoder)
