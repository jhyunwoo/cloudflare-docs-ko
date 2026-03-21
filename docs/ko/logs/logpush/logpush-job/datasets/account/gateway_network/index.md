---
title: Gateway 네트워크
pcx_content_type: configuration
sidebar:
  order: 21
translation_locale: ko-KR
translation_source_html: >-
  https://developers.cloudflare.com/logs/logpush/logpush-job/datasets/account/gateway_network/
translation_source_md: >-
  https://developers.cloudflare.com/logs/logpush/logpush-job/datasets/account/gateway_network/index.md
translation_source_kind: repo-md
translation_snapshot: '2026-03-13'
translation_upstream_ref: 66ee2dcd3715f1ca46e70954a3cda63f6cbebc75

---
아래 설명은 필드를 사용할 수 있습니다.`gateway_network`.

## 계정 ID

유형:`string`

Cloudflare 계정 태그.

## - 연혁

유형:`string`

세션의 게이트웨이에 의해 수행 된 행동.

## 신청 ID

유형:`array[int]`

세션 매개 변수를 일치하는 응용 프로그램의 ID.

## 이름 \*

유형:`array[string]`

세션 매개 변수를 일치하는 응용 프로그램의 이름.

## 분류 ID

유형:`array[int]`

세션 매개 변수를 일치하는 범주의 ID.

## 분류 이름

유형:`array[string]`

세션 매개변수를 일치시키는 범주의 이름.

## 이름 \*

유형:`int or string`

해당 네트워크 세션이 만든 날짜와 시간 (예를 들어, '2021-07-27T00:01:07Z').

## 대상IP

유형:`string`

네트워크 세션의 대상 IP.

## 대상IPContinentCode

유형:`string`

네트워크 세션의 대상 IP의 지속적인 코드 (예 : 'NA').

## 대상IPCountryCode

유형:`string`

네트워크 세션의 대상 IP의 국가 코드 (예 : '미국').

## 관광 명소

유형:`int`

네트워크 세션의 대상 포트.

## 탐지Protocol

유형:`string`

네트워크 세션의 트래픽 프로토콜을 감지했습니다.

## 장치ID

유형:`string`

네트워크 세션이 시작된 디바이스의 UUID.

## 장치 이름

유형:`string`

HTTP 요청이 시작된 디바이스의 이름은 (예를 들어, 'Laptop MB810').

## 이름 \*

유형:`string`

네트워크 세션이 시작된 사용자 ID와 관련된 이메일.

## 오버라이드IP

유형:`string`

네트워크 세션의 overridden IP, 어떤 경우.

## 오버라이드Port

유형:`int`

네트워크 세션의 overridden 포트, 어떤 경우.

## 정책ID

유형:`string`

해당 이용 후기에 달린 코멘트가 없습니다.

## 정책이름

유형:`string`

요청에 적용되는 게이트웨이 정책의 이름.

## 프록시 엔드포인트

유형:`string`

이 네트워크 세션에 사용되는 프록시 엔드포인트, 어떤 경우.

## 등록ID

유형:`string`

네트워크 세션이 시작된 장치 등록의 UUID.

## 사이트맵

유형:`string`

TLS 네트워크 세션에 대한 SNI의 내용, 어떤 경우.

## 세션ID

유형:`string`

이 네트워크 세션의 세션 식별자.

## 소스IP

유형:`string`

네트워크 세션의 소스 IP.

## 소스IPContinentCode

유형:`string`

네트워크 세션의 소스 IP의 지속적인 코드 (예를 들어, 'NA').

## 소스IPCountryCode

유형:`string`

네트워크 세션의 소스 IP의 국가 코드 (예 : '미국').

## 출처InternalIP

유형:`string`

장치의 로컬 LAN IP. GRE/IPsec 터널을 통해서만 사용할 수 있습니다.

## 소스포트

유형:`int`

네트워크 세션의 소스 포트.

## 운송 (사전)

유형:`string`

이 세션에 사용되는 전송 프로토콜.<br />가능한 값은<em>사이트맵</em> | <em>이름 \*</em> | <em>사이트맵</em>. Deprecated, 대신 TransportProtocol을 사용하십시오.

## 교통Protocol

유형:`string`

이 세션에 사용되는 전송 프로토콜.<br />가능한 값은<em>사이트맵</em> | <em>이름 \*</em> | <em>사이트맵</em>.

## 사용자 ID

유형:`string`

네트워크 세션이 시작된 사용자 ID.

## 가상네트워크ID

유형:`string`

가상 네트워크의 식별자는 장치가 연결되었는지, 어떤 경우.

## 가상네트워크Name

유형:`string`

가상 네트워크의 이름은 장치가 연결되었음을 의미합니다.
