---
title: RTK기록 · Cloudflare 실시간 문서
lastUpdated: 2026-02-10T18:29:47.000Z
chatbotDeprioritize: false
source_url:
  html: >-
    https://developers.cloudflare.com/realtime/realtimekit/core/api-reference/rtkrecording/
  md: >-
    https://developers.cloudflare.com/realtime/realtimekit/core/api-reference/rtkrecording/index.md
translation_locale: ko-KR
translation_source_html: >-
  https://developers.cloudflare.com/realtime/realtimekit/core/api-reference/rtkrecording/
translation_source_md: >-
  https://developers.cloudflare.com/realtime/realtimekit/core/api-reference/rtkrecording/index.md
translation_source_kind: rendered-md
translation_snapshot: '2026-03-13'

---
[]()

RTKRecording 모듈은 현재 녹화의 상태를 나타내며, start/stop 레코딩을 시작하고 진행중인 녹화가 있는지 확인합니다.

- [RTK기록](#module_RTKRecording)

  - [.telemetry의 특징](#module_RTKRecording+telemetry)
  - [.start ()](#module_RTKRecording+start)
  - [.stop()](#module_RTKRecording+stop)
  - [.pause ()](#module_RTKRecording+pause)
  - [.resume()](#module_RTKRecording+resume)

[]()

### 회의.recording.telemetry

**이름 \***: 인스턴스 속성[`RTKRecording`](#module_RTKRecording)\
[]()

### meeting.recording.start()에 따라

회의를 녹음합니다.

**이름 \***: 인스턴스 방법[`RTKRecording`](#module_RTKRecording)\
[]()

### 회의.recording.stop()

현재 'RECORDING'상태에서 모든 녹음을 중지

**이름 \***: 인스턴스 방법[`RTKRecording`](#module_RTKRecording)\
[]()

### 회의.recording.pause ()

현재 'RECORDING'상태에서 모든 녹화를 일시 중지

**이름 \***: 인스턴스 방법[`RTKRecording`](#module_RTKRecording)\
[]()

### 회의.recording.resume()

현재 'PAUSED'상태에서 모든 기록

**이름 \***: 인스턴스 방법[`RTKRecording`](#module_RTKRecording)
