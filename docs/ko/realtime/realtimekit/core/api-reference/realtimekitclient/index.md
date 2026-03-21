---
title: RealtimeKitClient · Cloudflare 실시간 문서
lastUpdated: 2026-02-10T18:29:47.000Z
chatbotDeprioritize: false
source_url:
  html: >-
    https://developers.cloudflare.com/realtime/realtimekit/core/api-reference/realtimekitclient/
  md: >-
    https://developers.cloudflare.com/realtime/realtimekit/core/api-reference/realtimekitclient/index.md
translation_locale: ko-KR
translation_source_html: >-
  https://developers.cloudflare.com/realtime/realtimekit/core/api-reference/realtimekitclient/
translation_source_md: >-
  https://developers.cloudflare.com/realtime/realtimekit/core/api-reference/realtimekitclient/index.md
translation_source_kind: rendered-md
translation_snapshot: '2026-03-13'

---
[]()

RealtimeKitClient 클래스는 웹 코어 라이브러리의 주요 클래스입니다. RealtimeKitClient 클래스의 객체를 사용하여 생성 할 수 있습니다.`await RealtimeKitClient.init({ ... })`. 일반적으로, 객체의`RealtimeKitClient`이름 \*`meeting`.

- [RealtimeKit클라이언트](#module_RealtimeKitClient)

  - [모듈.exports](#exp_module_RealtimeKitClient--module.exports) ⏏

    - [새로운 module.exports (콘텍스, 관제사)](#new_module_RealtimeKitClient--module.exports_new)

    - *이름 \**

      - [.파티](#module_RealtimeKitClient--module.exports+participants)
      - [사이트맵](#module_RealtimeKitClient--module.exports+self)
      - [·](#module_RealtimeKitClient--module.exports+meta)
      - [·](#module_RealtimeKitClient--module.exports+ai)
      - [. 플러그인](#module_RealtimeKitClient--module.exports+plugins)
      - [다운로드](#module_RealtimeKitClient--module.exports+chat)
      - [· .polls](#module_RealtimeKitClient--module.exports+polls)
      - [연락처](#module_RealtimeKitClient--module.exports+connectedMeetings)
      - [.**내 계정**](#module_RealtimeKitClient--module.exports+__internals__)
      - [.join()](#module_RealtimeKitClient--module.exports+join)
      - [.leave ()를](#module_RealtimeKitClient--module.exports+leave)
      -
      -

    - *제품 정보*

      - [.initMedia \[옵션\], \[skipAwaits\], \[cachedUserDetails\])](#module_RealtimeKitClient--module.exports.initMedia)
      - [.init (옵션)](#module_RealtimeKitClient--module.exports.init)
      - [.setupContext(peerId, 옵션, MeetingId, args)](#module_RealtimeKitClient--module.exports.setupContext)

[]()

### 모듈.exports s

**이름 \***: 수출\
[]()

#### 새로운 module.exports (콘텍스, 관제사)

| 계정 만들기 | 제품정보         |
| ------ | ------------ |
| 계정 만들기 | `IContext`   |
| 관련 제품  | `Controller` |

[]()

#### 모듈.exports.participants

더 보기`participants`개체는 참가자의 4지도로 구성되어 있습니다.`waitlisted`, `joined`, `active`, `pinned`. 지도는 색인을 붙입니다`peerId`s 및 값은 해당 participant 객체입니다.

**이름 \***: 인스턴스 속성[`module.exports`](#exp_module_RealtimeKitClient--module.exports)\
[]()

#### 모듈.exports.self

더 보기`self`객체는 오디오 및 비디오 설정을 조작하는 데 사용할 수 있으며 로컬 참가자의 다른 구성도 있습니다. 이 노출 방법 활성화 및 비활성화 미디어 트랙, 사용자의 화면 공유, 등.

**이름 \***: 인스턴스 속성[`module.exports`](#exp_module_RealtimeKitClient--module.exports)\
[]()

#### 모듈.exports.meta

더 보기`room`대화 메시지, 설문 조사, 룸 이름 등과 같은 현재 회의에 대한 정보를 저장합니다.

**이름 \***: 인스턴스 속성[`module.exports`](#exp_module_RealtimeKitClient--module.exports)\
[]()

#### 모듈.exports.ai

더 보기`ai`객체는 AI 기능과 인터페이스에 사용됩니다. 라이브 회의 성적을 얻을 수 있으며 요약, 이 개체를 사용하여 의제와 같은 다른 회의 AI 기능을 사용할 수 있습니다.

**이름 \***: 인스턴스 속성[`module.exports`](#exp_module_RealtimeKitClient--module.exports)\
[]()

#### 모듈.exports.plugins

더 보기`plugins`현재 회의에서 사용할 수있는 플러그인에 대한 오브젝트 저장 정보. 그것은 활성화하고 비활성화하는 방법을 노출.

**이름 \***: 인스턴스 속성[`module.exports`](#exp_module_RealtimeKitClient--module.exports)\
[]()

#### 모듈.exports.chat

채팅 객체는 회의에서 전송 된 채팅 메시지를 저장합니다. 이 텍스트 메시지, 이미지 및 파일이 포함되어 있습니다.

**이름 \***: 인스턴스 속성[`module.exports`](#exp_module_RealtimeKitClient--module.exports)\
[]()

#### 모듈.exports.polls

설문 조사 객체는 회의에서 시작된 설문 조사를 저장합니다. 설문 조사를 작성하고 투표하는 방법을 노출합니다.

**이름 \***: 인스턴스 속성[`module.exports`](#exp_module_RealtimeKitClient--module.exports)\
[]()

#### 모듈.exports.connectedMeetings

connectedMeetings 개체는 연결된 회의 상태를 저장합니다. 연결 회의를 위한 create/read/update/delete 방법을 노출합니다.

**이름 \***: 인스턴스 속성[`module.exports`](#exp_module_RealtimeKitClient--module.exports)\
[]()

#### 모듈.exports.  internals &#x20;

더 보기**내 계정**객체는 내부 도구 및 유틸리티를 특징으로 합니다. 기능과 logger와 같은 클라이언트는 자체 기능을 기반으로 UI를 구축할 수 있습니다. 로거 (Logger)**내 계정**.logger)는 서버가 문제의 정보를 알리기 위해 로그를 보낼 수 있습니다.

**이름 \***: 인스턴스 속성[`module.exports`](#exp_module_RealtimeKitClient--module.exports)\
[]()

#### 모듈.exports.join()

더 보기`join()`방법은 회의에 가입 할 수 있습니다. ·`roomJoined`이벤트가 방출됩니다.`self`방이 성공적으로 합류 할 때.

**이름 \***: 인스턴스 방법[`module.exports`](#exp_module_RealtimeKitClient--module.exports)\
[]()

#### 모듈.exports.leave()

더 보기`leave()`방법은 회의를 떠날 수 있습니다.

**이름 \***: 인스턴스 방법[`module.exports`](#exp_module_RealtimeKitClient--module.exports)\
[]()

####

***인기 있는***

**이름 \***: 인스턴스 방법[`module.exports`](#exp_module_RealtimeKitClient--module.exports)\
[]()

####

***인기 있는***

**이름 \***: 인스턴스 방법[`module.exports`](#exp_module_RealtimeKitClient--module.exports)

| 계정 만들기 | 제품정보             |
| ------ | ---------------- |
| \[국가]  | `LeaveRoomState` |

[]()

#### module.exports.initMedia \[옵션], \[skipAwaits], \[cachedUserDetails])

**이름 \***: 정적 방법[`module.exports`](#exp_module_RealtimeKitClient--module.exports)

| 계정 만들기                    | 제품정보                | 기본 정보   |
| ------------------------- | ------------------- | ------- |
| \[옵션]                     | `Object`            |         |
| \[옵션.비디오]                 | `boolean`           |         |
| \[옵션.audio]               | `boolean`           |         |
| \[옵션.계약]                  | `MediaConstraints`  |         |
| \[스키프아와트]                 | `boolean`           | `false` |
| \[cachedUserDetails]에 대하여 | `CachedUserDetails` |         |

[]()

#### module.exports.init (선택권)

더 보기`init`RealtimeKitClient 클래스를 즉시 사용할 수 있습니다. RealtimeKitClient의 인스턴스를 반환합니다.

**이름 \***: 정적 방법[`module.exports`](#exp_module_RealtimeKitClient--module.exports)

| 계정 만들기       | 이름 \*               |
| ------------ | ------------------- |
| 옵션 정보        | 옵션 객체.              |
| 옵션.authToken | API를 사용하여 받은 권한 토큰. |
| 옵션.baseURI   | API의 기본 URL.        |
| 옵션.defaults  | 기본 오디오 및 비디오 설정.    |

[]()

#### module.exports.setupContext(peerId, 옵션, MeetingId, args)

**이름 \***: 정적 방법[`module.exports`](#exp_module_RealtimeKitClient--module.exports)

| 계정 만들기 | 제품정보                       |
| ------ | -------------------------- |
| 한국어    | `string`                   |
| 옵션 정보  | `RealtimeKitClientOptions` |
| 회의Id   | `string`                   |
| 사이트맵   | `any`                      |
