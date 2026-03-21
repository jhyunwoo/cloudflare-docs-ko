---
title: 이벤트Emitter · Cloudflare Workers docs
description: |-
  이벤트Emitter
  청취자가 호출되는 사건을 방출하는 객체입니다.
lastUpdated: 2025-08-20T18:47:44.000Z
chatbotDeprioritize: false
source_url:
  html: 'https://developers.cloudflare.com/workers/runtime-apis/nodejs/eventemitter/'
  md: >-
    https://developers.cloudflare.com/workers/runtime-apis/nodejs/eventemitter/index.md
translation_locale: ko-KR
translation_source_html: 'https://developers.cloudflare.com/workers/runtime-apis/nodejs/eventemitter/'
translation_source_md: >-
  https://developers.cloudflare.com/workers/runtime-apis/nodejs/eventemitter/index.md
translation_source_kind: rendered-md
translation_snapshot: '2026-03-13'

---
이름 \*

내장된 Node.js API와 polyfills를 활성화하려면 nodejs compat 호환성 플래그를 추가하십시오.[Wrangler 구성 파일](https://developers.cloudflare.com/workers/wrangler/configuration/). 또한 nodejs compat v2를 호환성 날짜가 2024-09-23 이상일 때 사용할 수 있습니다.[Node.js 호환성 플래그 및 v2에 대해 자세히 알아보기](https://developers.cloudflare.com/workers/configuration/compatibility-flags/#nodejs-compatibility-flag).

이름 \*[`EventEmitter`](https://nodejs.org/docs/latest/api/events.html#class-eventemitter)청취자가 호출되는 사건을 방출하는 객체입니다.

```js
import { EventEmitter } from "node:events";


const emitter = new EventEmitter();
emitter.on("hello", (...args) => {
  console.log(...args); //1 2 3 다음
});


emitter.emit("hello", 1, 2, 3);
```

Workers 런타임의 구현은 전체 Node.js`EventEmitter`API. 여기에 포함[`captureRejections`](https://nodejs.org/docs/latest/api/events.html#capture-rejections-of-promises)이벤트 핸들러로 async 함수를 개선할 수 있는 옵션:

```js
const emitter = new EventEmitter({ captureRejections: true });
emitter.on("hello", async (...args) => {
  throw new Error("boom");
});
emitter.on("error", (err) => {
  //async 약속 거부는 여기에 방출됩니다!
});
```

Node.js 같이, 때`'error'`이벤트가 방출됩니다.`EventEmitter`그리고 그것을 위해 청취자는 없습니다, 오류는 즉시 던질 것입니다. 그러나 Node.js에서 핸들러를 추가 할 수 있습니다.`process`대상 대상`'uncaughtException'`전 세계 uncaught 예외를 잡아 이벤트. 더 보기`'uncaughtException'`이벤트는 현재 Workers 런타임에서 구현되지 않습니다. 항상 추가하는 것이 강력합니다.`'error'`모든 것`EventEmitter`예.

더 알아보기[Node.js 문서`EventEmitter`](https://nodejs.org/api/events.html#class-eventemitter)더 많은 정보.
