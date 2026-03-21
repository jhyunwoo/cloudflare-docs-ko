---
title: 안정되어 있는 확산 xl 번개 · Cloudflare Workers AI docs
description: >-
  SDXL-Lightning는 번개 빠른 원본에 이미지 세대 모형입니다. 그것은 몇 단계에 있는 고품질 1024px 이미지를 생성할 수
  있습니다.
chatbotDeprioritize: false
source_url:
  html: >-
    https://developers.cloudflare.com/workers-ai/models/stable-diffusion-xl-lightning/
  md: >-
    https://developers.cloudflare.com/workers-ai/models/stable-diffusion-xl-lightning/index.md
translation_locale: ko-KR
translation_source_html: >-
  https://developers.cloudflare.com/workers-ai/models/stable-diffusion-xl-lightning/
translation_source_md: >-
  https://developers.cloudflare.com/workers-ai/models/stable-diffusion-xl-lightning/index.md
translation_source_kind: rendered-md
translation_snapshot: '2026-03-13'

---
₢ 킹

# 안정된 확산 xl 번개 베타

텍스트 이미지 • bytedance

@cf/bytedance/stable-diffusion-xl 조명

SDXL-Lightning는 번개 빠른 원본에 이미지 세대 모형입니다. 그것은 몇 단계에 있는 고품질 1024px 이미지를 생성할 수 있습니다.

| 모델 정보   |                                                          |
| ------- | -------------------------------------------------------- |
| 더 많은 정보 | [이름 \*](https://huggingface.co/ByteDance/SDXL-Lightning) |
| 베타 베타   | 이름 \*                                                    |
| 단위 가격   | 단계 당 $0.00                                               |

## 제품 정보

- 모델 번호: TypeScript

  ```ts
  export interface Env {
    AI: Ai;
  }


  export default {
    async fetch(request, env): Promise<Response> {


      const inputs = {
        prompt: "cyberpunk cat",
      };


      const response = await env.AI.run(
        "@cf/bytedance/stable-diffusion-xl-lightning",
        inputs
      );


      return new Response(response, {
        headers: {
          "content-type": "image/jpg",
        },
      });
    },
  } satisfies ExportedHandler<Env>;
  ```

- 컬럼

  ```sh
  curl https://api.cloudflare.com/client/v4/accounts/$CLOUDFLARE_ACCOUNT_ID/ai/run/@cf/bytedance/stable-diffusion-xl-lightning  \
    -X POST  \
    -H "Authorization: Bearer $CLOUDFLARE_API_TOKEN"  \
    -d '{ "prompt": "cyberpunk cat" }'
  ```

## 매개 변수

\* 필수 필드를 나타냅니다.

### 이름 \*

- `prompt`문자열 필수 최소 1

  생성하려는 이미지의 텍스트 설명

- `negative_prompt`이름 \*

  생성된 이미지에서 피하기 위한 텍스트 설명

- `height`정수 분 256 최대 2048

  픽셀에서 생성 된 이미지의 높이

- `width`정수 분 256 최대 2048

  픽셀의 생성된 이미지의 폭

- `image`지원하다

  img2img 작업과 함께 사용. 이미지 데이터를 나타내는 정수의 배열은 8 비트 unsigned 정수 값으로 해석됩니다.

  - `items`이름 \*

    0과 255 사이의 값

- `image_b64`이름 \*

  img2img 작업과 함께 사용. base64-encoded 문자열의 입력 이미지

- `mask`지원하다

  8비트 unsigned integer 값에 inpainting constrained를 위한 마스크 이미지 데이터를 나타내는 정수의 배열을 나타내는 배열

  - `items`이름 \*

    0과 255 사이의 값

- `num_steps`integer 기본 20 최대 20

  확산 단계의 수; 더 높은 가치는 질을 개량할 수 있고 그러나 더 긴 가지고 가십시오

- `strength`숫자 기본 1

  0과 1 사이의 값은 img2img 작업 중 변환을 적용하는 방법을 나타내는 것입니다. 낮은 값은 입력 이미지에 더 가까운 출력을 만듭니다.

- `guidance`번호 기본 7.5

  생성 된 이미지가 프롬프트에 어떻게 준수해야 하는지 제어합니다. 더 높은 값은 이미지를 더 신속하게 정렬합니다.

- `seed`뚱 베어

  이미지 생성의 재현성을위한 무작위 씨앗

### 출력 전압

바인딩 반환 a`ReadableStream`출력 (모델의 출력 스키마 확인).

## API 슈마

다음 스키마는 JSON Schema를 기반으로합니다.

- 이름 \*

  ```json
  {
      "type": "object",
      "properties": {
          "prompt": {
              "type": "string",
              "minLength": 1,
              "description": "A text description of the image you want to generate"
          },
          "negative_prompt": {
              "type": "string",
              "description": "Text describing elements to avoid in the generated image"
          },
          "height": {
              "type": "integer",
              "minimum": 256,
              "maximum": 2048,
              "description": "The height of the generated image in pixels"
          },
          "width": {
              "type": "integer",
              "minimum": 256,
              "maximum": 2048,
              "description": "The width of the generated image in pixels"
          },
          "image": {
              "type": "array",
              "description": "For use with img2img tasks. An array of integers that represent the image data constrained to 8-bit unsigned integer values",
              "items": {
                  "type": "number",
                  "description": "A value between 0 and 255"
              }
          },
          "image_b64": {
              "type": "string",
              "description": "For use with img2img tasks. A base64-encoded string of the input image"
          },
          "mask": {
              "type": "array",
              "description": "An array representing An array of integers that represent mask image data for inpainting constrained to 8-bit unsigned integer values",
              "items": {
                  "type": "number",
                  "description": "A value between 0 and 255"
              }
          },
          "num_steps": {
              "type": "integer",
              "default": 20,
              "maximum": 20,
              "description": "The number of diffusion steps; higher values can improve quality but take longer"
          },
          "strength": {
              "type": "number",
              "default": 1,
              "description": "A value between 0 and 1 indicating how strongly to apply the transformation during img2img tasks; lower values make the output closer to the input image"
          },
          "guidance": {
              "type": "number",
              "default": 7.5,
              "description": "Controls how closely the generated image should adhere to the prompt; higher values make the image more aligned with the prompt"
          },
          "seed": {
              "type": "integer",
              "description": "Random seed for reproducibility of the image generation"
          }
      },
      "required": [
          "prompt"
      ]
  }
  ```

- 출력 전압

  ```json
  {
      "type": "string",
      "contentType": "image/png",
      "format": "binary",
      "description": "The generated image in PNG format"
  }
  ```
