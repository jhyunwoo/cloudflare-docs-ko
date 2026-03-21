---
title: Browser Isolation 사용자 활동
pcx_content_type: configuration
sidebar:
  order: 21
translation_locale: ko-KR
translation_source_html: >-
  https://developers.cloudflare.com/logs/logpush/logpush-job/datasets/account/biso_user_actions/
translation_source_md: >-
  https://developers.cloudflare.com/logs/logpush/logpush-job/datasets/account/biso_user_actions/index.md
translation_source_kind: repo-md
translation_snapshot: '2026-03-13'
translation_upstream_ref: 66ee2dcd3715f1ca46e70954a3cda63f6cbebc75

---
아래 설명은 필드를 사용할 수 있습니다.`biso_user_actions`.

## 계정 ID

유형:`string`

Cloudflare 계정 ID.

## 12 월

유형:`string`

적용되는 결정 ('allow' 또는 'block').

## 도메인 이름

유형:`string`

URL의 도메인 이름.

## 메타데이터

유형:`string`

사용자 행동에 대한 추가 정보 (JSON 문자열).

## 스크린 샷

유형:`int or string`

날짜와 시간.

## 제품정보

유형:`string`

user action type ('copy', 'paste', 'download' 등).

## 사이트 맵

유형:`string`

사용자 행동이 수행 된 웹 페이지의 URL.

## 사용자이메일

유형:`string`

사용자 이메일.

## 사용자 ID

유형:`string`

사용자 ID.
