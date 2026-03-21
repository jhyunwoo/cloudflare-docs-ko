---
order: 4
title: 캐시
translation_locale: ko-KR
translation_source_html: 'https://developers.cloudflare.com/workers/testing/miniflare/storage/cache/'
translation_source_md: >-
  https://developers.cloudflare.com/workers/testing/miniflare/storage/cache/index.md
translation_source_kind: repo-md
translation_snapshot: '2026-03-13'
translation_upstream_ref: 66ee2dcd3715f1ca46e70954a3cda63f6cbebc75

---
- [캐시 참조](/workers/runtime-apis/cache)
- [캐시가 작동하는 방법](/workers/reference/how-the-cache-works/#cache-api)(사용을 캐시하는 것)`fetch`지원되지 않음)

## 기본 캐시

기본 캐시에 접근은 기본적으로 활성화됩니다:

```js
addEventListener("fetch", (e) => {
	e.respondWith(caches.default.match("http://miniflare.dev"));
});
```

## 이름 Caches

Namespaced 캐시에 액세스할 수 있습니다.`open`. 이름할 수 없는 주의
뚱 베어`default`, 그렇게 할하려고 오류를 던질 것이다 :

```js
await caches.open("cache_name");
```

## 이름 \*

기본적으로 캐시된 데이터는 메모리에 저장됩니다. reloads 사이 persist,
하지만 다른`Miniflare`예제. 사용 가능
파일 시스템에 대한 persistence, 캐시 지속 옵션을 지정:

```js
const mf = new Miniflare({
	cachePersist: true, //기본값 ./.mf/cache
	cachePersist: "./data", //주문 경로
});
```

## 외부 Workers

테스트를 위해 작업자 밖에 캐시에서 데이터를 넣어 / 매치 할 수 있습니다. 이름 \*
이것을 할 수 있습니다.`getCaches`방법:

```js {23,24,25,26,27,28,29,30,31,32}
import { Miniflare, Response } from "miniflare";

const mf = new Miniflare({
	modules: true,
	script: `
  export default {
    async fetch(request) {
      const url = new URL(request.url);
      const cache = caches.default;
      if(url.pathname === "/put") {
        await cache.put("https://miniflare.dev/", new Response("1", {
          headers: { "Cache-Control": "max-age=3600" },
        }));
      }
      return cache.match("https://miniflare.dev/");
    }
  }
  `,
});
let res = await mf.dispatchFetch("http://localhost:8787/put");
console.log(await res.text()); //1개

const caches = await mf.getCaches(); //글로벌 캐시 객체를 가져옵니다
const cachedRes = await caches.default.match("https://miniflare.dev/");
console.log(await cachedRes.text()); //1개

await caches.default.put(
	"https://miniflare.dev",
	new Response("2", {
		headers: { "Cache-Control": "max-age=3600" },
	}),
);
res = await mf.dispatchFetch("http://localhost:8787");
console.log(await res.text()); //2개
```

## 지원하다

기본적으로 두 개의 캐시가 비활성화 될 수 있습니다.`disableCache`옵션.
비활성화 할 때, 캐시는 여전히 sandbox에서 사용할 수 있습니다, 그들은 단지
아무것도 캐시하지 않습니다. 개발 중에 유용 할 수 있습니다 :

```js
const mf = new Miniflare({
	cache: false,
});
```
