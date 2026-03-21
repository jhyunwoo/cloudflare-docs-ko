---
title: 방화벽 이벤트
pcx_content_type: configuration
sidebar:
  order: 21
translation_locale: ko-KR
translation_source_html: >-
  https://developers.cloudflare.com/logs/logpush/logpush-job/datasets/zone/firewall_events/
translation_source_md: >-
  https://developers.cloudflare.com/logs/logpush/logpush-job/datasets/zone/firewall_events/index.md
translation_source_kind: repo-md
translation_snapshot: '2026-03-13'
translation_upstream_ref: 66ee2dcd3715f1ca46e70954a3cda63f6cbebc75

---
아래 설명은 필드를 사용할 수 있습니다.`firewall_events`.

## - 연혁

유형:`string`

Cloudflare 방화벽이 이 요청에 걸린 일류 액션의 코드입니다.<br />가능한 행동은<em>이름 \*</em> | <em>지원하다</em> | <em>제품정보</em> | <em>- 연혁</em> | <em>프로젝트</em> | <em>이름 \*</em> | <em>연결닫기</em> | <em>해결하기</em> | <em>도전자격</em> | <em>jschallengesolved는</em> | <em>인기 카테고리</em> | <em>뚱 베어</em> | <em>회사 소개</em> | <em>관리된challengenoninteractivesolved</em> | <em>관리된challengeinteractivesolved</em> | <em>관리challengebypassed</em>.

## 채용정보

유형:`int`

방문자의 ASN 번호.

## ClientASN설명

유형:`string`

문자열로 방문자의 ASN.

## 고객Country

유형:`string`

요청된 국가.

## 고객IP

유형:`string`

방문자의 IP 주소 (IPv4 또는 IPv6).

## ClientIP클래스

유형:`string`

방문자의 IP 주소의 분류, 가능한 값은:<em>이름 \*</em> | <em>공유하기</em> | <em>검색엔진</em> | <em>관련 상품</em> | <em>관련 제품 제품정보</em> | <em>없음Record</em> | <em>관련 상품</em> | <em>사이트맵</em>.

## 클라이언트RefererHost

유형:`string`

참조 호스트.

## 클라이언트RefererPath

유형:`string`

방문자가 요청한 참조 경로.

## 클라이언트RefererQuery

유형:`string`

참조 쿼리 문자열은 방문자에 의해 요청되었습니다.

## 클라이언트RefererScheme

유형:`string`

방문자가 요청한 참조 URL 계획.

## 클라이언트RequestHost

유형:`string`

방문자가 요청한 HTTP 호스트명.

## 클라이언트RequestMethod

유형:`string`

방문자에 의해 사용되는 HTTP 방법.

## 고객문의

유형:`string`

방문자가 요청한 경로.

## 클라이언트RequestProtocol

유형:`string`

방문자가 요청한 HTTP 프로토콜의 버전.

## 클라이언트RequestQuery

유형:`string`

쿼리 문자열은 방문자에 의해 요청되었습니다.

## 클라이언트RequestScheme

유형:`string`

방문자가 요청한 URL 계획.

## 클라이언트RequestUserAgent

유형:`string`

방문자의 사용자 시약 문자열.

## ContentScanObj결과

유형:`array[string]`

콘텐츠 검사 결과 목록.

## ContentScanObj 크기

유형:`array[int]`

콘텐츠 객체의 목록.

## ContentScanObj유형

유형:`array[string]`

콘텐츠 유형 목록

## 이름 \*

유형:`int or string`

날짜와 시간은 가장자리에 일어났습니다.

## 이름 \*

유형:`string`

이 요청에 의해 방아쇠의 설명.

## EdgeColo코드

유형:`string`

이 요청을 제공하는 Cloudflare 데이터 센터의 공항 코드.

## 연락처

유형:`int`

HTTP 응답 상태 코드는 브라우저로 반환됩니다.

## 이름 \*

유형:`string`

이벤트의 종류, 현재 가능한 값은:<em>계정 관리</em>.

## 누출감지기

유형:`string`

자주 묻는 질문[새소식](/waf/detections/leaked-credentials/). <br />가능한 결과는:<em>비밀번호</em> | <em>사용자 이름</em> | <em>엠에디터 매크로 참조:Similar</em> | <em>비밀번호</em> | <em>제품정보</em>.

## 팟캐스트

유형:`int`

체인의 규칙 일치 지수. 마지막 일치 규칙은 matchIndex가 있을 것입니다<em>0</em>. 다른 규칙이 마지막 것 전에 일치하면, matchIndex가 있습니다.<em>1</em>. 같은 다른 일치 규칙에 적용, which will have a matchIndex 값의<em>2</em>, <em>3</em>, 등.

## 메타데이터

유형:`object`

추가 제품별 정보. Metadata는 key:value 쌍에서 조직됩니다. 열쇠와 가치 체재는 Cloudflare 안전 제품에 의해 변화하고 시간을 초과할 수 있습니다.

## 근원ResponseStatus

유형:`int`

HTTP 소스 응답 상태 코드는 브라우저로 반환.

## 레이드 소개

유형:`string`

도전/jschallenge를 발행하는 요청의 RayID.

## 레이디

유형:`string`

요청의 레이드.

## 제품 정보

유형:`string`

이 요청에 의해 트리거 된 규칙에 대한 사용자 정의 식별자. Cloudflare-provided RuleID와 함께 개인적으로 규칙을 라벨링하는 ref를 사용합니다. refs를 통해 설정할 수 있습니다.[규칙 세트 API](/ruleset-engine/rulesets-api/)몇몇 안전 제품을 위해.

## 규칙ID

유형:`string`

Cloudflare 보안 제품 별 RuleID는이 요청에 의해 방아쇠.

## 이름 \*

유형:`string`

Cloudflare 보안 제품은이 요청에 의해 트리거.<br />가능한 소스는<em>이름 \*</em> | <em>뚱 베어</em> | <em>이름 \*</em> | <em>IP 정보</em> | <em>IP 범위</em> | <em>보안 수준</em> | <em>Zonelockdown, 영국</em> | <em>뚱 베어</em> | <em>방화벽룰</em> | <em>uablock의 특징</em> | <em>비율 제한</em> | <em>뚱 베어</em> | <em>인기있는</em> | <em>사이트맵</em> | <em>인증 및 인증</em> | <em>풋볼</em> | <em>apishield의 특징</em> | <em>회사연혁</em> | <em>사이트맵</em> | <em>방화벽 관리</em> | <em>방화벽custom</em> | <em>apishieldschemavalidation에 대 한</em> | <em>apishieldtokenvalidation에 대한 의견</em> | <em>apishieldsequencem 부재</em>.
