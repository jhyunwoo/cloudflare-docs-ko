---
title: Spectrum 이벤트
pcx_content_type: configuration
sidebar:
  order: 21
translation_locale: ko-KR
translation_source_html: >-
  https://developers.cloudflare.com/logs/logpush/logpush-job/datasets/zone/spectrum_events/
translation_source_md: >-
  https://developers.cloudflare.com/logs/logpush/logpush-job/datasets/zone/spectrum_events/index.md
translation_source_kind: repo-md
translation_snapshot: '2026-03-13'
translation_upstream_ref: 66ee2dcd3715f1ca46e70954a3cda63f6cbebc75

---
아래 설명은 필드를 사용할 수 있습니다.`spectrum_events`.

## 제품 설명

유형:`string`

이벤트가 발생한 응용 프로그램의 독특한 공적 ID.

## 고객Asn

유형:`int`

고객 AS 번호.

## 고객Bytes

유형:`int`

클라이언트에서 Spectrum 서비스에 읽는 바이트 수.

## 고객Country

유형:`string`

클라이언트 IP 주소의 국가.

## 고객IP

유형:`string`

클라이언트 IP 주소.

## 클라이언트Matched IpFire벽

유형:`string`

IP 방화벽 규칙과 일치 여부. UNKNOWN = 스펙트럼에 사용할 수없는 일치 또는 방화벽 없음;<em>주 메뉴</em> | <em>이름 \*</em> | <em>비밀번호</em> | <em>비밀번호</em> | <em>비밀번호</em> | <em>사이트맵</em> | <em>화이트리스트</em> | <em>화이트리스트</em> | <em>화이트리스트 ASN</em>.

## 고객 포트

유형:`int`

클라이언트 포트.

## 고객Proto

유형:`string`

클라이언트에 의해 사용되는 전송 프로토콜;<em>사이트맵</em> | <em>사이트맵</em> | <em>로그아웃</em>.

## 클라이언트TcpRtt

유형:`int`

클라이언트와 스펙트럼 사이 nanoseconds에 있는 TCP 왕복 시간.

## 고객TlsCipher

유형:`string`

클라이언트와 스펙트럼 간의 협상. 알 수없는 cipher는 "UNK"로 반환됩니다.

## 클라이언트TlsClientHelloServerName

유형:`string`

클라이언트에서 클라이언트에게 Hello 메시지의 서버 이름.

## 고객TlsProtocol

유형:`string`

TLS 버전은 클라이언트와 스펙트럼 사이에서 협상;<em>이름 \*</em> | <em>이름 \*</em> | <em>사이트맵</em> | <em>사이트맵</em> | <em>사이트맵</em> | <em>사이트맵</em> | <em>사이트맵</em>.

## 클라이언트TlsStatus

유형:`string`

클라이언트에서 Spectrum에 TLS 세션의 상태를 나타냅니다.<em>주 메뉴</em> | <em>이름 \*</em> | <em>사이트맵</em> | <em>회사소개</em> | <em>사이트맵</em> | <em>채용 정보</em> | <em>사이트맵</em>.

## 비밀번호

유형:`string`

요청을받은 데이터 센터의 IATA 공항 코드.

## 연결Timestamp

유형:`int or string`

연결 (client/edge, edge/origin 또는 nexthop)의 두 다리가 설치되었습니다.

## 연결Timestamp

유형:`int or string`

연결이 닫혔습니다.

## 행사일정

유형:`string`

<em>연결하기</em> | <em>연결하기</em> | <em>고객 필터링</em> | <em>사이트맵</em> | <em>해결Origin</em> | <em>구매하기</em>.

## IpFire벽

유형:`bool`

IP 방화벽이 연결시에 활성화되었는지 여부.

## 생산 라인

유형:`int`

Spectrum의 근원에서 읽는 바이트 수.

## 근원IP

유형:`string`

근원 IP 주소.

## 회사 소개

유형:`int`

근원 항구.

## 생산 라인

유형:`string`

근원에 의해 이용되는 수송 의정서;<em>사이트맵</em> | <em>사이트맵</em> | <em>로그아웃</em>.

## 생산 라인

유형:`int`

Spectrum과 Origin 사이의 nanoseconds에서 TCP 라운드 트립 시간.

## 근원TlsCipher

유형:`string`

cipher는 스펙트럼과 근원 사이에서 협상했습니다. 알 수없는 cipher는 "UNK"로 반환됩니다.

## 근원TlsFingerprint

유형:`string`

기원 증명서의 SHA256 해시. 알 수없는 SHA256 해시가 빈 문자열로 반환됩니다.

## 근원TlsMode

유형:`string`

상류 연결이 암호화 된 경우;<em>이름 \*</em> | <em>뚱 베어</em> | <em>뚱 베어</em> | <em>전체장편</em> | <em>제품 정보</em>.

## 근원TlsProtocol

유형:`string`

TLS 버전은 Spectrum과 Origin 간의 협상;<em>이름 \*</em> | <em>이름 \*</em> | <em>사이트맵</em> | <em>사이트맵</em> | <em>사이트맵</em> | <em>사이트맵</em> | <em>사이트맵</em>.

## 생산 라인

유형:`string`

스펙트럼에서 기원에 TLS 세션의 상태;<em>주 메뉴</em> | <em>이름 \*</em> | <em>사이트맵</em> | <em>회사소개</em> | <em>사이트맵</em> | <em>채용 정보</em> | <em>사이트맵</em>.

## 프록시Protocol

유형:`string`

프록시 프로토콜의 형태는 주어진 연결에 적용됩니다;<em>뚱 베어</em> | <em>v1의</em> | <em>사이트맵</em> | <em>지원하다</em>.

## 주요연혁

유형:`int`

연결 폐쇄에 대한 이유를 나타내는 코드.

## 스크린 샷

유형:`int or string`

이벤트가 일어났다.
