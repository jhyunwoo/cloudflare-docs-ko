---
title: RTKPolls · Cloudflare 실시간 문서
lastUpdated: 2026-02-10T18:29:47.000Z
chatbotDeprioritize: false
source_url:
  html: >-
    https://developers.cloudflare.com/realtime/realtimekit/core/api-reference/rtkpolls/
  md: >-
    https://developers.cloudflare.com/realtime/realtimekit/core/api-reference/rtkpolls/index.md
translation_locale: ko-KR
translation_source_html: >-
  https://developers.cloudflare.com/realtime/realtimekit/core/api-reference/rtkpolls/
translation_source_md: >-
  https://developers.cloudflare.com/realtime/realtimekit/core/api-reference/rtkpolls/index.md
translation_source_kind: rendered-md
translation_snapshot: '2026-03-13'

---
[]()

RTKPolls 모듈은 회의에서 생성 된 설문 조사로 구성됩니다.

- [RSS 피드](#module_RTKPolls)

  - [사이트맵](#module_RTKPolls+items)
  - [.create(question, options, 익명, 숨기기)](#module_RTKPolls+create)
  - [.vote(pollId, 인덱스)](#module_RTKPolls+vote)

[]()

### 회의.polls.items

투표 항목의 배열.

**이름 \***: 인스턴스 속성[`RTKPolls`](#module_RTKPolls)\
[]()

### meeting.polls.create(question, options, 익명, hide표)

회의에서 설문 조사를 작성합니다.

**이름 \***: 인스턴스 방법[`RTKPolls`](#module_RTKPolls)

| 계정 만들기 | 기본 정보   | 이름 \*                  |
| ------ | ------- | ---------------------- |
| 이름 \*  |         | 투표 할 수있는 질문.           |
| 옵션 정보  |         | 투표 옵션.                 |
| 이름 \*  | `false` | true인 경우, poll는 익명입니다. |
| 비밀번호   | `false` | 사실, 투표에 숨겨진.           |

[]()

### meeting.polls.vote(pollId, 인덱스)

기존 설문 조사에 투표를 던졌습니다.

**이름 \***: 인스턴스 방법[`RTKPolls`](#module_RTKPolls)

| 계정 만들기 | 이름 \*           |
| ------ | --------------- |
| 비밀번호   | 투표 될 설문 조사의 ID. |
| 이름 \*  | 옵션의 인덱스.        |
