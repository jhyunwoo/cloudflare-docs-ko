---
title: 페이지 방패 이벤트
pcx_content_type: configuration
sidebar:
  order: 21
translation_locale: ko-KR
translation_source_html: >-
  https://developers.cloudflare.com/logs/logpush/logpush-job/datasets/zone/page_shield_events/
translation_source_md: >-
  https://developers.cloudflare.com/logs/logpush/logpush-job/datasets/zone/page_shield_events/index.md
translation_source_kind: repo-md
translation_snapshot: '2026-03-13'
translation_upstream_ref: 66ee2dcd3715f1ca46e70954a3cda63f6cbebc75

---
아래 설명은 필드를 사용할 수 있습니다.`page_shield_events`.

## - 연혁

유형:`string`

위반에 대해 촬영 한 행동.<br />가능한 값은<em>이름 \*</em> | <em>지원하다</em>.

## CSP직접

유형:`string`

보고서의 위반된 지침.

## 이름 \*

유형:`string`

자원이 본 호스트.

## 페이지URL

유형:`string`

페이지 URL 위반이 본다.

## 정책ID

유형:`string`

위반 된 정책의 ID.

## 회사 소개

유형:`string`

violated 지시어의 리소스 유형. 가능한 값은 'script', 'connection' 또는 'other'입니다.

## 스크린 샷

유형:`int or string`

보고서가 수신되면 타임스탬프.

## 사이트 맵

유형:`string`

리소스 URL.

## URLContainsCDNCGIPath (이전)

유형:`bool`

리소스 URL이 '/cdn-cgi/' 경로 포함 여부.

## URLHost

유형:`string`

URL의 도메인 호스트.
