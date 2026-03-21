---
title: llama-3.2-11b-vision-instruct · Cloudflare Workers AI docs
description: >-
  Llama 3.2-Vision Instruction-tuned 모델은 시각적 인 인식, 이미지 reasoning, captioning 및
  이미지에 대한 일반적인 질문에 최적화되어 있습니다.
chatbotDeprioritize: false
source_url:
  html: >-
    https://developers.cloudflare.com/workers-ai/models/llama-3.2-11b-vision-instruct/
  md: >-
    https://developers.cloudflare.com/workers-ai/models/llama-3.2-11b-vision-instruct/index.md
translation_locale: ko-KR
translation_source_html: >-
  https://developers.cloudflare.com/workers-ai/models/llama-3.2-11b-vision-instruct/
translation_source_md: >-
  https://developers.cloudflare.com/workers-ai/models/llama-3.2-11b-vision-instruct/index.md
translation_source_kind: rendered-md
translation_snapshot: '2026-03-13'

---
![메타 로고](https://developers.cloudflare.com/_astro/meta.x5nlFKBG.svg)

# llama-3.2-11b-vision 구조

텍스트 생성 • 메타

@cf/meta/llama-3.2-11b-vision 구조

Llama 3.2-Vision Instruction-tuned 모델은 시각적 인 인식, 이미지 reasoning, captioning 및 이미지에 대한 일반적인 질문에 최적화되어 있습니다.

이름 \*

Llama 3.2 11b Vision Instruct를 사용하려면 동의해야 합니다.[Meta 라이센스](https://github.com/meta-llama/llama-models/blob/main/models/llama3_2/LICENSE)·[자주 묻는 질문](https://github.com/meta-llama/llama-models/blob/main/models/llama3_2/USE_POLICY.md). 이렇게하려면, 초기 요청을 보내십시오`@cf/meta/llama-3.2-11b-vision-instruct`이름 \*`"prompt" : "agree"`. 그 후에, 당신은 정상으로 모형을 사용할 수 있을 것입니다.

```sh
curl https://api.cloudflare.com/client/v4/accounts/$CLOUDFLARE_ACCOUNT_ID/ai/run/@cf/meta/llama-3.2-11b-vision-instruct \
   -X POST \
   -H "Authorization: Bearer $CLOUDFLARE_AUTH_TOKEN" \
   -d '{ "prompt": "agree"}'
```

| 모델 정보                                                               |                                                                                       |
| ------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| Context 창[](https://developers.cloudflare.com/workers-ai/glossary/) | 128,000 토큰                                                                            |
| 이용 약관                                                               | [이름 \*](https://github.com/meta-llama/llama-models/blob/main/models/llama3_2/LICENSE) |
| 로라                                                                  | 이름 \*                                                                                 |
| 단위 가격                                                               | M 입력 토큰 당 $0.049, M 출력 토큰 당 $0.68                                                     |

## 회사연혁

Workers AI LLM 놀이터와 함께 이 모델을보십시오. 설정이나 인증이 필요 없으며 즉시 미리 볼 수 있으며 브라우저에서 모델을 직접 테스트 할 수 있습니다.

[LLM 놀이터 출시](https://playground.ai.cloudflare.com/?model=@cf/meta/llama-3.2-11b-vision-instruct)

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


      const stream = await env.AI.run("@cf/meta/llama-3.2-11b-vision-instruct", {
        messages,
        stream: true,
      });


      return new Response(stream, {
        headers: { "content-type": "text/event-stream" },
      });
    },
  } satisfies ExportedHandler<Env>;
  ```

- 모델 번호: TypeScript

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
      const response = await env.AI.run("@cf/meta/llama-3.2-11b-vision-instruct", { messages });


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
    f"https://api.cloudflare.com/client/v4/accounts/{ACCOUNT_ID}/ai/run/@cf/meta/llama-3.2-11b-vision-instruct",
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
  curl https://api.cloudflare.com/client/v4/accounts/$CLOUDFLARE_ACCOUNT_ID/ai/run/@cf/meta/llama-3.2-11b-vision-instruct \
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

  - `prompt`끈 요구된 분 1 최대 131072

    모델에 대한 입력 텍스트 프롬프트는 응답을 생성합니다.

  - `image`1 중

    - `0`지원하다

      이미지 데이터를 나타내는 정수의 배열은 8 비트 unsigned 정수 값으로 해석됩니다. Deprecated, 이제 메시지의 일부로 이미지를 사용합니다.

      - `items`이름 \*

        0과 255 사이의 값

    - `1`이름 \*

      이미지 콘텐츠를 나타내는 바이너리 문자열. Deprecated, 이제 메시지의 일부로 이미지를 사용합니다.

  - `raw`한국어

    true이면 채팅 템플릿이 적용되지 않으며 특정 모델의 예상 형식을 준수해야합니다.

  - `stream`한국어

    true이면 응답은 SSE, Server Sent Events를 사용하여 다시 증가합니다.

  - `max_tokens`integer 기본 256

    토큰의 최대 수는 응답에서 생성됩니다.

  - `temperature`수 기본 0.6 분 0 최대 5

    출력의 임의성을 제어; 더 높은 값은 더 무작위 결과를 생성합니다.

  - `top_p`수 분 0 최대 2

    AI의 응답의 창의성을 조정하여 여러 단어를 고려하는 방법을 제어합니다. 더 낮은 값은 더 예측 가능한 출력을 만듭니다. 더 높은 값은 더 다양하고 창의적인 응답을 허용합니다.

  - `top_k`정수 분 1 최대 50

    최고의 'k'에서 선택할 수있는 AI를 제한합니다. 더 낮은 가치는 더 집중된 응답을 만듭니다; 더 높은 가치는 다양성과 잠재적인 놀람을 소개합니다.

  - `seed`정수 분 1 최대 9999999999

    세대의 재현성을위한 무작위 씨앗.

  - `repetition_penalty`수 분 0 최대 2

    반복된 토큰을 위한 Penalty; 더 높은 가치 discourage 반복.

  - `frequency_penalty`수 분 0 최대 2

    같은 라인 verbatim을 반복하는 모델의 likelihood를 결정합니다.

  - `presence_penalty`수 분 0 최대 2

    새로운 주제를 소개하는 모델의 likelihood를 증가시킵니다.

  - `lora`이름 \*

    LoRA (Low-Rank Adaptation) 모델의 이름은 기본 모델을 미세 조정합니다.

- `1`기타 제품

  - `messages`지원되는

    대화 기록을 나타내는 메시지 객체의 배열.

    - `items`기타 제품

      - `role`이름 \*

        메시지 보낸 사람의 역할 (예 : 'user', 'assistant', 'system', 'tool').

      - `tool_call_id`이름 \*

        도구 호출 ID. Mistral-3에 대한 도구 통화를 공급해야합니다. 000000001로 돌아갈 수 있는 것을 알고 있지 않다면

      - `content`1 중

        - `0`이름 \*

          문자열로 메시지의 내용.

        - `1`지원하다

          - `items`기타 제품

            - `type`이름 \*

              제공된 내용의 종류

            - `text`이름 \*

            - `image_url`기타 제품

              - `url`이름 \*

                데이터와 이미지 uri (예: 이미지/jpeg;base64,/9j/...). HTTP URL은 허용되지 않습니다

        - `2`기타 제품

          - `type`이름 \*

            제공된 내용의 종류

          - `text`이름 \*

          - `image_url`기타 제품

            - `url`이름 \*

              데이터와 이미지 uri (예: 이미지/jpeg;base64,/9j/...). HTTP URL은 허용되지 않습니다

  - `image`1 중

    - `0`지원하다

      이미지 데이터를 나타내는 정수의 배열은 8 비트 unsigned 정수 값으로 해석됩니다. Deprecated, 이제 메시지의 일부로 이미지를 사용합니다.

      - `items`이름 \*

        0과 255 사이의 값

    - `1`이름 \*

      이미지 콘텐츠를 나타내는 바이너리 문자열. Deprecated, 이제 메시지의 일부로 이미지를 사용합니다.

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

  - `stream`한국어

    사실, 응답은 다시 incrementally 스트림됩니다.

  - `max_tokens`integer 기본 256

    토큰의 최대 수는 응답에서 생성됩니다.

  - `temperature`수 기본 0.6 분 0 최대 5

    출력의 임의성을 제어; 더 높은 값은 더 무작위 결과를 생성합니다.

  - `top_p`수 분 0 최대 2

    AI의 응답의 창의성을 제어하여 여러 단어를 고려하는 방법을 조정합니다. 더 낮은 값은 더 예측 가능한 출력을 만듭니다. 더 높은 값은 더 다양하고 창의적인 응답을 허용합니다.

  - `top_k`정수 분 1 최대 50

    최고의 'k'에서 선택할 수있는 AI를 제한합니다. 더 낮은 가치는 더 집중된 응답을 만듭니다; 더 높은 가치는 다양성과 잠재적인 놀람을 소개합니다.

  - `seed`정수 분 1 최대 9999999999

    세대의 재현성을위한 무작위 씨앗.

  - `repetition_penalty`수 분 0 최대 2

    반복된 토큰을 위한 Penalty; 더 높은 가치 discourage 반복.

  - `frequency_penalty`수 분 0 최대 2

    같은 라인 verbatim을 반복하는 모델의 likelihood를 결정합니다.

  - `presence_penalty`수 분 0 최대 2

    새로운 주제를 소개하는 모델의 likelihood를 증가시킵니다.

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
      "type": "object",
      "oneOf": [
          {
              "title": "Prompt",
              "properties": {
                  "prompt": {
                      "type": "string",
                      "minLength": 1,
                      "maxLength": 131072,
                      "description": "The input text prompt for the model to generate a response."
                  },
                  "image": {
                      "oneOf": [
                          {
                              "type": "array",
                              "description": "An array of integers that represent the image data constrained to 8-bit unsigned integer values.  Deprecated, use image as a part of messages now.",
                              "items": {
                                  "type": "number",
                                  "description": "A value between 0 and 255"
                              }
                          },
                          {
                              "type": "string",
                              "format": "binary",
                              "description": "Binary string representing the image contents.  Deprecated, use image as a part of messages now."
                          }
                      ]
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
                      "minimum": 0,
                      "maximum": 2,
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
                      "minimum": 0,
                      "maximum": 2,
                      "description": "Decreases the likelihood of the model repeating the same lines verbatim."
                  },
                  "presence_penalty": {
                      "type": "number",
                      "minimum": 0,
                      "maximum": 2,
                      "description": "Increases the likelihood of the model introducing new topics."
                  },
                  "lora": {
                      "type": "string",
                      "description": "Name of the LoRA (Low-Rank Adaptation) model to fine-tune the base model."
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
                              "tool_call_id": {
                                  "type": "string",
                                  "description": "The tool call id. Must be supplied for tool calls for Mistral-3. If you don't know what to put here you can fall back to 000000001",
                                  "pattern": "[a-zA-Z0-9]{9}"
                              },
                              "content": {
                                  "oneOf": [
                                      {
                                          "type": "string",
                                          "description": "The content of the message as a string."
                                      },
                                      {
                                          "type": "array",
                                          "items": {
                                              "type": "object",
                                              "properties": {
                                                  "type": {
                                                      "type": "string",
                                                      "description": "Type of the content provided"
                                                  },
                                                  "text": {
                                                      "type": "string"
                                                  },
                                                  "image_url": {
                                                      "type": "object",
                                                      "properties": {
                                                          "url": {
                                                              "type": "string",
                                                              "pattern": "^data:*",
                                                              "description": "image uri with data (e.g. data:image/jpeg;base64,/9j/...). HTTP URL will not be accepted"
                                                          }
                                                      }
                                                  }
                                              }
                                          }
                                      },
                                      {
                                          "type": "object",
                                          "properties": {
                                              "type": {
                                                  "type": "string",
                                                  "description": "Type of the content provided"
                                              },
                                              "text": {
                                                  "type": "string"
                                              },
                                              "image_url": {
                                                  "type": "object",
                                                  "properties": {
                                                      "url": {
                                                          "type": "string",
                                                          "pattern": "^data:*",
                                                          "description": "image uri with data (e.g. data:image/jpeg;base64,/9j/...). HTTP URL will not be accepted"
                                                      }
                                                  }
                                              }
                                          }
                                      }
                                  ]
                              }
                          }
                      }
                  },
                  "image": {
                      "oneOf": [
                          {
                              "type": "array",
                              "description": "An array of integers that represent the image data constrained to 8-bit unsigned integer values. Deprecated, use image as a part of messages now.",
                              "items": {
                                  "type": "number",
                                  "description": "A value between 0 and 255"
                              }
                          },
                          {
                              "type": "string",
                              "format": "binary",
                              "description": "Binary string representing the image contents. Deprecated, use image as a part of messages now."
                          }
                      ]
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
                  "stream": {
                      "type": "boolean",
                      "default": false,
                      "description": "If true, the response will be streamed back incrementally."
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
                      "minimum": 0,
                      "maximum": 2,
                      "description": "Controls the creativity of the AI's responses by adjusting how many possible words it considers. Lower values make outputs more predictable; higher values allow for more varied and creative responses."
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
                      "minimum": 0,
                      "maximum": 2,
                      "description": "Decreases the likelihood of the model repeating the same lines verbatim."
                  },
                  "presence_penalty": {
                      "type": "number",
                      "minimum": 0,
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
              "contentType": "application/json",
              "properties": {
                  "response": {
                      "type": "string",
                      "description": "The generated text response from the model"
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
              }
          },
          {
              "type": "string",
              "contentType": "text/event-stream",
              "format": "binary"
          }
      ]
  }
  ```
