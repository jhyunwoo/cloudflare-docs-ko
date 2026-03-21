---
title: DNS 로그
pcx_content_type: configuration
sidebar:
  order: 21
translation_locale: ko-KR
translation_source_html: >-
  https://developers.cloudflare.com/logs/logpush/logpush-job/datasets/zone/dns_logs/
translation_source_md: >-
  https://developers.cloudflare.com/logs/logpush/logpush-job/datasets/zone/dns_logs/index.md
translation_source_kind: repo-md
translation_snapshot: '2026-03-13'
translation_upstream_ref: 66ee2dcd3715f1ca46e70954a3cda63f6cbebc75

---
아래 설명은 필드를 사용할 수 있습니다.`dns_logs`.

## 비밀번호

유형:`string`

요청을받은 데이터 센터의 IATA 공항 코드.

## EDNS 서브넷

유형:`string`

IPv4 또는 IPv6 주소 정보[EDNS 클라이언트 서브넷 (ECS)](/glossary/?term=ecs)recursive 결심자에 의해 전달. 모든 해결자는이 정보를 보냅니다.

## EDNSSubnet 길이

유형:`int`

크기의[EDNS 클라이언트 서브넷 (ECS)](/glossary/?term=ecs)비트에서. 예를 들어, IPv4 주소의 마지막 옥타트가 omitted 경우 (`192.0.2.x.`), subnet 길이는 24일 것입니다.

## 이름 \*

유형:`string`

전송 된 쿼리의 이름.

## 비밀번호

유형:`int`

쿼리 유형의 정수 값. 더 많은 정보를 원하시면[Query 유형](https://www.iana.org/assignments/dns-parameters/dns-parameters.xhtml#dns-parameters-4).

## 관련 기사

유형:`bool`

응답이 캐시되지 않았는지 여부.

## 응답코드

유형:`int`

응답 코드의 정수 값. 더 많은 정보를 원하시면[응답 코드](https://www.iana.org/assignments/dns-parameters/dns-parameters.xhtml#dns-parameters-6).

## 소스IP

유형:`string`

고객의 IP 주소 (IPv4 또는 IPv6).

## 스크린 샷

유형:`int or string`

쿼리가 발생한 타임스탬프.
