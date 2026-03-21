---
title: plamo-embedding-1b · Cloudflare Workers AI 문서
description: |-
  PLaMo-Embedding-1B는 Preferred Networks, Inc.가 개발한 일본어 텍스트 embedding 모델입니다.

  숫자 벡터로 일본어 텍스트 입력을 변환 할 수 있으며 정보 검색, 텍스트 분류 및 클러스터링 등 다양한 응용 분야에 사용할 수 있습니다.
chatbotDeprioritize: false
source_url:
  html: 'https://developers.cloudflare.com/workers-ai/models/plamo-embedding-1b/'
  md: >-
    https://developers.cloudflare.com/workers-ai/models/plamo-embedding-1b/index.md
translation_locale: ko-KR
translation_source_html: 'https://developers.cloudflare.com/workers-ai/models/plamo-embedding-1b/'
translation_source_md: >-
  https://developers.cloudflare.com/workers-ai/models/plamo-embedding-1b/index.md
translation_source_kind: rendered-md
translation_snapshot: '2026-03-13'

---
·

# 플라모 embedding-1b

텍스트 엠베딩 • pfnet

@cf/pfnet/plamo 조립 1b

PLaMo-Embedding-1B는 Preferred Networks, Inc.가 개발한 일본어 텍스트 embedding 모델입니다. 숫자 벡터로 일본어 텍스트 입력을 변환 할 수 있으며 정보 검색, 텍스트 분류 및 클러스터링 등 다양한 응용 분야에 사용할 수 있습니다.

| 모델 정보 |                  |
| ----- | ---------------- |
| 단위 가격 | M 입력 토큰 당 $0.019 |

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
        "@cf/pfnet/plamo-embedding-1b",
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
    f"https://api.cloudflare.com/client/v4/accounts/{ACCOUNT_ID}/ai/run/@cf/pfnet/plamo-embedding-1b",
    headers={"Authorization": f"Bearer {AUTH_TOKEN}"},
    json={"text": stories}
  )


  print(response.json())
  ```

- 컬럼

  ```sh
  curl https://api.cloudflare.com/client/v4/accounts/$CLOUDFLARE_ACCOUNT_ID/ai/run/@cf/pfnet/plamo-embedding-1b  \
    -X POST  \
    -H "Authorization: Bearer $CLOUDFLARE_API_TOKEN"  \
    -d '{ "text": ["This is a story about an orange cloud", "This is a story about a llama", "This is a story about a hugging emoji"] }'
  ```

OpenAI 호환 엔드포인트

Workers AI는 또한 OpenAI 호환 API 엔드포인트를 지원합니다`/v1/chat/completions`·`/v1/embeddings`. 자세한 내용은, 참조[제품 설명](https://developers.cloudflare.com/workers-ai/configuration/open-ai-compatibility/).

## 매개 변수

\* 필수 필드를 나타냅니다.

### 이름 \*

- `text`1개의 필수

  - `0`이름 \*

    입력 텍스트를 embed. 단일 문자열 또는 문자열 목록이 될 수 있습니다.

  - `1`지원하다

    입력 텍스트를 embed. 단일 문자열 또는 문자열 목록이 될 수 있습니다.

    - `items`이름 \*

### 출력 전압

- `data`지원되는

  각 벡터가 부유물의 목록입니다.

  - `items`지원하다

    - `items`이름 \*

- `shape`지원되는

  \[number of embeddings, embedding dimension]로 embedding 데이터의 모양.

  - `items`뚱 베어

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
                      "type": "string"
                  },
                  {
                      "type": "array",
                      "items": {
                          "type": "string"
                      }
                  }
              ],
              "description": "Input text to embed. Can be a single string or a list of strings."
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
      "properties": {
          "data": {
              "type": "array",
              "items": {
                  "type": "array",
                  "items": {
                      "type": "number"
                  }
              },
              "description": "Embedding vectors, where each vector is a list of floats."
          },
          "shape": {
              "type": "array",
              "items": {
                  "type": "integer"
              },
              "minItems": 2,
              "maxItems": 2,
              "description": "Shape of the embedding data as [number_of_embeddings, embedding_dimension]."
          }
      },
      "required": [
          "data",
          "shape"
      ]
  }
  ```
