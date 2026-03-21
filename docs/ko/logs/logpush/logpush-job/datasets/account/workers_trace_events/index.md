---
title: Workers 추적 이벤트
pcx_content_type: configuration
sidebar:
  order: 21
translation_locale: ko-KR
translation_source_html: >-
  https://developers.cloudflare.com/logs/logpush/logpush-job/datasets/account/workers_trace_events/
translation_source_md: >-
  https://developers.cloudflare.com/logs/logpush/logpush-job/datasets/account/workers_trace_events/index.md
translation_source_kind: repo-md
translation_snapshot: '2026-03-13'
translation_upstream_ref: 66ee2dcd3715f1ca46e70954a3cda63f6cbebc75

---
아래 설명은 필드를 사용할 수 있습니다.`workers_trace_events`.

## CPU시간

유형:`int`

작업자 스크립트에 의해 사용되는 CPU 시간의 양, 밀리 초.

## DispatchName공간

유형:`string`

Cloudflare의 노동자 파견 namespace.

## 회사연혁

유형:`string`

Worker가 실행되기 시작한 엔트리포인트 클래스의 이름입니다.

## 행사일정

유형:`object`

소스 이벤트에 대한 세부 사항.

## 이벤트TimestampMs

유형:`int`

이벤트가 수신될 때의 타임스탬프, 밀리 초.

## 이벤트 유형

유형:`string`

invocation를 트리거 한 이벤트 유형.<br />가능한 값은<em>뚱 베어</em>.

## 이름 \*

유형:`array[object]`

invocation 동안 불안정한 예외 목록.

## 로그인

유형:`array[object]`

invocation 동안 방출되는 콘솔 메시지 목록.

## 한국어

유형:`string`

Worker 스크립트 호출의 결과.<br />가능한 값은<em>·</em> | <em>기타 제품</em>.

## ScriptName 지시어

유형:`string`

Cloudflare의 Worker 스크립트 이름.

## 스크립트태그

유형:`array[string]`

Worker를 분류하는 데 사용되는 사용자 정의 태그 목록.

## 스크립트버전

유형:`object`

호출 된 스크립트의 버전.

## WallTimeMs의 장점

유형:`int`

노동자 인 직업의 시작과 Workers 런타임이 더 JavaScript가 실행할 필요가 없다는 것을 결정할 때, 밀리 초에 있는 탈출된 시간. 구체적으로, 이것은 JavaScript 컨텍스트가 열리는 벽시 시간을 측정합니다. 예를 들어, 큰 몸과 응답을 반환 할 때, Workers 런타임은 일부 경우에, JavaScript가 실행할 필요가 없다는 것을 결정하고, 모든 바이트가 통과하고 전송되기 전에 JS 컨텍스트를 닫습니다. 대안으로, 당신이 사용하는 경우`waitUntil()`API는 응답의 반환을 차단하지 않고 작업을 수행 할 수 있습니다, 이 작업은 응답이 반환 된 후 수행 할 수 있으며, 포함 될 것입니다`WallTimeMs`.
