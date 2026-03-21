---
title: aura-2-es · Cloudflare Workers AI docs
description: >-
  Aura-2는 제공된 텍스트의 컨텍스트를 기반으로 천연 패싱, 표현성 및 필러를 적용하는 컨텍스트-aware text-to-speech
  (TTS) 모델입니다. 텍스트 입력의 품질은 직접 오디오 출력의 자연스러운 영향을줍니다.
chatbotDeprioritize: false
source_url:
  html: 'https://developers.cloudflare.com/workers-ai/models/aura-2-es/'
  md: 'https://developers.cloudflare.com/workers-ai/models/aura-2-es/index.md'
translation_locale: ko-KR
translation_source_html: 'https://developers.cloudflare.com/workers-ai/models/aura-2-es/'
translation_source_md: 'https://developers.cloudflare.com/workers-ai/models/aura-2-es/index.md'
translation_source_kind: rendered-md
translation_snapshot: '2026-03-13'

---
![Deepgram 로고](https://developers.cloudflare.com/_astro/deepgram.DVGPhlbc.svg)

# 아우라 2세

Text-to-Speech • 딥그램

@cf/deepgram/아우라 2es

Aura-2는 제공된 텍스트의 컨텍스트를 기반으로 천연 패싱, 표현성 및 필러를 적용하는 컨텍스트-aware text-to-speech (TTS) 모델입니다. 텍스트 입력의 품질은 직접 오디오 출력의 자연스러운 영향을줍니다.

| 모델 정보  |                                     |
| ------ | ----------------------------------- |
| 이용 약관  | [이름 \*](https://deepgram.com/terms) |
| 공지사항   | 이름 \*                               |
| 회사연혁   | 이름 \*                               |
| 실시간 채팅 | 이름 \*                               |
| 단위 가격  | 1k 문자 당 $0.03                       |

## 매개 변수

\* 필수 필드를 나타냅니다.

### 이름 \*

- `speaker`문자열 기본 aquila

  오디오를 생산하는 데 사용되는 스피커.

- `encoding`이름 \*

  출력 오디오의 인코딩.

- `container`이름 \*

  컨테이너는 출력 오디오 파일 형식 래퍼를 지정합니다. 사용 가능한 옵션은 인코딩 유형에 따라 다릅니다.

- `text`문자열 필수

  본문내용 바로가기

- `sample_rate`이름 \*

  표본 비율은 산출 오디오를 위한 표본 비율을 지정합니다. 인코딩을 기반으로 다른 샘플 속도가 지원됩니다. 일부 인코딩의 경우, 샘플 속도는 설정할 수 없습니다.

- `bit_rate`이름 \*

  초당 비트에서 오디오의 비트레이트. 인코딩 유형에 따라 사전 정의 범위 또는 특정 값에서 선택하십시오.

### 출력 전압

바인딩 반환 a`ReadableStream`MPEG 형식으로 오디오 (모델의 출력 스키마 확인).

## API 슈마

다음 스키마는 JSON Schema를 기반으로합니다.

- 이름 \*

  ```json
  {
      "type": "object",
      "properties": {
          "speaker": {
              "type": "string",
              "enum": [
                  "sirio",
                  "nestor",
                  "carina",
                  "celeste",
                  "alvaro",
                  "diana",
                  "aquila",
                  "selena",
                  "estrella",
                  "javier"
              ],
              "default": "aquila",
              "description": "Speaker used to produce the audio."
          },
          "encoding": {
              "type": "string",
              "enum": [
                  "linear16",
                  "flac",
                  "mulaw",
                  "alaw",
                  "mp3",
                  "opus",
                  "aac"
              ],
              "description": "Encoding of the output audio."
          },
          "container": {
              "type": "string",
              "enum": [
                  "none",
                  "wav",
                  "ogg"
              ],
              "description": "Container specifies the file format wrapper for the output audio. The available options depend on the encoding type.."
          },
          "text": {
              "type": "string",
              "description": "The text content to be converted to speech"
          },
          "sample_rate": {
              "type": "number",
              "description": "Sample Rate specifies the sample rate for the output audio. Based on the encoding, different sample rates are supported. For some encodings, the sample rate is not configurable"
          },
          "bit_rate": {
              "type": "number",
              "description": "The bitrate of the audio in bits per second. Choose from predefined ranges or specific values based on the encoding type."
          }
      },
      "required": [
          "text"
      ]
  }
  ```

- 출력 전압

  ```json
  {
      "type": "string",
      "contentType": "audio/mpeg",
      "format": "binary",
      "description": "The generated audio in MP3 format"
  }
  ```
