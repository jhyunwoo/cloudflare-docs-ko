---
title: 게이트웨이 HTTP
pcx_content_type: configuration
sidebar:
  order: 21
translation_locale: ko-KR
translation_source_html: >-
  https://developers.cloudflare.com/logs/logpush/logpush-job/datasets/account/gateway_http/
translation_source_md: >-
  https://developers.cloudflare.com/logs/logpush/logpush-job/datasets/account/gateway_http/index.md
translation_source_kind: repo-md
translation_snapshot: '2026-03-13'
translation_upstream_ref: 66ee2dcd3715f1ca46e70954a3cda63f6cbebc75

---
아래 설명은 필드를 사용할 수 있습니다.`gateway_http`.

## 계정 ID

유형:`string`

Cloudflare 계정 태그.

## - 연혁

유형:`string`

HTTP 요청에 게이트웨이에 의해 수행 된 행동.

## 신청 ID

유형:`array[int]`

HTTP 요청 매개 변수를 일치하는 응용 프로그램의 ID.

## 이름 \*

유형:`array[string]`

HTTP 요청 매개 변수를 일치하는 응용 프로그램의 이름.

## 관련 기사 파일Hash

유형:`string`

응답에서 차단 된 파일의 해시, 어떤 경우.

## 파일이름

유형:`string`

파일 이름은 요청에 차단, 어떤 경우.

## 차단된FileReason

유형:`string`

Reason 파일은 응답에서 차단되었습니다.

## 관련 기사 파일 크기

유형:`int`

파일 크기 (bytes)는 응답에서 차단, 어떤 경우.

## 차단된FileType

유형:`string`

응답 eg. exe, bin에서 차단 된 파일 형식.

## 분류 ID

유형:`array[int]`

HTTP 요청 매개 변수를 일치하는 범주의 ID.

## 분류 이름

유형:`array[string]`

HTTP 요청 매개 변수를 일치시키는 범주의 이름.

## 이름 \*

유형:`int or string`

해당 HTTP 요청의 날짜와 시간.

## 대상IP

유형:`string`

요청의 대상 IP.

## 대상IPContinentCode

유형:`string`

HTTP 요청의 대상 IP의 지속적인 코드 (예 : 'NA').

## 대상IPCountryCode

유형:`string`

HTTP 요청의 대상 IP의 국가 코드 (예 : '미국').

## 관광 명소

유형:`int`

요청의 목적지 포트.

## 장치ID

유형:`string`

HTTP 요청이 시작된 디바이스의 UUID.

## 장치 이름

유형:`string`

HTTP 요청이 시작된 디바이스의 이름은 (예를 들어, 'Laptop MB810').

## 다운로드MatchedDlpProfileEntries

유형:`array[string]`

HTTP 요청에서 일치하는 DLP 항목 목록.

## 다운로드DlpProfiles

유형:`array[string]`

HTTP 요청에 일치 DLP 프로파일 목록.

## 다운로드 파일이름

유형:`array[string]`

HTTP 요청에 다운로드 된 파일 목록.

## 이름 \*

유형:`string`

클라이언트를 인증하는 데 사용되는 이메일.

## 파일 정보

유형:`object`

HTTP 요청 내에서 검출된 파일에 대한 정보.

## 카테고리

유형:`string`

요청시 캡처 된 모든 관련 법 사본의 상태.

## HTTP호스트

유형:`string`

HTTP 요청에 호스트 헤더의 내용.

## HTTP방법

유형:`string`

HTTP 요청 방법.

## HTTPStatusCode

유형:`int`

HTTP 상태 코드 게이트웨이는 사용자에게 반환됩니다. 반환되지 않은 경우 Zero (예를 들어, 클라이언트가 차단).

## HTTP버전

유형:`string`

HTTP 요청의 버전 이름.

## 이름 \*

유형:`bool`

요청된 경우 Cloudflare 브라우저 고립 또는 아닙니다.

## 정책ID

유형:`string`

게이트웨이 정책 UUID는 요청에 적용됩니다.

## 정책이름

유형:`string`

요청에 적용되는 게이트웨이 정책의 이름.

## 개인AppAUD

유형:`string`

개인 앱 AUD, 어떤 경우.

## 프록시 엔드포인트

유형: \`\`

## 회사 소개

유형:`bool`

요청 내용이 quarantined 경우.

## 리디렉션

유형:`string`

사용자가 리디렉션 된 사용자 정의 URI, 어떤 경우.

## 회사 소개

유형:`string`

HTTP 요청의 참조 헤더의 내용.

## 등록ID

유형:`string`

HTTP 요청이 시작된 장치 등록의 UUID.

## 주문번호

유형:`string`

Cloudflare 요청 ID. 이것은 우회 작용에 빈일 수 있습니다.

## 세션ID

유형:`string`

네트워크 세션 ID.

## 소스IP

유형:`string`

요청의 소스 IP.

## 소스IPContinentCode

유형:`string`

요청의 소스 IP의 지속적인 코드 (예를 들어, 'NA').

## 소스IPCountryCode

유형:`string`

요청의 소스 IP의 국가 코드 (예 : '미국').

## 출처InternalIP

유형:`string`

장치의 로컬 LAN IP. GRE/IPsec 터널을 통해서만 사용할 수 있습니다.

## 소스포트

유형:`int`

요청의 소스 포트.

## 사이트 맵

유형:`string`

HTTP 요청 URL.

## 신뢰할 수 있는CertificateAction

유형:`string`

비공개 인증서 오류가 발생했을 때 동작 (예를 들어, 만료된 인증서, 비공개 CA에 의해 서명된 잘못된 인증서 체인). 한국어<em>이름 \*</em> | <em>제품정보</em> | <em>오류 수정</em> | <em>패스워드</em>.

## 업로드MatchedDlpProfileEntries

유형:`array[string]`

HTTP 요청에서 일치하는 DLP 항목 목록.

## 업로드DlpProfiles

유형:`array[string]`

HTTP 요청에 일치 DLP 프로파일 목록.

## 다운로드 파일이름

유형:`array[string]`

HTTP 요청에 업로드 된 파일 목록.

## 사용자명

유형:`string`

HTTP 요청에 있는 사용자 에이전트 헤더의 내용.

## 사용자 ID

유형:`string`

HTTP 요청이 시작된 사용자 ID.

## 가상네트워크ID

유형:`string`

가상 네트워크의 식별자는 장치가 연결되었는지, 어떤 경우.

## 가상네트워크Name

유형:`string`

가상 네트워크의 이름은 장치가 연결되었음을 의미합니다.
