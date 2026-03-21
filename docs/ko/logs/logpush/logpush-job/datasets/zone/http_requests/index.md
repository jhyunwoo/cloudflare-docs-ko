---
title: HTTP 요청
pcx_content_type: configuration
sidebar:
  order: 21
translation_locale: ko-KR
translation_source_html: >-
  https://developers.cloudflare.com/logs/logpush/logpush-job/datasets/zone/http_requests/
translation_source_md: >-
  https://developers.cloudflare.com/logs/logpush/logpush-job/datasets/zone/http_requests/index.md
translation_source_kind: repo-md
translation_snapshot: '2026-03-13'
translation_upstream_ref: 66ee2dcd3715f1ca46e70954a3cda63f6cbebc75

---
아래 설명은 필드를 사용할 수 있습니다.`http_requests`.

## BotDetectionIDs는

유형:`array[int]`

요청시 Bot Management Heuristic detections에 부합하는 ID 목록. Bot 관리 고객을 위해만 유효한. 이 기능을 활성화하려면 계정 팀에 문의하십시오.

## BotDetection태그

유형:`array[string]`

요청시 Bot Management Heuristic detections에 correlate 태그 목록. Bot 관리 고객을 위해만 유효한. 이 기능을 활성화하려면 계정 팀에 문의하십시오.

## 봇스코어

유형:`int`

Cloudflare Bot 점수. 30 이하의 점수는 자동화된 트래픽과 일반적으로 연관되어 있습니다. Bot 관리 고객을 위해만 유효한. 이 기능을 활성화하려면 계정 팀에 문의하십시오.

## 봇스코어Src

유형:`string`

Bot Score를 생성하는 탐지 엔진.<br />가능한 값은<em>아니다.</em> | <em>헤리티지</em> | <em>기계 학습</em> | <em>Behavioral 분석</em> | <em>인증 봇</em> | <em>JS 지문</em> | <em>Cloudflare 서비스</em>. Bot 관리 고객을 위해만 유효한. 이 기능을 활성화하려면 계정 팀에 문의하십시오.

## 봇태그

유형:`array[string]`

봇 트래픽의 종류 (유효한 경우). 더 알아보기[봇 태그](/bots/concepts/bot-tags/)잠재적 가치의 목록. Bot 관리 고객을 위해만 유효한. 이 기능을 활성화하려면 계정 팀에 문의하십시오.

## 카테고리

유형:`string`

캐시 상태.<br />가능한 값은<em>이름 \*</em> | <em>한국어</em> | <em>구매하기</em> | <em>뚱 베어</em> | <em>사이트맵</em> | <em>이름 \*</em> | <em>이름 \*</em> | <em>뚱 베어</em> | <em>관련 상품</em> | <em>뚱 베어</em> | <em>스트림 hit</em> | <em>연락처</em> <br />"dynamic"는 요청이 캐시에 자격이 없다는 것을 의미합니다. 즉, 방화벽에 의해 차단 된 예입니다. 더 알아보기[Cloudflare 캐시 응답](/cache/concepts/cache-responses/)더 많은 정보.

## 캐시예약

유형:`bool`

Cache Reserve는이 요청을 봉사하는 데 사용되었습니다.

## 캐시ResponseBytes

유형:`int`

캐시에 의해 반환된 바이트 수.

## CacheResponseStatus (이전)

유형:`int`

캐시가 가장자리에 반환된 HTTP 상태 코드. 모든 요청 (non-cacheable ones 포함) 캐시를 통해 이동합니다. CacheCacheStatus 필드에 참조.

## 캐시TieredFill

유형:`bool`

Tiered Cache는이 요청을 제공하기 위해 사용되었습니다.

## 채용정보

유형:`int`

고객 AS 번호.

## 고객 시티

유형:`string`

고객의 대략적인 도시.

## 고객Country

유형:`string`

2-letter ISO-3166 클라이언트 IP 주소의 국가 코드.

## ClientDevice유형

유형:`string`

클라이언트 장치 유형.

## 고객IP

유형:`string`

고객의 IP 주소.

## ClientIP클래스

유형:`string`

클라이언트 IP 종류.<br />가능한 값은<em>이름 \*</em> | <em>공유하기</em> | <em>검색엔진</em> | <em>관련 상품</em> | <em>관련 제품 제품정보</em> | <em>없음Record</em> | <em>관련 상품</em> | <em>사이트맵</em>.

## 클라이언트Latitude

유형:`string`

클라이언트의 대략적인 위도.

## 고객Longitude

유형:`string`

클라이언트의 대략 경도.

## 클라이언트MTLSAuthCertFingerprint

유형:`string`

mTLS 인증 동안 클라이언트가 제시 한 인증서의 SHA256 지문. mTLS 연결에 첫 번째 요청에 만 팝업.

## 클라이언트MTLSAuthStatus

유형:`string`

mTLS 인증의 상태. mTLS 연결에 첫 번째 요청에 만 팝업.<br />가능한 값은<em>이름 \*</em> | <em>·</em> | <em>뚱 베어</em> | <em>법적고지</em> | <em>이름 \*</em> | <em>구매하기</em>.

## 클라이언트RegionCode

유형:`string`

클라이언트 IP 주소의 ISO-3166-2 지역 코드.

## 클라이언트RequestBytes

유형:`int`

클라이언트 요청에 있는 바이트 수.

## 클라이언트RequestHost

유형:`string`

고객이 요청한 호스트.

## 클라이언트RequestMethod

유형:`string`

클라이언트 요청의 HTTP 방법.

## 고객문의

유형:`string`

클라이언트가 요청한 URI 경로는 쿼리 문자열없이 요청한 URL의 경로 부분만 포함합니다.

## 클라이언트RequestProtocol

유형:`string`

클라이언트 요청의 HTTP 프로토콜.

## 클라이언트RequestReferer

유형:`string`

HTTP 요청 참조.

## 클라이언트RequestScheme

유형:`string`

방문자가 요청한 URL 계획.

## 클라이언트RequestSource

유형:`string`

외부 소스 또는 Cloudflare 내의 다른 서비스로 요청을 식별합니다. 더 알아보기[ClientRequestSource 필드](/logs/reference/clientrequestsource/)잠재적 가치의 목록.

## 클라이언트RequestURI

유형:`string`

클라이언트가 요청한 URI는 요청한 URL의 전체 경로와 쿼리 문자열을 포함합니다.

## 클라이언트RequestUserAgent

유형:`string`

고객에 의해 보고된 사용자 대리인.

## 고객SSLCipher

유형:`string`

클라이언트 SSL 암호화.

## 클라이언트SSLProtocol

유형:`string`

클라이언트 SSL (TLS) 프로토콜. 값 "none"은 SSL이 사용되지 않았다는 것을 의미합니다.

## 고객SrcPort

유형:`int`

클라이언트 소스 포트.

## 클라이언트TCPRTTM

유형:`int`

TCP 왕복 시간 (SRTT)의 부드럽게 한 평균. 연결에 초기 요청을 위해 연결 설정 중만 측정됩니다. 동일한 연결에 후속 요청을 위해 요청이 접수된 시간까지 전체 연결 수명을 측정합니다.

## ClientX 요청

유형:`string`

X-Requested-With HTTP 헤더.

## ContentScanObj결과

유형:`array[string]`

콘텐츠 검사 결과 목록.

## ContentScanObj 크기

유형:`array[int]`

콘텐츠 객체의 목록.

## ContentScanObj유형

유형:`array[string]`

콘텐츠 유형 목록

## 제품 정보

유형:`object`

쿠키에 대한 문자열 키 값 쌍. 이 필드는 에 기초[Logpush 사용자 정의 필드](/logs/logpush/logpush-job/custom-fields/)구성해야 하는 .

## EdgeCF연결O2O

유형:`bool`

Cloudflare 가장자리에 다수 지역을 통해서 반복되는 경우에 진실하십시오. 오렌지 (O2O) 요청으로 간주됩니다.

## EdgeColo코드

유형:`string`

요청을받은 데이터 센터의 IATA 공항 코드.

## EdgeColoID로

유형:`int`

Cloudflare 가장자리 자료 센터 ID.

## EdgeEnd시간표

유형:`int or string`

Timestamp는 클라이언트에 응답을 보내기 완료.

## 연락처

유형:`string`

이 요청에 대해 어떤 종류의 응답이 발급되었는지 나타냅니다 (Unknown = no specific action).

## 연락처

유형:`string`

요청이 보안 검사에 따라 분류 된지 여부 (알 수 없음 = 특정 분류).

## 연락처

유형:`string`

이 요청의 취급을 결정하는 데 사용되는 데이터가 표시됩니다 (Unknown = no data).

## EdgeRequestHost는

유형:`string`

가장자리에서 기원에 요청에 호스트 헤더.

## EdgeResponseBody바이트

유형:`int`

HTTP 응답 몸의 크기는 클라이언트로 돌려.

## EdgeResponse바이트

유형:`int`

클라이언트에 의해 반환된 바이트 수.

## EdgeResponse압축기

유형:`float`

가장자리 응답 압축 비율은 본래와 압축 응답의 크기 사이 비율로 산출됩니다.

## EdgeResponseContent유형

유형:`string`

Edge 응답 내용 유형 우두머리 가치.

## 연락처

유형:`int`

클라이언트에 Cloudflare에 의해 반환된 HTTP 상태 부호.

## 다운로드

유형:`string`

IP of the edge server 만들기 a request to the Origin. 가능한 응답은 IPv4 또는 IPv6 형식으로 문자열, 또는 빈 문자열입니다. 빈 문자열은 원래 서버로 만든 요청이 없다는 것을 의미합니다.

## EdgeStart시간표

유형:`int or string`

클라이언트에서 수신되는 가장자리가 요청하는 Timestamp.

## EdgeTimeToFirst바이트

유형:`int`

Cloudflare의 가장자리에서 측정되는 것과 같이 첫번째 바이트에 시간의 총 전망. TCP 연결이 설치되고 종료되면 Cloudflare가 안경에 대한 응답의 첫 번째 바이트를 반환합니다. TLS Handhake 시간 (새로운 연결을 위해)와 근원 응답 시간을 포함합니다.

## 비밀번호

유형:`string`

기본 공격 또는 사용 케이스는 Fraud 검출에 의해 요청에서 감지.

## FraudDetectionIDs는

유형:`array[int]`

요청시 Fraud 검출에 대한 ID 목록.

## FraudDetection태그

유형:`array[string]`

요청시 Fraud 검출에 correlate 태그 목록.

## JA3하쉬

유형:`string`

SSL/TLS 클라이언트 프로파일에 사용되는 JA3 지문의 MD5 해시. Bot 관리 고객을 위해만 유효한. 이 기능을 활성화하려면 계정 팀에 문의하십시오.

## 한국어

유형:`string`

SSL/TLS 클라이언트 프로파일에 사용되는 JA4 지문. Bot 관리 고객을 위해만 유효한. 이 기능을 활성화하려면 계정 팀에 문의하십시오.

## JA4회원

유형:`object`

이 JA4 지문을 위해 계산된 간 탐구 통계. JA4Signals 필드는 키:값 쌍으로 구성되며, 값은 숫자입니다. Bot 관리 고객을 위해만 유효한. 이 기능을 활성화하려면 계정 팀에 문의하십시오.

## JSDetection의 특징 패스워드

유형:`string`

JavaScript 탐지를 통과했습니다.<br />가능한 값은<em>이름 \*</em> | <em>실패한</em> | <em>한국어</em>. Bot 관리 고객을 위해만 유효한. 이 기능을 활성화하려면 계정 팀에 문의하십시오.

## 누출감지기

유형:`string`

자주 묻는 질문[새소식](/waf/detections/leaked-credentials/). <br />가능한 결과는:<em>비밀번호</em> | <em>사용자 이름</em> | <em>엠에디터 매크로 참조:Similar</em> | <em>비밀번호</em> | <em>제품정보</em>.

## 근원DNSResponseTimeMs

유형:`int`

원래 이름에 대한 DNS 응답을받을 시간. 일반적으로 몇 밀리 초를 걸립니다, 그러나 CNAME 레코드가 사용 되는 경우 더 길 수 있습니다.

## 근원IP

유형:`string`

원래 서버의 IP.

## OriginRequestHeaderSendDurationMs에 대하여

유형:`int`

연결을 설치 한 후 요청 헤더를 보낼 시간. 이 값은 보통 0입니다.

## OriginResponseBytes (이전)

유형:`int`

Origin 서버에 의해 반환된 바이트 수.

## 원산지ResponseDurationMs

유형:`int`

업스트림 응답 시간, 요청을받은 첫 번째 datacenter에서 측정. Argo Smart Routing 및 Tiered Cache에 의해 촬영된 시간이 포함되어 있으며, 시간이 연결되고 원본 서버에서 응답을 받을 수 있습니다. 이 필드는 OriginResponseTime을 대체합니다.

## OriginResponseHTTP전문가

유형:`string`

RFC1123 형식으로 'expires' 헤더의 값.

## OriginResponseHTTP마지막 모드

유형:`string`

RFC1123 형식으로 'last-modified' 헤더의 값.

## 근원ResponseHeaderReceiveDurationMs

유형:`int`

Cloudflare 끝 후에 응답 우두머리를 돌려보내는 근원을 위해 걸리는 시간.

## 근원ResponseStatus

유형:`int`

업스트림 서버가 반환된 상태. 값 0은 원래 서버에서 수신 된 응답이 없다는 것을 의미하며 응답은 Cloudflare의 가장자리에 의해 제공됩니다. 그러나, 영역이 그것에서 실행되는 노동자가 있는 경우에, 가치 0는 근원에 한 Workers subrequest의 결과일 수 있었습니다.

## OriginResponseTime (이전)

유형:`int`

nanoseconds의 수는 가장자리에 응답을 반환하는 기원을했다.

## 근원SSLProtocol

유형:`string`

SSL (TLS) 프로토콜은 원래에 연결하기 위해 사용됩니다.

## 근원TCPHandshakeDurationMs

유형:`int`

TCP Handhake를 시작으로 시작된 시간. 이것은 0 인 경우의 기원 연결이 재사용됩니다.

## 근원TLSHandshakeDurationMs

유형:`int`

TLS Handhake를 완료하는 시간. 이것은 0 인 경우의 기원 연결이 재사용됩니다.

## 부모RayID

유형:`string`

Ray ID of the parent request if this request was made using the Worker 스크립트.

## 레이디

유형:`string`

요청의 ID.

## 자주 묻는 질문

유형:`object`

RequestHeaders에 대한 문자열 키 값 쌍. 이 필드는 에 기초[Logpush 사용자 정의 필드](/logs/logpush/logpush-job/custom-fields/)구성해야 하는 .

## 응답 헤더

유형:`object`

ResponseHeaders에 대한 문자열 키 값 쌍. 이 필드는 에 기초[Logpush 사용자 정의 필드](/logs/logpush/logpush-job/custom-fields/)구성해야 하는 .

## 보안Action

유형:`string`

보안 규칙의 동작은 용어를 트리거, 어떤 경우.

## 비밀번호

유형:`array[string]`

작업의 배열 Cloudflare 보안 제품은이 요청에 수행. 이 행동과 관련된 개별 보안 제품은 SecuritySources에서 찾을 수 있으며 해당 규칙 ID는 SecurityRuleIDs에서 찾을 수 있습니다. 배열의 길이는 SecurityRuleIDs 및 SecuritySources와 동일합니다.<br />가능한 행동은<em>이름 \*</em> | <em>지원하다</em> | <em>제품정보</em> | <em>- 연혁</em> | <em>프로젝트</em> | <em>이름 \*</em> | <em>연결닫기</em> | <em>공지사항</em> | <em>도전자명</em> | <em>인기 카테고리</em> | <em>jschallenge수신</em> | <em>뚱 베어</em> | <em>회사연혁 - 연혁</em> | <em>관리ChallengeNonInteractiveSolved</em> | <em>관리ChallengeInteractiveSolved</em> | <em>관리ChallengeBypassed</em> | <em>수정하기</em> | <em>forceConnection닫기</em> | <em>한국어</em>.

## 보안RuleDescription

유형:`string`

보안 규칙의 설명은 용어 행동을 트리거, 어떤 경우.

## 보안RuleID

유형:`string`

보안 규칙의 규칙 ID는 용어를 트리거, 어떤 경우.

## 보안RuleIDs

유형:`array[string]`

요청을 일치하는 보안 제품의 규칙 ID의 배열. 규칙 ID와 관련된 보안 제품은 SecuritySources에서 찾을 수 있습니다. 배열의 길이는 SecurityActions와 SecuritySources와 동일합니다.

## 보안 소스

유형:`array[string]`

일치하는 보안 제품의 배열. 동일한 제품은 활성화 된 다른 규칙이나 행동을 나타내는 여러 번 나타납니다. 규칙 ID는 SecurityRuleIDs에서 찾을 수 있으며, 행동은 SecurityActions에서 찾을 수 있습니다. 배열의 길이는 SecurityRuleIDs와 SecurityActions와 동일합니다.<br />가능한 소스는<em>이름 \*</em> | <em>뚱 베어</em> | <em>이름 \*</em> | <em>IP 정보</em> | <em>IP 범위</em> | <em>보안 수준</em> | <em>지역Lockdown</em> | <em>뚱 베어</em> | <em>방화벽Rules</em> | <em>uaBlock의 특징</em> | <em>비율Limit</em> | <em>뚱 베어</em> | <em>인기있는</em> | <em>사이트맵</em> | <em>인증 및 인증</em> | <em>봇파이트</em> | <em>apiShield의 특징</em> | <em>봇관리</em> | <em>사이트맵</em> | <em>방화벽관리</em> | <em>방화벽Custom</em> | <em>본문내용 바로가기 주메뉴 바로가기</em> | <em>apiShieldToken비공개</em> | <em>apiShieldSequenceM 완화</em>.

## SmartRoute콜롬

유형:`int`

Cloudflare 데이터 센터는 Argo Smart Routing이 사용됩니다.

## 위시리스트

유형:`int`

Tiered Cache가 사용되는 경우 "upper tier"데이터 센터.

## 인증BotCategory

유형:`string`

확인된 봇의 범주.

## WAFAttackScore의 특징

유형:`int`

WAF 검출 단위에 의해 생성된 전반적인 요구 점수.

## WAFFlags (빠른)

유형:`string`

추가 구성 플래그:<em>시뮬레이션 (0x1)</em> | <em>한국어</em>.

## WAF매칭 Var (이동)

유형:`string`

가장 정확한 변수의 전체 이름.

## WAFRCEAttackScore의 특징

유형:`int`

RCE 공격에 대한 WAF 점수.

## WAFSQLiAttackScore의 특징

유형:`int`

SQLi 공격에 대한 WAF 점수.

## 모델 번호: WAFXSSAttackScore

유형:`int`

XSS 공격에 대한 WAF 점수.

## 작업자CPUTime

유형:`int`

microseconds에 있는 시간의 총계는 노동자를 실행하는 것을, 어떤 경우에.

## WorkerScript이름

유형:`string`

요청을 만든 Worker 스크립트 이름.

## 채용정보

유형:`string`

상태는 Worker daemon에서 반환됩니다.

## 채용공고

유형:`bool`

이 요청은 노동자 잠수함이었다.

## 작업자SubrequestCount

유형:`int`

이 요청을 처리할 때 Worker에 의해 발행된 하위 요청 수.

## 채용정보

유형:`int`

Workers 런타임이 실행될 필요가 있는 JavaScript 런타임이 JavaScript 런타임이 시작될 때까지 microseconds에서 탈출된 시간. 구체적으로, 이것은 JavaScript 컨텍스트가 열리는 벽시 시간을 측정합니다. 예를 들어, 큰 몸과 응답을 반환 할 때, Workers 런타임은 일부 경우에, JavaScript가 실행할 필요가 없다는 것을 결정하고, 모든 바이트가 통과하고 전송되기 전에 JS 컨텍스트를 닫습니다. 대안으로, 당신이 사용하는 경우`waitUntil()`API는 응답의 반환을 차단하지 않고 작업을 수행 할 수 있습니다, 이 작업은 응답이 반환 된 후 수행 할 수 있으며, 포함 될 것입니다`WorkerWallTimeUs`.

## 지역 이름

유형:`string`

영역의 인간 읽기 가능한 이름 (예 : 'cloudflare.com').
