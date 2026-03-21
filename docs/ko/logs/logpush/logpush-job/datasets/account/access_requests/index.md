---
title: 오시는 길
pcx_content_type: configuration
sidebar:
  order: 21
translation_locale: ko-KR
translation_source_html: >-
  https://developers.cloudflare.com/logs/logpush/logpush-job/datasets/account/access_requests/
translation_source_md: >-
  https://developers.cloudflare.com/logs/logpush/logpush-job/datasets/account/access_requests/index.md
translation_source_kind: repo-md
translation_snapshot: '2026-03-13'
translation_upstream_ref: 66ee2dcd3715f1ca46e70954a3cda63f6cbebc75

---
아래 설명은 필드를 사용할 수 있습니다.`access_requests`.

## - 연혁

유형:`string`

어떤 유형의 기록이입니다.<em>이름 \*</em> | <em>로그아웃</em>.

## 지원하다

유형:`bool`

요청이 허용되거나 거부 된 경우.

## 앱Domain

유형:`string`

액세스가 보호되는 응용 프로그램의 도메인.

## 앱UUID

유형:`string`

접근 신청 UUID.

## 관련 링크

유형:`string`

로그인에 사용되는 ID 공급자.

## 이름 \*

유형:`string`

요청의 원산지.

## 생성At

유형:`int or string`

날짜 및 시간 해당 액세스 요청이되었습니다 (예 : '2021-07-27T00:01:07Z').

## 이름 \*

유형:`string`

로그인한 사용자의 이메일.

## IP주소

유형:`string`

고객의 IP 주소.

## 이용 약관

유형:`string`

신청에 접근할 때 클라이언트에게 메시지가 표시되었습니다.

## 이용 약관

유형:`string`

응용 프로그램에 액세스 할 때 클라이언트에 의해 주어진 Justification.

## 레이디

유형:`string`

요청의 식별자.

## 임시AccessApprovers

유형:`array[string]`

이 액세스 요청에 대한 approvers의 목록.

## 자주 묻는 질문

유형:`int`

이 접근 요청에 대한 승인 된 기간.

## 사용자UID

유형:`string`

로그인한 사용자의 uid.
