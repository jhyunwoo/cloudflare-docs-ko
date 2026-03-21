---
title: RTKSelf · Cloudflare 실시간 문서
lastUpdated: 2026-02-10T18:29:47.000Z
chatbotDeprioritize: false
source_url:
  html: >-
    https://developers.cloudflare.com/realtime/realtimekit/core/api-reference/rtkself/
  md: >-
    https://developers.cloudflare.com/realtime/realtimekit/core/api-reference/rtkself/index.md
translation_locale: ko-KR
translation_source_html: >-
  https://developers.cloudflare.com/realtime/realtimekit/core/api-reference/rtkself/
translation_source_md: >-
  https://developers.cloudflare.com/realtime/realtimekit/core/api-reference/rtkself/index.md
translation_source_kind: rendered-md
translation_snapshot: '2026-03-13'

---
[]()

RTKSelf 모듈은 현재 사용자를 나타내며 회의에서 사용자의 상태를 수정할 수 있습니다. 사용자의 오디오 및 비디오 스트림은이 모듈에서 재생할 수 있습니다.

- [사이트맵](#module_RTKSelf)

  - [.telemetry의 특징](#module_RTKSelf+telemetry)
  - [사이트맵](#module_RTKSelf+peerId)
  - [룸스테이](#module_RTKSelf+roomState)
  - [.회수](#module_RTKSelf+permissions)
  - [.config 설정](#module_RTKSelf+config)
  - [.room조인](#module_RTKSelf+roomJoined)
  - [사이트맵](#module_RTKSelf+isPinned)
  - [.cleanup이벤트()](#module_RTKSelf+cleanupEvents)
  - [.setName(이름)](#module_RTKSelf+setName)
  - [.setupTracks(옵션)](#module_RTKSelf+setupTracks)
  - [.enable오디오()](#module_RTKSelf+enableAudio)
  - [.enable비디오()](#module_RTKSelf+enableVideo)
  - [.updateVideoConstraints()에 대한 자세한 정보](#module_RTKSelf+updateVideoConstraints)
  - [.enableScreenShare()에](#module_RTKSelf+enableScreenShare)
  - [.updateScreenshareConstraints() 를](#module_RTKSelf+updateScreenshareConstraints)
  - [.disable오디오()](#module_RTKSelf+disableAudio)
  - [.disable비디오()](#module_RTKSelf+disableVideo)
  - [.disableScreenShare()를](#module_RTKSelf+disableScreenShare)
  - [.getAll장치()](#module_RTKSelf+getAllDevices)
  - [.setIs핀()](#module_RTKSelf+setIsPinned)
  - [. 핀 ()](#module_RTKSelf+pin)
  - [.unpin ()](#module_RTKSelf+unpin)
  - [.hide ()를](#module_RTKSelf+hide)
  - [. 쇼()](#module_RTKSelf+show)
  - [.setDevice (장치)](#module_RTKSelf+setDevice)
  - [.update비디오()](#module_RTKSelf+updateVideo)

[]()

### 회의.self.telemetry

**이름 \***: 인스턴스 속성[`RTKSelf`](#module_RTKSelf)\
[]()

### 회의.self.peerId

NOTE(ishita1805): Ravindra와 토론, 사물함에서 식별자를 사용할 때 일관성에 대한 복제를 추가했습니다. 우리는 deprecating를 보기를 원할지도 모릅니다`id`몇 시간 후.

**이름 \***: 인스턴스 속성[`RTKSelf`](#module_RTKSelf)\
[]()

### 회의.self.roomState

현재 방의 상태를 반환 - Inital State에 합류 - 사용자는 대기중인 회의에서 - 사용자는 대기 상태 거부 - 사용자의 대기실에있었습니다, 그러나 입장은 거부되었습니다 - priveleged 사용자는 회의에서 사용자가 왼쪽으로 제거 - 사용자가 회의를 종료 - 회의가 종료되었습니다.

**이름 \***: 인스턴스 속성[`RTKSelf`](#module_RTKSelf)\
[]()

### 회의.self.permissions

회의에 대한 사용자에 주어진 현재 권한을 반환합니다.

**이름 \***: 인스턴스 속성[`RTKSelf`](#module_RTKSelf)\
[]()

### 회의.self.config

회의에 대한 구성을 반환합니다.

**이름 \***: 인스턴스 속성[`RTKSelf`](#module_RTKSelf)\
[]()

### 회의.self.roomJoined

지역 참가자가 회의에 참여한 경우 true를 반환합니다.

**이름 \***: 인스턴스 속성[`RTKSelf`](#module_RTKSelf)\
[]()

### 회의.self.isPinned

현재 사용자가 pinned 경우 true를 반환합니다.

**이름 \***: 인스턴스 속성[`RTKSelf`](#module_RTKSelf)\
[]()

### 회의.self.cleanupEvents()

**이름 \***: 인스턴스 방법[`RTKSelf`](#module_RTKSelf)\
[]()

### meeting.self.setName(이름)

사용자의 이름은이 방법을 호출하여 설정할 수 있습니다. 해당 이용 후기에 달린 코멘트가 없습니다.

**이름 \***: 인스턴스 방법[`RTKSelf`](#module_RTKSelf)

| 계정 만들기 | 제품정보     | 이름 \*   |
| ------ | -------- | ------- |
| 이름 \*  | `string` | 사용자 이름. |

[]()

### meeting.self.setupTracks(옵션)

로컬 미디어 트랙을 설정합니다.

**이름 \***: 인스턴스 방법[`RTKSelf`](#module_RTKSelf)

| 계정 만들기           | 제품정보      | 이름 \*                  |
| ---------------- | --------- | ---------------------- |
| 옵션 정보            | `Object`  | 오디오 및 비디오 옵션.          |
| \[옵션.비디오]        | `boolean` | 사실, 비디오 스트림은 fetched.  |
| \[옵션.audio]      | `boolean` | 사실, 오디오 스트림은 fetched.  |
| \[옵션.forceReset] | `boolean` | 진정한 힘 리셋 트랙을 리액팅하기 전에. |

[]()

### 회의.self.enableAudio()

이 방법은 로컬 participant의 오디오를 사용하지 않습니다.

**이름 \***: 인스턴스 방법[`RTKSelf`](#module_RTKSelf)\
[]()

### 회의.self.enableVideo()

이 방법은 로컬 참가자의 비디오를 회의로 스트리밍하는 데 사용됩니다.

**이름 \***: 인스턴스 방법[`RTKSelf`](#module_RTKSelf)\
[]()

### 회의.self.updateVideoConstraints()

이 방법은 현재 비디오 스트림에 제약을 적용하는 데 사용됩니다.

**이름 \***: 인스턴스 방법[`RTKSelf`](#module_RTKSelf)\
[]()

### 회의.self.enableScreenShare()

이 방법은 로컬 참가자의 화면을 회의에 공유하기 위해 사용됩니다.

**이름 \***: 인스턴스 방법[`RTKSelf`](#module_RTKSelf)\
[]()

### 회의.self.updateScreenshareConstraints()

이 방법은 현재 Screenshare 스트림에 제약을 적용하는 데 사용됩니다.

**이름 \***: 인스턴스 방법[`RTKSelf`](#module_RTKSelf)\
[]()

### 회의.self.disableAudio()

이 방법은 현지 참가자의 오디오를 mute에 사용됩니다.

**이름 \***: 인스턴스 방법[`RTKSelf`](#module_RTKSelf)\
[]()

### 회의.self.disableVideo()

이 참가자는 지역 참가자의 비디오를 비활성화하는 데 사용됩니다.

**이름 \***: 인스턴스 방법[`RTKSelf`](#module_RTKSelf)\
[]()

### 회의.self.disableScreenShare()

이 방법은 로컬 참가자의 화면을 공유하는 데 사용됩니다.

**이름 \***: 인스턴스 방법[`RTKSelf`](#module_RTKSelf)\
[]()

### 회의.self.getAllDevices()

현지 참가자가 액세스 할 수있는 모든 미디어 장치를 반환합니다.

**이름 \***: 인스턴스 방법[`RTKSelf`](#module_RTKSelf)\
[]()

### 회의.self.setIsPinned()

**이름 \***: 인스턴스 방법[`RTKSelf`](#module_RTKSelf)\
[]()

### 회의.self.pin ()

기타 제품`self.id`사용자가 핀 참가자에게 권한을 부여하는 경우.

**이름 \***: 인스턴스 방법[`RTKSelf`](#module_RTKSelf)\
[]()

### 회의.self.unpin()

기타 제품`self.id`사용자가 참여하지 않은 경우.

**이름 \***: 인스턴스 방법[`RTKSelf`](#module_RTKSelf)\
[]()

### 회의.self.hide()

UI에서 사용자의 타일 숨기기 (locally)

**이름 \***: 인스턴스 방법[`RTKSelf`](#module_RTKSelf)\
[]()

### 회의.self.show()

숨겨지은 UI에 있는 사용자의 타일(locally)

**이름 \***: 인스턴스 방법[`RTKSelf`](#module_RTKSelf)\
[]()

### meeting.self.setDevice(장치)

현지 참가자가 사용하는 현재 미디어 장치를 변경하십시오.

**이름 \***: 인스턴스 방법[`RTKSelf`](#module_RTKSelf)

| 계정 만들기 | 제품정보              | 이름 \*                                  |
| ------ | ----------------- | -------------------------------------- |
| 제품정보   | `MediaDeviceInfo` | 사용중인 장치. 같은 장치의`kind`대체될 것입니다. 기본 스트림. |

[]()

### 회의.self.updateVideo()

내부 방법, 사용하지 않음

**이름 \***: 인스턴스 방법[`RTKSelf`](#module_RTKSelf)
