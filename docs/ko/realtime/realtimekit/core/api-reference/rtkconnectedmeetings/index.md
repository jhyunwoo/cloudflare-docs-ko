---
title: RTKConnectedMeetings · Cloudflare 실시간 문서
lastUpdated: 2026-02-10T18:29:47.000Z
chatbotDeprioritize: false
source_url:
  html: >-
    https://developers.cloudflare.com/realtime/realtimekit/core/api-reference/rtkconnectedmeetings/
  md: >-
    https://developers.cloudflare.com/realtime/realtimekit/core/api-reference/rtkconnectedmeetings/index.md
translation_locale: ko-KR
translation_source_html: >-
  https://developers.cloudflare.com/realtime/realtimekit/core/api-reference/rtkconnectedmeetings/
translation_source_md: >-
  https://developers.cloudflare.com/realtime/realtimekit/core/api-reference/rtkconnectedmeetings/index.md
translation_source_kind: rendered-md
translation_snapshot: '2026-03-13'

---
[]()

연결 회의를 촉진하는 방법의 구성

- [RTK연결Meetings](#module_RTKConnectedMeetings)

  - [모듈.exports](#exp_module_RTKConnectedMeetings--module.exports) ⏏

    - [새로운 module.exports (콘텍스트)](#new_module_RTKConnectedMeetings--module.exports_new)
    - [.getRTKConnectedMeetings() 을](#module_RTKConnectedMeetings--module.exports+getRTKConnectedMeetings)
    - [.createMeetings (복수)](#module_RTKConnectedMeetings--module.exports+createMeetings)
    - [.updateMeetings(복사)](#module_RTKConnectedMeetings--module.exports+updateMeetings)
    - [.deleteMeetings(meetingIds)에 대하여](#module_RTKConnectedMeetings--module.exports+deleteMeetings)
    - [.moveParticipants(sourceMeetingId, destinationMeetingId, 참가자 아이)](#module_RTKConnectedMeetings--module.exports+moveParticipants)
    - [.moveParticipantsWithCustomPreset(sourceMeetingId, destinationMeetingId, 참가자)](#module_RTKConnectedMeetings--module.exports+moveParticipantsWithCustomPreset)

[]()

### 모듈.exports s

**이름 \***: 수출\
[]()

#### 새로운 module.exports (콘텍스트)

| 계정 만들기 | 제품정보      |
| ------ | --------- |
| 계정 만들기 | `Context` |

[]()

#### 모듈.exports.getRTKConnectedMeetings()

연결 회의 상태

**이름 \***: 인스턴스 방법[`module.exports`](#exp_module_RTKConnectedMeetings--module.exports)\
[]()

#### module.exports.createMeetings (요구)

연결 회의 생성

**이름 \***: 인스턴스 방법[`module.exports`](#exp_module_RTKConnectedMeetings--module.exports)

| 계정 만들기 | 제품정보                      |
| ------ | ------------------------- |
| 이름 \*  | `Array.<{title: string}>` |

[]()

#### module.exports.updateMeetings (요청)

업데이트 회의 제목

**이름 \***: 인스턴스 방법[`module.exports`](#exp_module_RTKConnectedMeetings--module.exports)

| 계정 만들기 | 제품정보                                  |
| ------ | ------------------------------------- |
| 이름 \*  | `Array.<{id: string, title: string}>` |

[]()

#### 모듈.exports.deleteMeetings (meetingIds)

연결 회의 삭제

**이름 \***: 인스턴스 방법[`module.exports`](#exp_module_RTKConnectedMeetings--module.exports)

| 계정 만들기 | 제품정보             |
| ------ | ---------------- |
| 회의Ids  | `Array.<string>` |

[]()

#### module.exports.moveParticipants(sourceMeetingId, destinationMeetingId, 참가자 아이)

Trigger 이벤트 참여

**이름 \***: 인스턴스 방법[`module.exports`](#exp_module_RTKConnectedMeetings--module.exports)

| 계정 만들기      | 제품정보             | 이름 \*      |
| ----------- | ---------------- | ---------- |
| 소스MeetingId | `string`         | 소스 회의의 ID  |
| 이름 \* 회의Id  | `string`         | 대상 회의의 ID  |
| 부분적인Ids     | `Array.<string>` | 참가자의 ID 목록 |

[]()

#### module.exports.moveParticipantsWithCustomPreset(sourceMeetingId, destinationMeetingId, 참가자)

Trigger 이벤트는 사용자 정의 사전 설정으로 참가자를 이동

**이름 \***: 인스턴스 방법[`module.exports`](#exp_module_RTKConnectedMeetings--module.exports)

| 계정 만들기      | 제품정보                                     | 이름 \*     |
| ----------- | ---------------------------------------- | --------- |
| 소스MeetingId | `string`                                 | 소스 회의의 ID |
| 이름 \* 회의Id  | `string`                                 | 대상 회의의 ID |
| 회사연혁        | `Array.<{id: string, presetId: string}>` |           |
