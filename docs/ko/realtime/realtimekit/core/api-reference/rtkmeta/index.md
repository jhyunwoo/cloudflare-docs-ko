---
title: RTKMeta · Cloudflare 실시간 문서
lastUpdated: 2026-02-10T18:29:47.000Z
chatbotDeprioritize: false
source_url:
  html: >-
    https://developers.cloudflare.com/realtime/realtimekit/core/api-reference/rtkmeta/
  md: >-
    https://developers.cloudflare.com/realtime/realtimekit/core/api-reference/rtkmeta/index.md
translation_locale: ko-KR
translation_source_html: >-
  https://developers.cloudflare.com/realtime/realtimekit/core/api-reference/rtkmeta/
translation_source_md: >-
  https://developers.cloudflare.com/realtime/realtimekit/core/api-reference/rtkmeta/index.md
translation_source_kind: rendered-md
translation_snapshot: '2026-03-13'

---
[]()

이것은 회의실 이름과 제목과 같은 회의의 메타 데이터로 구성됩니다.

- [사이트맵](#module_RTKMeta)

  - [모듈.exports](#exp_module_RTKMeta--module.exports) ⏏

    - [새로운 module.exports (콘텍스, 자기, viewType, RoomSocketHandler, MeetingTitle)](#new_module_RTKMeta--module.exports_new)
    - [.selfActiveTab을](#module_RTKMeta--module.exports+selfActiveTab)
    - [.broadcastTab변경](#module_RTKMeta--module.exports+broadcastTabChanges)
    - [.view타입](#module_RTKMeta--module.exports+viewType)
    - [.meeting시작 스크린 샷](#module_RTKMeta--module.exports+meetingStartedTimestamp)
    - [· .meeting 이름 \*](#module_RTKMeta--module.exports+meetingTitle)
    - [이름 \*](#module_RTKMeta--module.exports+sessionId)
    - [· .meetingId](#module_RTKMeta--module.exports+meetingId)
    - [.setBroadcastTabChanges(방송TabChanges)](#module_RTKMeta--module.exports+setBroadcastTabChanges)
    - [.setSelfActiveTab (spotlightTab, 탭ChangeSource)](#module_RTKMeta--module.exports+setSelfActiveTab)

[]()

### 모듈.exports s

**이름 \***: 수출\
[]()

#### 새로운 module.exports (콘텍스, 자기, viewType, RoomSocketHandler, MeetingTitle)

| 계정 만들기      | 제품정보                |
| ----------- | ------------------- |
| 계정 만들기      | `Context`           |
| 사이트맵        | `Self`              |
| 사이트맵        | `string`            |
| 룸소켓Handler  | `RoomSocketHandler` |
| 관련 기사 이름 \* | `string`            |

[]()

#### 모듈.exports.selfActiveTab

현재 활성 탭을 나타냅니다.

**이름 \***: 인스턴스 속성[`module.exports`](#exp_module_RTKMeta--module.exports)\
[]()

#### 모듈.exports.broadcastTabChanges

현재 사용자가 Spotlighted 여부를 나타냅니다.

**이름 \***: 인스턴스 속성[`module.exports`](#exp_module_RTKMeta--module.exports)\
[]()

#### 모듈.exports.viewType

더 보기`viewType`그룹 CALL| LIVESTREAM | CHAT | AUDIO ROOM

**이름 \***: 인스턴스 속성[`module.exports`](#exp_module_RTKMeta--module.exports)\
[]()

#### module.exports.meeting시작 스크린 샷

회의가 시작될 때의 타임스탬프.

**이름 \***: 인스턴스 속성[`module.exports`](#exp_module_RTKMeta--module.exports)\
[]()

#### 모듈.exports.meetingTitle

회의의 제목.

**이름 \***: 인스턴스 속성[`module.exports`](#exp_module_RTKMeta--module.exports)\
[]()

#### 모듈.exports.sessionId

(실험) sessionId 이 회의 객체는 일부입니다.

**이름 \***: 인스턴스 속성[`module.exports`](#exp_module_RTKMeta--module.exports)\
[]()

#### 모듈.exports.meetingId

회의실 이름.

**이름 \***: 인스턴스 속성[`module.exports`](#exp_module_RTKMeta--module.exports)\
[]()

#### module.exports.setBroadcastTabChanges (broadcastTabChanges)를 설치하십시오

방송 탭 변경으로 현재 사용자 설정

**이름 \***: 인스턴스 방법[`module.exports`](#exp_module_RTKMeta--module.exports)

| 계정 만들기       | 제품정보      |
| ------------ | --------- |
| 방송TabChanges | `boolean` |

[]()

#### module.exports.setSelfActiveTab (spotlightTab, 탭ChangeSource)

현재 활성 탭 설정

**이름 \***: 인스턴스 방법[`module.exports`](#exp_module_RTKMeta--module.exports)

| 계정 만들기        | 제품정보              |
| ------------- | ----------------- |
| 카테고리          | `ActiveTab`       |
| 탭ChangeSource | `TabChangeSource` |
