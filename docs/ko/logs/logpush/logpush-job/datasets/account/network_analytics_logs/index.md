---
title: Network Analytics 로그
pcx_content_type: configuration
sidebar:
  order: 21
translation_locale: ko-KR
translation_source_html: >-
  https://developers.cloudflare.com/logs/logpush/logpush-job/datasets/account/network_analytics_logs/
translation_source_md: >-
  https://developers.cloudflare.com/logs/logpush/logpush-job/datasets/account/network_analytics_logs/index.md
translation_source_kind: repo-md
translation_snapshot: '2026-03-13'
translation_upstream_ref: 66ee2dcd3715f1ca46e70954a3cda63f6cbebc75

---
아래 설명은 필드를 사용할 수 있습니다.`network_analytics_logs`.

## 공격CampaignID

유형:`string`

이 패킷이 일부인 공격 캠페인의 고유 식별자.

## 공격ID

유형:`string`

패킷을 일치 하는 완화의 고유 식별자, 어떤 경우.

## 공격자

유형:`string`

이 패킷이 일부인 공격의 유형의 설명적인 이름. Cloudflare L3/4 관리 규칙 안에 포함된 패킷 일치 규칙만.

## 숙박 플랜

유형:`string`

소포를 받은 Cloudflare 데이터 센터가 있는 도시.

## 비밀번호

유형:`string`

소포를 받은 Cloudflare 데이터 센터 (IATA 공항 코드).

## 프로젝트

유형:`string`

소포를 받은 Cloudflare 데이터 센터가 있는 국가는 (ISO 3166-1 alpha-2)에 있습니다.

## 카테고리

유형:`string`

패킷을 수신한 Cloudflare 데이터 센터 (Geohash 인코딩)의 위도와 경도.

## 비밀번호

유형:`string`

Cloudflare 데이터 센터의 독특한 사이트 식별자는 패킷을 수신 (예 : 'ams01', 'sjc01', 'lhr01').

## 이름 \*

유형:`int or string`

날짜와 시간은 가장자리에 일어났습니다.

## 오시는 길

유형:`int`

패킷의 대상 IP와 관련된 ASN.

## 오시는 길

유형:`string`

패킷의 대상 IP와 관련된 ASN의 이름.

## 여행 일정

유형:`string`

소포의 대상 IP가 위치한 국가 (ISO 3166-1 alpha-2).

## 대상GeoHash

유형:`string`

패킷의 대상 IP가 위치한 위도와 경도 (Geohash 인코딩).

## 관광 명소

유형:`int`

TCP 또는 UDP 패킷의 대상 포트 헤더 필드의 값.

## 오시는 길

유형:`string`

고객 네트워크와 관련하여 방향.<br />가능한 값은<em>관련 기사</em> | <em>뚱 베어</em>.

## GRE체크섬

유형:`int`

GRE 패킷의 Checksum 헤더 필드의 값.

## 사이트맵

유형:`int`

GRE 패킷의 EtherType 헤더 필드의 값.

## GREHeader길이

유형:`int`

GRE 패킷 헤더의 길이, 바이트.

## 사이트맵

유형:`int`

GRE 패킷의 키 헤더 필드의 값.

## GRESequence수

유형:`int`

GRE 패킷의 Sequence Number 헤더 필드의 값.

## 사이트맵

유형:`int`

GRE 패킷의 버전 헤더 필드의 값.

## ICMP체크섬

유형:`int`

ICMP 패킷의 Checksum 헤더 필드의 값.

## ICMPCode

유형:`int`

ICMP 패킷의 코드 헤더 필드의 값.

## ICMP유형

유형:`int`

ICMP 패킷의 유형 헤더 필드의 값.

## IP 등급 이름 \*

유형:`string`

IPv4 또는 IPv6 패킷의 대상 주소 헤더 필드의 값.

## IPDestinationSubnet 정보

유형:`string`

IPv4 또는 IPv6 패킷의 대상 주소 헤더 필드의 Computed subnet (/24 IPv4; /64 IPv6).

## IPFragment오프셋

유형:`int`

IPv4 또는 IPv6 패킷의 파편 오프셋 헤더 필드의 값.

## IPHeader길이

유형:`int`

IPv4 또는 IPv6 패킷 헤더의 길이, 바이트.

## IPMore 조각

유형:`int`

IPv4 또는 IPv6 패킷에서 더 많은 파편 헤더 필드의 값.

## IP프로토콜

유형:`int`

IPv4 또는 IPv6 패킷의 프로토콜 헤더 필드의 값.

## IPProtocol이름

유형:`string`

IPv4 또는 IPv6 패킷의 프로토콜 헤더 필드에 의해 지정된 프로토콜의 이름.

## IP 소스

유형:`string`

소스 주소 헤더 필드의 값 IPv4 또는 IPv6 패킷.

## IP 소스

유형:`string`

IPv4 또는 IPv6 패킷의 소스 주소 헤더 필드의 Computed subnet (/24 IPv4; /64 IPv6).

## 사이트맵

유형:`int`

IPv4 패킷의 TTL 헤더 필드의 값 또는 IPv6 패킷의 Hop Limit 헤더 필드.

## IPTTLBuckets는

유형:`int`

IPv4 패킷의 TTL 헤더 필드의 값 또는 IPv6 패킷의 홉 제한 헤더 필드, 마지막 자리 truncated.

## IP 총 길이

유형:`int`

IPv4 또는 IPv6 패킷의 총 길이, 바이트.

## IP총장

유형:`int`

IPv4 또는 IPv6 패킷의 총 길이, 바이트에서, 마지막 두 자리 truncated.

## IPv4체크섬

유형:`int`

IPv4 패킷의 체크섬 헤더 필드의 값.

## 네트워크

유형:`int`

IPv4 패킷의 차별화된 서비스 코드 포인트 헤더 필드의 값.

## IPv4Dont 조각

유형:`int`

IPv4 패킷에서 Don't Fragment 헤더 필드의 값.

## IPv4ECN 지원

유형:`int`

IPv4 패킷의 Explicit Congestion Notification 헤더 필드의 값.

## IPv4인증

유형:`int`

IPv4 패킷의 식별 헤더 필드의 값.

## IPv4 옵션

유형:`string`

IPv4 패킷 헤더에 포함된 옵션 번호 목록.

## IPv6DSCP 지원

유형:`int`

IPv6 패킷의 차별화된 서비스 코드 포인트 헤더 필드의 값.

## IPv6ECN 지원

유형:`int`

IPv6 패킷의 Explicit Congestion Notification 헤더 필드의 값.

## IPv6확장 기타 제품

유형:`string`

IPv6 패킷 헤더에 포함된 확장 헤더 번호 목록.

## IPv6폴라벨

유형:`int`

유량 라벨 헤더 필드의 값은 IPv6 패킷입니다.

## IPv6인증

유형:`int`

IPv6 패킷의 ID 확장 헤더 필드의 값.

## 법적고지

유형:`string`

소포에 대한 완화를 신청하는 이유, 어떤 경우.<br />가능한 값은<em>공지사항</em> | <em>관련 기사</em> |<em>UNEXPECTED의 특징</em> | <em>관련 기사</em> | <em>회사소개</em> | <em>공지사항</em> | <em>아웃 OF SEQUENCE</em> | <em>ALREADY  닫기</em>.

## 법적고지

유형:`string`

소포가 로컬 또는 글로벌 소송을 일치 여부, 어떤 경우.<br />가능한 값은<em>한국어</em> | <em>글로벌</em>.

## Mitigation시스템

유형:`string`

어떤 Cloudflare 시스템 패킷을 샘플.<br />가능한 값은<em>사이트맵</em> | <em>관련 링크</em> | <em>마법의 방벽</em>.

## 한국어

유형:`string`

Cloudflare 시스템은 패킷에 걸렸다.<br />가능한 값은<em>패스워드</em> | <em>뚱 베어</em>.

## 프로젝트

유형:`string`

프로토콜의 컨텍스트에 패킷의 상태, 어떤 경우.<br />가능한 값은<em>(주)</em> | <em>이름 \*</em> | <em>구매하기</em> | <em>닫기D</em>.

## 규칙ID

유형:`string`

Cloudflare L3/4에 포함된 규칙의 유일한 식별자는 이 소포 일치한, 어떤 경우에.

## 규칙 이름

유형:`string`

Cloudflare L3/4에 포함된 규칙의 인간 읽기 쉬운 이름은, 어떤 경우에 이 소포 일치한다는 것을 관리했습니다.

## 규칙 세트ID

유형:`string`

Cloudflare L3/4의 유일한 식별자는 이 패킷 일치한 규칙을 포함하는 규칙을, 어떤.<br />가능한 값은<em>3b64149bfa6e4220bbbc2bd6db589552</em>.

## 규칙설정OverrideID

유형:`string`

계정 루트 ddos l4 단계 규칙 내에서 규칙의 고유 식별자는 기본 감도 또는 행동이 적용 / 평가되는 과도한 결과로, 어떤 경우.

## 샘플Interval

유형:`int`

표본 간격은 표본 비율의 반전입니다. 예를 들어, 1000의 샘플 간격은 이 패킷이 1000 패킷에서 1에서 무작위로 샘플링된다는 것을 의미합니다. 표본 비율은 교통의 양에 동적인 근거를 둡니다.

## 출처ASN

유형:`int`

패킷의 소스 IP와 관련된 ASN.

## 출처ASNName

유형:`string`

패킷의 소스 IP와 관련된 ASN의 이름.

## 소스Country

유형:`string`

패킷의 소스 IP가 위치한 국가 (ISO 3166-1 alpha-2).

## 소스GeoHash

유형:`string`

패킷의 소스 IP가 위치한 위도와 경도 (Geohash 인코딩).

## 소스포트

유형:`int`

TCP 또는 UDP 패킷의 소스 포트 헤더 필드의 값.

## TCPAcknowledgement수

유형:`int`

TCP 패킷의 Acknowledgement Number 헤더 필드의 값.

## TCP체크섬

유형:`int`

TCP 패킷의 Checksum 헤더 필드의 값.

## TCP데이터오프셋

유형:`int`

TCP 패킷의 데이터 오프셋 헤더 필드의 값.

## TCPFlags의 특징

유형:`int`

TCP 패킷의 플래그 헤더 필드의 값.

## TCPFlags전략

유형:`string`

TCP 패킷의 플래그 헤더 필드의 인간의 읽기 문자열 표현.

## TCPMSS 정보

유형:`int`

TCP 패킷의 MSS 옵션 헤더 필드의 값.

## TCP옵션

유형:`string`

TCP 패킷 헤더에 포함된 옵션 번호 목록.

## TCPSACKBlocks는

유형:`string`

SACK Blocks 옵션 헤더 목록은 TCP 패킷입니다.

## TCPSACK제품

유형:`int`

TCP 패킷의 SACK 허용 옵션 헤더의 값.

## TCPSequence수

유형:`int`

TCP 패킷의 Sequence Number 헤더 필드의 값.

## TCPTimestampECR의 특징

유형:`int`

Timestamp Echo 응답 옵션 헤더의 값은 TCP 패킷입니다.

## TCPTimestamp밸류

유형:`int`

TCP 패킷의 Timestamp 옵션 헤더의 값.

## TCPUrgent포인트

유형:`int`

TCP 패킷의 Urgent Pointer 헤더 필드의 값.

## TCPWindowScale의 특징

유형:`int`

TCP 패킷의 윈도우 스케일 옵션 헤더의 값.

## TCPWindow 크기

유형:`int`

TCP 패킷의 Window Size 헤더 필드의 값.

## UDP체크섬

유형:`int`

UDP 패킷의 Checksum 헤더 필드의 값.

## UDPPayload 길이

유형:`int`

UDP 패킷의 페이로드 길이 헤더 필드의 값.

## 이름 \*

유형:`string`

Cloudflare 시스템은 패킷에 가져야한다고 생각합니다.<br />가능한 값은<em>패스워드</em> | <em>뚱 베어</em>.
