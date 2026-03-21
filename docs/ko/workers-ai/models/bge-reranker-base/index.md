---
title: bge-reranker-base · QXQX0145XQQ Workers AI 문서
description: >+
  embedding 모형에서 다른, reranker는 embedding 대신 입력과 직접 산출 유사성으로 질문과 문서를 이용합니다. 쿼리를
  입력하고 reranker로 구울 수 있습니다. 그리고 점수는 sigmoid 함수에 의해 [0,1]의 float 값으로 매핑될 수 있습니다.

chatbotDeprioritize: false
source_url:
  html: 'https://developers.cloudflare.com/workers-ai/models/bge-reranker-base/'
  md: >-
    https://developers.cloudflare.com/workers-ai/models/bge-reranker-base/index.md
translation_locale: ko-KR
translation_source_html: 'https://developers.cloudflare.com/workers-ai/models/bge-reranker-base/'
translation_source_md: 'https://developers.cloudflare.com/workers-ai/models/bge-reranker-base/index.md'
translation_source_kind: rendered-md
translation_snapshot: '2026-03-13'

---
₢ 킹

# bge-reranker 기초

텍스트 분류 • baai

@cf/baai/bge-reranker 기초

embedding 모형에서 다른, reranker는 embedding 대신 입력과 직접 산출 유사성으로 질문과 문서를 이용합니다. 쿼리를 입력하고 reranker로 구울 수 있습니다. 그리고 점수는 sigmoid 함수에 의해 \[0,1]의 float 값으로 매핑될 수 있습니다.

| 모델 정보 |                    |
| ----- | ------------------ |
| 단위 가격 | M 입력 토큰 당 $ 0.0031 |

## 제품 정보

- TypeScript

  ```ts
  export interface Env {
    AI: Ai;
  }


  export default {
    async fetch(request, env): Promise<Response> {
      const query = 'Which one is cooler?'
      const contexts = [
        {
          text: 'a cyberpunk lizzard'
        },
        {
          text: 'a cyberpunk cat'
        }
      ];


      const response = await env.AI.run('@cf/baai/bge-reranker-base', { query, contexts });


      return Response.json(response);
    },
  } satisfies ExportedHandler<Env>;
  ```

- Python

  ```py
  import os
  import requests


  ACCOUNT_ID = "your-account-id"
  AUTH_TOKEN = os.environ.get("CLOUDFLARE_AUTH_TOKEN")


  response = requests.post(
    f"https://api.cloudflare.com/client/v4/accounts/{ACCOUNT_ID}/ai/run/@cf/baai/bge-reranker-base",
      headers={"Authorization": f"Bearer {AUTH_TOKEN}"},
      json={
      "query": "Which one is better?",
        "contexts": [
          {"text": "a cyberpunk lizzard"},
          {"text": "a cyberpunk car"},
        ]
      }
  )
  result = response.json()
  print(result)
  ```

- 컬럼

  ```sh
  curl https://api.cloudflare.com/client/v4/accounts/$CLOUDFLARE_ACCOUNT_ID/ai/run/@cf/baai/bge-reranker-base \
    -X POST \
    -H "Authorization: Bearer $CLOUDFLARE_AUTH_TOKEN" \
    -d '{ "query": "Which one is better?", "contexts": [{ "text": "a cyberpunk lizzard" }, {"text": "a cyberpunk cat"}]}'
  ```

## 매개 변수

\* 필수 필드를 나타냅니다.

### 이름 \*

- `query`문자열 필수 최소 1

  제공된 컨텍스트에 대해 수행하고자 하는 쿼리.

- `top_k`정수 분 1

  가장 좋은 점수로 시작하는 반환된 결과 수.

- `contexts`지원되는

  제공된 컨텍스트 목록. 이 배열의 인덱스가 중요합니다. 응답이 나타납니다.

  - `items`기타 제품

    - `text`문자열 분 1

      제공된 컨텍스트 내용 중 하나

### 출력 전압

- `response`지원하다

  - `items`기타 제품

    - `id`뚱 베어

      요청의 상황에 대한 인덱스

    - `score`이름 \*

      인덱스 아래 상황에 대한 점수.

## API 슈마

다음 스키마는 JSON Schema를 기반으로합니다.

- 이름 \*

  ```json
  {
      "type": "object",
      "properties": {
          "query": {
              "type": "string",
              "minLength": 1,
              "description": "A query you wish to perform against the provided contexts."
          },
          "top_k": {
              "type": "integer",
              "minimum": 1,
              "description": "Number of returned results starting with the best score."
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
          }
      },
      "required": [
          "query",
          "contexts"
      ]
  }
  ```

- 출력 전압

  ```json
  {
      "type": "object",
      "contentType": "application/json",
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
  }
  ```
