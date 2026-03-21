---
title: 플럭스-1-schnell · Cloudflare Workers AI docs
description: 'FLUX.1 [schnell]는 텍스트 설명에서 이미지를 생성 할 수있는 12 억 매개 변수 수정 된 유량 변압기입니다.'
chatbotDeprioritize: false
source_url:
  html: 'https://developers.cloudflare.com/workers-ai/models/flux-1-schnell/'
  md: 'https://developers.cloudflare.com/workers-ai/models/flux-1-schnell/index.md'
translation_locale: ko-KR
translation_source_html: 'https://developers.cloudflare.com/workers-ai/models/flux-1-schnell/'
translation_source_md: 'https://developers.cloudflare.com/workers-ai/models/flux-1-schnell/index.md'
translation_source_kind: rendered-md
translation_snapshot: '2026-03-13'

---
![Black Forest Labs 로고](https://developers.cloudflare.com/_astro/blackforestlabs.Ccs-Y4-D.svg)

# 플럭스-1-schnell

Text-to-Image • 검은 숲 연구소

@cf/블랙-forest-labs/flux-1-schnell

FLUX.1 \[schnell]는 텍스트 설명에서 이미지를 생성 할 수있는 12 억 매개 변수 수정 된 유량 변압기입니다.

| 모델 정보 |                                                |
| ----- | ---------------------------------------------- |
| 이용 약관 | [이름 \*](https://bfl.ai/legal/terms-of-service) |
| 단위 가격 | 512 타일에 의해 512 당 $0.000053, 단계 당 $0.00011      |

## 제품 정보

- 작업자 (데이터 URI)

  ```ts
  export interface Env {
    AI: Ai;
  }


  export default {
    async fetch(request, env): Promise<Response> {
      const response = await env.AI.run('@cf/black-forest-labs/flux-1-schnell', {
        prompt: 'a cyberpunk lizard',
        seed: Math.floor(Math.random() * 10)
      });
      //response.image는 <img src=""> 데이터 URI로 직접 사용할 수 있는 base64 인코딩입니다.
      const dataURI = `data:image/jpeg;charset=utf-8;base64,${response.image}`;
      return Response.json({ dataURI });
    },
  } satisfies ExportedHandler<Env>;
  ```

- 작업자 (이미지)

  ```ts
  export interface Env {
    AI: Ai;
  }


  export default {
    async fetch(request, env): Promise<Response> {
      const response = await env.AI.run('@cf/black-forest-labs/flux-1-schnell', {
        prompt: 'a cyberpunk lizard',
        seed: Math.floor(Math.random() * 10)
      });
      //base64 문자열로 변환
      const binaryString = atob(response.image);
      //byte 표현 만들기
      const img = Uint8Array.from(binaryString, (m) => m.codePointAt(0));
      return new Response(img, {
        headers: {
          'Content-Type': 'image/jpeg',
        },
      });
    },
  } satisfies ExportedHandler<Env>;
  ```

- 컬럼

  ```sh
  curl https://api.cloudflare.com/client/v4/accounts/$CLOUDFLARE_ACCOUNT_ID/ai/run/@cf/black-forest-labs/flux-1-schnell  \
    -X POST  \
    -H "Authorization: Bearer $CLOUDFLARE_API_TOKEN"  \
    -d '{ "prompt": "cyberpunk cat", "seed": "Random positive integer" }'
  ```

## 매개 변수

\* 필수 필드를 나타냅니다.

### 이름 \*

- `prompt`문자열 필수 최소 1 최대 2048

  생성하려는 이미지의 텍스트 설명.

- `steps`integer 기본 4 최대 8

  확산 단계의 수; 더 높은 가치는 질을 개량하고 그러나 더 긴 가지고 갈 수 있습니다.

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
              "maxLength": 2048,
              "description": "A text description of the image you want to generate."
          },
          "steps": {
              "type": "integer",
              "default": 4,
              "maximum": 8,
              "description": "The number of diffusion steps; higher values can improve quality but take longer."
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
