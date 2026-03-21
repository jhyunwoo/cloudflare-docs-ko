---
order: 3
title: 모듈
translation_locale: ko-KR
translation_source_html: 'https://developers.cloudflare.com/workers/testing/miniflare/core/modules/'
translation_source_md: >-
  https://developers.cloudflare.com/workers/testing/miniflare/core/modules/index.md
translation_source_kind: repo-md
translation_snapshot: '2026-03-13'
translation_upstream_ref: 66ee2dcd3715f1ca46e70954a3cda63f6cbebc75

---
- [모듈 참조](/workers/reference/migrate-to-module-workers/)

## 모듈 제거

Miniflare는 전통을 모두 지원합니다`service-worker`그리고 더 새로운`modules`작업자의 형식. 이용하기`modules`체재는, 그것으로 가능하게 합니다:

```js
const mf = new Miniflare({
	modules: true,
});
```

다음을 사용할 수 있습니다.`modules`다음과 같은 worker 스크립트:

```js
export default {
	async fetch(request, env, ctx) {
		//- `request`는 들어오는 `Request` 인스턴스입니다
		//- `env`에는 바인딩, KV 이름 공간, Durable Objects, 등을 포함합니다
		//- `ctx`는 `waitUntil`와 `passThroughOnException` 방법을 포함합니다
		return new Response("Hello Miniflare!");
	},
	async scheduled(controller, env, ctx) {
		//- `controller`는 `scheduledTime`와 `cron` 재산을 포함합니다
		//- `env`에는 바인딩, KV 이름 공간, Durable Objects, 등을 포함합니다
		//- `ctx`는 `waitUntil` 방법을 포함합니다
		console.log("Doing something scheduled...");
	},
};
```

<Aside type="warning" header="Warning">

문자열 스크립트를 통해`script`옵션은 사용 가능
이름 \*`modules`형식이지만 다른 모듈을 가져올 수 없습니다. 당신은
스크립트 파일을 사용하여`scriptPath`이 옵션

</Aside>

## 모듈 규칙

Miniflare는 모든 단위 유형을 지원합니다:`ESModule`, `CommonJS`, `Text`, `Data`·
`CompiledWasm`. 다음과 같이 추가 모듈 해상도 규칙을 지정할 수 있습니다:

```js
const mf = new Miniflare({
	modulesRules: [
		{ type: "ESModule", include: ["**/*.js"], 돌파구: true },
{ 유형: "텍스트", 포함: ["**/*.txt"] },
	],
});
```

### 기본 규칙

다음 규칙은 모듈 규칙의 끝에 자동으로 추가됩니다.
이름 \* 동일한 규칙을 지정하여 무시할 수 있습니다.`globs`:

```js
[
	{ type: "ESModule", include: ["**/*.mjs"] },
{ type: "CommonJS", 포함: ["**/*.js", "**/*.cjs"] },
];
```
