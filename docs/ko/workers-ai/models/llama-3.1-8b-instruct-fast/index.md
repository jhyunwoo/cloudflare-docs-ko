---
title: llama-3.1-8b-instruct-fast · Cloudflare Workers AI docs
description: >-
  [Fast version] Multilingual large language model (LLMs)의 Meta Llama 3.1 컬렉션은
  사전 훈련 및 교육 조정 유전자 모델의 컬렉션입니다. Llama 3.1 명령 조정 텍스트 만 모델은 다국어 사용 사례 및 사용 가능한 오픈
  소스 및 일반 산업 벤치 마크에 닫힌 채팅 모델의 많은 결과에 최적화되어 있습니다.
chatbotDeprioritize: false
source_url:
  html: >-
    https://developers.cloudflare.com/workers-ai/models/llama-3.1-8b-instruct-fast/
  md: >-
    https://developers.cloudflare.com/workers-ai/models/llama-3.1-8b-instruct-fast/index.md
translation_locale: ko-KR
translation_source_html: >-
  https://developers.cloudflare.com/workers-ai/models/llama-3.1-8b-instruct-fast/
translation_source_md: >-
  https://developers.cloudflare.com/workers-ai/models/llama-3.1-8b-instruct-fast/index.md
translation_source_kind: rendered-md
translation_snapshot: '2026-03-13'

---
![메타 로고](https://developers.cloudflare.com/_astro/meta.x5nlFKBG.svg)

# llama-3.1-8b-instruct-빠른

텍스트 생성 • 메타

@cf/meta/llama-3.1-8b-instruct-빠른

\[Fast version] Multilingual large language model (LLMs)의 Meta Llama 3.1 컬렉션은 사전 훈련 및 교육 조정 유전자 모델의 컬렉션입니다. Llama 3.1 명령 조정 텍스트 만 모델은 다국어 사용 사례 및 사용 가능한 오픈 소스 및 일반 산업 벤치 마크에 닫힌 채팅 모델의 많은 결과에 최적화되어 있습니다.

| 모델 정보                                                               |                                                                                       |
| ------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| Context 창[](https://developers.cloudflare.com/workers-ai/glossary/) | 128,000 토큰                                                                            |
| 이용 약관                                                               | [이름 \*](https://github.com/meta-llama/llama-models/blob/main/models/llama3_1/LICENSE) |

## 회사연혁

Workers AI LLM 놀이터와 함께 이 모델을보십시오. 설정이나 인증이 필요 없으며 즉시 미리 볼 수 있으며 브라우저에서 모델을 직접 테스트 할 수 있습니다.

[LLM 놀이터 출시](https://playground.ai.cloudflare.com/?model=@cf/meta/llama-3.1-8b-instruct-fast)

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


      const stream = await env.AI.run("@cf/meta/llama-3.1-8b-instruct-fast", {
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
      const response = await env.AI.run("@cf/meta/llama-3.1-8b-instruct-fast", { messages });


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
    f"https://api.cloudflare.com/client/v4/accounts/{ACCOUNT_ID}/ai/run/@cf/meta/llama-3.1-8b-instruct-fast",
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
  curl https://api.cloudflare.com/client/v4/accounts/$CLOUDFLARE_ACCOUNT_ID/ai/run/@cf/meta/llama-3.1-8b-instruct-fast \
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

  - `frequency_penalty`수 분 0 최대 2

    같은 라인 verbatim을 반복하는 모델의 likelihood를 결정합니다.

  - `image`1 중

    - `0`지원하다

      이미지 데이터를 나타내는 정수의 배열은 8 비트 unsigned 정수 값으로 해석됩니다.

      - `items`이름 \*

        0과 255 사이의 값

    - `1`이름 \*

      이미지 콘텐츠를 나타내는 바이너리 문자열.

  - `lora`이름 \*

    LoRA (Low-Rank Adaptation) 모델의 이름은 기본 모델을 미세 조정합니다.

  - `max_tokens`integer 기본 256

    토큰의 최대 수는 응답에서 생성됩니다.

  - `presence_penalty`수 분 0 최대 2

    새로운 주제를 소개하는 모델의 likelihood를 증가시킵니다.

  - `prompt`끈 요구된 분 1 최대 131072

    모델에 대한 입력 텍스트 프롬프트는 응답을 생성합니다.

  - `raw`한국어

    true이면 채팅 템플릿이 적용되지 않으며 특정 모델의 예상 형식을 준수해야합니다.

  - `repetition_penalty`수 분 0 최대 2

    반복된 토큰을 위한 Penalty; 더 높은 가치 discourage 반복.

  - `seed`정수 분 1 최대 9999999999

    세대의 재현성을위한 무작위 씨앗.

  - `stream`한국어

    true이면 응답은 SSE, Server Sent Events를 사용하여 다시 증가합니다.

  - `temperature`수 기본 0.6 분 0 최대 5

    출력의 임의성을 제어; 더 높은 값은 더 무작위 결과를 생성합니다.

  - `top_k`정수 분 1 최대 50

    최고의 'k'에서 선택할 수있는 AI를 제한합니다. 더 낮은 가치는 더 집중된 응답을 만듭니다; 더 높은 가치는 다양성과 잠재적인 놀람을 소개합니다.

  - `top_p`수 분 0 최대 2

    AI의 응답의 창의성을 조정하여 여러 단어를 고려하는 방법을 제어합니다. 더 낮은 값은 더 예측 가능한 출력을 만듭니다. 더 높은 값은 더 다양하고 창의적인 응답을 허용합니다.

- `1`기타 제품

  - `frequency_penalty`수 분 0 최대 2

    같은 라인 verbatim을 반복하는 모델의 likelihood를 결정합니다.

  - `functions`지원하다

    - `items`기타 제품

      - `code`문자열 필수

      - `name`문자열 필수

  - `image`1 중

    - `0`지원하다

      이미지 데이터를 나타내는 정수의 배열은 8 비트 unsigned 정수 값으로 해석됩니다.

      - `items`이름 \*

        0과 255 사이의 값

    - `1`이름 \*

      이미지 콘텐츠를 나타내는 바이너리 문자열.

  - `max_tokens`integer 기본 256

    토큰의 최대 수는 응답에서 생성됩니다.

  - `messages`지원되는

    대화 기록을 나타내는 메시지 객체의 배열.

    - `items`기타 제품

      - `content`끈 필요 최대 131072

        문자열로 메시지의 내용.

      - `role`문자열 필수

        메시지 보낸 사람의 역할 (예 : 'user', 'assistant', 'system', 'tool').

  - `presence_penalty`수 분 0 최대 2

    새로운 주제를 소개하는 모델의 likelihood를 증가시킵니다.

  - `repetition_penalty`수 분 0 최대 2

    반복된 토큰을 위한 Penalty; 더 높은 가치 discourage 반복.

  - `seed`정수 분 1 최대 9999999999

    세대의 재현성을위한 무작위 씨앗.

  - `stream`한국어

    사실, 응답은 다시 incrementally 스트림됩니다.

  - `temperature`수 기본 0.6 분 0 최대 5

    출력의 임의성을 제어; 더 높은 값은 더 무작위 결과를 생성합니다.

  - `tools`지원하다

    사용 가능한 도구 목록입니다.

    - `items`1 중

      - `0`기타 제품

        - `description`문자열 필수

          도구의 간단한 설명.

        - `name`문자열 필수

          도구의 이름. 더 나은 표현.

        - `parameters`자주 묻는 질문

          Schema는 도구에 의해 허용 된 매개 변수를 정의합니다.

          - `properties`자주 묻는 질문

            각 모수의 정의.

            - `additionalProperties`기타 제품

              - `description`문자열 필수

                예상 매개 변수의 설명.

              - `type`문자열 필수

                매개 변수의 데이터 유형.

          - `required`지원하다

            필수 매개변수 이름의 명부.

            - `items`이름 \*

          - `type`문자열 필수

            매개변수 객체의 유형 (보통 'object').

      - `1`기타 제품

        - `function`자주 묻는 질문

          기능 도구의 세부 사항.

          - `description`문자열 필수

            기능의 간단한 설명.

          - `name`문자열 필수

            기능의 이름.

          - `parameters`자주 묻는 질문

            Schema는 기능에 의해 받아들여지는 모수를 정의합니다.

            - `properties`자주 묻는 질문

              각 모수의 정의.

              - `additionalProperties`기타 제품

                - `description`문자열 필수

                  예상 매개 변수의 설명.

                - `type`문자열 필수

                  매개 변수의 데이터 유형.

            - `required`지원하다

              필수 매개변수 이름의 명부.

              - `items`이름 \*

            - `type`문자열 필수

              매개변수 객체의 유형 (보통 'object').

        - `type`문자열 필수

          도구의 유형을 지정합니다 (예 : 'function').

  - `top_k`정수 분 1 최대 50

    최고의 'k'에서 선택할 수있는 AI를 제한합니다. 더 낮은 가치는 더 집중된 응답을 만듭니다; 더 높은 가치는 다양성과 잠재적인 놀람을 소개합니다.

  - `top_p`수 분 0 최대 2

    AI의 응답의 창의성을 제어하여 여러 단어를 고려하는 방법을 조정합니다. 더 낮은 값은 더 예측 가능한 출력을 만듭니다. 더 높은 값은 더 다양하고 창의적인 응답을 허용합니다.

### 출력 전압

- `0`기타 제품

  - `response`이름 \*

    모델의 생성된 텍스트 응답

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
      "oneOf": [
          {
              "properties": {
                  "frequency_penalty": {
                      "description": "Decreases the likelihood of the model repeating the same lines verbatim.",
                      "maximum": 2,
                      "minimum": 0,
                      "type": "number"
                  },
                  "image": {
                      "oneOf": [
                          {
                              "description": "An array of integers that represent the image data constrained to 8-bit unsigned integer values",
                              "items": {
                                  "description": "A value between 0 and 255",
                                  "type": "number"
                              },
                              "type": "array"
                          },
                          {
                              "description": "Binary string representing the image contents.",
                              "format": "binary",
                              "type": "string"
                          }
                      ]
                  },
                  "lora": {
                      "description": "Name of the LoRA (Low-Rank Adaptation) model to fine-tune the base model.",
                      "type": "string"
                  },
                  "max_tokens": {
                      "default": 256,
                      "description": "The maximum number of tokens to generate in the response.",
                      "type": "integer"
                  },
                  "presence_penalty": {
                      "description": "Increases the likelihood of the model introducing new topics.",
                      "maximum": 2,
                      "minimum": 0,
                      "type": "number"
                  },
                  "prompt": {
                      "description": "The input text prompt for the model to generate a response.",
                      "maxLength": 131072,
                      "minLength": 1,
                      "type": "string"
                  },
                  "raw": {
                      "default": false,
                      "description": "If true, a chat template is not applied and you must adhere to the specific model's expected formatting.",
                      "type": "boolean"
                  },
                  "repetition_penalty": {
                      "description": "Penalty for repeated tokens; higher values discourage repetition.",
                      "maximum": 2,
                      "minimum": 0,
                      "type": "number"
                  },
                  "seed": {
                      "description": "Random seed for reproducibility of the generation.",
                      "maximum": 9999999999,
                      "minimum": 1,
                      "type": "integer"
                  },
                  "stream": {
                      "default": false,
                      "description": "If true, the response will be streamed back incrementally using SSE, Server Sent Events.",
                      "type": "boolean"
                  },
                  "temperature": {
                      "default": 0.6,
                      "description": "Controls the randomness of the output; higher values produce more random results.",
                      "maximum": 5,
                      "minimum": 0,
                      "type": "number"
                  },
                  "top_k": {
                      "description": "Limits the AI to choose from the top 'k' most probable words. Lower values make responses more focused; higher values introduce more variety and potential surprises.",
                      "maximum": 50,
                      "minimum": 1,
                      "type": "integer"
                  },
                  "top_p": {
                      "description": "Adjusts the creativity of the AI's responses by controlling how many possible words it considers. Lower values make outputs more predictable; higher values allow for more varied and creative responses.",
                      "maximum": 2,
                      "minimum": 0,
                      "type": "number"
                  }
              },
              "required": [
                  "prompt"
              ],
              "title": "Prompt"
          },
          {
              "properties": {
                  "frequency_penalty": {
                      "description": "Decreases the likelihood of the model repeating the same lines verbatim.",
                      "maximum": 2,
                      "minimum": 0,
                      "type": "number"
                  },
                  "functions": {
                      "items": {
                          "properties": {
                              "code": {
                                  "type": "string"
                              },
                              "name": {
                                  "type": "string"
                              }
                          },
                          "required": [
                              "name",
                              "code"
                          ],
                          "type": "object"
                      },
                      "type": "array"
                  },
                  "image": {
                      "oneOf": [
                          {
                              "description": "An array of integers that represent the image data constrained to 8-bit unsigned integer values",
                              "items": {
                                  "description": "A value between 0 and 255",
                                  "type": "number"
                              },
                              "type": "array"
                          },
                          {
                              "description": "Binary string representing the image contents.",
                              "format": "binary",
                              "type": "string"
                          }
                      ]
                  },
                  "max_tokens": {
                      "default": 256,
                      "description": "The maximum number of tokens to generate in the response.",
                      "type": "integer"
                  },
                  "messages": {
                      "description": "An array of message objects representing the conversation history.",
                      "items": {
                          "properties": {
                              "content": {
                                  "description": "The content of the message as a string.",
                                  "maxLength": 131072,
                                  "type": "string"
                              },
                              "role": {
                                  "description": "The role of the message sender (e.g., 'user', 'assistant', 'system', 'tool').",
                                  "type": "string"
                              }
                          },
                          "required": [
                              "role",
                              "content"
                          ],
                          "type": "object"
                      },
                      "type": "array"
                  },
                  "presence_penalty": {
                      "description": "Increases the likelihood of the model introducing new topics.",
                      "maximum": 2,
                      "minimum": 0,
                      "type": "number"
                  },
                  "repetition_penalty": {
                      "description": "Penalty for repeated tokens; higher values discourage repetition.",
                      "maximum": 2,
                      "minimum": 0,
                      "type": "number"
                  },
                  "seed": {
                      "description": "Random seed for reproducibility of the generation.",
                      "maximum": 9999999999,
                      "minimum": 1,
                      "type": "integer"
                  },
                  "stream": {
                      "default": false,
                      "description": "If true, the response will be streamed back incrementally.",
                      "type": "boolean"
                  },
                  "temperature": {
                      "default": 0.6,
                      "description": "Controls the randomness of the output; higher values produce more random results.",
                      "maximum": 5,
                      "minimum": 0,
                      "type": "number"
                  },
                  "tools": {
                      "description": "A list of tools available for the assistant to use.",
                      "items": {
                          "oneOf": [
                              {
                                  "properties": {
                                      "description": {
                                          "description": "A brief description of what the tool does.",
                                          "type": "string"
                                      },
                                      "name": {
                                          "description": "The name of the tool. More descriptive the better.",
                                          "type": "string"
                                      },
                                      "parameters": {
                                          "description": "Schema defining the parameters accepted by the tool.",
                                          "properties": {
                                              "properties": {
                                                  "additionalProperties": {
                                                      "properties": {
                                                          "description": {
                                                              "description": "A description of the expected parameter.",
                                                              "type": "string"
                                                          },
                                                          "type": {
                                                              "description": "The data type of the parameter.",
                                                              "type": "string"
                                                          }
                                                      },
                                                      "required": [
                                                          "type",
                                                          "description"
                                                      ],
                                                      "type": "object"
                                                  },
                                                  "description": "Definitions of each parameter.",
                                                  "type": "object"
                                              },
                                              "required": {
                                                  "description": "List of required parameter names.",
                                                  "items": {
                                                      "type": "string"
                                                  },
                                                  "type": "array"
                                              },
                                              "type": {
                                                  "description": "The type of the parameters object (usually 'object').",
                                                  "type": "string"
                                              }
                                          },
                                          "required": [
                                              "type",
                                              "properties"
                                          ],
                                          "type": "object"
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
                                      "function": {
                                          "description": "Details of the function tool.",
                                          "properties": {
                                              "description": {
                                                  "description": "A brief description of what the function does.",
                                                  "type": "string"
                                              },
                                              "name": {
                                                  "description": "The name of the function.",
                                                  "type": "string"
                                              },
                                              "parameters": {
                                                  "description": "Schema defining the parameters accepted by the function.",
                                                  "properties": {
                                                      "properties": {
                                                          "additionalProperties": {
                                                              "properties": {
                                                                  "description": {
                                                                      "description": "A description of the expected parameter.",
                                                                      "type": "string"
                                                                  },
                                                                  "type": {
                                                                      "description": "The data type of the parameter.",
                                                                      "type": "string"
                                                                  }
                                                              },
                                                              "required": [
                                                                  "type",
                                                                  "description"
                                                              ],
                                                              "type": "object"
                                                          },
                                                          "description": "Definitions of each parameter.",
                                                          "type": "object"
                                                      },
                                                      "required": {
                                                          "description": "List of required parameter names.",
                                                          "items": {
                                                              "type": "string"
                                                          },
                                                          "type": "array"
                                                      },
                                                      "type": {
                                                          "description": "The type of the parameters object (usually 'object').",
                                                          "type": "string"
                                                      }
                                                  },
                                                  "required": [
                                                      "type",
                                                      "properties"
                                                  ],
                                                  "type": "object"
                                              }
                                          },
                                          "required": [
                                              "name",
                                              "description",
                                              "parameters"
                                          ],
                                          "type": "object"
                                      },
                                      "type": {
                                          "description": "Specifies the type of tool (e.g., 'function').",
                                          "type": "string"
                                      }
                                  },
                                  "required": [
                                      "type",
                                      "function"
                                  ]
                              }
                          ],
                          "type": "object"
                      },
                      "type": "array"
                  },
                  "top_k": {
                      "description": "Limits the AI to choose from the top 'k' most probable words. Lower values make responses more focused; higher values introduce more variety and potential surprises.",
                      "maximum": 50,
                      "minimum": 1,
                      "type": "integer"
                  },
                  "top_p": {
                      "description": "Controls the creativity of the AI's responses by adjusting how many possible words it considers. Lower values make outputs more predictable; higher values allow for more varied and creative responses.",
                      "maximum": 2,
                      "minimum": 0,
                      "type": "number"
                  }
              },
              "required": [
                  "messages"
              ],
              "title": "Messages"
          }
      ],
      "type": "object"
  }
  ```

- 출력 전압

  ```json
  {
      "oneOf": [
          {
              "contentType": "application/json",
              "properties": {
                  "response": {
                      "description": "The generated text response from the model",
                      "type": "string"
                  },
                  "tool_calls": {
                      "description": "An array of tool calls requests made during the response generation",
                      "items": {
                          "properties": {
                              "arguments": {
                                  "description": "The arguments passed to be passed to the tool call request",
                                  "type": "object"
                              },
                              "name": {
                                  "description": "The name of the tool to be called",
                                  "type": "string"
                              }
                          },
                          "type": "object"
                      },
                      "type": "array"
                  }
              },
              "type": "object"
          },
          {
              "contentType": "text/event-stream",
              "format": "binary",
              "type": "string"
          }
      ]
  }
  ```
