---
title: phoenix-1.0 · Cloudflare Workers AI 문서
description: Phoenix 1.0은 레오나르도의 모델입니다. Ai는 뛰어난 신속한 부착과 일관성있는 텍스트로 이미지를 생성합니다.
chatbotDeprioritize: false
source_url:
  html: 'https://developers.cloudflare.com/workers-ai/models/phoenix-1.0/'
  md: 'https://developers.cloudflare.com/workers-ai/models/phoenix-1.0/index.md'
translation_locale: ko-KR
translation_source_html: 'https://developers.cloudflare.com/workers-ai/models/phoenix-1.0/'
translation_source_md: 'https://developers.cloudflare.com/workers-ai/models/phoenix-1.0/index.md'
translation_source_kind: rendered-md
translation_snapshot: '2026-03-13'

---
![레오나르도 로고](https://developers.cloudflare.com/_astro/leonardo.OdhR6aP9.svg)

# 피닉스 1.0

텍스트 이미지 • 레오나르도

@cf/leonardo/phoenix-1.0를

Phoenix 1.0은 레오나르도의 모델입니다. Ai는 뛰어난 신속한 부착과 일관성있는 텍스트로 이미지를 생성합니다.

| 모델 정보 |                                                |
| ----- | ---------------------------------------------- |
| 이용 약관 | [이름 \*](https://leonardo.ai/terms-of-service/) |
| 회사연혁  | 이름 \*                                          |
| 단위 가격 | 512 타일에 의해 512 당 $0.0058, 단계 당 $0.00011        |

## 제품 정보

- TypeScript

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
        "@cf/leonardo/phoenix-1.0",
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
  curl https://api.cloudflare.com/client/v4/accounts/$CLOUDFLARE_ACCOUNT_ID/ai/run/@cf/leonardo/phoenix-1.0  \
    -X POST  \
    -H "Authorization: Bearer $CLOUDFLARE_API_TOKEN"  \
    -d '{ "prompt": "cyberpunk cat" }'
  ```

## 매개 변수

\* 필수 필드를 나타냅니다.

### 이름 \*

- `prompt`문자열 필수 최소 1

  생성하려는 이미지의 텍스트 설명.

- `guidance`수 기본 2 분 2 최대 10

  생성 된 이미지가 프롬프트에 어떻게 준수해야 하는지 제어합니다. 더 높은 값은 이미지를 더 신속하게 정렬합니다.

- `seed`정수 분 0

  이미지 생성의 재현성을위한 무작위 씨앗

- `height`integer 기본 1024 분 0 최대 2048

  픽셀에서 생성 된 이미지의 높이

- `width`integer 기본 1024 분 0 최대 2048

  픽셀의 생성된 이미지의 폭

- `num_steps`integer 기본 25 분 1 최대 50

  확산 단계의 수; 더 높은 가치는 질을 개량할 수 있고 그러나 더 긴 가지고 가십시오

- `negative_prompt`문자열 분 1

  생성된 이미지에서 제외되는 것을 지정하십시오.

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
              "description": "A text description of the image you want to generate."
          },
          "guidance": {
              "type": "number",
              "default": 2,
              "minimum": 2,
              "maximum": 10,
              "description": "Controls how closely the generated image should adhere to the prompt; higher values make the image more aligned with the prompt"
          },
          "seed": {
              "type": "integer",
              "minimum": 0,
              "description": "Random seed for reproducibility of the image generation"
          },
          "height": {
              "type": "integer",
              "minimum": 0,
              "maximum": 2048,
              "default": 1024,
              "description": "The height of the generated image in pixels"
          },
          "width": {
              "type": "integer",
              "minimum": 0,
              "maximum": 2048,
              "default": 1024,
              "description": "The width of the generated image in pixels"
          },
          "num_steps": {
              "type": "integer",
              "default": 25,
              "minimum": 1,
              "maximum": 50,
              "description": "The number of diffusion steps; higher values can improve quality but take longer"
          },
          "negative_prompt": {
              "type": "string",
              "minLength": 1,
              "description": "Specify what to exclude from the generated images"
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
      "contentType": "image/jpeg",
      "format": "binary",
      "description": "The generated image in JPEG format"
  }
  ```
