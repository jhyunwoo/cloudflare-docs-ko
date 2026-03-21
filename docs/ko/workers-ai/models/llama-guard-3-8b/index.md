---
title: llama-guard-3-8b · Cloudflare Workers AI 문서
description: >-
  Llama Guard 3는 Llama-3.1-8B 사전 훈련된 모형, 내용 안전 분류를 위해 잘 tuned입니다. 이전 버전과 마찬가지로
  LLM 입력 (prompt 분류) 및 LLM 응답 (response 분류)에서 콘텐츠를 분류 할 수 있습니다. 그것은 LLM로 작동 –
  그것은 주어진 신속한 또는 응답이 안전하고 안전하다는 것을 나타내는 그것의 산출에 있는 텍스트를 생성하고, 안전하지 않은 경우에, 그것은
  또한 내용을 목록으로 만듭니다.
chatbotDeprioritize: false
source_url:
  html: 'https://developers.cloudflare.com/workers-ai/models/llama-guard-3-8b/'
  md: >-
    https://developers.cloudflare.com/workers-ai/models/llama-guard-3-8b/index.md
translation_locale: ko-KR
translation_source_html: 'https://developers.cloudflare.com/workers-ai/models/llama-guard-3-8b/'
translation_source_md: 'https://developers.cloudflare.com/workers-ai/models/llama-guard-3-8b/index.md'
translation_source_kind: rendered-md
translation_snapshot: '2026-03-13'

---
![메타 로고](https://developers.cloudflare.com/_astro/meta.x5nlFKBG.svg)

# llama 가드 3-8b

텍스트 생성 • 메타

@cf/meta/llama 가드-3-8b

Llama Guard 3는 Llama-3.1-8B 사전 훈련된 모형, 내용 안전 분류를 위해 잘 tuned입니다. 이전 버전과 마찬가지로 LLM 입력 (prompt 분류) 및 LLM 응답 (response 분류)에서 콘텐츠를 분류 할 수 있습니다. 그것은 LLM로 작동 – 그것은 주어진 신속한 또는 응답이 안전하고 안전하다는 것을 나타내는 그것의 산출에 있는 텍스트를 생성하고, 안전하지 않은 경우에, 그것은 또한 내용을 목록으로 만듭니다.

| 모델 정보                                                               |                                  |
| ------------------------------------------------------------------- | -------------------------------- |
| Context 창[](https://developers.cloudflare.com/workers-ai/glossary/) | 131,072 토큰                       |
| 로라                                                                  | 이름 \*                            |
| 단위 가격                                                               | M 입력 토큰 당 $0.48, M 출력 토큰 당 $0.03 |

## 회사연혁

Workers AI LLM 놀이터와 함께이 모델을보십시오. 설정이나 인증이 필요 없으며 즉시 미리 볼 수 있으며 브라우저에서 모델을 직접 테스트 할 수 있습니다.

[LLM 놀이터 출시](https://playground.ai.cloudflare.com/?model=@cf/meta/llama-guard-3-8b)

## 제품 정보

- TypeScript

  ```ts
  export interface Env {
    AI: Ai;
  }


  export default {
    async fetch(request, env): Promise<Response> {
      const messages = [
        {
          role: 'user',
          content: 'I wanna bully someone online',
        },
        {
          role: 'assistant',
          content: 'That sounds interesting, how can I help?',
        },
      ];
      const response = await env.AI.run("@cf/meta/llama-guard-3-8b", { messages });


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
    f"https://api.cloudflare.com/client/v4/accounts/{ACCOUNT_ID}/ai/run/@cf/meta/llama-guard-3-8b",
      headers={"Authorization": f"Bearer {AUTH_TOKEN}"},
      json={
        "messages": [
          {"role": "user", "content": "I want to bully somebody online"},
          {"role": "assistant", "content": "Interesting. Let me know how I can be of assistance?"},
        ]
      }
  )
  result = response.json()
  print(result)
  ```

- 컬럼

  ```sh
  curl https://api.cloudflare.com/client/v4/accounts/$CLOUDFLARE_ACCOUNT_ID/ai/run/@cf/meta/llama-guard-3-8b \
    -X POST \
    -H "Authorization: Bearer $CLOUDFLARE_AUTH_TOKEN" \
    -d '{ "messages": [{ "role": "user", "content": "I want to bully someone online" }, {"role": "assistant", "content": "Interesting. How can I assist you?"}]}'
  ```

## 매개 변수

\* 필수 필드를 나타냅니다.

### 이름 \*

- `messages`지원되는

  대화 기록을 나타내는 메시지 객체의 배열.

  - `items`기타 제품

    - `role`\*필수

      메시지 보낸 사람의 역할은 'user'와 'assistant' 사이에 교체해야합니다.

    - `content`문자열 필수

      문자열로 메시지의 내용.

- `max_tokens`integer 기본 256

  토큰의 최대 수는 응답에서 생성됩니다.

- `temperature`수 기본 0.6 분 0 최대 5

  출력의 임의성을 제어; 더 높은 값은 더 무작위 결과를 생성합니다.

- `response_format`기타 제품

  생성된 응답의 출력 형식을 결정합니다.

  - `type`이름 \*

    json object로 JSON으로 프로세스 및 출력 생성된 텍스트를 설정합니다.

### 출력 전압

- `response`1 중

  - `0`이름 \*

    모델의 생성된 텍스트 응답.

  - `1`기타 제품

    json 응답은 모델에서 생성 된 텍스트 응답에서 파.

    - `safe`한국어

      대화는 안전하지 않습니다.

    - `categories`지원하다

      대화를 예측하는 위험 범주 목록, 대화가 안전하지 않은 경우.

      - `items`이름 \*

        S1에서 S14까지 위험 범주 분류.

- `usage`기타 제품

  inference 요청에 대한 사용 통계

  - `prompt_tokens`번호 0

    입력된 토큰 수

  - `completion_tokens`번호 0

    출력의 총 토큰 수

  - `total_tokens`번호 0

    입력 및 출력 토큰의 총 수

## API 슈마

다음 스키마는 JSON Schema를 기반으로합니다.

- 이름 \*

  ```json
  {
      "type": "object",
      "properties": {
          "messages": {
              "type": "array",
              "description": "An array of message objects representing the conversation history.",
              "items": {
                  "type": "object",
                  "properties": {
                      "role": {
                          "enum": [
                              "user",
                              "assistant"
                          ],
                          "description": "The role of the message sender must alternate between 'user' and 'assistant'."
                      },
                      "content": {
                          "type": "string",
                          "description": "The content of the message as a string."
                      }
                  },
                  "required": [
                      "role",
                      "content"
                  ]
              }
          },
          "max_tokens": {
              "type": "integer",
              "default": 256,
              "description": "The maximum number of tokens to generate in the response."
          },
          "temperature": {
              "type": "number",
              "default": 0.6,
              "minimum": 0,
              "maximum": 5,
              "description": "Controls the randomness of the output; higher values produce more random results."
          },
          "response_format": {
              "type": "object",
              "description": "Dictate the output format of the generated response.",
              "properties": {
                  "type": {
                      "type": "string",
                      "description": "Set to json_object to process and output generated text as JSON."
                  }
              }
          }
      },
      "required": [
          "messages"
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
              "oneOf": [
                  {
                      "type": "string",
                      "description": "The generated text response from the model."
                  },
                  {
                      "type": "object",
                      "description": "The json response parsed from the generated text response from the model.",
                      "properties": {
                          "safe": {
                              "type": "boolean",
                              "description": "Whether the conversation is safe or not."
                          },
                          "categories": {
                              "type": "array",
                              "description": "A list of what hazard categories predicted for the conversation, if the conversation is deemed unsafe.",
                              "items": {
                                  "type": "string",
                                  "description": "Hazard category classname, from S1 to S14."
                              }
                          }
                      }
                  }
              ]
          },
          "usage": {
              "type": "object",
              "description": "Usage statistics for the inference request",
              "properties": {
                  "prompt_tokens": {
                      "type": "number",
                      "description": "Total number of tokens in input",
                      "default": 0
                  },
                  "completion_tokens": {
                      "type": "number",
                      "description": "Total number of tokens in output",
                      "default": 0
                  },
                  "total_tokens": {
                      "type": "number",
                      "description": "Total number of input and output tokens",
                      "default": 0
                  }
              }
          }
      }
  }
  ```
