---
title: qwen3-embedding-0.6b · Cloudflare Workers AI docs
description: >-
  Qwen3 Embedding 모델 시리즈는 Qwen 가족의 최신 독점 모델이며 텍스트 embedding 및 랭킹 작업을 위해 특별히
  설계되었습니다.
chatbotDeprioritize: false
source_url:
  html: 'https://developers.cloudflare.com/workers-ai/models/qwen3-embedding-0.6b/'
  md: >-
    https://developers.cloudflare.com/workers-ai/models/qwen3-embedding-0.6b/index.md
translation_locale: ko-KR
translation_source_html: 'https://developers.cloudflare.com/workers-ai/models/qwen3-embedding-0.6b/'
translation_source_md: >-
  https://developers.cloudflare.com/workers-ai/models/qwen3-embedding-0.6b/index.md
translation_source_kind: rendered-md
translation_snapshot: '2026-03-13'

---
![Qwen 로고](https://developers.cloudflare.com/_astro/qwen.B8ST_F2H.svg)

# qwen3-embedding-0.6b의

텍스트 Embeddings • Qwen

@cf/qwen/qwen3-embedding-0.6b에

Qwen3 Embedding 모델 시리즈는 Qwen 가족의 최신 독점 모델이며 텍스트 embedding 및 랭킹 작업을 위해 특별히 설계되었습니다.

| 모델 정보                                                               |                  |
| ------------------------------------------------------------------- | ---------------- |
| Context 창[](https://developers.cloudflare.com/workers-ai/glossary/) | 8,192 토큰         |
| 단위 가격                                                               | M 입력 토큰 당 $0.012 |

## 제품 정보

- TypeScript

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
        "@cf/qwen/qwen3-embedding-0.6b",
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
    f"https://api.cloudflare.com/client/v4/accounts/{ACCOUNT_ID}/ai/run/@cf/qwen/qwen3-embedding-0.6b",
    headers={"Authorization": f"Bearer {AUTH_TOKEN}"},
    json={"text": stories}
  )


  print(response.json())
  ```

- 컬럼

  ```sh
  curl https://api.cloudflare.com/client/v4/accounts/$CLOUDFLARE_ACCOUNT_ID/ai/run/@cf/qwen/qwen3-embedding-0.6b  \
    -X POST  \
    -H "Authorization: Bearer $CLOUDFLARE_API_TOKEN"  \
    -d '{ "text": ["This is a story about an orange cloud", "This is a story about a llama", "This is a story about a hugging emoji"] }'
  ```

OpenAI 호환 엔드포인트

Workers AI는 또한 OpenAI 호환성 API 엔드포인트를 지원합니다`/v1/chat/completions`·`/v1/embeddings`. 자세한 내용은, 참조[제품 설명](https://developers.cloudflare.com/workers-ai/configuration/open-ai-compatibility/).

## 매개 변수

\* 필수 필드를 나타냅니다.

### 이름 \*

- `queries`1 중

  - `0`문자열 분 1

    단일 쿼리 문자열

  - `1`지원하다

    쿼리 문자열의 배열

    - `items`문자열 분 1

- `instruction`string default Given web search query, 쿼리에 응답하는 관련 구문

  작업에 대한 선택 사항

- `documents`1 중

  - `0`문자열 분 1

    단일 문서 문자열

  - `1`지원하다

    문서 문자열의 배열

    - `items`문자열 분 1

- `text`1 중

  - `0`문자열 분 1

    문서 별: 단일 텍스트 문자열

  - `1`지원하다

    문서의 별명: 텍스트 문자열의 배열

    - `items`문자열 분 1

### 출력 전압

- `data`지원하다

  - `items`지원하다

    - `items`이름 \*

- `shape`지원하다

  - `items`뚱 베어

## API 슈마

다음 스키마는 JSON Schema를 기반으로합니다.

- 이름 \*

  ```json
  {
      "type": "object",
      "properties": {
          "queries": {
              "oneOf": [
                  {
                      "type": "string",
                      "description": "A single query string",
                      "minLength": 1
                  },
                  {
                      "type": "array",
                      "description": "An array of query strings",
                      "items": {
                          "type": "string",
                          "minLength": 1
                      },
                      "maxItems": 32
                  }
              ]
          },
          "instruction": {
              "type": "string",
              "default": "Given a web search query, retrieve relevant passages that answer the query",
              "description": "Optional instruction for the task"
          },
          "documents": {
              "oneOf": [
                  {
                      "type": "string",
                      "description": "A single document string",
                      "minLength": 1
                  },
                  {
                      "type": "array",
                      "description": "An array of document strings",
                      "items": {
                          "type": "string",
                          "minLength": 1
                      },
                      "maxItems": 32
                  }
              ]
          },
          "text": {
              "oneOf": [
                  {
                      "type": "string",
                      "description": "Alias for documents: a single text string",
                      "minLength": 1
                  },
                  {
                      "type": "array",
                      "description": "Alias for documents: an array of text strings",
                      "items": {
                          "type": "string",
                          "minLength": 1
                      },
                      "maxItems": 32
                  }
              ]
          }
      }
  }
  ```

- 출력 전압

  ```json
  {
      "type": "object",
      "properties": {
          "data": {
              "items": {
                  "items": {
                      "type": "number"
                  },
                  "type": "array"
              },
              "type": "array"
          },
          "shape": {
              "items": {
                  "type": "integer"
              },
              "type": "array"
          }
      }
  }
  ```
