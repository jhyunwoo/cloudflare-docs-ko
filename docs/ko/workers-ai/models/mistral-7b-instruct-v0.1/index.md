---
title: 미들레-7b-instruct-v0.1 · Cloudflare Workers AIXQ docs
description: 7 억 개의 매개 변수가있는 Mistral-7b 유전 텍스트 모델의 미세 조정 버전
chatbotDeprioritize: false
source_url:
  html: >-
    https://developers.cloudflare.com/workers-ai/models/mistral-7b-instruct-v0.1/
  md: >-
    https://developers.cloudflare.com/workers-ai/models/mistral-7b-instruct-v0.1/index.md
translation_locale: ko-KR
translation_source_html: 'https://developers.cloudflare.com/workers-ai/models/mistral-7b-instruct-v0.1/'
translation_source_md: >-
  https://developers.cloudflare.com/workers-ai/models/mistral-7b-instruct-v0.1/index.md
translation_source_kind: rendered-md
translation_snapshot: '2026-03-13'

---
![MistralAI 로고](https://developers.cloudflare.com/_astro/mistralai.Bn9UMUMu.svg)

# 정부-7b-instruct-v0.1

텍스트 생성 • MistralAI

@cf/mistral/mistral-7b-instruct-v0.1

7 억 개의 매개 변수가있는 Mistral-7b 유전 텍스트 모델의 미세 조정 버전

| 모델 정보                                                               |                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------- |
| Context 창[](https://developers.cloudflare.com/workers-ai/glossary/) | 2,824 토큰                                                |
| 더 많은 정보                                                             | [이름 \*](https://mistral.ai/news/announcing-mistral-7b/) |
| 로라                                                                  | 이름 \*                                                   |
| 단위 가격                                                               | M 입력 토큰 당 $0.11, M 출력 토큰 당 $0.19                        |

## 회사연혁

Workers AI LLM 놀이터와 함께이 모델을보십시오. 설정이나 인증이 필요 없으며 즉시 미리 볼 수 있으며 브라우저에서 모델을 직접 테스트 할 수 있습니다.

[LLM 놀이터 출시](https://playground.ai.cloudflare.com/?model=@cf/mistral/mistral-7b-instruct-v0.1)

## 제품 정보

- 작업자 (Streaming)

  ```ts
  export interface Env {
    AI: Ai;
  }


  export default {
    async fetch(request, env): Promise<Response> {


      const messages = [
        { role: "system", content: "You are a friendly assistant" },
        {
          role: "user",
          content: "What is the origin of the phrase Hello, World",
        },
      ];


      const stream = await env.AI.run("@cf/mistral/mistral-7b-instruct-v0.1", {
        messages,
        stream: true,
      });


      return new Response(stream, {
        headers: { "content-type": "text/event-stream" },
      });
    },
  } satisfies ExportedHandler<Env>;
  ```

- TypeScript

  ```ts
  export interface Env {
    AI: Ai;
  }


  export default {
    async fetch(request, env): Promise<Response> {


      const messages = [
        { role: "system", content: "You are a friendly assistant" },
        {
          role: "user",
          content: "What is the origin of the phrase Hello, World",
        },
      ];
      const response = await env.AI.run("@cf/mistral/mistral-7b-instruct-v0.1", { messages });


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


  prompt = "Tell me all about PEP-8"
  response = requests.post(
    f"https://api.cloudflare.com/client/v4/accounts/{ACCOUNT_ID}/ai/run/@cf/mistral/mistral-7b-instruct-v0.1",
      headers={"Authorization": f"Bearer {AUTH_TOKEN}"},
      json={
        "messages": [
          {"role": "system", "content": "You are a friendly assistant"},
          {"role": "user", "content": prompt}
        ]
      }
  )
  result = response.json()
  print(result)
  ```

- 컬럼

  ```sh
  curl https://api.cloudflare.com/client/v4/accounts/$CLOUDFLARE_ACCOUNT_ID/ai/run/@cf/mistral/mistral-7b-instruct-v0.1 \
    -X POST \
    -H "Authorization: Bearer $CLOUDFLARE_AUTH_TOKEN" \
    -d '{ "messages": [{ "role": "system", "content": "You are a friendly assistant" }, { "role": "user", "content": "Why is pizza so good" }]}'
  ```

OpenAI 호환 엔드포인트

Workers AI는 또한 OpenAI 호환성 API 엔드포인트를 지원합니다`/v1/chat/completions`·`/v1/embeddings`. 자세한 내용은, 참조[제품 설명](https://developers.cloudflare.com/workers-ai/configuration/open-ai-compatibility/).

## 매개 변수

\* 필수 필드를 나타냅니다.

### 이름 \*

- `0`기타 제품

  - `prompt`문자열 필수 최소 1

    모델에 대한 입력 텍스트 프롬프트는 응답을 생성합니다.

  - `lora`이름 \*

    LoRA (Low-Rank Adaptation) 모델의 이름은 기본 모델을 미세 조정합니다.

  - `response_format`기타 제품

    - `type`이름 \*

    - `json_schema`

  - `raw`한국어

    true이면 채팅 템플릿이 적용되지 않으며 특정 모델의 예상 형식을 준수해야합니다.

  - `stream`한국어

    true이면 응답은 SSE, Server Sent Events를 사용하여 다시 증가합니다.

  - `max_tokens`integer 기본 256

    토큰의 최대 수는 응답에서 생성됩니다.

  - `temperature`수 기본 0.6 분 0 최대 5

    출력의 임의성을 제어; 더 높은 값은 더 무작위 결과를 생성합니다.

  - `top_p`수 분 0.001 최대 1

    AI의 응답의 창의성을 조정하여 여러 단어를 고려하는 방법을 제어합니다. 더 낮은 값은 더 예측 가능한 출력을 만듭니다. 더 높은 값은 더 다양하고 창의적인 응답을 허용합니다.

  - `top_k`정수 분 1 최대 50

    최고의 'k'에서 선택할 수있는 AI를 제한합니다. 더 낮은 가치는 더 집중된 응답을 만듭니다; 더 높은 가치는 다양성과 잠재적인 놀람을 소개합니다.

  - `seed`정수 분 1 최대 9999999999

    세대의 재현성을위한 무작위 씨앗.

  - `repetition_penalty`수 분 0 최대 2

    반복된 토큰을 위한 Penalty; 더 높은 가치 discourage 반복.

  - `frequency_penalty`수 분 -2 최대 2

    같은 라인 verbatim을 반복하는 모델의 likelihood를 결정합니다.

  - `presence_penalty`수 분 -2 최대 2

    새로운 주제를 소개하는 모델의 likelihood를 증가시킵니다.

- `1`기타 제품

  - `messages`지원되는

    대화 기록을 나타내는 메시지 객체의 배열.

    - `items`기타 제품

      - `role`문자열 필수

        메시지 보낸 사람의 역할 (예 : 'user', 'assistant', 'system', 'tool').

      - `content`1개의 필수

        - `0`이름 \*

          문자열로 메시지의 내용.

        - `1`지원하다

          텍스트 내용 부품의 배열.

          - `items`기타 제품

            - `type`이름 \*

              내용 유형 (텍스트)

            - `text`이름 \*

              본문내용

  - `functions`지원하다

    - `items`기타 제품

      - `name`문자열 필수

      - `code`문자열 필수

  - `tools`지원하다

    사용 가능한 도구 목록입니다.

    - `items`1 중

      - `0`기타 제품

        - `name`문자열 필수

          도구의 이름. 더 나은 표현.

        - `description`문자열 필수

          도구의 간단한 설명.

        - `parameters`자주 묻는 질문

          Schema는 도구에 의해 허용 된 매개 변수를 정의합니다.

          - `type`문자열 필수

            매개변수 객체의 유형 (보통 'object').

          - `required`지원하다

            필수 매개변수 이름의 명부.

            - `items`이름 \*

          - `properties`자주 묻는 질문

            각 모수의 정의.

            - `additionalProperties`기타 제품

              - `type`문자열 필수

                매개 변수의 데이터 유형.

              - `description`문자열 필수

                예상 매개 변수의 설명.

      - `1`기타 제품

        - `type`문자열 필수

          도구의 유형을 지정합니다 (예 : 'function').

        - `function`자주 묻는 질문

          기능 도구의 세부 사항.

          - `name`문자열 필수

            기능의 이름.

          - `description`문자열 필수

            기능의 간단한 설명.

          - `parameters`자주 묻는 질문

            Schema는 기능에 의해 받아들여지는 모수를 정의합니다.

            - `type`문자열 필수

              매개변수 객체의 유형 (보통 'object').

            - `required`지원하다

              필수 매개변수 이름의 명부.

              - `items`이름 \*

            - `properties`자주 묻는 질문

              각 모수의 정의.

              - `additionalProperties`기타 제품

                - `type`문자열 필수

                  매개 변수의 데이터 유형.

                - `description`문자열 필수

                  예상 매개 변수의 설명.

  - `response_format`기타 제품

    - `type`이름 \*

    - `json_schema`

  - `raw`한국어

    true이면 채팅 템플릿이 적용되지 않으며 특정 모델의 예상 형식을 준수해야합니다.

  - `stream`한국어

    true이면 응답은 SSE, Server Sent Events를 사용하여 다시 증가합니다.

  - `max_tokens`integer 기본 256

    토큰의 최대 수는 응답에서 생성됩니다.

  - `temperature`수 기본 0.6 분 0 최대 5

    출력의 임의성을 제어; 더 높은 값은 더 무작위 결과를 생성합니다.

  - `top_p`수 분 0.001 최대 1

    AI의 응답의 창의성을 조정하여 여러 단어를 고려하는 방법을 제어합니다. 더 낮은 값은 더 예측 가능한 출력을 만듭니다. 더 높은 값은 더 다양하고 창의적인 응답을 허용합니다.

  - `top_k`정수 분 1 최대 50

    최고의 'k'에서 선택할 수있는 AI를 제한합니다. 더 낮은 가치는 더 집중된 응답을 만듭니다; 더 높은 가치는 다양성과 잠재적인 놀람을 소개합니다.

  - `seed`정수 분 1 최대 9999999999

    세대의 재현성을위한 무작위 씨앗.

  - `repetition_penalty`수 분 0 최대 2

    반복된 토큰을 위한 Penalty; 더 높은 가치 discourage 반복.

  - `frequency_penalty`수 분 -2 최대 2

    같은 라인 verbatim을 반복하는 모델의 likelihood를 결정합니다.

  - `presence_penalty`수 분 -2 최대 2

    새로운 주제를 소개하는 모델의 likelihood를 증가시킵니다.

### 출력 전압

- `0`기타 제품

  - `response`문자열 필수

    모델의 생성된 텍스트 응답

  - `usage`기타 제품

    inference 요청에 대한 사용 통계

    - `prompt_tokens`번호 0

      입력된 토큰 수

    - `completion_tokens`번호 0

      출력의 총 토큰 수

    - `total_tokens`번호 0

      입력 및 출력 토큰의 총 수

  - `tool_calls`지원하다

    응답 발생 중에 만든 도구 호출 요청의 배열

    - `items`기타 제품

      - `arguments`기타 제품

        도구 호출 요청으로 전달되는 인수

      - `name`이름 \*

        도구의 이름은 호출

- `1`이름 \*

## API 슈마

다음 스키마는 JSON Schema를 기반으로합니다.

- 이름 \*

  ```json
  {
      "type": "object",
      "oneOf": [
          {
              "title": "Prompt",
              "properties": {
                  "prompt": {
                      "type": "string",
                      "minLength": 1,
                      "description": "The input text prompt for the model to generate a response."
                  },
                  "lora": {
                      "type": "string",
                      "description": "Name of the LoRA (Low-Rank Adaptation) model to fine-tune the base model."
                  },
                  "response_format": {
                      "title": "JSON Mode",
                      "type": "object",
                      "properties": {
                          "type": {
                              "type": "string",
                              "enum": [
                                  "json_object",
                                  "json_schema"
                              ]
                          },
                          "json_schema": {}
                      }
                  },
                  "raw": {
                      "type": "boolean",
                      "default": false,
                      "description": "If true, a chat template is not applied and you must adhere to the specific model's expected formatting."
                  },
                  "stream": {
                      "type": "boolean",
                      "default": false,
                      "description": "If true, the response will be streamed back incrementally using SSE, Server Sent Events."
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
                  "top_p": {
                      "type": "number",
                      "minimum": 0.001,
                      "maximum": 1,
                      "description": "Adjusts the creativity of the AI's responses by controlling how many possible words it considers. Lower values make outputs more predictable; higher values allow for more varied and creative responses."
                  },
                  "top_k": {
                      "type": "integer",
                      "minimum": 1,
                      "maximum": 50,
                      "description": "Limits the AI to choose from the top 'k' most probable words. Lower values make responses more focused; higher values introduce more variety and potential surprises."
                  },
                  "seed": {
                      "type": "integer",
                      "minimum": 1,
                      "maximum": 9999999999,
                      "description": "Random seed for reproducibility of the generation."
                  },
                  "repetition_penalty": {
                      "type": "number",
                      "minimum": 0,
                      "maximum": 2,
                      "description": "Penalty for repeated tokens; higher values discourage repetition."
                  },
                  "frequency_penalty": {
                      "type": "number",
                      "minimum": -2,
                      "maximum": 2,
                      "description": "Decreases the likelihood of the model repeating the same lines verbatim."
                  },
                  "presence_penalty": {
                      "type": "number",
                      "minimum": -2,
                      "maximum": 2,
                      "description": "Increases the likelihood of the model introducing new topics."
                  }
              },
              "required": [
                  "prompt"
              ]
          },
          {
              "title": "Messages",
              "properties": {
                  "messages": {
                      "type": "array",
                      "description": "An array of message objects representing the conversation history.",
                      "items": {
                          "type": "object",
                          "properties": {
                              "role": {
                                  "type": "string",
                                  "description": "The role of the message sender (e.g., 'user', 'assistant', 'system', 'tool')."
                              },
                              "content": {
                                  "oneOf": [
                                      {
                                          "type": "string",
                                          "description": "The content of the message as a string."
                                      },
                                      {
                                          "type": "array",
                                          "description": "Array of text content parts.",
                                          "items": {
                                              "type": "object",
                                              "properties": {
                                                  "type": {
                                                      "type": "string",
                                                      "description": "Type of the content (text)"
                                                  },
                                                  "text": {
                                                      "type": "string",
                                                      "description": "Text content"
                                                  }
                                              }
                                          }
                                      }
                                  ]
                              }
                          },
                          "required": [
                              "role",
                              "content"
                          ]
                      }
                  },
                  "functions": {
                      "type": "array",
                      "items": {
                          "type": "object",
                          "properties": {
                              "name": {
                                  "type": "string"
                              },
                              "code": {
                                  "type": "string"
                              }
                          },
                          "required": [
                              "name",
                              "code"
                          ]
                      }
                  },
                  "tools": {
                      "type": "array",
                      "description": "A list of tools available for the assistant to use.",
                      "items": {
                          "type": "object",
                          "oneOf": [
                              {
                                  "properties": {
                                      "name": {
                                          "type": "string",
                                          "description": "The name of the tool. More descriptive the better."
                                      },
                                      "description": {
                                          "type": "string",
                                          "description": "A brief description of what the tool does."
                                      },
                                      "parameters": {
                                          "type": "object",
                                          "description": "Schema defining the parameters accepted by the tool.",
                                          "properties": {
                                              "type": {
                                                  "type": "string",
                                                  "description": "The type of the parameters object (usually 'object')."
                                              },
                                              "required": {
                                                  "type": "array",
                                                  "description": "List of required parameter names.",
                                                  "items": {
                                                      "type": "string"
                                                  }
                                              },
                                              "properties": {
                                                  "type": "object",
                                                  "description": "Definitions of each parameter.",
                                                  "additionalProperties": {
                                                      "type": "object",
                                                      "properties": {
                                                          "type": {
                                                              "type": "string",
                                                              "description": "The data type of the parameter."
                                                          },
                                                          "description": {
                                                              "type": "string",
                                                              "description": "A description of the expected parameter."
                                                          }
                                                      },
                                                      "required": [
                                                          "type",
                                                          "description"
                                                      ]
                                                  }
                                              }
                                          },
                                          "required": [
                                              "type",
                                              "properties"
                                          ]
                                      }
                                  },
                                  "required": [
                                      "name",
                                      "description",
                                      "parameters"
                                  ]
                              },
                              {
                                  "properties": {
                                      "type": {
                                          "type": "string",
                                          "description": "Specifies the type of tool (e.g., 'function')."
                                      },
                                      "function": {
                                          "type": "object",
                                          "description": "Details of the function tool.",
                                          "properties": {
                                              "name": {
                                                  "type": "string",
                                                  "description": "The name of the function."
                                              },
                                              "description": {
                                                  "type": "string",
                                                  "description": "A brief description of what the function does."
                                              },
                                              "parameters": {
                                                  "type": "object",
                                                  "description": "Schema defining the parameters accepted by the function.",
                                                  "properties": {
                                                      "type": {
                                                          "type": "string",
                                                          "description": "The type of the parameters object (usually 'object')."
                                                      },
                                                      "required": {
                                                          "type": "array",
                                                          "description": "List of required parameter names.",
                                                          "items": {
                                                              "type": "string"
                                                          }
                                                      },
                                                      "properties": {
                                                          "type": "object",
                                                          "description": "Definitions of each parameter.",
                                                          "additionalProperties": {
                                                              "type": "object",
                                                              "properties": {
                                                                  "type": {
                                                                      "type": "string",
                                                                      "description": "The data type of the parameter."
                                                                  },
                                                                  "description": {
                                                                      "type": "string",
                                                                      "description": "A description of the expected parameter."
                                                                  }
                                                              },
                                                              "required": [
                                                                  "type",
                                                                  "description"
                                                              ]
                                                          }
                                                      }
                                                  },
                                                  "required": [
                                                      "type",
                                                      "properties"
                                                  ]
                                              }
                                          },
                                          "required": [
                                              "name",
                                              "description",
                                              "parameters"
                                          ]
                                      }
                                  },
                                  "required": [
                                      "type",
                                      "function"
                                  ]
                              }
                          ]
                      }
                  },
                  "response_format": {
                      "title": "JSON Mode",
                      "type": "object",
                      "properties": {
                          "type": {
                              "type": "string",
                              "enum": [
                                  "json_object",
                                  "json_schema"
                              ]
                          },
                          "json_schema": {}
                      }
                  },
                  "raw": {
                      "type": "boolean",
                      "default": false,
                      "description": "If true, a chat template is not applied and you must adhere to the specific model's expected formatting."
                  },
                  "stream": {
                      "type": "boolean",
                      "default": false,
                      "description": "If true, the response will be streamed back incrementally using SSE, Server Sent Events."
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
                  "top_p": {
                      "type": "number",
                      "minimum": 0.001,
                      "maximum": 1,
                      "description": "Adjusts the creativity of the AI's responses by controlling how many possible words it considers. Lower values make outputs more predictable; higher values allow for more varied and creative responses."
                  },
                  "top_k": {
                      "type": "integer",
                      "minimum": 1,
                      "maximum": 50,
                      "description": "Limits the AI to choose from the top 'k' most probable words. Lower values make responses more focused; higher values introduce more variety and potential surprises."
                  },
                  "seed": {
                      "type": "integer",
                      "minimum": 1,
                      "maximum": 9999999999,
                      "description": "Random seed for reproducibility of the generation."
                  },
                  "repetition_penalty": {
                      "type": "number",
                      "minimum": 0,
                      "maximum": 2,
                      "description": "Penalty for repeated tokens; higher values discourage repetition."
                  },
                  "frequency_penalty": {
                      "type": "number",
                      "minimum": -2,
                      "maximum": 2,
                      "description": "Decreases the likelihood of the model repeating the same lines verbatim."
                  },
                  "presence_penalty": {
                      "type": "number",
                      "minimum": -2,
                      "maximum": 2,
                      "description": "Increases the likelihood of the model introducing new topics."
                  }
              },
              "required": [
                  "messages"
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
              "properties": {
                  "response": {
                      "type": "string",
                      "description": "The generated text response from the model"
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
                  },
                  "tool_calls": {
                      "type": "array",
                      "description": "An array of tool calls requests made during the response generation",
                      "items": {
                          "type": "object",
                          "properties": {
                              "arguments": {
                                  "type": "object",
                                  "description": "The arguments passed to be passed to the tool call request"
                              },
                              "name": {
                                  "type": "string",
                                  "description": "The name of the tool to be called"
                              }
                          }
                      }
                  }
              },
              "required": [
                  "response"
              ]
          },
          {
              "type": "string",
              "format": "binary"
          }
      ]
  }
  ```
