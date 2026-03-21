---
title: 장치 자세 결과
pcx_content_type: configuration
sidebar:
  order: 21
translation_locale: ko-KR
translation_source_html: >-
  https://developers.cloudflare.com/logs/logpush/logpush-job/datasets/account/device_posture_results/
translation_source_md: >-
  https://developers.cloudflare.com/logs/logpush/logpush-job/datasets/account/device_posture_results/index.md
translation_source_kind: repo-md
translation_snapshot: '2026-03-13'
translation_upstream_ref: 66ee2dcd3715f1ca46e70954a3cda63f6cbebc75

---
아래 설명은 필드를 사용할 수 있습니다.`device_posture_results`.

## 고객Version

유형:`string`

업로드시에 Zero Trust 클라이언트 버전.

## 장치ID

유형:`string`

게시물 업로드를 수행하는 장치 ID.

## 장치제조업체

유형:`string`

Zero Trust 클라이언트가 실행되는 장치의 제조자.

## 장치 모델

유형:`string`

Zero Trust 클라이언트가 실행되는 장치의 모형.

## 장치 이름

유형:`string`

Zero Trust 클라이언트가 실행되는 장치의 이름.

## 장치SerialNumber

유형:`string`

Zero Trust 클라이언트가 실행되는 장치의 일련 번호.

## 장치 유형

유형:`string`

Zero Trust 클라이언트 운영 체계 유형.

## 이름 \*

유형:`string`

Zero Trust 클라이언트와 장치를 등록하는 데 사용되는 이메일.

## OS버전

유형:`string`

업로드 시점의 운영 체제 버전.

## 정책ID

유형:`string`

이 장치 자세 결과와 관련된 자세 검사 ID.

## PostureCheck이름

유형:`string`

이 장치 자세 결과와 관련된 자세 검사의 이름.

## PostureCheck유형

유형:`string`

Zero Trust 클라이언트 체크 또는 서비스 공급자 체크의 유형.

## 게시물EvaluatedResult

유형:`bool`

이 후속 업로드는 관련 자세 검사를 통과 할 수 있는지 여부, 타임스탬프의 시간에 요구 사항 자세 검사.

## 게시물ExpectedJSON

유형:`object`

자세 검사가 Zero Trust 클라이언트에서 무엇을 기대하는지 JSON 객체.

## PostureReceivedJSON 소개

유형:`object`

Zero Trust 클라이언트가 실제로 업로드하는 것의 JSON 객체.

## 등록ID

유형:`string`

이 자세 결과와 관련된 장치 등록의 UUID.

## 스크린 샷

유형:`int or string`

날짜 및 시간 대응 장치 자세 업로드가 수행되었습니다 (예 : '2021-07-27T00:01:07Z'). 타임스탬프 형식을 지정하려면, 참조[산출 유형](/logs/logpush/logpush-job/log-output-options/#output-types).

## 사용자UID

유형:`string`

장치를 등록한 사용자의 uid.
