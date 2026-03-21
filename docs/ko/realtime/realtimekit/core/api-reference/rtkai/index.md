---
title: RTKAi · Cloudflare 실시간 문서
lastUpdated: 2026-02-10T18:29:47.000Z
chatbotDeprioritize: false
source_url:
  html: >-
    https://developers.cloudflare.com/realtime/realtimekit/core/api-reference/rtkai/
  md: >-
    https://developers.cloudflare.com/realtime/realtimekit/core/api-reference/rtkai/index.md
translation_locale: ko-KR
translation_source_html: >-
  https://developers.cloudflare.com/realtime/realtimekit/core/api-reference/rtkai/
translation_source_md: >-
  https://developers.cloudflare.com/realtime/realtimekit/core/api-reference/rtkai/index.md
translation_source_kind: rendered-md
translation_snapshot: '2026-03-13'

---
[]()

이 단위는 이루어져 있습니다`ai`제품의 AI 기능과 인터페이스에 사용되는 객체. 라이브 회의 성적을 얻을 수 있으며 요약, 이 개체를 사용하여 의제와 같은 다른 회의 AI 기능을 사용할 수 있습니다.

- [사이트맵](#module_RTKAi)

  - *이름 \**

    - [.telemetry의 특징](#module_RTKAi+telemetry)
    - [.onTranscript(문서)](#module_RTKAi+onTranscript)

  - *제품 정보*

    - [.parseTranscript(transcriptData, \[isPartialTranscript\])는](#module_RTKAi.parseTranscript)
    - [.parseTranscripts(transcriptData)에 대해](#module_RTKAi.parseTranscripts)

[]()

### 회의.ai.telemetry

**이름 \***: 인스턴스 속성[`RTKAi`](#module_RTKAi)\
[]()

### meeting.ai.onTranscript(문서)

**이름 \***: 인스턴스 방법[`RTKAi`](#module_RTKAi)

| 계정 만들기 | 제품정보                | 이름 \*                        |
| ------ | ------------------- | ---------------------------- |
| 언어 선택  | `TranscriptionData` | Transcript 데이터는 참가자에게 받았습니다. |

[]()

### 회의.ai.parseTranscript(transcriptData, \[isPartialTranscript])

단일 라인 성적표

**이름 \***: 정적 방법[`RTKAi`](#module_RTKAi)

| 계정 만들기 | 제품정보      | 기본 정보   | 이름 \*        |
| ------ | --------- | ------- | ------------ |
| 기술자료   | `string`  |         | 문자 데이터를 파싱   |
| \[제목]  | `boolean` | `false` | 성적표가 부분인지 여부 |

[]()

### meeting.ai.parseTranscripts(문서 자료)

멀티라인 성적표

**이름 \***: 정적 방법[`RTKAi`](#module_RTKAi)

| 계정 만들기 | 제품정보     | 이름 \*      |
| ------ | -------- | ---------- |
| 기술자료   | `string` | 문자 데이터를 파싱 |
