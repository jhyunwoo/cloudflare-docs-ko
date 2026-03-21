---
title: lucid-origin · Cloudflare Workers AI 문서
description: >
  레오나르도의 Lucid Origin. AI는 날짜에 가장 적응할 수 있고 신속한 대답한 모형입니다. 선명한 그래픽 디자인, 멋진 풀 HD
  렌더링, 또는 높은 특정 크리에이티브 방향과 이미지 생성 여부, 그것은 당신의 프롬프트에 밀접하고, 정확성을 가진 텍스트를 렌더링하고,
  다양한 시각적 스타일과 미학을 지원합니다 – 스타일화된 개념 예술에서 제품 모의 제품.
chatbotDeprioritize: false
source_url:
  html: 'https://developers.cloudflare.com/workers-ai/models/lucid-origin/'
  md: 'https://developers.cloudflare.com/workers-ai/models/lucid-origin/index.md'
translation_locale: ko-KR
translation_source_html: 'https://developers.cloudflare.com/workers-ai/models/lucid-origin/'
translation_source_md: 'https://developers.cloudflare.com/workers-ai/models/lucid-origin/index.md'
translation_source_kind: rendered-md
translation_snapshot: '2026-03-13'

---
![레오나르도 로고](https://developers.cloudflare.com/_astro/leonardo.OdhR6aP9.svg)

# 숙박 플랜

텍스트 이미지 • 레오나르도

@cf/leonardo/레이드 라이진

레오나르도의 Lucid Origin. AI는 날짜에 가장 적응할 수 있고 신속한 대답한 모형입니다. 선명한 그래픽 디자인, 멋진 풀 HD 렌더링, 또는 높은 특정 크리에이티브 방향과 이미지 생성 여부, 그것은 당신의 프롬프트에 밀접하고, 정확성을 가진 텍스트를 렌더링하고, 다양한 시각적 스타일과 미학을 지원합니다 – 스타일화된 개념 예술에서 제품 모의 제품.

| 모델 정보 |                                                |
| ----- | ---------------------------------------------- |
| 이용 약관 | [이름 \*](https://leonardo.ai/terms-of-service/) |
| 회사연혁  | 이름 \*                                          |
| 단위 가격 | 512 타일에 의해 512 당 $0.007, 단계 당 $0.00013         |

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
        "@cf/leonardo/lucid-origin",
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
  curl https://api.cloudflare.com/client/v4/accounts/$CLOUDFLARE_ACCOUNT_ID/ai/run/@cf/leonardo/lucid-origin  \
    -X POST  \
    -H "Authorization: Bearer $CLOUDFLARE_API_TOKEN"  \
    -d '{ "prompt": "cyberpunk cat" }'
  ```

## 매개 변수

\* 필수 필드를 나타냅니다.

### 이름 \*

- `prompt`문자열 필수 최소 1

  생성하려는 이미지의 텍스트 설명.

- `guidance`수 기본 4.5 분 0 최대 10

  생성 된 이미지가 프롬프트에 어떻게 준수해야 하는지 제어합니다. 더 높은 값은 이미지를 더 신속하게 정렬합니다.

- `seed`정수 분 0

  이미지 생성의 재현성을위한 무작위 씨앗

- `height`정수 기본 1120 분 0 최대 2500

  픽셀에서 생성 된 이미지의 높이

- `width`정수 기본 1120 분 0 최대 2500

  픽셀의 생성된 이미지의 폭

- `num_steps`정수 분 1 최대 40

  확산 단계의 수; 더 높은 가치는 질을 개량할 수 있고 그러나 더 긴 가지고 가십시오

- `steps`정수 분 1 최대 40

  확산 단계의 수; 더 높은 가치는 질을 개량할 수 있고 그러나 더 긴 가지고 가십시오

### 출력 전압

- `image`이름 \*

  Base64 형식으로 생성된 이미지.

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
              "default": 4.5,
              "minimum": 0,
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
              "maximum": 2500,
              "default": 1120,
              "description": "The height of the generated image in pixels"
          },
          "width": {
              "type": "integer",
              "minimum": 0,
              "maximum": 2500,
              "default": 1120,
              "description": "The width of the generated image in pixels"
          },
          "num_steps": {
              "type": "integer",
              "minimum": 1,
              "maximum": 40,
              "description": "The number of diffusion steps; higher values can improve quality but take longer"
          },
          "steps": {
              "type": "integer",
              "minimum": 1,
              "maximum": 40,
              "description": "The number of diffusion steps; higher values can improve quality but take longer"
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
      "type": "object",
      "contentType": "application/json",
      "properties": {
          "image": {
              "type": "string",
              "description": "The generated image in Base64 format."
          }
      }
  }
  ```
