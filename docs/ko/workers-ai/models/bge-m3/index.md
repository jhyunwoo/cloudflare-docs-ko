---
title: bge-m3 · Cloudflare Workers AI 문서
description: '다기능, 다기능, 멀티-Linguality, 멀티-Granularity embeddings 모델.'
chatbotDeprioritize: false
source_url:
  html: 'https://developers.cloudflare.com/workers-ai/models/bge-m3/'
  md: 'https://developers.cloudflare.com/workers-ai/models/bge-m3/index.md'
translation_locale: ko-KR
translation_source_html: 'https://developers.cloudflare.com/workers-ai/models/bge-m3/'
translation_source_md: 'https://developers.cloudflare.com/workers-ai/models/bge-m3/index.md'
translation_source_kind: rendered-md
translation_snapshot: '2026-03-13'

---
₢ 킹

# 사이트맵

텍스트 엠 베드딩 • baai

@cf/바이/bge-m3

다기능, 다기능, 멀티-Linguality, 멀티-Granularity embeddings 모델.

| 모델 정보                                                               |                  |
| ------------------------------------------------------------------- | ---------------- |
| Context 창[](https://developers.cloudflare.com/workers-ai/glossary/) | 60,000 토큰        |
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
        "@cf/baai/bge-m3",
        {
          text: stories,
        }
      );


      return Response.json(embeddings);
    },
  } satisfies ExportedHandler<Env>;
  ```

- 모델 번호: Python

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
    f"https://api.cloudflare.com/client/v4/accounts/{ACCOUNT_ID}/ai/run/@cf/baai/bge-m3",
    headers={"Authorization": f"Bearer {AUTH_TOKEN}"},
    json={"text": stories}
  )


  print(response.json())
  ```

- 컬럼

  ```sh
  curl https://api.cloudflare.com/client/v4/accounts/$CLOUDFLARE_ACCOUNT_ID/ai/run/@cf/baai/bge-m3  \
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

  - `query`문자열 분 1

    제공된 컨텍스트에 대해 수행하고자 하는 쿼리. 쿼리가 컨텍스트에 대한 embeddings와 함께 모델을 제공하지 않는 경우

  - `contexts`지원되는

    제공된 컨텍스트 목록. 이 배열의 인덱스가 중요합니다. 응답이 나타납니다.

    - `items`기타 제품

      - `text`문자열 분 1

        제공된 컨텍스트 내용 중 하나

  - `truncate_inputs`한국어

    너무 긴 맥락으로 제공 할 때 모델 오류가 발생하거나 상황에 맞는 truncate?

- `1`기타 제품

  - `text`1개의 필수

    - `0`문자열 분 1

      첨부된 텍스트

    - `1`지원하다

      텍스트 값의 배치

      - `items`문자열 분 1

        첨부된 텍스트

  - `truncate_inputs`한국어

    너무 긴 맥락으로 제공 할 때 모델 오류가 발생하거나 상황에 맞는 truncate?

- `2`기타 제품

  - `requests`지원되는

    async-queue를 사용하여 실행하는 embeddings 요청의 배치

    - `items`1 중

      - `0`기타 제품

        - `query`문자열 분 1

          제공된 컨텍스트에 대해 수행하고자 하는 쿼리. 쿼리가 컨텍스트에 대한 embeddings와 함께 모델을 제공하지 않는 경우

        - `contexts`지원되는

          제공된 컨텍스트 목록. 이 배열의 인덱스가 중요합니다. 응답이 나타납니다.

          - `items`기타 제품

            - `text`문자열 분 1

              제공된 컨텍스트 내용 중 하나

        - `truncate_inputs`한국어

          너무 긴 맥락으로 제공 할 때 모델 오류가 발생하거나 상황에 맞는 truncate?

      - `1`기타 제품

        - `text`1개의 필수

          - `0`문자열 분 1

            첨부된 텍스트

          - `1`지원하다

            텍스트 값의 배치

            - `items`문자열 분 1

              첨부된 텍스트

        - `truncate_inputs`한국어

          너무 긴 맥락으로 제공 할 때 모델 오류가 발생하거나 상황에 맞는 truncate?

### 출력 전압

- `0`기타 제품

  - `response`지원하다

    - `items`기타 제품

      - `id`뚱 베어

        요청의 상황에 대한 인덱스

      - `score`이름 \*

        인덱스 아래 상황에 대한 점수.

- `1`기타 제품

  - `response`지원하다

    - `items`지원하다

      - `items`이름 \*

  - `shape`지원하다

    - `items`이름 \*

  - `pooling`이름 \*

    패딩 공정에 사용되는 풀링 방법.

- `2`기타 제품

  - `shape`지원하다

    - `items`이름 \*

  - `data`지원하다

    요청된 텍스트 값의 Embeddings

    - `items`지원하다

      플로팅 포인트 embedding 표현 모델에 의해 형성

      - `items`이름 \*

  - `pooling`이름 \*

    패딩 공정에 사용되는 풀링 방법.

- `3`기타 제품

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
              "title": "Input Query and Contexts",
              "properties": {
                  "query": {
                      "type": "string",
                      "minLength": 1,
                      "description": "A query you wish to perform against the provided contexts. If no query is provided the model with respond with embeddings for contexts"
                  },
                  "contexts": {
                      "type": "array",
                      "items": {
                          "type": "object",
                          "properties": {
                              "text": {
                                  "type": "string",
                                  "minLength": 1,
                                  "description": "One of the provided context content"
                              }
                          }
                      },
                      "description": "List of provided contexts. Note that the index in this array is important, as the response will refer to it."
                  },
                  "truncate_inputs": {
                      "type": "boolean",
                      "default": false,
                      "description": "When provided with too long context should the model error out or truncate the context to fit?"
                  }
              },
              "required": [
                  "contexts"
              ]
          },
          {
              "title": "Input Embedding",
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
                  "truncate_inputs": {
                      "type": "boolean",
                      "default": false,
                      "description": "When provided with too long context should the model error out or truncate the context to fit?"
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
                          "type": "object",
                          "oneOf": [
                              {
                                  "title": "Input Query and Contexts",
                                  "properties": {
                                      "query": {
                                          "type": "string",
                                          "minLength": 1,
                                          "description": "A query you wish to perform against the provided contexts. If no query is provided the model with respond with embeddings for contexts"
                                      },
                                      "contexts": {
                                          "type": "array",
                                          "items": {
                                              "type": "object",
                                              "properties": {
                                                  "text": {
                                                      "type": "string",
                                                      "minLength": 1,
                                                      "description": "One of the provided context content"
                                                  }
                                              }
                                          },
                                          "description": "List of provided contexts. Note that the index in this array is important, as the response will refer to it."
                                      },
                                      "truncate_inputs": {
                                          "type": "boolean",
                                          "default": false,
                                          "description": "When provided with too long context should the model error out or truncate the context to fit?"
                                      }
                                  },
                                  "required": [
                                      "contexts"
                                  ]
                              },
                              {
                                  "title": "Input Embedding",
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
                                      "truncate_inputs": {
                                          "type": "boolean",
                                          "default": false,
                                          "description": "When provided with too long context should the model error out or truncate the context to fit?"
                                      }
                                  },
                                  "required": [
                                      "text"
                                  ]
                              }
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
              "title": "Output Query",
              "properties": {
                  "response": {
                      "type": "array",
                      "items": {
                          "type": "object",
                          "properties": {
                              "id": {
                                  "type": "integer",
                                  "description": "Index of the context in the request"
                              },
                              "score": {
                                  "type": "number",
                                  "description": "Score of the context under the index."
                              }
                          }
                      }
                  }
              }
          },
          {
              "title": "Output Embedding for Contexts",
              "properties": {
                  "response": {
                      "type": "array",
                      "items": {
                          "type": "array",
                          "items": {
                              "type": "number"
                          }
                      }
                  },
                  "shape": {
                      "type": "array",
                      "items": {
                          "type": "number"
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
              "title": "Output Embedding",
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
