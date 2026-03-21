---
title: gpt-oss-120b · Cloudflare Workers AI 문서
description: >-
  OpenAI의 강력한 소싱, 에이전트 작업 및 다양한 개발자 사용 사례를 위해 설계된 개방 중량 모델 – gpt-oss-120b는 생산,
  범용, 높은 소싱 사용 케이스에 사용됩니다.
chatbotDeprioritize: false
source_url:
  html: 'https://developers.cloudflare.com/workers-ai/models/gpt-oss-120b/'
  md: 'https://developers.cloudflare.com/workers-ai/models/gpt-oss-120b/index.md'
translation_locale: ko-KR
translation_source_html: 'https://developers.cloudflare.com/workers-ai/models/gpt-oss-120b/'
translation_source_md: 'https://developers.cloudflare.com/workers-ai/models/gpt-oss-120b/index.md'
translation_source_kind: rendered-md
translation_snapshot: '2026-03-13'

---
![OpenAI 로고](https://developers.cloudflare.com/_astro/openai.ChTKThcR.svg)

# gpt-oss-120b의

텍스트 생성 • OpenAI

@cf/openai/gpt-oss-120b에

OpenAI의 강력한 소싱, 에이전트 작업 및 다양한 개발자 사용 사례를 위해 설계된 개방 중량 모델 – gpt-oss-120b는 생산, 범용, 높은 소싱 사용 케이스에 사용됩니다.

| 모델 정보                                                               |                                  |
| ------------------------------------------------------------------- | -------------------------------- |
| Context 창[](https://developers.cloudflare.com/workers-ai/glossary/) | 128,000 토큰                       |
| 단위 가격                                                               | M 입력 토큰 당 $0.35, M 출력 토큰 당 $0.75 |

## 제품 정보

- TypeScript

  ```ts
  export default {
    async fetch(request, env): Promise<Response> {
      const response = await env.AI.run('@cf/openai/gpt-oss-120b', {
        instructions: 'You are a concise assistant.',
        input: 'What is the origin of the phrase Hello, World?',
      });


      return Response.json(response);
    },
  } satisfies ExportedHandler<Env>;
  ```

- Python

  ```py
  import os
  import requests


  ACCOUNT_ID = os.environ.get("CLOUDFLARE_ACCOUNT_ID")
  AUTH_TOKEN = os.environ.get("CLOUDFLARE_AUTH_TOKEN")


  prompt = "Tell me all about PEP-8"
  response = requests.post(
    f"https://api.cloudflare.com/client/v4/accounts/{ACCOUNT_ID}/ai/v1/responses",
      headers={"Authorization": f"Bearer {AUTH_TOKEN}"},
      json={
        "model": "@cf/openai/gpt-oss-120b",
        "input": "Tell me all about PEP-8"
      }
  )
  result = response.json()
  print(result)
  ```

- 컬럼

  ```sh
  curl https://api.cloudflare.com/client/v4/accounts/$CLOUDFLARE_ACCOUNT_ID/ai/v1/responses   -H "Content-Type: application/json"   -H "Authorization: Bearer $CLOUDFLARE_AUTH_TOKEN"   -d '{
      "model": "@cf/openai/gpt-oss-120b",
      "input": "What are the benefits of open-source models?"
    }'
  ```

Multiple API 형식 지원

이 모형은 3개의 다른 API 체재를 지원합니다:

- **응답 API** (`/ai/v1/responses`) - 본래 OpenAI 응답 체재는 위에와 위에 보였습니다`input`이름 \*
- **Workers AI 실행** (`/ai/run`) - 동적인 체재 탐지는, 채팅 보상을 받아들입니다 (`messages`), 유산 보상 (`prompt`), 또는 응답 API (`input`)
- **채팅 완료** (`/v1/chat/completions`) - OpenAI 호환 엔드포인트`messages`배열. 더 알아보기[OpenAI 호환성](https://developers.cloudflare.com/workers-ai/configuration/open-ai-compatibility/)상세 정보

## 매개 변수

\* 필수 필드를 나타냅니다.

### 이름 \*

- `0`1 중

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

- `1`기타 제품

  - `input`\*필수

    - `0`이름 \*

      응답 API 입력 메시지. OpenAI Responses API docs에 대한 자세한 내용을 보려면

    - `1`지원하다

      응답 API 입력 메시지. OpenAI Responses API docs에 대한 자세한 내용을 보려면

  - `reasoning`기타 제품

    - `effort`이름 \*

      이유 모델에 대한 노력. 현재 지원된 값은 낮고, 중간, 높은 값입니다. 소감을 감소시키기 위해 더 빠른 응답과 응답에 사용되는 몇 가지 토큰을 줄일 수 있습니다.

    - `summary`이름 \*

      모델에 의해 수행되는 이유 요약. 이 모형의 이유 과정을 debugging 그리고 이해를 위해 유용할 수 있습니다. 자동, 간결, 또는 상세한 것의 한.

- `2`기타 제품

  - `requests`지원되는

    - `items`기타 제품

      - `input`\*필수

        - `0`이름 \*

          응답 API 입력 메시지. OpenAI Responses API docs에 대한 자세한 내용을 보려면

        - `1`지원하다

          응답 API 입력 메시지. OpenAI Responses API docs에 대한 자세한 내용을 보려면

      - `reasoning`기타 제품

        - `effort`이름 \*

          이유 모델에 대한 노력. 현재 지원된 값은 낮고, 중간, 높은 값입니다. 소감을 감소시키기 위해 더 빠른 응답과 응답에 사용되는 몇 가지 토큰을 줄일 수 있습니다.

        - `summary`이름 \*

          모델에 의해 수행되는 이유 요약. 이 모형의 이유 과정을 debugging 그리고 이해를 위해 유용할 수 있습니다. 자동, 간결, 또는 상세한 것의 한.

### 출력 전압

- `0`기타 제품

- `1`이름 \*

## API 슈마

다음 스키마는 JSON Schema를 기반으로합니다.

- 이름 \*

  ```json
  {
      "oneOf": [
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
          },
          {
              "type": "object",
              "title": "Responses",
              "properties": {
                  "input": {
                      "anyOf": [
                          {
                              "type": "string"
                          },
                          {
                              "items": {},
                              "type": "array"
                          }
                      ],
                      "description": "Responses API Input messages. Refer to OpenAI Responses API docs to learn more about supported content types"
                  },
                  "reasoning": {
                      "type": "object",
                      "properties": {
                          "effort": {
                              "type": "string",
                              "description": "Constrains effort on reasoning for reasoning models. Currently supported values are low, medium, and high. Reducing reasoning effort can result in faster responses and fewer tokens used on reasoning in a response.",
                              "enum": [
                                  "low",
                                  "medium",
                                  "high"
                              ]
                          },
                          "summary": {
                              "type": "string",
                              "description": "A summary of the reasoning performed by the model. This can be useful for debugging and understanding the model's reasoning process. One of auto, concise, or detailed.",
                              "enum": [
                                  "auto",
                                  "concise",
                                  "detailed"
                              ]
                          }
                      }
                  }
              },
              "required": [
                  "input"
              ]
          },
          {
              "type": "object",
              "title": "Responses_Async",
              "properties": {
                  "requests": {
                      "type": "array",
                      "items": {
                          "type": "object",
                          "properties": {
                              "input": {
                                  "anyOf": [
                                      {
                                          "type": "string"
                                      },
                                      {
                                          "items": {},
                                          "type": "array"
                                      }
                                  ],
                                  "description": "Responses API Input messages. Refer to OpenAI Responses API docs to learn more about supported content types"
                              },
                              "reasoning": {
                                  "type": "object",
                                  "properties": {
                                      "effort": {
                                          "type": "string",
                                          "description": "Constrains effort on reasoning for reasoning models. Currently supported values are low, medium, and high. Reducing reasoning effort can result in faster responses and fewer tokens used on reasoning in a response.",
                                          "enum": [
                                              "low",
                                              "medium",
                                              "high"
                                          ]
                                      },
                                      "summary": {
                                          "type": "string",
                                          "description": "A summary of the reasoning performed by the model. This can be useful for debugging and understanding the model's reasoning process. One of auto, concise, or detailed.",
                                          "enum": [
                                              "auto",
                                              "concise",
                                              "detailed"
                                          ]
                                      }
                                  }
                              }
                          },
                          "required": [
                              "input"
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
              "contentType": "application/json"
          },
          {
              "type": "string",
              "contentType": "text/event-stream",
              "format": "binary"
          }
      ]
  }
  ```
