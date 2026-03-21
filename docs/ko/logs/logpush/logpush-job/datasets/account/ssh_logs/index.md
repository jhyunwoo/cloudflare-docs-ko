---
title: SSH 로그
pcx_content_type: configuration
sidebar:
  order: 21
translation_locale: ko-KR
translation_source_html: >-
  https://developers.cloudflare.com/logs/logpush/logpush-job/datasets/account/ssh_logs/
translation_source_md: >-
  https://developers.cloudflare.com/logs/logpush/logpush-job/datasets/account/ssh_logs/index.md
translation_source_kind: repo-md
translation_snapshot: '2026-03-13'
translation_upstream_ref: 66ee2dcd3715f1ca46e70954a3cda63f6cbebc75

---
아래 설명은 필드를 사용할 수 있습니다.`ssh_logs`.

## 계정 ID

유형:`string`

Cloudflare 계정 ID.

## 고객문의

유형:`string`

SSH 명령의 소스 주소.

## 이름 \*

유형:`int or string`

이 메시지를 보낼 때 UTC의 타임스탬프.

## 오류 수정

유형:`string`

SSH 오류. 오류가 발생했을 때만 사용됩니다.

## 사이트맵

유형:`string`

로컬 및 원격 SSH 터미널 상태를 동기화하는 특정 프로그램 유형에 의해 사용됩니다.

## 지불로드

유형:`string`

캡처 된 요청 / 응답 데이터, asciicast v2 형식으로. 'exec' 프로그램 유형과 관련된 명령이 포함되어 있습니다.

## 프로그램FinishDatetime

유형:`int or string`

SSH 프로그램 종료의 UTC의 타임스탬프. 이것은 프로그램이 끝날 때까지 비어 있습니다.

## 프로그램ID

유형:`string`

SSH 프로그램 ID. 단일 SSH 세션은 여러 프로그램을 실행할 수 있습니다.

## 프로그램StartDatetime

유형:`int or string`

SSH 프로그램 생성의 UTC의 타임스탬프.

## 프로그램

유형:`string`

SSH 프로그램 실행. 옵션은 'shell': 대화 형 터미널을 열고 'exec': 단일 지정된 명령을 실행, 'x11': 대화 형 그래픽 환경, 'direct-tcpip': 직접 터널링, 'forwarded-tcpip': 역 터널링.

## Server주소

유형:`string`

SSH 세션의 대상 주소.

## 세션FinishDatetime

유형:`int or string`

SSH 세션 종료의 UTC의 타임스탬프. 세션이 종료될 때까지 빈다.

## 세션ID

유형:`string`

SSH 세션 ID.

## 세션StartDatetime

유형:`int or string`

SSH 세션 생성의 UTC의 타임스탬프.

## 대상 ID

유형:`string`

대상의 식별자는 접근합니다.

## 사용자이메일

유형:`string`

사용자 이메일 주소.

## 사용자 ID

유형:`string`

Cloudflare 사용자 ID.

## 사용자 이름

유형:`string`

SSH 서버의 시스템에 액세스하는 주요 사용자. 연결 설정시 오류가 발생했을 때 빈 것입니다.
