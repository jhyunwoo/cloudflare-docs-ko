---
title: uform-gen2-qwen-500m · Cloudflare Workers AI docs
description: >-
  UForm-Gen은 이미지 캡션 및 비주얼 질문 답변을 위해 주로 설계된 작은 유전 비전 언어 모델입니다. 이 모델은 내부 이미지 캡션
  데이터셋과 공공 지침 데이터셋에 대한 미세 조정 : SVIT, LVIS, VQAs 데이터셋.
chatbotDeprioritize: false
source_url:
  html: 'https://developers.cloudflare.com/workers-ai/models/uform-gen2-qwen-500m/'
  md: >-
    https://developers.cloudflare.com/workers-ai/models/uform-gen2-qwen-500m/index.md
translation_locale: ko-KR
translation_source_html: 'https://developers.cloudflare.com/workers-ai/models/uform-gen2-qwen-500m/'
translation_source_md: >-
  https://developers.cloudflare.com/workers-ai/models/uform-gen2-qwen-500m/index.md
translation_source_kind: rendered-md
translation_snapshot: '2026-03-13'

---
·

# uform-gen2-qwen-500m의 베타 베타

이미지 텍스트 • unum

@cf/unum/uform-gen2-qwen-500m의

UForm-Gen은 이미지 캡션 및 비주얼 질문 답변을 위해 주로 설계된 작은 유전 비전 언어 모델입니다. 이 모델은 내부 이미지 캡션 데이터셋과 공공 지침 데이터셋에 대한 미세 조정 : SVIT, LVIS, VQAs 데이터셋.

| 모델 정보   |                                  |
| ------- | -------------------------------- |
| 더 많은 정보 | [이름 \*](https://www.unum.cloud/) |
| 베타 베타   | 이름 \*                            |

## 제품 정보

```ts
export interface Env {
  AI: Ai;
}




export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const res = await fetch("https://cataas.com/cat");
    const blob = await res.arrayBuffer();
    const input = {
      image: [...new Uint8Array(blob)],
      prompt: "Generate a caption for this image",
      max_tokens: 512,
    };
    const response = await env.AI.run(
      "@cf/unum/uform-gen2-qwen-500m",
      input
      );
    return new Response(JSON.stringify(response));
  },
} satisfies ExportedHandler<Env>;
```

## 매개 변수

\* 필수 필드를 나타냅니다.

### 이름 \*

- `0`이름 \*

  이미지 콘텐츠를 나타내는 바이너리 문자열.

- `1`기타 제품

  - `prompt`이름 \*

    모델에 대한 입력 텍스트 프롬프트는 응답을 생성합니다.

  - `raw`한국어

    true이면 채팅 템플릿이 적용되지 않으며 특정 모델의 예상 형식을 준수해야합니다.

  - `top_p`이름 \*

    AI의 응답의 창의성을 제어하여 여러 단어를 고려하는 방법을 조정합니다. 더 낮은 값은 더 예측 가능한 출력을 만듭니다. 더 높은 값은 더 다양하고 창의적인 응답을 허용합니다.

  - `top_k`이름 \*

    최고의 'k'에서 선택할 수있는 AI를 제한합니다. 더 낮은 가치는 더 집중된 응답을 만듭니다; 더 높은 가치는 다양성과 잠재적인 놀람을 소개합니다.

  - `seed`이름 \*

    세대의 재현성을위한 무작위 씨앗.

  - `repetition_penalty`이름 \*

    반복된 토큰을 위한 Penalty; 더 높은 가치 discourage 반복.

  - `frequency_penalty`이름 \*

    같은 라인 verbatim을 반복하는 모델의 likelihood를 결정합니다.

  - `presence_penalty`이름 \*

    새로운 주제를 소개하는 모델의 likelihood를 증가시킵니다.

  - `image`1개의 필수

    - `0`지원하다

      이미지 데이터를 나타내는 정수의 배열은 8 비트 unsigned 정수 값으로 해석됩니다.

      - `items`이름 \*

        0과 255 사이의 값

    - `1`이름 \*

      이미지 콘텐츠를 나타내는 바이너리 문자열.

  - `max_tokens`integer 기본 512

    토큰의 최대 수는 응답에서 생성됩니다.

### 출력 전압

- `description`이름 \*

## API 슈마

다음 스키마는 JSON Schema를 기반으로합니다.

- 이름 \*

  ```json
  {
      "oneOf": [
          {
              "type": "string",
              "format": "binary",
              "description": "Binary string representing the image contents."
          },
          {
              "type": "object",
              "properties": {
                  "prompt": {
                      "type": "string",
                      "description": "The input text prompt for the model to generate a response."
                  },
                  "raw": {
                      "type": "boolean",
                      "default": false,
                      "description": "If true, a chat template is not applied and you must adhere to the specific model's expected formatting."
                  },
                  "top_p": {
                      "type": "number",
                      "description": "Controls the creativity of the AI's responses by adjusting how many possible words it considers. Lower values make outputs more predictable; higher values allow for more varied and creative responses."
                  },
                  "top_k": {
                      "type": "number",
                      "description": "Limits the AI to choose from the top 'k' most probable words. Lower values make responses more focused; higher values introduce more variety and potential surprises."
                  },
                  "seed": {
                      "type": "number",
                      "description": "Random seed for reproducibility of the generation."
                  },
                  "repetition_penalty": {
                      "type": "number",
                      "description": "Penalty for repeated tokens; higher values discourage repetition."
                  },
                  "frequency_penalty": {
                      "type": "number",
                      "description": "Decreases the likelihood of the model repeating the same lines verbatim."
                  },
                  "presence_penalty": {
                      "type": "number",
                      "description": "Increases the likelihood of the model introducing new topics."
                  },
                  "image": {
                      "oneOf": [
                          {
                              "type": "array",
                              "description": "An array of integers that represent the image data constrained to 8-bit unsigned integer values",
                              "items": {
                                  "type": "number",
                                  "description": "A value between 0 and 255"
                              }
                          },
                          {
                              "type": "string",
                              "format": "binary",
                              "description": "Binary string representing the image contents."
                          }
                      ]
                  },
                  "max_tokens": {
                      "type": "integer",
                      "default": 512,
                      "description": "The maximum number of tokens to generate in the response."
                  }
              },
              "required": [
                  "image"
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
      "properties": {
          "description": {
              "type": "string"
          }
      }
  }
  ```
