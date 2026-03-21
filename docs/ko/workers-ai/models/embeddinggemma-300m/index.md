---
title: embeddinggemma-300m · Cloudflare Workers AI 문서
description: >-
  EmbeddingGemma는 300M 매개 변수, 크기에 대한 최첨단, Gemma 3 (T5Gemma 초기화와 함께) 내장 된
  Google에서 열린 embedding 모델 및 Gemini 모델 만들기에 사용되는 동일한 연구 및 기술입니다. EmbeddingGemma는
  분류, 클러스터링 및 매혹적인 유사성 검색을 포함한 검색 및 검색 작업을 위해 잘 추적 된 텍스트의 벡터 표현을 생산합니다. 이 모델은
  100+ 언어의 데이터로 훈련되었습니다.
chatbotDeprioritize: false
source_url:
  html: 'https://developers.cloudflare.com/workers-ai/models/embeddinggemma-300m/'
  md: >-
    https://developers.cloudflare.com/workers-ai/models/embeddinggemma-300m/index.md
translation_locale: ko-KR
translation_source_html: 'https://developers.cloudflare.com/workers-ai/models/embeddinggemma-300m/'
translation_source_md: >-
  https://developers.cloudflare.com/workers-ai/models/embeddinggemma-300m/index.md
translation_source_kind: rendered-md
translation_snapshot: '2026-03-13'

---
![Google 로고](https://developers.cloudflare.com/_astro/google.C4p59fss.svg)

# embeddinggemma-300m에 의하여

텍스트 Embeddings • 구글

@cf/google/embeddinggemma-300m를 위해

EmbeddingGemma는 300M 매개 변수, 크기에 대한 최첨단, Gemma 3 (T5Gemma 초기화와 함께) 내장 된 Google에서 열린 embedding 모델 및 Gemini 모델 만들기에 사용되는 동일한 연구 및 기술입니다. EmbeddingGemma는 분류, 클러스터링 및 매혹적인 유사성 검색을 포함한 검색 및 검색 작업을 위해 잘 추적 된 텍스트의 벡터 표현을 생산합니다. 이 모델은 100+ 언어의 데이터로 훈련되었습니다.

## 제품 정보

- 모델 번호: TypeScript

  ```ts
  export interface Env {
    AI: Ai;
  }


  export default {
    async fetch(request, env): Promise<Response> {


      //문자열이나 문자열의 배열이 될 수 있습니다]
      const stories = [
        "This is a story about an orange cloud",
        "This is a story about a llama",
        "This is a story about a hugging emoji",
      ];


      const embeddings = await env.AI.run(
        "@cf/google/embeddinggemma-300m",
        {
          text: stories,
        }
      );


      return Response.json(embeddings);
    },
  } satisfies ExportedHandler<Env>;
  ```

- Python

  ```py
  import os
  import requests




  ACCOUNT_ID = "your-account-id"
  AUTH_TOKEN = os.environ.get("CLOUDFLARE_AUTH_TOKEN")


  stories = [
    'This is a story about an orange cloud',
    'This is a story about a llama',
    'This is a story about a hugging emoji'
  ]


  response = requests.post(
    f"https://api.cloudflare.com/client/v4/accounts/{ACCOUNT_ID}/ai/run/@cf/google/embeddinggemma-300m",
    headers={"Authorization": f"Bearer {AUTH_TOKEN}"},
    json={"text": stories}
  )


  print(response.json())
  ```

- 컬럼

  ```sh
  curl https://api.cloudflare.com/client/v4/accounts/$CLOUDFLARE_ACCOUNT_ID/ai/run/@cf/google/embeddinggemma-300m  \
    -X POST  \
    -H "Authorization: Bearer $CLOUDFLARE_API_TOKEN"  \
    -d '{ "text": ["This is a story about an orange cloud", "This is a story about a llama", "This is a story about a hugging emoji"] }'
  ```

OpenAI 호환 엔드포인트

Workers AI는 또한 OpenAI 호환성 API 엔드포인트를 지원합니다`/v1/chat/completions`·`/v1/embeddings`. 자세한 내용은, 참조[제품 설명](https://developers.cloudflare.com/workers-ai/configuration/open-ai-compatibility/).

## 매개 변수

\* 필수 필드를 나타냅니다.

### 이름 \*

- `text`1개의 필수

  - `0`문자열 분 1

    첨부된 텍스트

  - `1`지원하다

    텍스트 값의 배치

    - `items`문자열 분 1

      첨부된 텍스트

### 출력 전압

- `shape`지원하다

  - `items`이름 \*

- `data`지원하다

  요청된 텍스트 값의 Embeddings

  - `items`지원하다

    플로팅 포인트 embedding 표현 모델에 의해 형성

    - `items`이름 \*

## API 슈마

다음 스키마는 JSON Schema를 기반으로합니다.

- 이름 \*

  ```json
  {
      "type": "object",
      "properties": {
          "text": {
              "oneOf": [
                  {
                      "type": "string",
                      "description": "The text to embed",
                      "minLength": 1
                  },
                  {
                      "type": "array",
                      "description": "Batch of text values to embed",
                      "items": {
                          "type": "string",
                          "description": "The text to embed",
                          "minLength": 1
                      },
                      "maxItems": 100
                  }
              ]
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
      "type": "object",
      "contentType": "application/json",
      "properties": {
          "shape": {
              "type": "array",
              "items": {
                  "type": "number"
              }
          },
          "data": {
              "type": "array",
              "description": "Embeddings of the requested text values",
              "items": {
                  "type": "array",
                  "description": "Floating point embedding representation shaped by the embedding model",
                  "items": {
                      "type": "number"
                  }
              }
          }
      }
  }
  ```
