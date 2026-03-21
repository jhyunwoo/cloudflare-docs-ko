---
title: bge 기초 en v1.5 · Cloudflare QXWorkers AI docs
description: BAAI 일반 embedding (Base) 모델은 주어진 텍스트를 768 차원 벡터로 변환
chatbotDeprioritize: false
source_url:
  html: 'https://developers.cloudflare.com/workers-ai/models/bge-base-en-v1.5/'
  md: >-
    https://developers.cloudflare.com/workers-ai/models/bge-base-en-v1.5/index.md
translation_locale: ko-KR
translation_source_html: 'https://developers.cloudflare.com/workers-ai/models/bge-base-en-v1.5/'
translation_source_md: 'https://developers.cloudflare.com/workers-ai/models/bge-base-en-v1.5/index.md'
translation_source_kind: rendered-md
translation_snapshot: '2026-03-13'

---
₢ 킹

# bge 기초 en v1.5

텍스트 엠 베드딩 • baai

@cf/baai/bge 기초 en v1.5

BAAI 일반 embedding (Base) 모델은 주어진 텍스트를 768 차원 벡터로 변환

| 모델 정보                                                               |                                                       |
| ------------------------------------------------------------------- | ----------------------------------------------------- |
| Context 창[](https://developers.cloudflare.com/workers-ai/glossary/) | 153,600 토큰                                            |
| 더 많은 정보                                                             | [이름 \*](https://huggingface.co/BAAI/bge-base-en-v1.5) |
| 최대 입력 토큰                                                            | 512                                                   |
| 산출 차원                                                               | 768                                                   |
| 공지사항                                                                | 이름 \*                                                 |
| 단위 가격                                                               | M 입력 토큰 당 $0.067                                      |

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
        "@cf/baai/bge-base-en-v1.5",
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
    f"https://api.cloudflare.com/client/v4/accounts/{ACCOUNT_ID}/ai/run/@cf/baai/bge-base-en-v1.5",
    headers={"Authorization": f"Bearer {AUTH_TOKEN}"},
    json={"text": stories}
  )


  print(response.json())
  ```

- 컬럼

  ```sh
  curl https://api.cloudflare.com/client/v4/accounts/$CLOUDFLARE_ACCOUNT_ID/ai/run/@cf/baai/bge-base-en-v1.5  \
    -X POST  \
    -H "Authorization: Bearer $CLOUDFLARE_API_TOKEN"  \
    -d '{ "text": ["This is a story about an orange cloud", "This is a story about a llama", "This is a story about a hugging emoji"] }'
  ```

OpenAI 호환 엔드포인트

Workers AI는 또한 OpenAI 호환성 API 엔드포인트를 지원합니다`/v1/chat/completions`·`/v1/embeddings`. 자세한 내용은, 참조[제품 설명](https://developers.cloudflare.com/workers-ai/configuration/open-ai-compatibility/).

## 매개 변수

\* 필수 필드를 나타냅니다.

### 이름 \*

- `0`기타 제품

  - `text`1개의 필수

    - `0`문자열 분 1

      첨부된 텍스트

    - `1`지원하다

      텍스트 값의 배치

      - `items`문자열 분 1

        첨부된 텍스트

  - `pooling`문자열 기본값은

    패딩 공정에 사용되는 풀링 방법. \`cls\` 풀링은 더 큰 입력에 더 정확한 embeddings를 생성합니다 - 그러나, cls 풀링으로 창조된 embeddings는 의미있는 풀링으로 생성된 embeddings와 호환이 되지 않습니다. 기본 풀링 방법은 \`mean\`이 끊어지는 변화가 아니라 새로운 \`cls\`XQ 풀링을 사용하여 매우 좋습니다.

- `1`기타 제품

  - `requests`지원되는

    async-queue를 사용하여 실행하는 embeddings 요청의 배치

    - `items`기타 제품

      - `text`1개의 필수

        - `0`문자열 분 1

          첨부된 텍스트

        - `1`지원하다

          텍스트 값의 배치

          - `items`문자열 분 1

            첨부된 텍스트

      - `pooling`문자열 기본값은

        패딩 공정에 사용되는 풀링 방법. \`cls\` 풀링은 더 큰 입력에 더 정확한 embeddings를 생성합니다 - 그러나, cls 풀링으로 창조된 embeddings는 의미있는 풀링으로 생성된 embeddings와 호환이 되지 않습니다. 기본 풀링 방법은 \`mean\`이 끊어지는 변화가 아니라 새로운 \`cls\`XQ 풀링을 사용하여 매우 좋습니다.

### 출력 전압

- `0`기타 제품

  - `shape`지원하다

    - `items`이름 \*

  - `data`지원하다

    요청된 텍스트 값의 Embeddings

    - `items`지원하다

      플로팅 포인트 embedding 표현 모델에 의해 형성

      - `items`이름 \*

  - `pooling`이름 \*

    패딩 공정에 사용되는 풀링 방법.

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
                  },
                  "pooling": {
                      "type": "string",
                      "enum": [
                          "mean",
                          "cls"
                      ],
                      "default": "mean",
                      "description": "The pooling method used in the embedding process. `cls` pooling will generate more accurate embeddings on larger inputs - however, embeddings created with cls pooling are not compatible with embeddings generated with mean pooling. The default pooling method is `mean` in order for this to not be a breaking change, but we highly suggest using the new `cls` pooling for better accuracy."
                  }
              },
              "required": [
                  "text"
              ]
          },
          {
              "properties": {
                  "requests": {
                      "type": "array",
                      "description": "Batch of the embeddings requests to run using async-queue",
                      "items": {
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
                              },
                              "pooling": {
                                  "type": "string",
                                  "enum": [
                                      "mean",
                                      "cls"
                                  ],
                                  "default": "mean",
                                  "description": "The pooling method used in the embedding process. `cls` pooling will generate more accurate embeddings on larger inputs - however, embeddings created with cls pooling are not compatible with embeddings generated with mean pooling. The default pooling method is `mean` in order for this to not be a breaking change, but we highly suggest using the new `cls` pooling for better accuracy."
                              }
                          },
                          "required": [
                              "text"
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
      "oneOf": [
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
                  },
                  "pooling": {
                      "type": "string",
                      "enum": [
                          "mean",
                          "cls"
                      ],
                      "description": "The pooling method used in the embedding process."
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
