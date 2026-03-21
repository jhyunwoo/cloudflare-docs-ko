---
title: 메시지 방송 APIs · Cloudflare 실시간 문서
description: 방송 API는 사용자가 회의에서 다른 모든 사용자에게 맞춤 메시지를 보낼 수 있습니다.
lastUpdated: 2025-12-26T08:34:28.000Z
chatbotDeprioritize: false
source_url:
  html: 'https://developers.cloudflare.com/realtime/realtimekit/broadcast-apis/'
  md: >-
    https://developers.cloudflare.com/realtime/realtimekit/broadcast-apis/index.md
translation_locale: ko-KR
translation_source_html: 'https://developers.cloudflare.com/realtime/realtimekit/broadcast-apis/'
translation_source_md: 'https://developers.cloudflare.com/realtime/realtimekit/broadcast-apis/index.md'
translation_source_kind: rendered-md
translation_snapshot: '2026-03-13'

---
방송 API는 사용자가 회의에서 다른 모든 사용자에게 맞춤 메시지를 보낼 수 있습니다.

### 메시지 방송

회의 객체의 참가자 모듈은 신호 채널에 연결된 회의의 경우 회의 (또는 다른 회의)에서 다른 사용자에게 메시지를 방송 할 수 있습니다.

### 자주 묻는 질문

사용 방법`broadcastedMessage`메시지를 듣고`broadcastMessage`그리고 당신의 신청에서 그들을 취급하십시오.

### 속도 제한 & 제약

- 방법은 학대를 방지하기 위해 비율 제한 (서버 측 + 클라이언트 측)입니다.
- deprecated 모듈의 기본 클라이언트 측 구성: maxInvocations = 5 per period = 1s.
- 참가자 모듈은 노출`rateLimitConfig`·`updateRateLimits(maxInvocations, period)`클라이언트에 튜닝, 하지만 서버 측 제한은 여전히 적용할 수 있습니다.
- 이벤트 유형은 할 수 없습니다`spotlight`. SDK에 의해 내부 사용을 위해 예약됩니다.

### 이름 \*

#### 회의에서 모든 사람에게 방송

#### 특정 참가자에게 방송.

참가자 만 해당 참가자는 메시지를받습니다.

#### 방송을 미리 설정

모든 참가자는`speaker`이름 \*

#### 여러 회의에서 방송

지정된 회의의 모든 참가자는 메시지를받습니다.
