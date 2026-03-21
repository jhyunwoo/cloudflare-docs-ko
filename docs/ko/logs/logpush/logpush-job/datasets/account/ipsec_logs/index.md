---
title: IPSec 로그
pcx_content_type: configuration
sidebar:
  order: 21
translation_locale: ko-KR
translation_source_html: >-
  https://developers.cloudflare.com/logs/logpush/logpush-job/datasets/account/ipsec_logs/
translation_source_md: >-
  https://developers.cloudflare.com/logs/logpush/logpush-job/datasets/account/ipsec_logs/index.md
translation_source_kind: repo-md
translation_snapshot: '2026-03-13'
translation_upstream_ref: 66ee2dcd3715f1ca46e70954a3cda63f6cbebc75

---
아래 설명은 필드를 사용할 수 있습니다.`ipsec_logs`.

## 기본 정보

유형:`string`

로그의 수준.

## 지역IP

유형:`string`

로그와 관련된 로컬 IP 주소.

## 지역Port

유형:`int`

로그와 관련된 로컬 포트.

## 이름 \*

유형:`string`

로그 메시지. IKEv2 ciphersuite는 Handhake 메시지를 위해 여기에 로그인됩니다.

## 원격 IP

유형:`string`

로그와 관련된 원격 IP 주소.

## 원격 포트

유형:`int`

로그와 관련된 원격 포트.

## 스크린 샷

유형:`int or string`

로그인이 발생했습니다.
