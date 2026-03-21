---
order: 4
title: 웹소켓
translation_locale: ko-KR
translation_source_html: 'https://developers.cloudflare.com/workers/testing/miniflare/core/web-sockets/'
translation_source_md: >-
  https://developers.cloudflare.com/workers/testing/miniflare/core/web-sockets/index.md
translation_source_kind: repo-md
translation_snapshot: '2026-03-13'
translation_upstream_ref: 66ee2dcd3715f1ca46e70954a3cda63f6cbebc75

---
- [WebSockets 참조](/workers/runtime-apis/websockets)
- [WebSockets 사용](/workers/examples/websockets/)

## 계정 관리

Miniflare는 항상 웹 소켓 연결을 업그레이드합니다. 노동자는 응답해야
현재 위치`101 Switching Protocols`응답 포함`webSocket`.를 위해
예, 아래 작업자는 echo WebSocket 서버를 구현합니다.

```js
export default {
	fetch(request) {
		const [client, server] = Object.values(new WebSocketPair());

		server.accept();
		server.addEventListener("message", (event) => {
			server.send(event.data);
		});

		return new Response(null, {
			status: 101,
			webSocket: client,
		});
	},
};
```

사용 방법`dispatchFetch`WebSockets 취급 책임
이름 \*`webSocket`이름 \*`Response`. 예를 들면, 위 노동자인 경우에
스크립트가 저장되었습니다.`echo.mjs`:

```js {13-17}
import { Miniflare } from "miniflare";

const mf = new Miniflare({
	modules: true,
	scriptPath: "echo.mjs",
});

const res = await mf.dispatchFetch("https://example.com", {
	headers: {
		Upgrade: "websocket",
	},
});
const webSocket = res.webSocket;
webSocket.accept();
webSocket.addEventListener("message", (event) => {
	console.log(event.data);
});

webSocket.send("Hello!"); //청취자 로그 "안녕!"
```
