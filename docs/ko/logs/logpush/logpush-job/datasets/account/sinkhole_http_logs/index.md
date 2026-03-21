---
title: Sinkhole HTTP 로그
pcx_content_type: configuration
sidebar:
  order: 21
translation_locale: ko-KR
translation_source_html: >-
  https://developers.cloudflare.com/logs/logpush/logpush-job/datasets/account/sinkhole_http_logs/
translation_source_md: >-
  https://developers.cloudflare.com/logs/logpush/logpush-job/datasets/account/sinkhole_http_logs/index.md
translation_source_kind: repo-md
translation_snapshot: '2026-03-13'
translation_upstream_ref: 66ee2dcd3715f1ca46e70954a3cda63f6cbebc75

---
아래 설명은 필드를 사용할 수 있습니다.`sinkhole_http_logs`.

## 계정 ID

유형:`string`

계정 ID.

## 이름 \*

유형:`string`

요청 몸.

## 몸길이

유형:`int`

요청 몸의 길이.

## 팟캐스트

유형:`string`

요청의 대상 IP 주소.

## 기타 제품

유형:`string`

요청 헤더. 헤더가 여러 값이있는 경우, 값은 comma 분리됩니다. 각 헤더는 탈출 된 신화 문자 (\n)에 의해 분리됩니다.

## 이름 \*

유형:`string`

요청이 전송되었습니다.

## 제품 설명

유형:`string`

요청 방법.

## 비밀번호

유형:`string`

비밀번호

## R2Path의

유형:`string`

R2 버킷 내의 객체에 대한 경로는 오버 플로우 바디와 헤더 데이터를 저장하는이 싱크 홀에 연결됩니다. 머리와 몸이 256 바이트보다 더 큰 경우에 공백.

## 구독하기

유형:`string`

요청의 참조.

## 싱크홀 ID

유형:`string`

HTTP 요청을 기록하는 Sinkhole의 ID.

## RSS 피드

유형:`string`

보낸 사람의 IP 주소.

## 스크린 샷

유형:`int or string`

the date and time the Sinkhole HTTP 요청이 로그되었습니다.

## 한국어

유형:`string`

요청 Uniform Resource Identifier.

## 사이트 맵

유형:`string`

요청 Uniform Resource Locator.

## 사용자명

유형:`string`

요청 사용자 에이전트.

## 사용자 이름

유형:`string`

사용자 이름
