---
title: 플럭스-2-dev · Cloudflare Workers AI docs
description: >-
  FLUX.2 [dev]는 멀티-reference 지원과 매우 현실적이고 상세한 이미지를 생성 할 수있는 Black Forest Labs의
  이미지 모델입니다.
chatbotDeprioritize: false
source_url:
  html: 'https://developers.cloudflare.com/workers-ai/models/flux-2-dev/'
  md: 'https://developers.cloudflare.com/workers-ai/models/flux-2-dev/index.md'
translation_locale: ko-KR
translation_source_html: 'https://developers.cloudflare.com/workers-ai/models/flux-2-dev/'
translation_source_md: 'https://developers.cloudflare.com/workers-ai/models/flux-2-dev/index.md'
translation_source_kind: rendered-md
translation_snapshot: '2026-03-13'

---
![Black Forest Labs 로고](https://developers.cloudflare.com/_astro/blackforestlabs.Ccs-Y4-D.svg)

# 플럭스-2-dev

Text-to-Image • 검은 숲 연구소

@cf/블랙-forest-labs/flux-2-dev

FLUX.2 \[dev]는 멀티-reference 지원과 매우 현실적이고 상세한 이미지를 생성 할 수있는 Black Forest Labs의 이미지 모델입니다.

| 모델 정보 |                                                                |
| ----- | -------------------------------------------------------------- |
| 이용 약관 | [이름 \*](https://bfl.ai/legal/terms-of-service)                 |
| 회사연혁  | 이름 \*                                                          |
| 단위 가격 | 입력 당 $0.00021 512x512 타일, 단계 당, $0.00041 출력 당 512x512 타일, 단계 당 |

## 제품 정보

- TypeScript

  ```ts
  export interface Env {
    AI: Ai;
  }


  export default {
    async fetch(request, env): Promise<Response> {
      const form = new FormData();
      form.append('prompt', 'a sunset with a dog');
      form.append('width', '1024');
      form.append('height', '1024');


      //FormData는 serialized 몸 또는 경계를 노출하지 않습니다. 패스워드
      //Request (또는 응답) constructor serializes it and generates Content-Type
      //서버가 multipart 필드를 파싱해야 하는 경계를 가진 헤더.
      const formResponse = new Response(form);
      const formStream = formResponse.body;
      const formContentType = formResponse.headers.get('content-type')!;


      const resp = await env.AI.run("@cf/black-forest-labs/flux-2-dev", {
        multipart: {
          body: formStream,
          contentType: formContentType
        }
      });


      return Response.json(resp);
    },
  } satisfies ExportedHandler<Env>;
  ```

- 컬럼

  ```sh
  curl --request POST \
    --url 'https://api.cloudflare.com/client/v4/accounts/{ACCOUNT}/ai/run/@cf/black-forest-labs/flux-2-dev' \
    --header 'Authorization: Bearer {TOKEN}' \
    --header 'Content-Type: multipart/form-data' \
    --form 'prompt=a sunset at the alps' \
    --form steps=25 \
    --form width=1024 \
    --form height=1024
  ```

## 매개 변수

\* 필수 필드를 나타냅니다.

### 이름 \*

- `multipart`기타 제품

  - `body`자주 묻는 질문

  - `contentType`문자열 필수

### 출력 전압

- `image`이름 \*

  Base64 문자열로 이미지 생성.

## API 슈마

다음 스키마는 JSON Schema를 기반으로합니다.

- 이름 \*

  ```json
  {
      "type": "object",
      "properties": {
          "multipart": {
              "type": "object",
              "properties": {
                  "body": {
                      "type": "object"
                  },
                  "contentType": {
                      "type": "string"
                  }
              },
              "required": [
                  "body",
                  "contentType"
              ]
          },
          "required": [
              "multipart"
          ]
      }
  }
  ```

- 출력 전압

  ```json
  {
      "type": "object",
      "properties": {
          "image": {
              "type": "string",
              "description": "Generated image as Base64 string."
          }
      }
  }
  ```
