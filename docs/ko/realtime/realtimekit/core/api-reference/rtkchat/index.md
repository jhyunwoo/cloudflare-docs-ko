---
title: RTKChat · Cloudflare 실시간 문서
lastUpdated: 2026-02-10T18:29:47.000Z
chatbotDeprioritize: false
source_url:
  html: >-
    https://developers.cloudflare.com/realtime/realtimekit/core/api-reference/rtkchat/
  md: >-
    https://developers.cloudflare.com/realtime/realtimekit/core/api-reference/rtkchat/index.md
translation_locale: ko-KR
translation_source_html: >-
  https://developers.cloudflare.com/realtime/realtimekit/core/api-reference/rtkchat/
translation_source_md: >-
  https://developers.cloudflare.com/realtime/realtimekit/core/api-reference/rtkchat/index.md
translation_source_kind: rendered-md
translation_snapshot: '2026-03-13'

---
[]()

이것은 채팅 모듈이며, 회의에서 메시지를 보내고받을 수 있습니다.

- [RTK 채팅](#module_RTKChat)

  - [모듈.exports](#exp_module_RTKChat--module.exports) ⏏

    - [새로운 module.exports (콘텍스, chatSocketHandler, 자기, 참가자)](#new_module_RTKChat--module.exports_new)
    -
    - [.telemetry의 특징](#module_RTKChat--module.exports+telemetry)
    - [.pinned는](#module_RTKChat--module.exports+pinned)
    - [.setMaxTextLimit(제한)](#module_RTKChat--module.exports+setMaxTextLimit)
    - [.sendMessageInternal(message, \[participantIds\])](#module_RTKChat--module.exports+sendMessageInternal)
    - [.sendTextMessage내부(message, \[peerIds\])](#module_RTKChat--module.exports+sendTextMessageInternal)
    - [.sendImageMessageInternal(이미지, \[peerIds\])](#module_RTKChat--module.exports+sendImageMessageInternal)
    - [.sendFileMessageInternal(파일, \[peerIds\])](#module_RTKChat--module.exports+sendFileMessageInternal)
    - [.updateRateLimits(넘, 기간)](#module_RTKChat--module.exports+updateRateLimits)
    - [.sendTextMessage(메시지, \[peerIds\])](#module_RTKChat--module.exports+sendTextMessage)
    - [.sendCustomMessage (메시지, \[peerIds\])](#module_RTKChat--module.exports+sendCustomMessage)
    - [.sendImageMessage(이미지, \[peerIds\])](#module_RTKChat--module.exports+sendImageMessage)
    - [.sendFileMessage(파일, \[peerIds\])](#module_RTKChat--module.exports+sendFileMessage)
    - [.sendMessage(메시지, \[participantIds\])](#module_RTKChat--module.exports+sendMessage)
    - [.editTextMessage(messageId, 메시지)](#module_RTKChat--module.exports+editTextMessage)
    - [.editImageMessage(messageId, 이미지)](#module_RTKChat--module.exports+editImageMessage)
    - [.editFileMessage(messageId, 파일)](#module_RTKChat--module.exports+editFileMessage)
    - [.editMessage(messageId, 메시지)](#module_RTKChat--module.exports+editMessage)
    - [.deleteMessage(메시지) 아이)](#module_RTKChat--module.exports+deleteMessage)
    -
    -
    - [. 핀 (id)](#module_RTKChat--module.exports+pin)
    - [.unpin (id)](#module_RTKChat--module.exports+unpin)
    - [.fetchPublicMessages(옵션)](#module_RTKChat--module.exports+fetchPublicMessages)
    - [.fetchPrivateMessages(옵션)](#module_RTKChat--module.exports+fetchPrivateMessages)
    - [.fetchPinnedMessages(옵션)](#module_RTKChat--module.exports+fetchPinnedMessages)
    -
    -

[]()

### 모듈.exports s

**이름 \***: 수출\
[]()

#### 새로운 module.exports (콘텍스, chatSocketHandler, 자기, 참가자)

| 계정 만들기          | 제품정보                   |
| --------------- | ---------------------- |
| 계정 만들기          | `Context`              |
| 채팅SocketHandler | `RTKChatSocketHandler` |
| 사이트맵            | `Self`                 |
| 회사연혁            | `Participants`         |

[]()

####

***인기 있는***

**이름 \***: 인스턴스 속성[`module.exports`](#exp_module_RTKChat--module.exports)\
[]()

#### 모듈.exports.telemetry

**이름 \***: 인스턴스 속성[`module.exports`](#exp_module_RTKChat--module.exports)\
[]()

#### 모듈.exports.pinned

**이름 \***: 인스턴스 속성[`module.exports`](#exp_module_RTKChat--module.exports)\
**인기 있는**: 이 속성은 deprectated. 이용안내`fetchPinnedMessages()`대신. 지정된 메시지의 배열을 반환합니다.\
[]()

#### module.exports.setMaxTextLimit(제한)

텍스트 메시지의 최대 문자 제한 설정

**이름 \***: 인스턴스 방법[`module.exports`](#exp_module_RTKChat--module.exports)

| 계정 만들기 | 제품정보     | 이름 \*                 |
| ------ | -------- | --------------------- |
| 지원하다   | `number` | 텍스트 메시지에 대한 최대 문자 제한. |

[]()

#### module.exports.sendMessage내부(message, \[participantIds])

**이름 \***: 인스턴스 방법[`module.exports`](#exp_module_RTKChat--module.exports)

| 계정 만들기   | 제품정보             | 이름 \*                            |
| -------- | ---------------- | -------------------------------- |
| 이름 \*    | `MessagePayload` | 메시지 전송.                          |
| \[출발 한국어 | `Array.<string>` | Participant ids는 메시지를 보낼 수 있습니다. |

[]()

#### module.exports.sendTextMessage내부(message, \[peerIds])

**이름 \***: 인스턴스 방법[`module.exports`](#exp_module_RTKChat--module.exports)

| 계정 만들기 | 제품정보             | 이름 \*             |
| ------ | ---------------- | ----------------- |
| 이름 \*  | `string`         | 문자 메시지 보내기.       |
| \[특허]  | `Array.<string>` | 메시지를 보낼 Peer ids. |

[]()

#### module.exports.sendImageMessageInternal(이미지, \[peerIds])

**이름 \***: 인스턴스 방법[`module.exports`](#exp_module_RTKChat--module.exports)

| 계정 만들기 | 제품정보                        | 이름 \*             |
| ------ | --------------------------- | ----------------- |
| 이름 \*  | `File` \| `ReactNativeFile` | 보낼 이미지 파일.        |
| \[특허]  | `Array.<string>`            | 메시지를 보낼 Peer ids. |

[]()

#### module.exports.sendFileMessageInternal(파일, \[peerIds])

**이름 \***: 인스턴스 방법[`module.exports`](#exp_module_RTKChat--module.exports)

| 계정 만들기 | 제품정보                        | 이름 \*             |
| ------ | --------------------------- | ----------------- |
| 이름 \*  | `File` \| `ReactNativeFile` | 파일 보내기.           |
| \[특허]  | `Array.<string>`            | 메시지를 보낼 Peer ids. |

[]()

#### module.exports.updateRateLimits(num, period)

**이름 \***: 인스턴스 방법[`module.exports`](#exp_module_RTKChat--module.exports)

| 계정 만들기 | 제품정보     |
| ------ | -------- |
| 사이트맵   | `number` |
| 기간 :   | `number` |

[]()

#### module.exports.sendTextMessage(메시지, \[peerIds])

채팅방에 채팅 문자 메시지를 보냅니다.

**이름 \***: 인스턴스 방법[`module.exports`](#exp_module_RTKChat--module.exports)

| 계정 만들기 | 제품정보             | 이름 \*             |
| ------ | ---------------- | ----------------- |
| 이름 \*  | `string`         | 방에 보내야 하는 메시지.    |
| \[특허]  | `Array.<string>` | 메시지를 보낼 Peer ids. |

[]()

#### module.exports.sendCustomMessage (메시지, \[peerIds])

**이름 \***: 인스턴스 방법[`module.exports`](#exp_module_RTKChat--module.exports)

| 계정 만들기 | 제품정보                   | 이름 \*             |
| ------ | ---------------------- | ----------------- |
| 이름 \*  | `CustomMessagePayload` | 주문 메시지 payload.   |
| \[특허]  | `Array.<string>`       | 메시지를 보낼 Peer ids. |

[]()

#### module.exports.sendImageMessage(이미지, \[peerIds])

회의에 이미지 메시지를 보냅니다.

**이름 \***: 인스턴스 방법[`module.exports`](#exp_module_RTKChat--module.exports)

| 계정 만들기 | 제품정보                        | 이름 \*             |
| ------ | --------------------------- | ----------------- |
| 이름 \*  | `File` \| `ReactNativeFile` | 전송되는 이미지.         |
| \[특허]  | `Array.<string>`            | 메시지를 보낼 Peer ids. |

[]()

#### module.exports.sendFileMessage(파일, \[peerIds])

회의에 파일을 보냅니다.

**이름 \***: 인스턴스 방법[`module.exports`](#exp_module_RTKChat--module.exports)

| 계정 만들기 | 제품정보                        | 이름 \*             |
| ------ | --------------------------- | ----------------- |
| 이름 \*  | `File` \| `ReactNativeFile` | 파일 객체.            |
| \[특허]  | `Array.<string>`            | 메시지를 보낼 Peer ids. |

[]()

#### module.exports.sendMessage (메시지, \[participantIds])

회의에 메시지를 보냅니다. 이 방법은 텍스트, 이미지, 또는 파일 메시지를 보낼 수 있습니다. 메시지 유형은 키 '타입'에 의해 결정됩니다.`message`객체.

**이름 \***: 인스턴스 방법[`module.exports`](#exp_module_RTKChat--module.exports)

| 계정 만들기   | 제품정보             | 이름 \*                 |
| -------- | ---------------- | --------------------- |
| 이름 \*    | `MessagePayload` | 메시지의 유형과 내용을 포함한 객체.  |
| \[출발 한국어 | `Array.<string>` | 참가자의 userIds를 포함한 배열. |

[]()

#### module.exports.editTextMessage(messageId, 메시지)

**이름 \***: 인스턴스 방법[`module.exports`](#exp_module_RTKChat--module.exports)

| 계정 만들기 | 제품정보     | 이름 \*           |
| ------ | -------- | --------------- |
| 메시지Id  | `string` | 편집 할 메시지의 Id.   |
| 이름 \*  | `string` | 업데이트 된 텍스트 메시지. |

[]()

#### module.exports.editImageMessage(messageId, 이미지)

**이름 \***: 인스턴스 방법[`module.exports`](#exp_module_RTKChat--module.exports)

| 계정 만들기 | 제품정보                        | 이름 \*          |
| ------ | --------------------------- | -------------- |
| 메시지Id  | `string`                    | 편집 할 메시지의 Id.  |
| 이름 \*  | `File` \| `ReactNativeFile` | 업데이트 된 이미지 파일. |

[]()

#### module.exports.editFileMessage(messageId, 파일)

**이름 \***: 인스턴스 방법[`module.exports`](#exp_module_RTKChat--module.exports)

| 계정 만들기 | 제품정보                        | 이름 \*         |
| ------ | --------------------------- | ------------- |
| 메시지Id  | `string`                    | 편집 할 메시지의 Id. |
| 이름 \*  | `File` \| `ReactNativeFile` | 파일 업데이트       |

[]()

#### module.exports.editMessage(messageId, 메시지)

**이름 \***: 인스턴스 방법[`module.exports`](#exp_module_RTKChat--module.exports)

| 계정 만들기 | 제품정보             | 이름 \*               |
| ------ | ---------------- | ------------------- |
| 메시지Id  | `string`         | 편집 할 메시지의 Id.       |
| 이름 \*  | `MessagePayload` | 업데이트 된 메시지 payload. |

[]()

#### module.exports.deleteMessage(메시지) 아이)

**이름 \***: 인스턴스 방법[`module.exports`](#exp_module_RTKChat--module.exports)

| 계정 만들기 | 제품정보     | 이름 \*         |
| ------ | -------- | ------------- |
| 메시지Id  | `string` | 삭제하는 메시지의 Id. |

[]()

####

***인기 있는***

**이름 \***: 인스턴스 방법[`module.exports`](#exp_module_RTKChat--module.exports)

| 계정 만들기 | 제품정보     | 이름 \*           |
| ------ | -------- | --------------- |
| 사용자Id  | `string` | 메시지를 보낸 사용자 ID. |

[]()

####

***인기 있는***

**이름 \***: 인스턴스 방법[`module.exports`](#exp_module_RTKChat--module.exports)

| 계정 만들기 | 제품정보                                                        | 이름 \*                                        |
| ------ | ----------------------------------------------------------- | -------------------------------------------- |
| 제품정보   | `'text'` \| `'image'` \| `'file'` \| `'custom'` \| `'poll'` | 'text', 'image', 'file', 'custom' 또는 'poll'. |

[]()

#### 모듈.exports.pin (id)

채팅 메시지 핀

**이름 \***: 인스턴스 방법[`module.exports`](#exp_module_RTKChat--module.exports)

| 계정 만들기 | 제품정보     | 이름 \*           |
| ------ | -------- | --------------- |
| 이름 \*  | `string` | 메시지의 ID는 pinned |

[]()

#### 모듈.exports.unpin (id)

채팅 메시지

**이름 \***: 인스턴스 방법[`module.exports`](#exp_module_RTKChat--module.exports)

| 계정 만들기 | 제품정보     | 이름 \*             |
| ------ | -------- | ----------------- |
| 이름 \*  | `string` | 메시지의 ID는 unpinned |

[]()

#### module.exports.fetchPublicMessages(옵션)

pagination과 채팅에서 Fetches 메시지.

**이름 \***: 인스턴스 방법[`module.exports`](#exp_module_RTKChat--module.exports)

| 계정 만들기 | 제품정보                  | 이름 \*                                                   |
| ------ | --------------------- | ------------------------------------------------------- |
| 옵션 정보  | `FetchMessageOptions` | Timetamp, limit, 그리고 pagination에 대한 방향을 포함한 메시지의 구성 옵션. |

[]()

#### module.exports.fetchPrivateMessages(옵션)

현재 사용자와 pagination과 다른 participant 사이의 개인 메시지.

**이름 \***: 인스턴스 방법[`module.exports`](#exp_module_RTKChat--module.exports)

| 계정 만들기 | 제품정보                          | 이름 \*                                                                       |
| ------ | ----------------------------- | --------------------------------------------------------------------------- |
| 옵션 정보  | `FetchPrivateMessagesOptions` | 개인 RTKChat ID (Participant의 사용자 ID) 및 pagination 설정을 포함하여 개인 메시지에 대한 구성 옵션. |

[]()

#### module.exports.fetchPinnedMessages(옵션)

Fetches는 pagination을 가진 메시지를 핀으로 꼿습니다.

**이름 \***: 인스턴스 방법[`module.exports`](#exp_module_RTKChat--module.exports)

| 계정 만들기 | 제품정보                  | 이름 \*                                    |
| ------ | --------------------- | ---------------------------------------- |
| 옵션 정보  | `FetchMessageOptions` | 타임스탬프, 제한 및 방향을 포함한 핀 메시지를 태핑하기위한 구성 옵션. |

[]()

####

***인기 있는***

**이름 \***: 인스턴스 방법[`module.exports`](#exp_module_RTKChat--module.exports)

| 계정 만들기   | 제품정보      | 기본 정보 |
| -------- | --------- | ----- |
| 타임 스탬프   | `number`  |       |
| 제품 정보    | `number`  |       |
| 로드 중 ... | `boolean` |       |
| \[오프셋]   | `number`  | `0`   |

[]()

####

***인기 있는***

**이름 \***: 인스턴스 방법[`module.exports`](#exp_module_RTKChat--module.exports)

| 계정 만들기 | 제품정보            |
| ------ | --------------- |
| 이름 \*  | `string`        |
| \[필터]  | `SearchFilters` |
