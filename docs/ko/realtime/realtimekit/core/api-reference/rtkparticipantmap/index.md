---
title: RTKParticipantMap · Cloudflare 실시간 문서
lastUpdated: 2026-02-10T18:29:47.000Z
chatbotDeprioritize: false
source_url:
  html: >-
    https://developers.cloudflare.com/realtime/realtimekit/core/api-reference/rtkparticipantmap/
  md: >-
    https://developers.cloudflare.com/realtime/realtimekit/core/api-reference/rtkparticipantmap/index.md
translation_locale: ko-KR
translation_source_html: >-
  https://developers.cloudflare.com/realtime/realtimekit/core/api-reference/rtkparticipantmap/
translation_source_md: >-
  https://developers.cloudflare.com/realtime/realtimekit/core/api-reference/rtkparticipantmap/index.md
translation_source_kind: rendered-md
translation_snapshot: '2026-03-13'

---
[]()

이것은 참가자의지도, 색인`participant.id`(부분의 동료 ID). 이 맵은 이벤트를 방출합니다. 예를 들어, 참가자가이 맵에 추가되면,`participantJoined`이벤트는 지도에서 방출됩니다. 참가자 객체가 이벤트를 방출할 때`videoUpdate`, 맵 re-emits 그 이벤트 (부동산이 지도에 있음).

- [RTK파트너십](#module_RTKParticipantMap)

  - [모듈.exports](#exp_module_RTKParticipantMap--module.exports) ⏏

    - [새로운 module.exports (로그, \[옵션\])](#new_module_RTKParticipantMap--module.exports_new)
    - [.add(부동산, \[emitEvent\])](#module_RTKParticipantMap--module.exports+add)
    - [.clear\[emitEvent\], \[removeListeners\])](#module_RTKParticipantMap--module.exports+clear)
    - [.delete(participantId, \[emitEvent\], \[removeListeners\])](#module_RTKParticipantMap--module.exports+delete)

[]()

### 모듈.exports s

**이름 \***: 수출\
[]()

#### 새로운 module.exports (로그, \[옵션])

| 계정 만들기 | 제품정보        |
| ------ | ----------- |
| 로그인    | `Logger`    |
| \[옵션]  | `MapEvents` |

[]()

#### module.exports.add (부동산, \[emitEvent])

**이름 \***: 인스턴스 방법[`module.exports`](#exp_module_RTKParticipantMap--module.exports)

| 계정 만들기 | 제품정보      | 기본 정보  |
| ------ | --------- | ------ |
| 이름 \*  | `T`       |        |
| \[이벤트] | `boolean` | `true` |

[]()

#### module.exports.clear (emitEvent), \[removeListeners])

**이름 \***: 인스턴스 방법[`module.exports`](#exp_module_RTKParticipantMap--module.exports)

| 계정 만들기      | 제품정보      | 기본 정보   |
| ----------- | --------- | ------- |
| \[이벤트]      | `boolean` | `true`  |
| \[remove듣기] | `boolean` | `false` |

[]()

#### module.exports.delete(participantId, \[emitEvent], \[removeListeners])는

**이름 \***: 인스턴스 방법[`module.exports`](#exp_module_RTKParticipantMap--module.exports)

| 계정 만들기      | 제품정보      | 기본 정보   |
| ----------- | --------- | ------- |
| 부분적인Id      | `string`  |         |
| \[이벤트]      | `boolean` | `true`  |
| \[remove듣기] | `boolean` | `false` |
