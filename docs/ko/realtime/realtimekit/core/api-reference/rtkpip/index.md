---
title: RTKPip · Cloudflare 실시간 문서
lastUpdated: 2026-02-10T18:29:47.000Z
chatbotDeprioritize: false
source_url:
  html: >-
    https://developers.cloudflare.com/realtime/realtimekit/core/api-reference/rtkpip/
  md: >-
    https://developers.cloudflare.com/realtime/realtimekit/core/api-reference/rtkpip/index.md
translation_locale: ko-KR
translation_source_html: >-
  https://developers.cloudflare.com/realtime/realtimekit/core/api-reference/rtkpip/
translation_source_md: >-
  https://developers.cloudflare.com/realtime/realtimekit/core/api-reference/rtkpip/index.md
translation_source_kind: rendered-md
translation_snapshot: '2026-03-13'

---
## 제품정보

- [getInitials()에](#getInitials)

  ui-kit의 코드. avatar 컴포넌트에 사용되는 동일한 방법

- [init (콘텍스, 셀프)](#_init)

- [init (옵션)](#init)

  PiP를 초기화하고 소스 준비

- [disableSource (출처)](#disableSource)

- [addSource(id, element, 활성화, \[displayText\])](#addSource)

  참가자 그리드에서 비디오 소스 추가

- [updateSource(id, 소스)](#updateSource)

  비디오 소스 업데이트

- [removeSource (id)를 제거](#removeSource)

  참가자의 비디오 소스 제거

- [제거PinnedSource(id)](#removePinnedSource)

  핀 소스 제거

- [제거AllSources()](#removeAllSources)

  모든 소스 제거

- [가능()](#enable)

  PiP 사용

[]()

ui-kit의 코드. avatar 컴포넌트에 사용되는 동일한 방법

**이름 \***: 글로벌 기능\
[]()

**이름 \***: 글로벌 기능

| 계정 만들기 | 제품정보      |
| ------ | --------- |
| 계정 만들기 | `Context` |
| 사이트맵   | `Self`    |

[]()

PiP를 초기화하고 소스 준비

**이름 \***: 글로벌 기능

| 계정 만들기   | 제품정보     |
| -------- | -------- |
| \[옵션]    | `Object` |
| \[옵션.높이] | `number` |
| \[옵션.폭]  | `number` |

[]()

**이름 \***: 글로벌 기능

| 계정 만들기 | 제품정보     |
| ------ | -------- |
| 이름 \*  | `string` |

[]()

참가자 그리드에서 비디오 소스 추가

**이름 \***: 글로벌 기능

| 계정 만들기 | 제품정보               | 이름 \*                          |
| ------ | ------------------ | ------------------------------ |
| 이름 \*  | `string`           | 소스에 대한 ID (ex. participant ID) |
| 이름 \*  | `HTMLVideoElement` | 비디오 소스 HTMLVideoElement        |
| 이름 \*  | `boolean`          | 소스가 활성화되면                      |
| \[이미지] | `string`           | 두 문자 표시 텍스트                    |

[]()

비디오 소스 업데이트

**이름 \***: 글로벌 기능

| 계정 만들기 | 제품정보     |
| ------ | -------- |
| 이름 \*  | `string` |
| 이름 \*  | `any`    |

[]()

참가자의 비디오 소스 제거

**이름 \***: 글로벌 기능

| 계정 만들기 | 이름 \*                          |
| ------ | ------------------------------ |
| 이름 \*  | 소스에 대한 ID (ex. participant ID) |

[]()

핀 소스 제거

**이름 \***: 글로벌 기능

| 계정 만들기 | 이름 \*                          |
| ------ | ------------------------------ |
| 이름 \*  | 소스에 대한 ID (ex. participant ID) |

[]()

모든 소스 제거

**이름 \***: 글로벌 기능\
[]()

PiP 사용

**이름 \***: 글로벌 기능
