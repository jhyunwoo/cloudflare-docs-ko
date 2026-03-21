---
order: 2
title: 변수 및 비밀
translation_locale: ko-KR
translation_source_html: >-
  https://developers.cloudflare.com/workers/testing/miniflare/core/variables-secrets/
translation_source_md: >-
  https://developers.cloudflare.com/workers/testing/miniflare/core/variables-secrets/index.md
translation_source_kind: repo-md
translation_snapshot: '2026-03-13'
translation_upstream_ref: 66ee2dcd3715f1ca46e70954a3cda63f6cbebc75

---
## 회사 소개

변수와 비밀은 다음과 같습니다:

```js
const mf = new Miniflare({
	bindings: {
		KEY1: "value1",
		KEY2: "value2",
	},
});
```

## 텍스트 및 데이터 Blobs

텍스트 및 데이터 blobs는 파일에서로드 할 수 있습니다. 파일 내용이 읽고
맨 위로`string`s와`ArrayBuffer`각각.

```js
const mf = new Miniflare({
	textBlobBindings: { TEXT: "text.txt" },
	dataBlobBindings: { DATA: "data.bin" },
});
```

## 글로벌

arbitrary 세계를 주사하는 것은 지원되지 않습니다[채용 정보](https://github.com/cloudflare/workerd). 서비스 노동자를 사용하는 경우, 바인딩은 글로벌로 주사되지만 JSON-serializable이어야 합니다.
