---
title: m2m100-1.2b · Cloudflare Workers AI 문서
description: 다국어 encoder-decoder (seq-to-seq) 모델은 다국어 번역을 훈련
chatbotDeprioritize: false
source_url:
  html: 'https://developers.cloudflare.com/workers-ai/models/m2m100-1.2b/'
  md: 'https://developers.cloudflare.com/workers-ai/models/m2m100-1.2b/index.md'
translation_locale: ko-KR
translation_source_html: 'https://developers.cloudflare.com/workers-ai/models/m2m100-1.2b/'
translation_source_md: 'https://developers.cloudflare.com/workers-ai/models/m2m100-1.2b/index.md'
translation_source_kind: rendered-md
translation_snapshot: '2026-03-13'

---
![메타 로고](https://developers.cloudflare.com/_astro/meta.x5nlFKBG.svg)

# 크기: M2m100-1.2b

번역 • 메타

@cf/메타/m2m100-1.2b

다국어 encoder-decoder (seq-to-seq) 모델은 다국어 번역을 훈련

| 모델 정보   |                                                                                 |
| ------- | ------------------------------------------------------------------------------- |
| 이용 약관   | [이름 \*](https://github.com/facebookresearch/fairseq/blob/main/LICENSE)          |
| 더 많은 정보 | [이름 \*](https://github.com/facebookresearch/fairseq/tree/main/examples/m2m_100) |
| 공지사항    | 이름 \*                                                                           |
| 단위 가격   | M 입력 토큰 당 $0.34, M 출력 토큰 당 $0.34                                                |

## 제품 정보

- TypeScript

  ```ts
  export interface Env {
    AI: Ai;
  }


  export default {
    async fetch(request, env): Promise<Response> {


      const response = await env.AI.run(
        "@cf/meta/m2m100-1.2b",
        {
          text: "I'll have an order of the moule frites",
          source_lang: "english", //기본적으로 English
          target_lang: "french",
        }
      );


      return new Response(JSON.stringify(response));
    },
  } satisfies ExportedHandler<Env>;
  ```

- Python

  ```py
  import requests


  API_BASE_URL = "https://api.cloudflare.com/client/v4/accounts/{ACCOUNT_ID}/ai/run/"
  headers = {"Authorization": "Bearer {API_TOKEN}"}


  def run(model, input):
      response = requests.post(f"{API_BASE_URL}{model}", headers=headers, json=input)
      return response.json()


  output = run('@cf/meta/m2m100-1.2b', {
    "text": "I'll have an order of the moule frites",
    "source_lang": "english",
    "target_lang": "french"
  })


  print(output)
  ```

- 컬럼

  ```sh
  curl https://api.cloudflare.com/client/v4/accounts/$CLOUDFLARE_ACCOUNT_ID/ai/run/@cf/meta/m2m100-1.2b  \
      -X POST  \
      -H "Authorization: Bearer $CLOUDFLARE_API_TOKEN"  \
      -d '{ "text": "Ill have an order of the moule frites", "source_lang": "english", "target_lang": "french" }'
  ```

## 매개 변수

\* 필수 필드를 나타냅니다.

### 이름 \*

- `0`기타 제품

  - `text`문자열 필수 최소 1

    번역 할 텍스트

  - `source_lang`문자열 기본 en

    소스 텍스트의 언어 코드 (예: '영어'). 지정하지 않은 경우 'en'에 기본값

  - `target_lang`문자열 필수

    텍스트를 번역하는 언어 코드 (예: 'es' for Spanish)

- `1`기타 제품

  - `requests`지원되는

    async-queue를 사용하여 실행하는 embeddings 요청의 배치

    - `items`기타 제품

      - `text`문자열 필수 최소 1

        번역 할 텍스트

      - `source_lang`문자열 기본 en

        소스 텍스트의 언어 코드 (예: '영어'). 지정하지 않은 경우 'en'에 기본값

      - `target_lang`문자열 필수

        텍스트를 번역하는 언어 코드 (예: 'es' for Spanish)

### 출력 전압

- `0`기타 제품

  - `translated_text`이름 \*

    대상 언어의 번역된 텍스트

- `1`기타 제품

  - `request_id`이름 \*

    결과를 얻기 위해 사용할 수있는 async 요청 ID.

## API 슈마

다음 스키마는 JSON Schema를 기반으로합니다.

- 이름 \*

  ```json
  {
      "type": "object",
      "oneOf": [
          {
              "properties": {
                  "text": {
                      "type": "string",
                      "minLength": 1,
                      "description": "The text to be translated"
                  },
                  "source_lang": {
                      "type": "string",
                      "default": "en",
                      "description": "The language code of the source text (e.g., 'en' for English). Defaults to 'en' if not specified"
                  },
                  "target_lang": {
                      "type": "string",
                      "description": "The language code to translate the text into (e.g., 'es' for Spanish)"
                  }
              },
              "required": [
                  "text",
                  "target_lang"
              ]
          },
          {
              "properties": {
                  "requests": {
                      "type": "array",
                      "description": "Batch of the embeddings requests to run using async-queue",
                      "items": {
                          "type": "object",
                          "properties": {
                              "text": {
                                  "type": "string",
                                  "minLength": 1,
                                  "description": "The text to be translated"
                              },
                              "source_lang": {
                                  "type": "string",
                                  "default": "en",
                                  "description": "The language code of the source text (e.g., 'en' for English). Defaults to 'en' if not specified"
                              },
                              "target_lang": {
                                  "type": "string",
                                  "description": "The language code to translate the text into (e.g., 'es' for Spanish)"
                              }
                          },
                          "required": [
                              "text",
                              "target_lang"
                          ]
                      }
                  }
              },
              "required": [
                  "requests"
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
      "oneOf": [
          {
              "properties": {
                  "translated_text": {
                      "type": "string",
                      "description": "The translated text in the target language"
                  }
              }
          },
          {
              "type": "object",
              "contentType": "application/json",
              "title": "Async response",
              "properties": {
                  "request_id": {
                      "type": "string",
                      "description": "The async request id that can be used to obtain the results."
                  }
              }
          }
      ]
  }
  ```
