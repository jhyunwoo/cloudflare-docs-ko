---
title: detr-resnet-50 · Cloudflare Workers AI 문서
description: >-
  DEtection TRansformer (DETR) 모델은 COCO 2017 객체 감지 (118k annotated 이미지)에
  종료되었습니다.
chatbotDeprioritize: false
source_url:
  html: 'https://developers.cloudflare.com/workers-ai/models/detr-resnet-50/'
  md: 'https://developers.cloudflare.com/workers-ai/models/detr-resnet-50/index.md'
translation_locale: ko-KR
translation_source_html: 'https://developers.cloudflare.com/workers-ai/models/detr-resnet-50/'
translation_source_md: 'https://developers.cloudflare.com/workers-ai/models/detr-resnet-50/index.md'
translation_source_kind: rendered-md
translation_snapshot: '2026-03-13'

---
₢ 킹

# detr-resnet-50 베타

오브젝트 탐지 • facebook

@cf/페이스북/detr-resnet-50

DEtection TRansformer (DETR) 모델은 COCO 2017 객체 감지 (118k annotated 이미지)에 종료되었습니다.

| 모델 정보 |                           |
| ----- | ------------------------- |
| 베타 베타 | 이름 \*                     |
| 단위 가격 | inference 요청 당 $0.0000075 |

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
        "@cf/facebook/detr-resnet-50",
        inputs
      );


      return new Response(JSON.stringify({ inputs: { image: [] }, response }));
    },
  } satisfies ExportedHandler<Env>;
  ```

- 컬럼

  ```sh
  curl https://api.cloudflare.com/client/v4/accounts/$CLOUDFLARE_ACCOUNT_ID/ai/run/@cf/facebook/detr-resnet-50  \
      -X POST  \
      -H "Authorization: Bearer $CLOUDFLARE_API_TOKEN"  \
      --data-binary "@pedestrian-boulevard-manhattan-crossing.jpg"
  ```

## 매개 변수

\* 필수 필드를 나타냅니다.

### 이름 \*

- `0`이름 \*

  탐지를 위한 이미지

- `1`기타 제품

  - `image`지원하다

    이미지 데이터를 나타내는 정수의 배열은 8 비트 unsigned 정수 값으로 해석됩니다.

    - `items`이름 \*

      0과 255 사이의 값 (8bit를 할당)

### 출력 전압

- `items`기타 제품

  - `score`이름 \*

    감지가 정확하다는 것을 나타내는 Confidence 점수

  - `label`이름 \*

    검출된 객체의 클래스 라벨 또는 이름

  - `box`기타 제품

    검출된 객체의 경계 상자 정의

    - `xmin`이름 \*

      경계 상자의 왼쪽 모서리의 X 좌표

    - `ymin`이름 \*

      경계 상자의 왼쪽 상단 모서리의 y 좌표

    - `xmax`이름 \*

      경계 상자의 바닥 오른쪽 코너의 X 좌표

    - `ymax`이름 \*

      경계 상자의 바닥 오른쪽 모서리의 y 좌표

## API 슈마

다음 스키마는 JSON Schema를 기반으로합니다.

- 이름 \*

  ```json
  {
      "oneOf": [
          {
              "type": "string",
              "format": "binary",
              "description": "The image to use for detection"
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
              }
          }
      ]
  }
  ```

- 출력 전압

  ```json
  {
      "type": "array",
      "contentType": "application/json",
      "description": "An array of detected objects within the input image",
      "items": {
          "type": "object",
          "properties": {
              "score": {
                  "type": "number",
                  "description": "Confidence score indicating the likelihood that the detection is correct"
              },
              "label": {
                  "type": "string",
                  "description": "The class label or name of the detected object"
              },
              "box": {
                  "type": "object",
                  "description": "Coordinates defining the bounding box around the detected object",
                  "properties": {
                      "xmin": {
                          "type": "number",
                          "description": "The x-coordinate of the top-left corner of the bounding box"
                      },
                      "ymin": {
                          "type": "number",
                          "description": "The y-coordinate of the top-left corner of the bounding box"
                      },
                      "xmax": {
                          "type": "number",
                          "description": "The x-coordinate of the bottom-right corner of the bounding box"
                      },
                      "ymax": {
                          "type": "number",
                          "description": "The y-coordinate of the bottom-right corner of the bounding box"
                      }
                  }
              }
          }
      }
  }
  ```
