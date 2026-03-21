---
title: RTK파트너 · Cloudflare 실시간 문서
lastUpdated: 2026-02-10T18:29:47.000Z
chatbotDeprioritize: false
source_url:
  html: >-
    https://developers.cloudflare.com/realtime/realtimekit/core/api-reference/rtkparticipant/
  md: >-
    https://developers.cloudflare.com/realtime/realtimekit/core/api-reference/rtkparticipant/index.md
translation_locale: ko-KR
translation_source_html: >-
  https://developers.cloudflare.com/realtime/realtimekit/core/api-reference/rtkparticipant/
translation_source_md: >-
  https://developers.cloudflare.com/realtime/realtimekit/core/api-reference/rtkparticipant/index.md
translation_source_kind: rendered-md
translation_snapshot: '2026-03-13'

---
[]()

이 모듈은 회의에서 단일 참가자를 나타냅니다. 참가자 객체는 참가자 목록 중 하나에서 액세스 할 수 있습니다.`meeting.participants`객체. 예를 들어,

```ts
const participant1 = meeting.participants.active.get(participantId);
const participant2 = meeting.participants.joined.get(participantId);
const participant3 = meeting.participants.active.toArray()[0];
const participant4 = meeting.participants.active.toArray().filter((p) => p.name === 'John');
```

- [RTK파트너](#module_RTKParticipant)

  - [모듈.exports](#exp_module_RTKParticipant--module.exports) ⏏

    - [새로운 module.exports (콘텍스, 참가자, 셀프, 룸소켓)](#new_module_RTKParticipant--module.exports_new)
    - [사이트맵](#module_RTKParticipant--module.exports+id)
    - [사용자 ID](#module_RTKParticipant--module.exports+userId)
    - [.이름](#module_RTKParticipant--module.exports+name)
    - [.picture의](#module_RTKParticipant--module.exports+picture)
    - [.customRTK파트너](#module_RTKParticipant--module.exports+customRTKParticipantId)
    -
    - [· .device](#module_RTKParticipant--module.exports+device)
    - [비디오 트랙](#module_RTKParticipant--module.exports+videoTrack)
    - [.audio 트랙](#module_RTKParticipant--module.exports+audioTrack)
    - [.screenShare 트랙](#module_RTKParticipant--module.exports+screenShareTracks)
    - [.video사용](#module_RTKParticipant--module.exports+videoEnabled)
    - [다운로드](#module_RTKParticipant--module.exports+audioEnabled)
    - [.screenShare사용](#module_RTKParticipant--module.exports+screenShareEnabled)
    - [사이트맵](#module_RTKParticipant--module.exports+producers)
    - [.manualProducerConfig에 관하여](#module_RTKParticipant--module.exports+manualProducerConfig)
    - [.supportsRemoteControl 기능](#module_RTKParticipant--module.exports+supportsRemoteControl)
    - [.preset이름](#module_RTKParticipant--module.exports+presetName)
    - [· .stageStatus](#module_RTKParticipant--module.exports+stageStatus)
    - [.telemetry의 특징](#module_RTKParticipant--module.exports+telemetry)
    - [사이트맵](#module_RTKParticipant--module.exports+isPinned)
    - [.setVideoEnabled(videoEnabled, \[emitEvent\])를 설치](#module_RTKParticipant--module.exports+setVideoEnabled)
    - [.setAudioEnabled(오디오 활성화, \[emitEvent\])](#module_RTKParticipant--module.exports+setAudioEnabled)
    - [.setScreenShareEnabled(screenShareEnabled, \[emitEvent\]) 사용](#module_RTKParticipant--module.exports+setScreenShareEnabled)
    - [. 핀 ()](#module_RTKParticipant--module.exports+pin)
    - [.unpin ()](#module_RTKParticipant--module.exports+unpin)
    - [.setIsPinned(이후인, \[emitEvent\])](#module_RTKParticipant--module.exports+setIsPinned)
    - [.disable오디오()](#module_RTKParticipant--module.exports+disableAudio)
    - [.kick()를](#module_RTKParticipant--module.exports+kick)
    - [.disable비디오()](#module_RTKParticipant--module.exports+disableVideo)
    - [.register비디오Element(videoElem)](#module_RTKParticipant--module.exports+registerVideoElement)
    - [.deregister비디오Element(videoElem))](#module_RTKParticipant--module.exports+deregisterVideoElement)
    - [.update비디오(e)](#module_RTKParticipant--module.exports+updateVideo)

[]()

### 모듈.exports s

**이름 \***: 수출\
[]()

#### 새로운 module.exports (콘텍스, 참가자, 셀프, 룸소켓)

| 계정 만들기 | 제품정보                |
| ------ | ------------------- |
| 계정 만들기 | `Context`           |
| 이름 \*  | `IRTKParticipant`   |
| 사이트맵   | `Self`              |
| 룸소켓    | `RoomSocketHandler` |

[]()

#### 모듈.exports.id

참가자의 동료 ID. 참가자는 참가자 지도에서이 ID에 의해 색인됩니다.

**이름 \***: 인스턴스 속성[`module.exports`](#exp_module_RTKParticipant--module.exports)\
[]()

#### 모듈.exports.userId

참가자의 사용자 ID.

**이름 \***: 인스턴스 속성[`module.exports`](#exp_module_RTKParticipant--module.exports)\
[]()

#### 모듈.exports.name

참가자의 이름.

**이름 \***: 인스턴스 속성[`module.exports`](#exp_module_RTKParticipant--module.exports)\
[]()

#### 모듈.exports.picture

참가자의 그림.

**이름 \***: 인스턴스 속성[`module.exports`](#exp_module_RTKParticipant--module.exports)\
[]()

#### 모듈.exports.customRTKParticipantId

RTKParticipant REST API를 추가하는 동안 참가자 세트의 사용자 정의 ID

**이름 \***: 인스턴스 속성[`module.exports`](#exp_module_RTKParticipant--module.exports)\
[]()

####

***인기 있는***

**이름 \***: 인스턴스 속성[`module.exports`](#exp_module_RTKParticipant--module.exports)\
[]()

#### 모듈.exports.device

참가자의 장치 구성.

**이름 \***: 인스턴스 속성[`module.exports`](#exp_module_RTKParticipant--module.exports)\
[]()

#### 모듈.exports.videoTrack

참가자의 비디오 트랙.

**이름 \***: 인스턴스 속성[`module.exports`](#exp_module_RTKParticipant--module.exports)\
[]()

#### 모듈.exports.audioTrack

참가자의 오디오 트랙.

**이름 \***: 인스턴스 속성[`module.exports`](#exp_module_RTKParticipant--module.exports)\
[]()

#### 모듈.exports.screenShareTracks

참가자의 Screenshare 비디오 및 오디오 트랙.

**이름 \***: 인스턴스 속성[`module.exports`](#exp_module_RTKParticipant--module.exports)\
[]()

#### 모듈.exports.videoEnabled

이것은 participant의 비디오가 활성화되면 true입니다.

**이름 \***: 인스턴스 속성[`module.exports`](#exp_module_RTKParticipant--module.exports)\
[]()

#### 모듈.exports.audioEnabled

participant의 오디오가 활성화되면 true입니다.

**이름 \***: 인스턴스 속성[`module.exports`](#exp_module_RTKParticipant--module.exports)\
[]()

#### 모듈.exports.screenShareEnabled

이것은 참가자가 screensharing 인 경우 true입니다.

**이름 \***: 인스턴스 속성[`module.exports`](#exp_module_RTKParticipant--module.exports)\
[]()

#### 모듈.exports.producers

참가자가 만든 제작자

**이름 \***: 인스턴스 속성[`module.exports`](#exp_module_RTKParticipant--module.exports)\
[]()

#### 모듈.exports.manualProducerConfig

수동 구독 도중 통과되는 생산 config

**이름 \***: 인스턴스 속성[`module.exports`](#exp_module_RTKParticipant--module.exports)\
[]()

#### 모듈.exports.supportsRemoteControl

이것은 참가자가 원격 제어를 지원하면 true입니다.

**이름 \***: 인스턴스 속성[`module.exports`](#exp_module_RTKParticipant--module.exports)\
[]()

#### 모듈.exports.presetName

참가자의 사전 설정.

**이름 \***: 인스턴스 속성[`module.exports`](#exp_module_RTKParticipant--module.exports)\
[]()

#### 모듈.exports.stageStatus

참가자의 현재 단계 상태를 나타냅니다.

**이름 \***: 인스턴스 속성[`module.exports`](#exp_module_RTKParticipant--module.exports)\
[]()

#### 모듈.exports.telemetry

**이름 \***: 인스턴스 속성[`module.exports`](#exp_module_RTKParticipant--module.exports)\
[]()

#### 모듈.exports.isPinned

participant가 핀이면 true를 반환합니다.

**이름 \***: 인스턴스 속성[`module.exports`](#exp_module_RTKParticipant--module.exports)\
[]()

#### module.exports.setVideoEnabled(videoEnabled, \[emitEvent])를 설치합니다.

**이름 \***: 인스턴스 방법[`module.exports`](#exp_module_RTKParticipant--module.exports)

| 계정 만들기     | 제품정보      | 기본 정보  |
| ---------- | --------- | ------ |
| 비디오Enabled | `boolean` |        |
| \[이벤트]     | `boolean` | `true` |

[]()

#### module.exports.setAudioEnabled(audioEnabled, \[emitEvent])

**이름 \***: 인스턴스 방법[`module.exports`](#exp_module_RTKParticipant--module.exports)

| 계정 만들기     | 제품정보      | 기본 정보  |
| ---------- | --------- | ------ |
| 오디오Enabled | `boolean` |        |
| \[이벤트]     | `boolean` | `true` |

[]()

#### module.exports.setScreenShareEnabled(screenShareEnabled, \[emitEvent])를 호출합니다.

**이름 \***: 인스턴스 방법[`module.exports`](#exp_module_RTKParticipant--module.exports)

| 계정 만들기          | 제품정보      | 기본 정보  |
| --------------- | --------- | ------ |
| 스크린ShareEnabled | `boolean` |        |
| \[이벤트]          | `boolean` | `true` |

[]()

#### 모듈.exports.pin ()

기타 제품`participant.id`사용자가 핀 참가자에게 권한을 부여하는 경우.

**이름 \***: 인스턴스 방법[`module.exports`](#exp_module_RTKParticipant--module.exports)\
[]()

#### 모듈.exports.unpin()

기타 제품`participant.id`사용자가 참여하지 않은 경우.

**이름 \***: 인스턴스 방법[`module.exports`](#exp_module_RTKParticipant--module.exports)\
[]()

#### module.exports.setIsPinned(isPinned, \[emitEvent])

**이름 \***: 인스턴스 방법[`module.exports`](#exp_module_RTKParticipant--module.exports)

| 계정 만들기 | 제품정보      | 기본 정보  |
| ------ | --------- | ------ |
| 사이트 맵  | `boolean` |        |
| \[이벤트] | `boolean` | `true` |

[]()

#### 모듈.exports.disableAudio()

이 participant의 오디오를 비활성화합니다. 부분적인 오디오를 비활성화하는 권한을 요구합니다.

**이름 \***: 인스턴스 방법[`module.exports`](#exp_module_RTKParticipant--module.exports)\
[]()

#### 모듈.exports.kick()

회의에서이 참가자를 킥. 참여자가 될 권한을 요구합니다.

**이름 \***: 인스턴스 방법[`module.exports`](#exp_module_RTKParticipant--module.exports)\
[]()

#### module.exports.disable비디오()

이 participant에 대한 비디오 비활성화. 참가자에게 비디오를 비활성화 할 수있는 권한을 요구합니다.

**이름 \***: 인스턴스 방법[`module.exports`](#exp_module_RTKParticipant--module.exports)\
[]()

#### module.exports.registerVideoElement(videoElem)에 등록하십시오.

**이름 \***: 인스턴스 방법[`module.exports`](#exp_module_RTKParticipant--module.exports)

| 계정 만들기  | 제품정보               |
| ------- | ------------------ |
| 동영상Elem | `HTMLVideoElement` |

[]()

#### module.exports.deregister비디오Element (videoElem)에 대한 추가 정보

**이름 \***: 인스턴스 방법[`module.exports`](#exp_module_RTKParticipant--module.exports)

| 계정 만들기 | 제품정보               |
| ------ | ------------------ |
| \[동영상] | `HTMLVideoElement` |

[]()

#### 모듈.exports.updateVideo(e)

내부 방법, 사용하지 않음

**이름 \***: 인스턴스 방법[`module.exports`](#exp_module_RTKParticipant--module.exports)

| 계정 만들기 | 제품정보               |
| ------ | ------------------ |
| 이름 \*  | `HTMLVideoElement` |
