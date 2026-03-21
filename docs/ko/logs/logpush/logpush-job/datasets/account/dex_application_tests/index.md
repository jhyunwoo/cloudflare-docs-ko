---
title: DEX 신청 시험
pcx_content_type: configuration
sidebar:
  order: 21
translation_locale: ko-KR
translation_source_html: >-
  https://developers.cloudflare.com/logs/logpush/logpush-job/datasets/account/dex_application_tests/
translation_source_md: >-
  https://developers.cloudflare.com/logs/logpush/logpush-job/datasets/account/dex_application_tests/index.md
translation_source_kind: repo-md
translation_snapshot: '2026-03-13'
translation_upstream_ref: 66ee2dcd3715f1ca46e70954a3cda63f6cbebc75

---
아래 설명은 필드를 사용할 수 있습니다.`dex_application_tests`.

## 계정 ID

유형:`string`

Cloudflare 계정 ID.

## Client플랫폼

유형:`string`

클라이언트의 운영 체계.

## 고객Version

유형:`string`

WARP 클라이언트 버전.

## 비밀번호

유형:`string`

WARP 클라이언트가 Cloudflare에 연결되는 Colo 부호.

## 장치ID

유형:`string`

유일한 장치 ID.

## 장치등록ID

유형:`string`

장치 등록에 대한 독특한 ID.

## 실행Context

유형:`string`

테스트 트래픽이 터널의 내부 또는 외부를 실행했는지 여부. 수 있습니다`inTunnel`또는`outOfTunnel`.

## HTTP 클라이언트IPASN

유형:`int`

HTTP 테스트 클라이언트 IP 자율 시스템 번호, 예를 들어`13335`. HTTP 테스트 만.

## HTTP 클라이언트IPASO

유형:`string`

HTTP 테스트 클라이언트 IP 자율 시스템 조직, 예를 들어`Cloudflare, Inc.`. HTTP 테스트 만.

## HTTPClientIP주소

유형:`string`

HTTP 테스트 클라이언트 IP 주소. HTTP 테스트 만.

## HTTP 클라이언트IPCity

유형:`string`

HTTP 테스트 클라이언트 IP 도시 이름 영어, 예를 들어`Los Angeles`. HTTP 테스트 만.

## HTTP 클라이언트IPCountryISO

유형:`string`

HTTP 테스트 클라이언트 IP 국가 ISO 부호, 예를 들면`US`미국. HTTP 테스트 만.

## HTTP 클라이언트IPNetmask

유형:`string`

HTTP 테스트 클라이언트 IP netmask. HTTP 테스트 만.

## HTTP 클라이언트

유형:`string`

HTTP 테스트 클라이언트 IP 상태 ISO 부호, 예를 들면`CA`캘리포니아. HTTP 테스트 만.

## HTTP 클라이언트IPVersion

유형:`string`

HTTP 테스트 클라이언트 IP 버전. HTTP 테스트 만.

## HTTP 클라이언트IPZip

유형:`string`

HTTP 테스트 클라이언트 IP 우편 번호, 예를 들어`90001`. HTTP 테스트 만.

## HTTP연결종료

유형:`int`

HTTP 테스트 결과는 테스트 시작 이후 밀리 초에서 끝을 연결합니다. HTTP 테스트 만. 더 알아보기[회사 소개](https://developer.mozilla.org/en-US/docs/Web/API/Resource_Timing_API/Using_the_Resource_Timing_API)더 많은 정보.

## HTTPConnect시작

유형:`int`

HTTP 테스트 결과가 시작을 연결, 테스트 시작 이후 milliseconds. HTTP 테스트 만. 더 알아보기[회사 소개](https://developer.mozilla.org/en-US/docs/Web/API/Resource_Timing_API/Using_the_Resource_Timing_API)더 많은 정보.

## HTTPDomainLookupEndMs는

유형:`int`

HTTP 테스트 결과 도메인 조회 끝, 테스트 시작 이후 밀리 초. HTTP 테스트 만. 더 알아보기[회사 소개](https://developer.mozilla.org/en-US/docs/Web/API/Resource_Timing_API/Using_the_Resource_Timing_API)더 많은 정보.

## HTTPDomainLookup시작

유형:`int`

HTTP 테스트 결과 도메인 조회 시작, 테스트 시작 이후 밀리 초. HTTP 테스트 만. 더 알아보기[회사 소개](https://developer.mozilla.org/en-US/docs/Web/API/Resource_Timing_API/Using_the_Resource_Timing_API)더 많은 정보.

## HTTP이메일

유형:`string`

HTTP 테스트 결과 오류 메시지. HTTP 테스트 만.

## HTTP방법

유형:`string`

HTTP 테스트 방법. HTTP 테스트 만.

## HTTPRequest시작

유형:`int`

HTTP 테스트 결과 요청 시작, 테스트 시작 이후 밀리 초. HTTP 테스트 만. 더 알아보기[회사 소개](https://developer.mozilla.org/en-US/docs/Web/API/Resource_Timing_API/Using_the_Resource_Timing_API)더 많은 정보.

## HTTPResponseBody바이트

유형:`int`

HTTP 응답 몸의 크기. HTTP 테스트 만.

## HTTP 응답 종료Ms

유형:`int`

HTTP 테스트 결과 응답 끝, 테스트 시작 이후 밀리 초. HTTP 테스트 만. 더 알아보기[회사 소개](https://developer.mozilla.org/en-US/docs/Web/API/Resource_Timing_API/Using_the_Resource_Timing_API)더 많은 정보.

## HTTPResponseHeader바이트

유형:`int`

HTTP 테스트 결과 헤더 바이트. HTTP 테스트 만.

## HTTP 응답 시작

유형:`int`

HTTP 테스트 결과 응답 시작, 테스트 시작 이후 밀리 초. HTTP 테스트 만. 더 알아보기[회사 소개](https://developer.mozilla.org/en-US/docs/Web/API/Resource_Timing_API/Using_the_Resource_Timing_API)더 많은 정보.

## HTTPSecureConnection시작

유형:`int`

HTTP 테스트 결과 보안 연결 시작, 테스트 시작 이후 밀리 초. HTTP 테스트 만. 더 알아보기[회사 소개](https://developer.mozilla.org/en-US/docs/Web/API/Resource_Timing_API/Using_the_Resource_Timing_API)더 많은 정보.

## HTTP서버IPASN

유형:`int`

HTTP 테스트 서버 IP 자율 시스템 번호, 예를 들어`13335`. HTTP 테스트 만.

## HTTP서버IPASO

유형:`string`

HTTP 테스트 서버 IP 자율 시스템 조직, 예를 들어`Cloudflare, Inc.`. HTTP 테스트 만.

## HTTPServerIP주소

유형:`string`

HTTP 테스트 서버 IP 주소. HTTP 테스트 만.

## HTTP서버IPCity

유형:`string`

HTTP 테스트 서버 IP 도시 이름 영어, 예를 들어`Los Angeles`. HTTP 테스트 만.

## HTTP서버 IPCountryISO

유형:`string`

HTTP 테스트 서버 IP 국가 ISO 부호, 예를 들면`US`미국. HTTP 테스트 만.

## HTTP서버IPNetmask

유형:`string`

HTTP 테스트 서버 IP netmask. HTTP 테스트 만.

## 웹 사이트

유형:`string`

HTTP 테스트 서버 IP 상태 ISO 부호, 예를 들면`CA`캘리포니아. HTTP 테스트 만.

## HTTPServerIP버전

유형:`string`

HTTP 테스트 서버 IP 버전. HTTP 테스트 만.

## HTTP서버IPZip

유형:`string`

HTTP 테스트 서버 IP 우편 번호, 예를 들어`90001`. HTTP 테스트 만.

## HTTPStatusCode

유형:`int`

HTTP 테스트 결과 상태 코드. HTTP 테스트 만.

## HTTPURL 정보

유형:`string`

HTTP 테스트 대상 URL. HTTP 테스트 만.

## 테스트ID

유형:`string`

결과가 업로드 된 테스트 ID.

## 시험 유형

유형:`string`

시험의 유형. 수 있습니다`traceroute`또는`http`.

## 스크린 샷

유형:`int or string`

시험 시작 시간.

## TracerouteDestinationHostname에 대한 정보

유형:`string`

Traceroute 테스트 결과 대상 호스트 이름. Traceroute 테스트 만.

## TracerouteDestinationIPASN 정보

유형:`int`

Traceroute 테스트 대상 IP 자율 시스템 번호, 예를 들어`13335`. Traceroute 시험만.

## TracerouteDestinationIPASO를 타십시오

유형:`string`

Traceroute 테스트 대상 IP 자율 시스템 조직, 예를 들어`Cloudflare, Inc.`. Traceroute 시험만.

## TracerouteDestinationIP주소

유형:`string`

Traceroute 테스트 대상 IP 주소. Traceroute 테스트 만.

## TracerouteDestinationIPCity, 오스트레일리아

유형:`string`

Traceroute 시험 대상 IP 도시 이름 영어, 예를 들어`Los Angeles`. Traceroute 시험만.

## TracerouteDestinationIPCountryISO를 추적하십시오

유형:`string`

Traceroute 테스트 대상 IP 국가 ISO 코드, 예를 들어`US`미국. Traceroute 테스트 만.

## TracerouteDestinationIPNetmask의 특징

유형:`string`

Traceroute 테스트 대상 IP netmask. Traceroute 테스트 만.

## TracerouteDestinationIPStateISO를 선택하십시오.

유형:`string`

Traceroute 테스트 대상 IP 국가 ISO 코드, 예를 들어`CA`캘리포니아. Traceroute 테스트 만.

## TracerouteDestinationIP버전

유형:`string`

Traceroute 테스트 대상 IP 버전. Traceroute 테스트 만.

## TracerouteDestinationIPZip의 특징

유형:`string`

Traceroute 테스트 대상 IP 우편 번호, 예를 들어`90001`. Traceroute 시험만.

## TracerouteDurationMs의 특징

유형:`int`

Traceroute 테스트 결과 milliseconds의 지속 시간. Traceroute 테스트 만.

## TracerouteHops의 특징

유형:`array[object]`

Traceroute 테스트 결과 hops, 예를 들어`[{"errors": ["timeout", "host unreachable"], "ip": {"address": "192.0.2.0", "asn": 13335, "aso": "Cloudflare, Inc.", "location": {"city": "Los Angeles", "countryISO": "US", "stateISO": "CA", "zip": "90001"}, "netmask": "255.255.255.0", "version": "v4"}, "name": "router1.example.com", "pathID": 1, "received": 3, "rtts": [10, 12, 11], "sent": 3, "ttl": 60}]`. Traceroute 시험만.

## TracerouteMaxTTL의 특징

유형:`int`

Traceroute 테스트 결과 최대 TTL 값. Traceroute 테스트 만.

## TracerouteProtocol의 특징

유형:`string`

Traceroute 테스트 결과 프로토콜. 수 있습니다`icmp`, `udp`, 또는`tcp`. Traceroute 시험만.

## Traceroute 크기

유형:`int`

Traceroute 테스트 결과 패킷 크기 바이트. Traceroute 테스트 만.

## Traceroute출처IPASN

유형:`int`

Traceroute 테스트 소스 IP 자율 시스템 번호, 예를 들어`13335`. Traceroute 시험만.

## Traceroute출처IPASO

유형:`string`

Traceroute 테스트 소스 IP 자율 시스템 조직, 예를 들어`Cloudflare, Inc.`. Traceroute 시험만.

## TracerouteSourceIP주소

유형:`string`

Traceroute 테스트 소스 IP 주소. Traceroute 테스트 만.

## TracerouteSourceIP시티

유형:`string`

Traceroute 시험 소스 IP 도시 이름 영어, 예를 들면`Los Angeles`. Traceroute 시험만.

## Traceroute출처IPCountryISO

유형:`string`

Traceroute 시험 근원 IP 국가 ISO 부호, 예를 들면`US`미국. Traceroute 테스트 만.

## Traceroute소스IPNetmask

유형:`string`

Traceroute 테스트 소스 IP netmask. Traceroute 테스트 만.

## TracerouteSourceIPStateISO의 특징

유형:`string`

Traceroute 시험 근원 IP 국가 ISO 부호, 예를 들면`CA`캘리포니아. Traceroute 테스트 만.

## TracerouteSourceIP버전

유형:`string`

Traceroute 테스트 소스 IP 버전. Traceroute 테스트 만.

## Traceroute출처IPZip

유형:`string`

Traceroute 시험 근원 IP 우편 부호, 예를 들면`90001`. Traceroute 시험만.

## TracerouteStatus의 특징

유형:`string`

Traceroute 시험 결과 상태. 수 있습니다`destinationReached`, `lastHopFailed`, 또는`maxHopsExhausted`. Traceroute 시험만.

## Traceroute시간 종료

유형:`int or string`

Traceroute 시험 결과 시간 끝. Traceroute 테스트 만.

## TracerouteVersion의 특징

유형:`string`

WARP traceroute 클라이언트의 버전. Traceroute 테스트 만.

## 비밀번호

유형:`string`

터널 유형 장치는 가장자리에 연결을 설정하는 데 사용됩니다. 수 있습니다`http2`, `masque`, 또는`wireguard`.

## 사용자이메일

유형:`string`

액세스 사용자 이메일.

## 사용자 ID

유형:`string`

액세스 사용자 ID.
