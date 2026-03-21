---
title: RTKStage · Cloudflare 실시간 문서
lastUpdated: 2026-02-10T18:29:47.000Z
chatbotDeprioritize: false
source_url:
  html: >-
    https://developers.cloudflare.com/realtime/realtimekit/core/api-reference/rtkstage/
  md: >-
    https://developers.cloudflare.com/realtime/realtimekit/core/api-reference/rtkstage/index.md
translation_locale: ko-KR
translation_source_html: >-
  https://developers.cloudflare.com/realtime/realtimekit/core/api-reference/rtkstage/
translation_source_md: >-
  https://developers.cloudflare.com/realtime/realtimekit/core/api-reference/rtkstage/index.md
translation_source_kind: rendered-md
translation_snapshot: '2026-03-13'

---
[]()

RTKStage 모듈은 RTKStage 회의의 RTKStage가 다른 참가자들에게 볼 수있는 가상 영역으로 나타납니다. participant는 단계 떨어져 있을 때, 그들은 매체를 일으키지 않습니다 그러나 RTKStage에 있는 참가자에게서 단지 consuming 매체

- [사이트맵](#module_RTKStage)

  - [모듈.exports](#exp_module_RTKStage--module.exports) ⏏

    - [새로운 module.exports (콘텍스, 셀프, 참가자, StageSocketHandler, RoomSocketHandler)](#new_module_RTKStage--module.exports_new)
    - [.telemetry의 특징](#module_RTKStage--module.exports+telemetry)
    - [사이트맵](#module_RTKStage--module.exports+peerId)
    - [.getAccess문의()](#module_RTKStage--module.exports+getAccessRequests)
    - [.request액세스()](#module_RTKStage--module.exports+requestAccess)
    - [.cancelRequest액세스()](#module_RTKStage--module.exports+cancelRequestAccess)
    - [.grantAccess()에](#module_RTKStage--module.exports+grantAccess)
    - [.denyAccess()에 대하여](#module_RTKStage--module.exports+denyAccess)
    - [.join()](#module_RTKStage--module.exports+join)
    - [.leave ()를](#module_RTKStage--module.exports+leave)
    - [.kick (사용자 ID)](#module_RTKStage--module.exports+kick)

[]()

### 모듈.exports s

**이름 \***: 수출\
[]()

#### 새로운 module.exports (콘텍스, 셀프, 참가자, StageSocketHandler, RoomSocketHandler)

| 계정 만들기          | 제품정보                    |
| --------------- | ----------------------- |
| 계정 만들기          | `Context`               |
| 사이트맵            | `Self`                  |
| 회사연혁            | `Participants`          |
| 단계SocketHandler | `RTKStageSocketHandler` |
| 룸소켓Handler      | `RoomSocketHandler`     |

[]()

#### 모듈.exports.telemetry

**이름 \***: 인스턴스 속성[`module.exports`](#exp_module_RTKStage--module.exports)\
[]()

#### 모듈.exports.peerId

현재 사용자의 피어 ID를 반환

**이름 \***: 인스턴스 속성[`module.exports`](#exp_module_RTKStage--module.exports)\
[]()

#### 모듈.exports.getAccessRequests()

viewers에서 모든 RTKStage 액세스 요청을 fetch하는 방법

**이름 \***: 인스턴스 방법[`module.exports`](#exp_module_RTKStage--module.exports)\
[]()

#### 모듈.exports.requestAccess()

지정된 사용자에게 요청을 보낼 방법

**이름 \***: 인스턴스 방법[`module.exports`](#exp_module_RTKStage--module.exports)\
[]()

#### 모듈.exports.cancelRequestAccess()

이전 RTKStage를 취소하는 방법 요청

**이름 \***: 인스턴스 방법[`module.exports`](#exp_module_RTKStage--module.exports)\
[]()

#### 모듈.exports.grantAccess()

RTKStage에 액세스 권한을 부여하는 방법. 이것은 RTKStage Join 요청에 응답 할 수 있지만 다른 사용자에게도 호출 할 수 있습니다.

`permissions.acceptRTKStageRequests`자주 묻는 질문

**이름 \***: 인스턴스 방법[`module.exports`](#exp_module_RTKStage--module.exports)\
[]()

#### 모듈.exports.denyAccess()

RTKStage에 접근하는 방법. 이것은 RTKStage Join 요청에 응답으로 호출되어야한다.

**이름 \***: 인스턴스 방법[`module.exports`](#exp_module_RTKStage--module.exports)\
[]()

#### 모듈.exports.join()

단계 사용자에 가입하는 방법은 사전 설정에서 권한이 있어야하거나이 방법을 호출하는 priveleged 사용자에 의해 허용되어야한다

**이름 \***: 인스턴스 방법[`module.exports`](#exp_module_RTKStage--module.exports)\
[]()

#### 모듈.exports.leave()

단계 사용자가 이미 단계에 있어야하거나이 방법을 호출하기 위해 단계에 가입 할 수있는 방법

**이름 \***: 인스턴스 방법[`module.exports`](#exp_module_RTKStage--module.exports)\
[]()

#### module.exports.kick (사용자 ID)

단계에서 사용자를 킥하는 방법

`permissions.acceptRTKStageRequests`자주 묻는 질문

**이름 \***: 인스턴스 방법[`module.exports`](#exp_module_RTKStage--module.exports)

| 계정 만들기 | 제품정보             |
| ------ | ---------------- |
| 사용자 ID | `Array.<string>` |
