---
title: RTK파트너스 · Cloudflare 실시간 문서
lastUpdated: 2026-02-10T18:29:47.000Z
chatbotDeprioritize: false
source_url:
  html: >-
    https://developers.cloudflare.com/realtime/realtimekit/core/api-reference/rtkparticipants/
  md: >-
    https://developers.cloudflare.com/realtime/realtimekit/core/api-reference/rtkparticipants/index.md
translation_locale: ko-KR
translation_source_html: >-
  https://developers.cloudflare.com/realtime/realtimekit/core/api-reference/rtkparticipants/
translation_source_md: >-
  https://developers.cloudflare.com/realtime/realtimekit/core/api-reference/rtkparticipants/index.md
translation_source_kind: rendered-md
translation_snapshot: '2026-03-13'

---
[]()

이 모듈은 회의에서 모든 참가자를 나타냅니다 (지역 사용자 제외). 그것은 4개의 지도로 이루어져 있습니다:

- `joined`: 회의에 참여한 모든 참가자의지도.
- `waitlisted`: 대기 목록에 추가 된 모든 참가자의지도.
- `active`: 회의 그리드에 표시해야하는 활성 참가자의지도.
- `pinned`: pinned 참가자의 지도.

* [RTK파트너](#module_RTKParticipants)

  - [모듈.exports](#exp_module_RTKParticipants--module.exports) ⏏

    - [새로운 module.exports (콘텍스, 셀프, RoomSocketHandler)](#new_module_RTKParticipants--module.exports_new)
    - [· .waitlisted](#module_RTKParticipants--module.exports+waitlisted)
    - [.조인](#module_RTKParticipants--module.exports+joined)
    -
    - [.video 구독](#module_RTKParticipants--module.exports+videoSubscribed)
    - [구독하기](#module_RTKParticipants--module.exports+audioSubscribed)
    - [.pinned는](#module_RTKParticipants--module.exports+pinned)
    - [. 모든](#module_RTKParticipants--module.exports+all)
    - [.피프](#module_RTKParticipants--module.exports+pip)
    - [.telemetry의 특징](#module_RTKParticipants--module.exports+telemetry)
    - [.view모드](#module_RTKParticipants--module.exports+viewMode)
    - [.current페이지](#module_RTKParticipants--module.exports+currentPage)
    - [.lastActiveSpeaker는](#module_RTKParticipants--module.exports+lastActiveSpeaker)
    - [파일 형식](#module_RTKParticipants--module.exports+selectedPeers)
    - [이름 \*](#module_RTKParticipants--module.exports+count)
    - [.maxActiveRTK파트너스Count](#module_RTKParticipants--module.exports+maxActiveRTKParticipantsCount)
    - [사이트 맵](#module_RTKParticipants--module.exports+pageCount)
    - [.setMaxActiveRTKParticipantsCount(제한)](#module_RTKParticipants--module.exports+setMaxActiveRTKParticipantsCount)
    - [숙박 플랜](#module_RTKParticipants--module.exports+acceptWaitingRoomRequest)
    - [.acceptAllWaitingRoomRequest(사용자 ID)](#module_RTKParticipants--module.exports+acceptAllWaitingRoomRequest)
    - [.rejectWaitingRoomRequest(id)에 대하여](#module_RTKParticipants--module.exports+rejectWaitingRoomRequest)
    - [.setViewMode(뷰모드)](#module_RTKParticipants--module.exports+setViewMode)
    - [.subscribe(peerIds, \[종류\])](#module_RTKParticipants--module.exports+subscribe)
    - [.unsubscribe(peerIds, \[종류\])](#module_RTKParticipants--module.exports+unsubscribe)
    - [.setPage(페이지)](#module_RTKParticipants--module.exports+setPage)
    - [.disableAllAudio(무엇)](#module_RTKParticipants--module.exports+disableAllAudio)
    - [.disable모든 비디오()](#module_RTKParticipants--module.exports+disableAllVideo)
    -
    -
    -
    - [모든()](#module_RTKParticipants--module.exports+kickAll)
    - [.broadcastMessage(타입, 페이로드, 대상)](#module_RTKParticipants--module.exports+broadcastMessage)
    - [.getAllJoinedPeers(searchQuery, limit, 오프셋)](#module_RTKParticipants--module.exports+getAllJoinedPeers)
    - [.getRTKParticipants인MeetingPreJoin()](#module_RTKParticipants--module.exports+getRTKParticipantsInMeetingPreJoin)

[]()

### 모듈.exports s

**이름 \***: 수출\
[]()

#### 새로운 module.exports (콘텍스, 셀프, RoomSocketHandler)

이 새로운 참가자 개체를 구성하고 활성/joined/waitlisted/pinned/selectedPeers 맵의지도를 유지합니다. 자기 : 자기

| 계정 만들기     | 제품정보                |
| ---------- | ------------------- |
| 계정 만들기     | `Context`           |
| 사이트맵       | `Self`              |
| 룸소켓Handler | `RoomSocketHandler` |

[]()

#### 모듈.exports.waitlisted

회의에 참여하는 참가자 목록을 반환합니다.

**이름 \***: 인스턴스 속성[`module.exports`](#exp_module_RTKParticipants--module.exports)\
[]()

#### 모듈.exports.joined

회의에서 모든 참가자의 목록을 반환합니다.

**이름 \***: 인스턴스 속성[`module.exports`](#exp_module_RTKParticipants--module.exports)\
[]()

####

***인기 있는***

**이름 \***: 인스턴스 속성[`module.exports`](#exp_module_RTKParticipants--module.exports)\
[]()

#### 모듈.exports.videoSubscribed

비디오 스트림이 현재 소모되는 참가자 목록을 반환합니다.

**이름 \***: 인스턴스 속성[`module.exports`](#exp_module_RTKParticipants--module.exports)\
[]()

#### 모듈.exports.audioSubscribed

오디오 스트림이 현재 소모되는 참가자 목록을 반환합니다.

**이름 \***: 인스턴스 속성[`module.exports`](#exp_module_RTKParticipants--module.exports)\
[]()

#### 모듈.exports.pinned

파쇄 된 참가자의 목록을 반환합니다.

**이름 \***: 인스턴스 속성[`module.exports`](#exp_module_RTKParticipants--module.exports)\
[]()

#### 모듈.exports.all

모든 추가 참가자가 회의에서 현재 있는지 여부를 결정하지 않습니다.

**이름 \***: 인스턴스 속성[`module.exports`](#exp_module_RTKParticipants--module.exports)\
[]()

#### 모듈.exports.pip

Picture-in-Picture에 대한 제어를 반환

**이름 \***: 인스턴스 속성[`module.exports`](#exp_module_RTKParticipants--module.exports)\
[]()

#### 모듈.exports.telemetry

**이름 \***: 인스턴스 속성[`module.exports`](#exp_module_RTKParticipants--module.exports)\
[]()

#### 모듈.exports.viewMode

회의가 'ACTIVE GRID'모드 또는 'PAGINATED'모드에 있는지 나타냅니다.

'ACTIVE GRID' 모드에서 참가자들은 참가자들에게 인기가 있습니다. 역동적인 지도. 다른 참가자가 자신의 오디오를 해제하거나 비디오를 켜지 않을 때지도에서 참가자가 변경 될 것입니다.

'PAGINATED'모드에서 참가자들은 참가자들에게 인기가 있습니다. 한 번만 유효지도, 맵 참가자는 페이지 번호가 설정 페이지(페이지)를 사용하여 사용자가 변경되는 경우에만 변경됩니다.

**이름 \***: 인스턴스 속성[`module.exports`](#exp_module_RTKParticipants--module.exports)\
[]()

#### 모듈.exports.currentPage

PAGINATED 모드에서 사용자가 설정한 현재 페이지를 나타냅니다. 회의가 ACTIVE GRID 모드에서라면, 이 값은 0입니다.

**이름 \***: 인스턴스 속성[`module.exports`](#exp_module_RTKParticipants--module.exports)\
[]()

#### 모듈.exports.lastActiveSpeaker

이 상점`participantId`회의에서 이야기하는 마지막 참가자의.

**이름 \***: 인스턴스 속성[`module.exports`](#exp_module_RTKParticipants--module.exports)\
[]()

#### 모듈.exports.selectedPeers

선택한 동료 목록에 존재하는 모든 참가자의 목록을 유지하십시오.

**이름 \***: 인스턴스 속성[`module.exports`](#exp_module_RTKParticipants--module.exports)\
[]()

#### 모듈.exports.count

회의에 참여한 참가자 수를 반환합니다.

**이름 \***: 인스턴스 속성[`module.exports`](#exp_module_RTKParticipants--module.exports)\
[]()

#### module.exports.maxActiveRTK파트너스

활성 지도에서 제시할 수 있는 최대 수의 참가자를 반환합니다.

**이름 \***: 인스턴스 속성[`module.exports`](#exp_module_RTKParticipants--module.exports)\
[]()

#### 모듈.exports.pageCount

PAGINATED 모드에서 회의에서 사용할 수있는 페이지 수를 반환합니다. 회의가 ACTIVE GRID 모드에서라면, 이 값은 0입니다.

**이름 \***: 인스턴스 속성[`module.exports`](#exp_module_RTKParticipants--module.exports)\
[]()

#### module.exports.setMaxActiveRTKParticipantsCount (제한)

활성 맵에 팝업되는 참가자의 최대 수를 업데이트합니다.

**이름 \***: 인스턴스 방법[`module.exports`](#exp_module_RTKParticipants--module.exports)

| 계정 만들기 | 제품정보     | 이름 \*        |
| ------ | -------- | ------------ |
| 지원하다   | `number` | 업데이트 된 최대 제한 |

[]()

#### 모듈.exports.acceptWaitingRoomRequest(id)

사용자가 적절한 권한을 가지고있는 경우 대기자로부터 요청을 수락합니다.

**이름 \***: 인스턴스 방법[`module.exports`](#exp_module_RTKParticipants--module.exports)

| 계정 만들기 | 제품정보     | 이름 \*               |
| ------ | -------- | ------------------- |
| 이름 \*  | `string` | 기다림 또는 기다림의 userId. |

[]()

#### module.exports.acceptAllWaitingRoomRequest(사용자 ID)

우리는 우리가 그들 모두를 함께 보내는 경우에 소켓 서비스 사건을 위한 새로운 사건이, 사건의 순서 믿을 수 있을 수 있습니다 필요로 합니다

**이름 \***: 인스턴스 방법[`module.exports`](#exp_module_RTKParticipants--module.exports)

| 계정 만들기 | 제품정보             |
| ------ | ---------------- |
| 사용자 ID | `Array.<string>` |

[]()

#### 모듈.exports.rejectWaitingRoomRequest(id)

사용자가 적절한 권한을 가지고있는 경우 대기자로부터 요청을 거부합니다.

**이름 \***: 인스턴스 방법[`module.exports`](#exp_module_RTKParticipants--module.exports)

| 계정 만들기 | 제품정보     | 이름 \*                  |
| ------ | -------- | ---------------------- |
| 이름 \*  | `string` | participantId의 대기 참가자. |

[]()

#### module.exports.setViewMode(뷰모드)

회의의 전망 모드를 ACTIVE GRID 또는 PAGINATED로 설정합니다.

**이름 \***: 인스턴스 방법[`module.exports`](#exp_module_RTKParticipants--module.exports)

| 계정 만들기 | 제품정보       | 이름 \*            |
| ------ | ---------- | ---------------- |
| 뷰모드    | `ViewMode` | 활성 맵이 전달되어야하는 모드 |

[]()

#### module.exports.subscribe(peerIds, \[종류])

**이름 \***: 인스턴스 방법[`module.exports`](#exp_module_RTKParticipants--module.exports)

| 계정 만들기 | 제품정보                                                                 |
| ------ | -------------------------------------------------------------------- |
| 회사 소개  | `Array.<string>`                                                     |
| \[국가]  | `Array.<('audio'\|'video'\|'screenshareAudio'\|'screenshareVideo')>` |

[]()

#### module.exports.unsubscribe(peerIds, \[종류])

**이름 \***: 인스턴스 방법[`module.exports`](#exp_module_RTKParticipants--module.exports)

| 계정 만들기 | 제품정보                                                                 |
| ------ | -------------------------------------------------------------------- |
| 회사 소개  | `Array.<string>`                                                     |
| \[국가]  | `Array.<('audio'\|'video'\|'screenshareAudio'\|'screenshareVideo')>` |

[]()

#### module.exports.setPage(페이지)

매개 변수에 의해 표시된 페이지 번호에서 참가자와 활성 맵을 Populates`page`PAGINATED 모드에서. ACTIVE GRID 모드에서는 아무것도 할 수 없습니다.

**이름 \***: 인스턴스 방법[`module.exports`](#exp_module_RTKParticipants--module.exports)

| 계정 만들기 | 제품정보     | 이름 \*       |
| ------ | -------- | ----------- |
| (주)    | `number` | 설정할 페이지 번호. |

[]()

#### module.exports.disableAllAudio (비밀)

회의에서 모든 참가자들에게 오디오를 비활성화합니다.

**이름 \***: 인스턴스 방법[`module.exports`](#exp_module_RTKParticipants--module.exports)

| 계정 만들기 | 제품정보      | 이름 \*             |
| ------ | --------- | ----------------- |
| 수 있습니다 | `boolean` | 참가자는 무서운 후 무례합니다. |

[]()

#### 모듈.exports.disableAllVideo()

회의에서 모든 참가자에게 비디오를 비활성화합니다.

**이름 \***: 인스턴스 방법[`module.exports`](#exp_module_RTKParticipants--module.exports)\
[]()

####

***인기 있는***

**이름 \***: 인스턴스 방법[`module.exports`](#exp_module_RTKParticipants--module.exports)

| 계정 만들기 | 제품정보     | 이름 \*          |
| ------ | -------- | -------------- |
| 부분적인Id | `string` | 부분의 ID는 muted. |

[]()

####

***인기 있는***

**이름 \***: 인스턴스 방법[`module.exports`](#exp_module_RTKParticipants--module.exports)

| 계정 만들기 | 제품정보     | 이름 \*          |
| ------ | -------- | -------------- |
| 부분적인Id | `string` | 부분의 ID는 muted. |

[]()

####

***인기 있는***

**이름 \***: 인스턴스 방법[`module.exports`](#exp_module_RTKParticipants--module.exports)

| 계정 만들기 | 제품정보     | 이름 \*       |
| ------ | -------- | ----------- |
| 부분적인Id | `string` | 킥에 참여자의 ID. |

[]()

#### 모듈.exports.kickAll()

회의에서 모든 참가자 킥.

**이름 \***: 인스턴스 방법[`module.exports`](#exp_module_RTKParticipants--module.exports)\
[]()

#### module.exports.broadcastMessage(타입, 페이로드, 대상)

참가자에게 메시지를 방송

없음`target`지정된 모든 참가자에게 발송됩니다.`self`.

**이름 \***: 인스턴스 방법[`module.exports`](#exp_module_RTKParticipants--module.exports)

| 계정 만들기 | 제품정보                      | 이름 \*                                                                              |
| ------ | ------------------------- | ---------------------------------------------------------------------------------- |
| 제품정보   | `string`                  |                                                                                    |
| 제품 설명  | `BroadcastMessagePayload` |                                                                                    |
| 이름 \*  | `BroadcastMessageTarget`  | 의 목록을 포함하는 개체`participantIds`또는 객체 포함`presetName`- 사전 설정이 있는 모든 사용자는 메시지를 보내게 됩니다. |

[]()

#### module.exports.getAllJoinedPeers(searchQuery, 한계, 오프셋)

현재 방에서 모든 동료를 반환 그룹 통화에 있다면, 사용`meeting.participants.joined`이름 \*

**이름 \***: 인스턴스 방법[`module.exports`](#exp_module_RTKParticipants--module.exports)

| 계정 만들기  | 제품정보     |
| ------- | -------- |
| 검색Query | `string` |
| 지원하다    | `number` |
| 기타 제품   | `number` |

[]()

#### 모듈.exports.getRTKParticipantsInMeetingPreJoin()

현재 방에서 모든 동료를 반환, 비 질화 통화이며 비 방에 가입 상태 인 경우에만 사용되어야한다, 가입 그룹 통화에서, 사용`meeting.participants.joined`

**이름 \***: 인스턴스 방법[`module.exports`](#exp_module_RTKParticipants--module.exports)
