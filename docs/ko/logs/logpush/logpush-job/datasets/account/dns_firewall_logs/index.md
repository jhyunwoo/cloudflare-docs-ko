---
title: DNS 방화벽 로그
pcx_content_type: configuration
sidebar:
  order: 21
translation_locale: ko-KR
translation_source_html: >-
  https://developers.cloudflare.com/logs/logpush/logpush-job/datasets/account/dns_firewall_logs/
translation_source_md: >-
  https://developers.cloudflare.com/logs/logpush/logpush-job/datasets/account/dns_firewall_logs/index.md
translation_source_kind: repo-md
translation_snapshot: '2026-03-13'
translation_upstream_ref: 66ee2dcd3715f1ca46e70954a3cda63f6cbebc75

---
아래 설명은 필드를 사용할 수 있습니다.`dns_firewall_logs`.

## 클라이언트ResponseCode

유형:`int`

응답 부호 Cloudflare의 정수 가치는 클라이언트에게 선물합니다. 응답 부호는 따릅니다[IANA 매개 변수](https://www.iana.org/assignments/dns-parameters/dns-parameters.xhtml#dns-parameters-6).

## 댓글 RSS

유형:`string`

이 요청을 처리 한 클러스터의 ID.

## 비밀번호

유형:`string`

요청을받은 데이터 센터의 IATA 공항 코드.

## EDNS 서브넷

유형:`string`

IPv4 또는 IPv6 주소 정보[EDNS 클라이언트 서브넷 (ECS)](/glossary/?term=ecs)recursive 결심자에 의해 전달. 모든 해결자는이 정보를 보냅니다.

## EDNSSubnet 길이

유형:`int`

크기의[EDNS 클라이언트 서브넷 (ECS)](/glossary/?term=ecs)비트에서. 예를 들어, IPv4 주소의 마지막 옥타트가 omitted 경우 (`192.0.2.x.`), subnet 길이는 24일 것입니다.

## 사이트맵

유형:`bool`

클라이언트가 서명한 응답 (DNSSEC 대답 OK)를 취급할 수 있는 경우에 표시하십시오.

## 이름 \*

유형:`string`

전송 된 쿼리의 이름.

## 댓글 RSS

유형:`bool`

클라이언트가 recursive 쿼리 (Recursion Desired)를 의미하는 경우 표시.

## 비밀번호

유형:`int`

클라이언트에서 보낸 쿼리의 크기.

## QueryTCP를

유형:`bool`

클라이언트의 쿼리가 TCP( false, UDP)를 통해 만든 경우를 나타냅니다.

## 비밀번호

유형:`int`

쿼리 유형의 정수 값. 더 많은 정보를 원하시면[Query 유형](https://www.iana.org/assignments/dns-parameters/dns-parameters.xhtml#dns-parameters-4).

## 관련 기사

유형:`bool`

응답이 캐시되지 않았는지 여부.

## 관련 기사

유형:`bool`

응답이 캐시된 stale인지 여부. 다른 말에서 TTL이 만료되었으며 업스트림 네임 서버가 도달하지 않았습니다.

## 응답Reason

유형:`string`

최종 DNS 방화벽 응답에 대한 더 많은 상황에 대한 짧은 설명. 더 알아보기[응답 이유](/dns/dns-firewall/analytics/)더 많은 정보.

## 소스IP

유형:`string`

고객의 IP 주소 (IPv4 또는 IPv6).

## 스크린 샷

유형:`int or string`

쿼리가 발생한 타임스탬프.

## 업스트림IP

유형:`string`

상류 네임서버의 IP (IPv4 또는 IPv6).

## 업스트림ResponseCode

유형:`int`

업스트림 네임서버의 응답 코드의 정수 값. 응답 부호는 따릅니다[IANA 매개 변수](https://www.iana.org/assignments/dns-parameters/dns-parameters.xhtml#dns-parameters-6)

## 업스트림ResponseTimeMs

유형:`int`

milliseconds에서 상류 응답 시간.
