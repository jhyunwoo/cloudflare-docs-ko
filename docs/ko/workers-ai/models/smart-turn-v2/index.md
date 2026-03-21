---
title: 스마트 회전 v2 · Cloudflare Workers AI docs
description: '오픈 소스, 커뮤니티 구동, 2 버전의 기본 오디오 턴 검출 모델'
chatbotDeprioritize: false
source_url:
  html: 'https://developers.cloudflare.com/workers-ai/models/smart-turn-v2/'
  md: 'https://developers.cloudflare.com/workers-ai/models/smart-turn-v2/index.md'
translation_locale: ko-KR
translation_source_html: 'https://developers.cloudflare.com/workers-ai/models/smart-turn-v2/'
translation_source_md: 'https://developers.cloudflare.com/workers-ai/models/smart-turn-v2/index.md'
translation_source_kind: rendered-md
translation_snapshot: '2026-03-13'

---
·

# 스마트턴 v2

음성 활동 탐지 • pipecat-ai

@cf/pipecat-ai/스마트-turn-v2

오픈 소스, 커뮤니티 구동, 2 버전의 기본 오디오 턴 검출 모델

| 모델 정보  |                  |
| ------ | ---------------- |
| 공지사항   | 이름 \*            |
| 실시간 채팅 | 이름 \*            |
| 단위 가격  | 오디오 분 당 $0.00034 |

## 매개 변수

\* 필수 필드를 나타냅니다.

### 이름 \*

- `0`기타 제품

  - `audio`자주 묻는 질문

    해당 데이터에 명시된 오디오 데이터 및 콘텐츠 유형의 읽기 가능한 스트림

    - `body`자주 묻는 질문

    - `contentType`문자열 필수

  - `dtype`이름 \*

    inference 서버로 보낸 데이터 PCM 데이터의 종류

- `1`기타 제품

  - `audio`문자열 필수

    base64 인코딩된 오디오 데이터

  - `dtype`이름 \*

    inference 서버로 보낸 데이터 PCM 데이터의 종류

### 출력 전압

- `is_complete`한국어

  true가면, end-of-turn가 감지되었습니다.

- `probability`이름 \*

  end-of-turn 검출의 확률

## API 슈마

다음 스키마는 JSON Schema를 기반으로합니다.

- 이름 \*

  ```json
  {
      "type": "object",
      "oneOf": [
          {
              "properties": {
                  "audio": {
                      "type": "object",
                      "description": "readable stream with audio data and content-type specified for that data",
                      "properties": {
                          "body": {
                              "type": "object"
                          },
                          "contentType": {
                              "type": "string"
                          }
                      },
                      "required": [
                          "body",
                          "contentType"
                      ]
                  },
                  "dtype": {
                      "type": "string",
                      "description": "type of data PCM data that's sent to the inference server as raw array",
                      "enum": [
                          "uint8",
                          "float32",
                          "float64"
                      ]
                  }
              },
              "required": [
                  "audio"
              ]
          },
          {
              "properties": {
                  "audio": {
                      "type": "string",
                      "description": "base64 encoded audio data"
                  },
                  "dtype": {
                      "type": "string",
                      "description": "type of data PCM data that's sent to the inference server as raw array",
                      "enum": [
                          "uint8",
                          "float32",
                          "float64"
                      ]
                  }
              },
              "required": [
                  "audio"
              ]
          }
      ]
  }
  ```

- 출력 전압

  ```json
  {
      "type": "object",
      "contentType": "application/json",
      "properties": {
          "is_complete": {
              "type": "boolean",
              "description": "if true, end-of-turn was detected"
          },
          "probability": {
              "type": "number",
              "description": "probability of the end-of-turn detection"
          }
      }
  }
  ```
