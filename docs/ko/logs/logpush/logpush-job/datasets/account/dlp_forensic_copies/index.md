---
title: DLP 포렌식 경찰
pcx_content_type: configuration
sidebar:
  order: 21
translation_locale: ko-KR
translation_source_html: >-
  https://developers.cloudflare.com/logs/logpush/logpush-job/datasets/account/dlp_forensic_copies/
translation_source_md: >-
  https://developers.cloudflare.com/logs/logpush/logpush-job/datasets/account/dlp_forensic_copies/index.md
translation_source_kind: repo-md
translation_snapshot: '2026-03-13'
translation_upstream_ref: 66ee2dcd3715f1ca46e70954a3cda63f6cbebc75

---
아래 설명은 필드를 사용할 수 있습니다.`dlp_forensic_copies`.

## 계정 ID

유형:`string`

Cloudflare 계정 ID.

## 이름 \*

유형:`int or string`

해당 HTTP 요청의 날짜와 시간.

## 카테고리

유형:`string`

이 특정 법정 사본에 대한 독특한 ID.

## 게이트웨이

유형:`string`

Cloudflare 요청 ID, 게이트웨이 로그에서 찾을 수 있습니다.

## 기타 제품

유형:`object`

관련 요청/response에 HTTP 헤더의 선택을 위한 문자열 키 값 쌍.

## 지불로드

유형:`string`

캡처 된 요청 / 응답 데이터, base64 인코딩.

## 연구분야

유형:`string`

HTTP 요청의 단계이 법정 사본은 (즉 "request"또는 "response").

## 트리그레이드RuleID

유형:`string`

Gateway 방화벽 규칙의 ID는 이 법안 사본을 트리거했습니다.
