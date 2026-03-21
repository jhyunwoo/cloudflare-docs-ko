---
title: resnet-50 · Cloudflare Workers AI docs
description: 50 층 심 이미지 분류 CNN는 ImageNet에서 1M 이미지에 훈련했습니다
chatbotDeprioritize: false
source_url:
  html: 'https://developers.cloudflare.com/workers-ai/models/resnet-50/'
  md: 'https://developers.cloudflare.com/workers-ai/models/resnet-50/index.md'
translation_locale: ko-KR
translation_source_html: 'https://developers.cloudflare.com/workers-ai/models/resnet-50/'
translation_source_md: 'https://developers.cloudflare.com/workers-ai/models/resnet-50/index.md'
translation_source_kind: rendered-md
translation_snapshot: '2026-03-13'

---
![Microsoft 로고](https://developers.cloudflare.com/_astro/microsoft.BfW2Sks3.svg)

# 레즈넷-50

이미지 분류 • Microsoft

@cf/마이크로 소프트/resnet-50

50 층 심 이미지 분류 CNN는 ImageNet에서 1M 이미지에 훈련했습니다

| 모델 정보   |                                                                                                                                                                      |
| ------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 더 많은 정보 | [이름 \*](https://www.microsoft.com/en-us/research/blog/microsoft-vision-model-resnet-50-combines-web-scale-data-and-multi-task-learning-to-achieve-state-of-the-art/) |
| 단위 가격   | inference 요청 당 $0.0000025                                                                                                                                            |

## 제품 정보

- TypeScript

  ```ts
  export interface Env {
    AI: Ai;
  }


  export default {
    async fetch(request, env): Promise<Response> {
      const res = await fetch("https://cataas.com/cat");
      const blob = await res.arrayBuffer();


      const inputs = {
        image: [...new Uint8Array(blob)],
      };


      const response = await env.AI.run(
        "@cf/microsoft/resnet-50",
        inputs
      );


      return new Response(JSON.stringify(response));
    },
  } satisfies ExportedHandler<Env>;
  ```

- 컬럼

  ```sh
  curl https://api.cloudflare.com/client/v4/accounts/$CLOUDFLARE_ACCOUNT_ID/ai/run/@cf/microsoft/resnet-50  \
      -X POST  \
      -H "Authorization: Bearer $CLOUDFLARE_API_TOKEN"  \
      --data-binary "@orange-llama.png"
  ```

## 매개 변수

\* 필수 필드를 나타냅니다.

### 이름 \*

- `0`이름 \*

  classify에 이미지

- `1`기타 제품

  - `image`지원되는

    이미지 데이터를 나타내는 정수의 배열은 8 비트 unsigned 정수 값으로 해석됩니다.

    - `items`이름 \*

      0과 255 사이의 값 (8bit를 할당)

### 출력 전압

- `items`기타 제품

  - `score`이름 \*

    0과 1 사이의 신뢰 값은 특정 모델이 예측 된 라벨에 대해 설명합니다.

  - `label`이름 \*

    분석 기반의 입력 이미지에 대한 예측된 범주 또는 클래스

## API 슈마

다음 스키마는 JSON Schema를 기반으로합니다.

- 이름 \*

  ```json
  {
      "oneOf": [
          {
              "type": "string",
              "format": "binary",
              "description": "The image to classify"
          },
          {
              "type": "object",
              "properties": {
                  "image": {
                      "type": "array",
                      "description": "An array of integers that represent the image data constrained to 8-bit unsigned integer values",
                      "items": {
                          "type": "number",
                          "description": "A value between 0 and 255 (unsigned 8bit)"
                      }
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
      "type": "array",
      "contentType": "application/json",
      "items": {
          "type": "object",
          "properties": {
              "score": {
                  "type": "number",
                  "description": "A confidence value, between 0 and 1, indicating how certain the model is about the predicted label"
              },
              "label": {
                  "type": "string",
                  "description": "The predicted category or class for the input image based on analysis"
              }
          }
      }
  }
  ```
