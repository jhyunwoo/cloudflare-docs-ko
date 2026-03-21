---
title: · Cloudflare 실시간 문서
lastUpdated: 2026-02-10T18:29:47.000Z
chatbotDeprioritize: false
source_url:
  html: >-
    https://developers.cloudflare.com/realtime/realtimekit/core/api-reference/rtkplugin/
  md: >-
    https://developers.cloudflare.com/realtime/realtimekit/core/api-reference/rtkplugin/index.md
translation_locale: ko-KR
translation_source_html: >-
  https://developers.cloudflare.com/realtime/realtimekit/core/api-reference/rtkplugin/
translation_source_md: >-
  https://developers.cloudflare.com/realtime/realtimekit/core/api-reference/rtkplugin/index.md
translation_source_kind: rendered-md
translation_snapshot: '2026-03-13'

---
[]()

RTKPlugin 모듈은 회의에서 단일 플러그인을 나타냅니다. 플러그인은 플러그인 배열 중 하나에서 얻을 수 있습니다`meeting.plugins`. 예를 들면,

```ts
const plugin1 = meeting.plugins.active.get(pluginId);
const plugin2 = meeting.plugins.all.get(pluginId);
```

- [RSS 피드](#module_RTKPlugin)

  - [모듈.exports](#exp_module_RTKPlugin--module.exports) ⏏

    - [새로운 module.exports (콘텍스, 플러그인, 플러그인SocketHandler, 자기, 참가자, 채팅, 회의Title)](#new_module_RTKPlugin--module.exports_new)
    - [.telemetry의 특징](#module_RTKPlugin--module.exports+telemetry)
    - [.sendIframeEvent(메시지)](#module_RTKPlugin--module.exports+sendIframeEvent)
    - [.handleIframeMessage(iframeMessage)](#module_RTKPlugin--module.exports+handleIframeMessage)
    - [.sendData(유료)](#module_RTKPlugin--module.exports+sendData)
    - [.removeRTKPluginView(보기) 아이)](#module_RTKPlugin--module.exports+removeRTKPluginView)
    - [.addRTKPluginView (iframe, viewId)](#module_RTKPlugin--module.exports+addRTKPluginView)
    - [.setActive (활성)](#module_RTKPlugin--module.exports+setActive)
    - [.activateFor자()](#module_RTKPlugin--module.exports+activateForSelf)
    - [.deactivate포커()](#module_RTKPlugin--module.exports+deactivateForSelf)
    -
    -
    - [.activate()](#module_RTKPlugin--module.exports+activate)
    - [.deactivate()를](#module_RTKPlugin--module.exports+deactivate)

[]()

### 모듈.exports s

**이름 \***: 수출\
[]()

#### 새로운 module.exports (콘텍스, 플러그인, 플러그인SocketHandler, 자기, 참가자, 채팅, 회의Title)

| 계정 만들기            | 제품정보                     |
| ----------------- | ------------------------ |
| 계정 만들기            | `Context`                |
| 다운로드              | `RTKPluginResponse`      |
| 플러그인SocketHandler | `RTKPluginSocketHandler` |
| 사이트맵              | `Self`                   |
| 회사연혁              | `Participants`           |
| 이름 \*             | `Chat`                   |
| 관련 기사 이름 \*       | `string`                 |

[]()

#### 모듈.exports.telemetry

**이름 \***: 인스턴스 속성[`module.exports`](#exp_module_RTKPlugin--module.exports)\
[]()

#### module.exports.sendIframeEvent(메시지)

**이름 \***: 인스턴스 방법[`module.exports`](#exp_module_RTKPlugin--module.exports)

| 계정 만들기 | 제품정보                     | 이름 \*                |
| ------ | ------------------------ | -------------------- |
| 이름 \*  | `RTKPluginIframeMessage` | 이 플러그인에 전달되는 소켓 메시지. |

[]()

#### 모듈.exports.handleIframeMessage(iframeMessage)

**이름 \***: 인스턴스 방법[`module.exports`](#exp_module_RTKPlugin--module.exports)

| 계정 만들기     | 제품정보                     |
| ---------- | ------------------------ |
| iframe 메시지 | `RTKPluginIframeMessage` |

[]()

#### module.exports.sendData(페이로드)

이 방법은 플러그인에 arbitrary 데이터를 전송하는 데 사용됩니다.

**이름 \***: 인스턴스 방법[`module.exports`](#exp_module_RTKPlugin--module.exports)

| 계정 만들기    | 제품정보              | 이름 \*                                      |
| --------- | ----------------- | ------------------------------------------ |
| 제품 설명     | `SendDataOptions` | 플러그인 내부를 보내려면 payload.                     |
| 결제하기      | `string`          | 이벤트의 이름. 플러그인 SDK에서 이벤트를 듣는 데 사용됩니다.       |
| 지불로드.data | `any`             | 당신이 방출하고 싶은 자료. 그것은 어떤 자료 유형든지 가정할 수 있습니다. |

[]()

#### module.exports.removeRTKPluginView(보기) 아이)

이 방법은 iframe에 부착 된 이벤트 리스너를 청소하는 데 사용됩니다. iframe이 DOM에서 제거되기 전에 사용해야합니다.

**이름 \***: 인스턴스 방법[`module.exports`](#exp_module_RTKPlugin--module.exports)

| 계정 만들기 | 제품정보     | 기본 정보       | 이름 \*                                     |
| ------ | -------- | ----------- | ----------------------------------------- |
| 사이트맵   | `string` | `"default"` | 이 iframe과 일치하는 전망의 ID. 기본값은 'default'입니다. |

[]()

#### module.exports.addRTKPluginView (iframe, viewId)

이 방법은 메인 창에서 iframe 및 핵심 응용 프로그램 (meeting object) 내부 플러그인 사이의 communcation 레이어를 추가합니다.

**이름 \***: 인스턴스 방법[`module.exports`](#exp_module_RTKPlugin--module.exports)

| 계정 만들기 | 제품정보                                        | 기본 정보       | 이름 \*                                     |
| ------ | ------------------------------------------- | ----------- | ----------------------------------------- |
| 아이프레임  | `HTMLIFrameElement` \| `ReactNativeWebView` |             | 이 플러그인을 표시하는 Iframe 요소.                   |
| 사이트맵   | `string`                                    | `"default"` | 이 iframe과 일치하는 전망의 ID. 기본값은 'default'입니다. |

[]()

#### module.exports.setActive (활성)

**이름 \***: 인스턴스 방법[`module.exports`](#exp_module_RTKPlugin--module.exports)

| 계정 만들기 | 제품정보      |
| ------ | --------- |
| 이름 \*  | `boolean` |

[]()

#### 모듈.exports.activateForSelf()

**이름 \***: 인스턴스 방법[`module.exports`](#exp_module_RTKPlugin--module.exports)\
[]()

#### 모듈.exports.deactivateForSelf()

**이름 \***: 인스턴스 방법[`module.exports`](#exp_module_RTKPlugin--module.exports)\
[]()

####

***인기 있는***

**이름 \***: 인스턴스 방법[`module.exports`](#exp_module_RTKPlugin--module.exports)\
[]()

####

***인기 있는***

**이름 \***: 인스턴스 방법[`module.exports`](#exp_module_RTKPlugin--module.exports)\
[]()

#### 모듈.exports.activate()

이 플러그인을 모든 참가자에게 활성화하십시오.

**이름 \***: 인스턴스 방법[`module.exports`](#exp_module_RTKPlugin--module.exports)\
[]()

#### module.exports.deactivate() 모듈

이 플러그인을 모든 참가자에게 비활성화합니다.

**이름 \***: 인스턴스 방법[`module.exports`](#exp_module_RTKPlugin--module.exports)
