---
order: 8
title: '모델 번호: Queues'
translation_locale: ko-KR
translation_source_html: 'https://developers.cloudflare.com/workers/testing/miniflare/core/queues/'
translation_source_md: >-
  https://developers.cloudflare.com/workers/testing/miniflare/core/queues/index.md
translation_source_kind: repo-md
translation_snapshot: '2026-03-13'
translation_upstream_ref: 66ee2dcd3715f1ca46e70954a3cda63f6cbebc75

---
- [Queues 이름 \*](/queues/)

## 회사 소개

다음과 같이 환경을 추가하기 위해 Queue 제작자를 지정하십시오:

```js
const mf = new Miniflare({
	queueProducers: { MY_QUEUE: "my-queue" },
	queueProducers: ["MY_QUEUE"], //바인딩 및 큐 이름이 동일하다면
});
```

## 회사 소개

Workers를 지정하여 QueuesXQ의 메시지를 다음과 같이 입력합니다.

```js
const mf = new Miniflare({
	queueConsumers: {
		"my-queue": {
			maxBatchSize: 5, //기본: 5
			maxBatchTimeout: 1 /*두 번째 (s)*/, //기본: 1
			maxRetries: 2, //기본값: 2
			deadLetterQueue: "my-dead-letter-queue", //기본: 없음
		},
	},
	queueConsumers: ["my-queue"], //기본 소비자 옵션 사용
});
```

## 외부 Workers

테스트를 위해 Queues와 상호 작용할 수 있습니다. 이 작업을 수행 할 수 있습니다.`workers`동일한 인스턴스에서 여러 Workers를 실행하는 옵션:

```js
const mf = new Miniflare({
	workers: [
		{
			name: "a",
			modules: true,
			script: `
			export default {
				async fetch(request, env, ctx) {
					await env.QUEUE.send(await request.text());
				}
			}
			`,
			queueProducers: { QUEUE: "my-queue" },
		},
		{
			name: "b",
			modules: true,
			script: `
			export default {
				async queue(batch, env, ctx) {
					console.log(batch);
				}
			}
			`,
			queueConsumers: { "my-queue": { maxBatchTimeout: 1 } },
		},
	],
});

const queue = await mf.getQueueProducer("QUEUE", "a"); //노동자 "a"에서 가져옵니다
await queue.send("message"); //로그인 "message" 1 초 후
```
