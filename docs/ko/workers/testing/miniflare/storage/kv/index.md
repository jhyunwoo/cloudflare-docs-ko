---
order: 0
title: '모델 번호: KV'
translation_locale: ko-KR
translation_source_html: 'https://developers.cloudflare.com/workers/testing/miniflare/storage/kv/'
translation_source_md: >-
  https://developers.cloudflare.com/workers/testing/miniflare/storage/kv/index.md
translation_source_kind: repo-md
translation_snapshot: '2026-03-13'
translation_upstream_ref: 66ee2dcd3715f1ca46e70954a3cda63f6cbebc75

---
- [모델 번호: KV 이름 \*](/kv/api/)

## 이름공간

KV 네임스페이스를 지정하여 다음과 같이 환경을 추가합니다.

```js
const mf = new Miniflare({
	kvNamespaces: ["TEST_NAMESPACE1", "TEST_NAMESPACE2"],
});
```

이제 직장에서 KV 네임스페이스에 액세스할 수 있습니다.

```js
export default {
	async fetch(request, env) {
		return new Response(await env.TEST_NAMESPACE1.get("key"));
	},
};
```

Miniflare는 모든 KV 가동과 자료 유형을 지원합니다.

## 외부 Workers

테스트를 위해 KVXQ 밖에서 데이터를 넣기 위해 유용합니다. 당신은 할 수
이 작업을 수행`getKVNamespace`방법:

```js {17,18,22}
import { Miniflare } from "miniflare";

const mf = new Miniflare({
	modules: true,
	script: `
  export default {
    async fetch(request, env, ctx) {
      const value = parseInt(await env.TEST_NAMESPACE.get("count")) + 1;
      await env.TEST_NAMESPACE.put("count", value.toString());
      return new Response(value.toString());
    },
  }
  `,
	kvNamespaces: ["TEST_NAMESPACE"],
});

const ns = await mf.getKVNamespace("TEST_NAMESPACE");
await ns.put("count", "1");

const res = await mf.dispatchFetch("http://localhost:8787/");
console.log(await res.text()); //2개
console.log(await ns.get("count")); //2개
```
