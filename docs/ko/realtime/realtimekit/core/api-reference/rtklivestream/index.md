---
title: RTKLivestream · Cloudflare 실시간 문서
lastUpdated: 2026-02-10T18:29:47.000Z
chatbotDeprioritize: false
source_url:
  html: >-
    https://developers.cloudflare.com/realtime/realtimekit/core/api-reference/rtklivestream/
  md: >-
    https://developers.cloudflare.com/realtime/realtimekit/core/api-reference/rtklivestream/index.md
translation_locale: ko-KR
translation_source_html: >-
  https://developers.cloudflare.com/realtime/realtimekit/core/api-reference/rtklivestream/
translation_source_md: >-
  https://developers.cloudflare.com/realtime/realtimekit/core/api-reference/rtklivestream/index.md
translation_source_kind: rendered-md
translation_snapshot: '2026-03-13'

---
[]()

RTKLivestream 모듈은 현재 livestream의 상태를 나타내며 start/stop 라이브 스트림을 허용합니다.

- [RTKLivestream의](#module_RTKLivestream)

  - [모듈.exports](#exp_module_RTKLivestream--module.exports) ⏏

    - [새로운 module.exports (콘텍스, 셀프)](#new_module_RTKLivestream--module.exports_new)
    - [.telemetry의 특징](#module_RTKLivestream--module.exports+telemetry)
    - [.setRTKLivestreamState(라이브스트림스테이트)](#module_RTKLivestream--module.exports+setRTKLivestreamState)
    - [.start\[livestreamConfig\])](#module_RTKLivestream--module.exports+start)
    - [.stop()](#module_RTKLivestream--module.exports+stop)

[]()

### 모듈.exports s

**이름 \***: 수출\
[]()

#### 새로운 module.exports (콘텍스, 셀프)

| 계정 만들기 | 제품정보      |
| ------ | --------- |
| 계정 만들기 | `Context` |
| 사이트맵   | `Self`    |

[]()

#### 모듈.exports.telemetry

**이름 \***: 인스턴스 속성[`module.exports`](#exp_module_RTKLivestream--module.exports)\
[]()

#### module.exports.setRTKLivestreamState(라이브스트림스테이트)

**이름 \***: 인스턴스 방법[`module.exports`](#exp_module_RTKLivestream--module.exports)

| 계정 만들기 | 제품정보                 |
| ------ | -------------------- |
| 라이브스트림 | `RTKLivestreamState` |

[]()

#### 모듈.exports.start (livestreamConfig)

회의를 시작합니다.

**이름 \***: 인스턴스 방법[`module.exports`](#exp_module_RTKLivestream--module.exports)

| 계정 만들기             | 제품정보                       |
| ------------------ | -------------------------- |
| \[라이브streamConfig] | `StartRTKLivestreamConfig` |

[]()

#### 모듈.exports.stop()

회의를 중단합니다.

**이름 \***: 인스턴스 방법[`module.exports`](#exp_module_RTKLivestream--module.exports)
