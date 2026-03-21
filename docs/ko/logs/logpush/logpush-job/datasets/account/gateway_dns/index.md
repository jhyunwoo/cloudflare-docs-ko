---
title: 게이트웨이 DNS
pcx_content_type: configuration
sidebar:
  order: 21
translation_locale: ko-KR
translation_source_html: >-
  https://developers.cloudflare.com/logs/logpush/logpush-job/datasets/account/gateway_dns/
translation_source_md: >-
  https://developers.cloudflare.com/logs/logpush/logpush-job/datasets/account/gateway_dns/index.md
translation_source_kind: repo-md
translation_snapshot: '2026-03-13'
translation_upstream_ref: 66ee2dcd3715f1ca46e70954a3cda63f6cbebc75

---
아래 설명은 필드를 사용할 수 있습니다.`gateway_dns`.

## 계정 ID

유형:`string`

Cloudflare 계정 ID.

## 신청ID

유형:`int`

응용 프로그램의 ID 도메인에 속하는 (예를 들어, 1, 2). ApplicationID가 일치하지 않을 때 0으로 설정합니다.

## 이름 \*

유형:`string`

응용 프로그램의 이름 도메인에 속하는 (예를 들어, 'Cloudflare 대시보드').

## 저자명ServerIPs

유형:`array[string]`

답변을 제공 한 저자명서의 IP (예 : \['203.0.113.1', '203.0.113.2']).

## 이름CategoryIDs

유형:`array[int]`

중간 이름 도메인이 (예를 들면, \[7,12,28,122,129,163])에 속하는 범주의 ID 또는 ID.

## CNAMECategory이름

유형:`array[string]`

중간 이름 도메인이 (예를 들어, \['Photography', 'Weather'])에 속한 범주의 이름 또는 이름.

## 이름 \*

유형:`array[string]`

해결 된 중간 이름 도메인 (예를 들어, \['alias.example.com']).

## 이름 반전

유형:`array[string]`

반전 (예를 들면, \['com.example.alias'])에 있는 중간 이름 도메인을 해결했습니다.

## 비밀번호

유형:`string`

DNS 쿼리를 수신 한 데이터 센터의 이름 (예 : 'SJC', 'MIA', 'IAD').

## 한국어

유형:`int`

DNS 쿼리 수신 데이터 센터의 ID (예 : 46, 72, 397).

## 사용자 정의ResolveDurationMs

유형:`int`

응답 할 수있는 사용자 정의 해결사에 대해했다.

## CustomResolver주소

유형:`string`

IP 및 포트 콤보는 사용자 정의 dns fixr 쿼리를 해결하는 데 사용됩니다.

## CustomResolverPolicyID (이전)

유형:`string`

사용자 정의 해결자 정책 UUID, 일치하면. ResolverPolicyID에 의해 사전.

## CustomResolverPolicyName (이전)

유형:`string`

Custom resolver 정책 이름, 일치하면. ResolverPolicyName에 의해 사전.

## 사용자 정의ResolverResponse

유형:`string`

사용자 정의 해결자 응답의 상태.

## 이름 \*

유형:`int or string`

해당 DNS 요청이 만들어진 날짜와 시간 (예를 들어, '2021-07-27T00:01:07Z').

## 장치ID

유형:`string`

HTTP 요청이 시작된 디바이스의 UUID(예: 'dad71818-0429-11ec-a0dc-000000000000').

## 장치 이름

유형:`string`

HTTP 요청이 시작된 디바이스의 이름은 (예를 들어, 'Laptop MB810').

## 다운로드

유형:`string`

대상 DoH 하위 도메인 DNS 쿼리가 만들어졌습니다.

## 다운로드

유형:`string`

대상 DoT 하위 도메인 DNS 쿼리가 만들어졌습니다.

## 사이트맵

유형:`string`

대상 IP 주소 DNS 쿼리 (예를 들어, '104.16.132.2290').

## 사이트맵

유형:`int`

가장자리에 사용된 항구. DNS 쿼리에 의해 사용되는 프로토콜을 기반으로 포트 변경 (예를 들어, 0).

## 관련 기사

유형:`array[int]`

반환된 확장 DNS 오류 코드 목록 (예를 들면, \[2, 3]).

## 이름 \*

유형:`string`

클라이언트를 인증하는 데 사용되는 이메일 (예 : '[모델 번호: user@test.com](mailto:user@test.com)').

## 초기사례

유형:`array[int]`

queried 도메인이 (예를 들면, \[7,12,28,122,129,163])에 속한 범주의 ID 또는 ID.

## 처음CategoryNames

유형:`array[string]`

queried 도메인이 (예를 들어, \['Photography', 'Weather'])에 속한 범주의 이름 또는 이름.

## 처음ResolvedIPs

유형:`array[string]`

게이트웨이 DNS와 게이트웨이 프록시 간의 기존 FQDN 매칭 정책을 수정하는 데 사용되는 IP.

## 내부DNSFallbackStrategy

유형:`string`

내부 DNS 응답에 적용되는 fallback 전략. 낙하 전략이 적용되지 않은 경우 빈.

## 내부DNSRCode

유형:`int`

내부 DNS 서비스에 의해 다시 전송 된 반환 코드.

## 내부DNSViewID

유형:`string`

내부 DNS 서비스에 전송 된 DNS 내부보기 식별자.

## 내부DNSZoneID

유형:`string`

DNS 영역 식별자는 내부 DNS 서비스에 의해 반환됩니다.

## IsResponse 소유권

유형:`bool`

응답은 캐시 또는 아닙니다에서 옵니다.

## 제품정보

유형:`string`

위치의 이름 DNS 요청이 제공됩니다. 위치는 고객에 의해 생성됩니다 (예를 들면, 'Office NYC').

## 위치ID

유형:`string`

위치의 UUID DNS 요청이 제공됩니다. 위치는 고객 (예를 들면, '7bdc7a9c-81d3-4816-8e56-000000000000')에 의해 창조됩니다.

## 일치CategoryIDs

유형:`array[int]`

도메인이 정책 (예를 들어, \[7,12,28,122,129,163])과 일치 한 범주의 ID 또는 ID.

## MatchedCategory이름

유형:`array[string]`

도메인의 이름 또는 이름은 정책과 일치 (예를 들어, \['Photography', 'Weather']).

## 일치하는 표시FeedIDs

유형:`array[int]`

도메인이 정책 (예를 들어, \[7,12])과 일치 한 ID 또는 ID.

## 일치하는 표시FeedNames

유형:`array[string]`

도메인이 정책 (예를 들어, \['Vendor Malware Feed', 'Vendor CoC Feed')과 일치한 표시 피드의 이름 또는 이름.

## 정책 (임시)

유형:`string`

적용 된 정책의 이름 (예 : '7bdc7a9c-81d3-4816-8e56-de1acad3dec5').

## 정책ID

유형:`string`

적용된 정책/rule의 ID (모든 경우).

## 정책이름

유형:`string`

적용된 정책의 이름 (모든 경우).

## 프로젝트

유형:`string`

클라이언트의 DNS 쿼리에 사용되는 프로토콜 (예 : 'udp').

## QueryApplicationIDs를

유형:`array[int]`

queried 도메인의 ID 또는 ID는 (예를 들면, \[1, 51])에 속합니다

## QueryApplication이름

유형:`array[string]`

queried 도메인의 이름 또는 이름은 (예를 들면, \['Cloudflare 대시보드'])에 속합니다

## 비밀번호

유형:`array[int]`

모든 카테고리의 연합; 처음 범주 + 해결 IP 카테고리 + Cname 중간 범주

## QueryCategory이름

유형:`array[string]`

모든 카테고리 이름의 연합; 처음 범주 + 해결 IP 카테고리 + Cname 중간 범주

## 글쓰기

유형:`string`

쿼리의 글로벌 고유 식별자.

## QueryIndicatorFeedIDs를

유형:`array[int]`

ID 또는 ID의 표시 피드(s) 도메인에 속하는 (예를 들어, \[7,12,28]).

## QueryIndicator페드 이름

유형:`array[string]`

도메인이 (예를 들어, \['Vendor Malware Feed', 'Vendor CoC Feed', 'Vendor Phishing Feed')에 속한 도메인의 이름 또는 이름.

## 이름 \*

유형:`string`

쿼리 이름 (예를 들어, 'example.com'). Cloudflare는 '.'로 로그에 루트 서버 쿼리에 대 한 것입니다.

## QueryName리버드

유형:`string`

(예를 들어, 'com.example')의 Query 이름. Cloudflare는 '.'로 로그에 루트 서버 쿼리에 대 한 것입니다.

## 비밀번호

유형:`int`

바이트의 DNS 요청의 크기 (예 : 151).

## 비밀번호

유형:`int`

DNS 쿼리의 유형 (예를 들면, 1, 28, 15, 또는 16).

## QueryType이름

유형:`string`

DNS 쿼리의 유형 (예를 들어, 'A', 'AAAA', 'MX' 또는 'TXT').

## 사이트맵

유형:`int`

DNS 해결자에 의해 다시 전송 된 반환 코드.

## RData (이동)

유형:`array[object]`

rdata 개체 (예를 들어, \[{"type":"5","data":"dns-packet-placeholder..."}]).

## 리디렉션

유형:`string`

사용자가 리디렉션 된 사용자 정의 URI, 어떤 경우.

## 등록ID

유형:`string`

HTTP 요청이 시작된 장치 등록의 UUID (예 : 'dad71818-0429-11ec-a0dc-000000000000').

## 요청ContextCategoryIDs

유형:`array[int]`

필터링을위한 EDNS 요청에 게이트웨이로 전송 된 범주의 ID 또는 ID (예 : \[7,12,28,122,129,163]).

## 요청ContextCategoryNames

유형:`array[string]`

필터링을 위한 EDNS 요청에 게이트웨이로 보내진 범주의 이름 또는 이름(예: \['Photography', 'Weather']).

## 해결된IPCategoryIDs

유형:`array[int]`

응답의 ips가 (예를 들어, \[7,12,28,122,129,163])에 속한 범주의 ID 또는 ID.

## ResolvedIPCategory이름

유형:`array[string]`

응답의 ips가 (예를 들어, \['Photography', 'Weather'])에 속한 범주의 이름 또는 이름.

## 해결된IPContinentCodes

유형:`array[string]`

각 해결 IP의 지속적인 코드, 어떤 경우 (예를 들면 \['NA', 'EU']).

## 해결된IPCountryCodes

유형:`array[string]`

각 해결 IP의 국가 코드, 어떤 경우 (예를 들면 \['US', 'PT']).

## 해결된IPs

유형:`array[string]`

응답에서 해결 된 IP, (예 : \['203.0.113.1', '203.0.113.2']).

## ResolverDecision의 장점

유형:`string`

DNS 쿼리의 결과 (예를 들어, 'overrideForSafeSearch').

## 해결사PolicyID

유형:`string`

Resolver 정책 UUID, 어떤 일치인지.

## Resolver정책

유형:`string`

Resolver 정책 이름, 어떤 일치인지.

## 관련 기사

유형:`array[object]`

rdata 개체 (예를 들어, \[{"type":"5","data":"dns-packet-placeholder..."}]).

## 리소스RecordsJSON

유형:`string`

반환된 리소스 레코드 (예를 들어, '\[{"name": "example.com", "type": "CNAME", "class": "IN", "ttl": 3600, "rdata": "cname.example.com."}]와 JSON 배열을 나타냅니다.

## 사이트맵

유형:`string`

DNS 쿼리를 만드는 소스 IP 주소 (예 : '104.16.132.229').

## SrcIPContinentCode는

유형:`string`

DNS 쿼리를 만드는 소스 IP 주소의 지속적인 코드 (예를 들어, 'NA').

## SrcIPCountryCode의 경우

유형:`string`

DNS 쿼리를 만드는 소스 IP 주소의 국가 코드 (예 : '미국').

## 사이트맵

유형:`int`

클라이언트에 의해 사용되는 포트는 DNS 요청 (예를 들어, 0)을 보냈습니다.

## 시간 영역

유형:`string`

현재 시간을 계산하는 데 사용되는 시간대, 일치 규칙이 그것으로 예정된 경우.

## 시간대InferredMethod

유형:`string`

일정에 대한 시간대를 선택하는 방법 (일반적으로 사용자 IP / 현지 시간에서).

## 사용자 ID

유형:`string`

HTTP 요청이 시작된 사용자 ID(예: '0000-0000-0000-0000-0000-0000-000000').
