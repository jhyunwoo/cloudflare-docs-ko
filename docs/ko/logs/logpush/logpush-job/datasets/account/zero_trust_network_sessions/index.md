---
title: Zero Trust 네트워크 세션 로그
pcx_content_type: configuration
sidebar:
  order: 21
translation_locale: ko-KR
translation_source_html: >-
  https://developers.cloudflare.com/logs/logpush/logpush-job/datasets/account/zero_trust_network_sessions/
translation_source_md: >-
  https://developers.cloudflare.com/logs/logpush/logpush-job/datasets/account/zero_trust_network_sessions/index.md
translation_source_kind: repo-md
translation_snapshot: '2026-03-13'
translation_upstream_ref: 66ee2dcd3715f1ca46e70954a3cda63f6cbebc75

---
아래 설명은 필드를 사용할 수 있습니다.`zero_trust_network_sessions`.

## 계정 ID

유형:`string`

Cloudflare 계정 ID.

## Bytes관련

유형:`int`

네트워크 세션 동안 클라이언트에게 보낸 바이트 수.

## 팟캐스트

유형:`int`

네트워크 세션 동안 클라이언트에서 기원으로 전송되는 바이트 수.

## 클라이언트TCPHandshakeDurationMs

유형:`int`

클라이언트와 Cloudflare 사이의 TCP 연결을 처리의 지속 시간.

## 클라이언트TLSCipher

유형:`string`

클라이언트와 Cloudflare 사이 연결에서 사용되는 TLS cipher 스위트.

## 클라이언트TLSHandshakeDurationMs

유형:`int`

클라이언트와 Cloudflare 사이의 TLS 연결의 지속 시간.

## 클라이언트TLSVersion

유형:`string`

클라이언트와 Cloudflare 사이 연결에서 사용되는 TLS 의정서 버전.

## 연결닫기Reason

유형:`string`

연결을 닫는 이유, TCP에만 적용.<br />가능한 값은<em>자주 묻는 질문</em> | <em>자주 묻는 질문</em> | <em>CLIENT TLS ERROR의 장점</em> | <em>채용정보</em> | <em>자주 묻는 질문</em> | <em>ORIGIN TLS ERROR의 특징</em> | <em>채용정보</em> | <em>ORIGIN UNREACHABLE의 경우</em> | <em>ORIGIN UNROUTABLE의 경우</em> | <em>프로젝트</em> | <em>주 메뉴</em> | <em>MISMATCHED IP 버전</em> | <em>TOO MANY ACTIVE SESSIONS FOR 국가</em> | <em>TOO MANY ACTIVE SESSIONS FOR 사용자</em> | <em>TOO MANY NEW 서비스 FOR ACCOUNT</em> | <em>TOO MANY NEW SESSIONS FOR 사용자</em>.

## 연결Reuse

유형:`bool`

TCP 연결이 여러 HTTP 요청에 재사용되었는지 여부.

## 관광 명소

유형:`string`

Cloudflare의 식별자 네트워크 세션이 Cloudflare 터널 또는 WARP 장치와 같은 경우에, 어느 것에 노선이, 1개의 연결관.

## 탐지Protocol

유형:`string`

네트워크 세션의 트래픽 프로토콜을 감지했습니다.

## 장치ID

유형:`string`

네트워크 세션을 개시한 클라이언트 장치의 식별자(예: WARP Device ID).

## 장치 이름

유형:`string`

네트워크 세션을 시작된 클라이언트 디바이스의 이름(예: WARP Device ID)

## EgressColo이름

유형:`string`

Cloudflare 데이터 센터의 이름은 그 트래픽이 기원에 반대.

## EgressIP 정보

유형:`string`

소스 IP는 Cloudflare에서 근원에 교통을 egressing 때 사용했습니다.

## EgressPort에 대하여

유형:`int`

Cloudflare에서 원래의 트래픽을 egressing 때 사용되는 소스 포트.

## EgressRuleID로

유형:`string`

보안 웹 게이트웨이에 적용 된 egress 규칙의 식별자, 어떤 경우.

## EgressRule이름

유형:`string`

보안 웹 게이트웨이에 의해 적용 된 egress 규칙의 이름.

## 이름 \*

유형:`string`

네트워크 세션을 시작된 사용자 ID와 관련된 이메일 주소.

## IngressColo이름

유형:`string`

Cloudflare 데이터 센터의 이름은 트래픽이 진입 한 것입니다.

## 초기 OriginIP

유형:`string`

Gateway DNS와 Gateway proxy 간의 기존 FQDN 매칭 정책을 구성하는 IP.

## 팟캐스트

유형:`string`

네트워크 세션이 경로화 된 목적지의 유형.<br />가능한 값은<em>회사연혁</em> | <em>사이트맵</em> | <em>CFD 거래</em> | <em>모델 번호: WARP</em>.

## 근원IP

유형:`string`

네트워크 세션의 대상 ("origin")의 IP.

## 회사 소개

유형:`int`

네트워크 세션의 대상의 포트.

## 근원TLSCertificateIssuer

유형:`string`

TLS 인증서의 발행자.

## OriginTLSCertificateValidation결과

유형:`string`

TLS 인증서를 검증하는 결과.<br />가능한 값은<em>사이트맵</em> | <em>회사연혁</em> | <em>사이트맵</em> | <em>이름 MISMATCH</em> | <em>이름 \*</em> | <em>주 메뉴</em>.

## 근원TLSCipher

유형:`string`

Cloudflare와 기원 사이의 연결에 사용되는 TLS cipher 스위트.

## 근원TLSHandshakeDurationMs

유형:`int`

Cloudflare와 밀리 초의 기원 사이의 TLS 연결의 지속 시간.

## 근원TLSVersion

유형:`string`

Cloudflare와 근원 사이 연결에서 사용되는 TLS 의정서 버전.

## 프로젝트

유형:`string`

이 네트워크 세션에 사용되는 네트워크 프로토콜.<br />가능한 값은<em>TCP 포트</em> | <em>사이트맵</em> | <em>ICMP를</em> | <em>ICMPV6</em>.

## 등록ID

유형:`string`

네트워크 세션을 시작된 클라이언트 등록의 식별자(예: WARP 등록 ID).

## 해결FQDN

유형:`string`

목적지의 완전히 자격이 된 도메인 이름.

## 규칙EvaluationDurationMs

유형:`int`

해당 네트워크, HTTP, Egress 규칙을 적용하는 Secure Web Gateway가 진행하는 기간.

## 세션 종료시간

유형:`int or string`

nanosecond 정밀도를 가진 네트워크 회의 끝 타임스탬프.

## 세션ID

유형:`string`

이 네트워크 세션의 식별자.

## 세션시작시간

유형:`int or string`

네트워크 세션은 nanosecond 정밀도로 타임스탬프를 시작합니다.

## 소스IP

유형:`string`

네트워크 세션의 소스 IP.

## 출처InternalIP

유형:`string`

장치의 로컬 LAN IP. GRE/IPsec 터널을 통해서만 사용할 수 있습니다.

## 소스포트

유형:`int`

네트워크 세션의 소스 포트.

## 사용자 ID

유형:`string`

네트워크 세션이 시작된 사용자 ID. WARP 장치 클라이언트에서만 적용 가능한.

## 가상네트워크ID

유형:`string`

클라이언트를 위해 구성된 가상 네트워크의 식별자.
