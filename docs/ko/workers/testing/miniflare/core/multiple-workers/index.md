---
order: 9
title: 다수 Workers
translation_locale: ko-KR
translation_source_html: >-
  https://developers.cloudflare.com/workers/testing/miniflare/core/multiple-workers/
translation_source_md: >-
  https://developers.cloudflare.com/workers/testing/miniflare/core/multiple-workers/index.md
translation_source_kind: repo-md
translation_snapshot: '2026-03-13'
translation_upstream_ref: 66ee2dcd3715f1ca46e70954a3cda63f6cbebc75

---
Miniflare는 같은 인스턴스에서 여러 근로자를 실행할 수 있습니다. 모든 Workers는 동일한 수준에서 정의될 수 있습니다, 사용`workers`옵션.

다음은 공유 KV 네임스페이스의 가치를 증가시키는 서비스 바인딩을 사용하는 예입니다.

```js
import { Miniflare, Response } from "miniflare";

const message = "The count is ";
const mf = new Miniflare({
	//HTTP 및 persistence 설정과 같은 근로자 간의 공유 옵션
	//항상 최고 수준에서 정의해야합니다.
	host: "0.0.0.0",
	port: 8787,
	kvPersist: true,

	workers: [
		{
			name: "worker",
			kvNamespaces: { COUNTS: "counts" },
			serviceBindings: {
				INCREMENTER: "incrementer",
				//서비스 바인딩은 또한 접근과 더불어 관례 기능으로, 정의될 수 있습니다
				//Miniflare 이외의 모든 것을 정의합니다.
				async CUSTOM(request) {
					//`request`는 들어오는 `Request` 목표입니다.
					return new Response(message);
				},
			},
			modules: true,
			script: `export default {
        async fetch(request, env, ctx) {
          //외부에 정의된 메시지를 가져옵니다.
          const response = await env.CUSTOM.fetch("http://host/");
          const message = await response.text();

          //계산 3 배
          await env.INCREMENTER.fetch("http://host/");
          await env.INCREMENTER.fetch("http://host/");
          await env.INCREMENTER.fetch("http://host/");
          const count = await env.COUNTS.get("count");

          return new Response(message + count);
        }
      }`,
		},
		{
			name: "incrementer",
			//우리는 이전과 동일한 `COUNTS` 네임스페이스를 사용하지만 바인딩
			//대신 `NUMBERS`에.
			kvNamespaces: { NUMBERS: "counts" },
			//Worker 형식은 혼합 및 일치 할 수 있습니다.
			script: `addEventListener("fetch", (event) => {
        event.respondWith(handleRequest());
      })
      async function handleRequest() {
        const count = parseInt((await NUMBERS.get("count")) ?? "0") + 1;
        await NUMBERS.put("count", count.toString());
        return new Response(count.toString());
      }`,
		},
	],
});
const res = await mf.dispatchFetch("http://localhost");
console.log(await res.text()); //"수는 3"
await mf.dispose();
```

## 로그아웃

지정하여 routing을 활성화할 수 있습니다.`routes`API를 통해,
사용 방법
[표준 노선 syntax](/workers/configuration/routing/routes/#matching-behavior)·
포트 번호는 무시됩니다:

```js
const mf = new Miniflare({
	workers: [
		{
			scriptPath: "./api/worker.js",
			routes: ["http://127.0.0.1/api*", "api.mf/*"],
		},
	],
});
```

호스트명을 사용할 때`localhost`또는`127.0.0.1`·
컴퓨터의 편집이 필요할 수 있습니다.`hosts`파일, 그래서 그 hostnames 해결
`localhost`. 리눅스와 macOS에서는, 이것은 보통 안으로 입니다`/etc/hosts`. Windows에서,
그것에서`C:\Windows\System32\drivers\etc\hosts`. 위 노선을 위해, 우리는
파일에 다음 항목을 추가해야합니다 :

```
127.0.0.1 miniflare.test
127.0.0.1 api.mf
```

대안으로, 당신은 customise 할 수 있습니다`Host`요청을 보낼 때 헤더:

```sh
#"api" 작업자에게 Dispatches
$ curl "http://localhost:8787/todos/update/1" -H "Host: api.mf"
```

API를 사용할 때 Miniflare는 요청의 URL을 사용하여 결정합니다.
파견하는 노동자.

```js
//"api" 작업자에게 Dispatches
const res = await mf.dispatchFetch("http://api.mf/todos/update/1", { ... });
```

## 모델 번호: Durable Objects

Miniflare 지원`script_name`접근을 위한 선택권 Durable Objects
다른 스크립트에 의해 수출. 이름 \*
[Durable Objects](/workers/testing/miniflare/storage/durable-objects#using-a-class-exported-by-another-script)더 많은 정보.
