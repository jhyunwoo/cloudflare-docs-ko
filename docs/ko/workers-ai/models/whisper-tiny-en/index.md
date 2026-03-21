---
title: wsper-tiny-en · Cloudflare Workers AI 문서
description: >-
  Whisper는 자동 음성 인식 (ASR) 및 연설 번역을위한 사전 훈련 된 모델입니다. 라벨 데이터의 680k 시간 동안 훈련 된
  Whisper 모델은 미세 조정없이 많은 데이터 세트 및 도메인을 종합 할 수있는 강력한 능력을 보여줍니다. 이것은 연설 인식의 작업에 훈련
  된 Whisper Tiny 모델의 영어 전용 버전입니다.
chatbotDeprioritize: false
source_url:
  html: 'https://developers.cloudflare.com/workers-ai/models/whisper-tiny-en/'
  md: 'https://developers.cloudflare.com/workers-ai/models/whisper-tiny-en/index.md'
translation_locale: ko-KR
translation_source_html: 'https://developers.cloudflare.com/workers-ai/models/whisper-tiny-en/'
translation_source_md: 'https://developers.cloudflare.com/workers-ai/models/whisper-tiny-en/index.md'
translation_source_kind: rendered-md
translation_snapshot: '2026-03-13'

---
![OpenAI 로고](https://developers.cloudflare.com/_astro/openai.ChTKThcR.svg)

# whisper-tiny-en 베타

자동 연설 인식 • OpenAI

@cf/openai/whisper-tiny-en에

Whisper는 자동 음성 인식 (ASR) 및 연설 번역을위한 사전 훈련 된 모델입니다. 라벨 데이터의 680k 시간 동안 훈련 된 Whisper 모델은 미세 조정없이 많은 데이터 세트 및 도메인을 종합 할 수있는 강력한 능력을 보여줍니다. 이것은 연설 인식의 작업에 훈련 된 Whisper Tiny 모델의 영어 전용 버전입니다.

| 모델 정보 |       |
| ----- | ----- |
| 베타 베타 | 이름 \* |

## 제품 정보

- TypeScript

  ```ts
  export interface Env {
    AI: Ai;
  }


  export default {
    async fetch(request, env): Promise<Response> {
      const res = await fetch(
        "https://github.com/Azure-Samples/cognitive-services-speech-sdk/raw/master/samples/cpp/windows/console/samples/enrollment_audio_katie.wav"
      );
      const blob = await res.arrayBuffer();


      const input = {
        audio: [...new Uint8Array(blob)],
      };


      const response = await env.AI.run(
        "@cf/openai/whisper-tiny-en",
        input
      );


      return Response.json({ input: { audio: [] }, response });
    },
  } satisfies ExportedHandler<Env>;
  ```

- 컬럼

  ```sh
  curl https://api.cloudflare.com/client/v4/accounts/$CLOUDFLARE_ACCOUNT_ID/ai/run/@cf/openai/whisper-tiny-en  \
    -X POST  \
    -H "Authorization: Bearer $CLOUDFLARE_API_TOKEN"  \
    --data-binary "@talking-llama.mp3"
  ```

## 매개 변수

\* 필수 필드를 나타냅니다.

### 이름 \*

- `0`이름 \*

- `1`기타 제품

  - `audio`지원되는

    오디오 데이터를 8 비트 unsigned integer 값으로 해석하는 정수의 배열

    - `items`이름 \*

      0과 255 사이의 값

### 출력 전압

- `text`문자열 필수

  관련 기사

- `word_count`이름 \*

- `words`지원하다

  - `items`기타 제품

    - `word`이름 \*

    - `start`이름 \*

      두 번째이 단어는 녹음에서 시작됩니다.

    - `end`이름 \*

      단어가 완료되면 두 번째 종료

- `vtt`이름 \*

## API 슈마

다음 스키마는 JSON Schema를 기반으로합니다.

- 이름 \*

  ```json
  {
      "oneOf": [
          {
              "type": "string",
              "format": "binary"
          },
          {
              "type": "object",
              "properties": {
                  "audio": {
                      "type": "array",
                      "description": "An array of integers that represent the audio data constrained to 8-bit unsigned integer values",
                      "items": {
                          "type": "number",
                          "description": "A value between 0 and 255"
                      }
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
          "text": {
              "type": "string",
              "description": "The transcription"
          },
          "word_count": {
              "type": "number"
          },
          "words": {
              "type": "array",
              "items": {
                  "type": "object",
                  "properties": {
                      "word": {
                          "type": "string"
                      },
                      "start": {
                          "type": "number",
                          "description": "The second this word begins in the recording"
                      },
                      "end": {
                          "type": "number",
                          "description": "The ending second when the word completes"
                      }
                  }
              }
          },
          "vtt": {
              "type": "string"
          }
      },
      "required": [
          "text"
      ]
  }
  ```
